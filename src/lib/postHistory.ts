import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

export interface PostRevision {
  hash: string;
  shortHash: string;
  authorDate: string;
  author: string;
  message: string;
  diff: string;
}

export interface PostHistoryOptions {
  maxCount?: number;
  cwd?: string;
}

const FIELD_SEP = "|||";

function run(cmd: string, cwd: string): string | null {
  try {
    return execSync(cmd, { encoding: "utf8", cwd });
  } catch {
    return null;
  }
}

export function getPostHistory(
  slug: string,
  options: PostHistoryOptions = {},
): PostRevision[] {
  const cwd = options.cwd ?? process.cwd();
  const relPath = `src/content/posts/${slug}`;
  if (!existsSync(resolve(cwd, relPath))) return [];

  const maxCount = options.maxCount ?? 50;

  const format = `%H${FIELD_SEP}%aI${FIELD_SEP}%an${FIELD_SEP}%s`;
  const logOutput = run(
    `git log --follow --max-count=${maxCount} --format=${JSON.stringify(format)} -- ${JSON.stringify(relPath)}`,
    cwd,
  );
  if (!logOutput || !logOutput.trim()) return [];

  const revisions: PostRevision[] = [];
  for (const line of logOutput.trim().split("\n")) {
    const i1 = line.indexOf(FIELD_SEP);
    if (i1 < 0) continue;
    const i2 = line.indexOf(FIELD_SEP, i1 + FIELD_SEP.length);
    if (i2 < 0) continue;
    const i3 = line.indexOf(FIELD_SEP, i2 + FIELD_SEP.length);
    if (i3 < 0) continue;

    const hash = line.slice(0, i1);
    const authorDate = line.slice(i1 + FIELD_SEP.length, i2);
    const author = line.slice(i2 + FIELD_SEP.length, i3);
    const message = line.slice(i3 + FIELD_SEP.length);

    const diff = run(
      `git show --pretty=format:"" ${hash} -- ${JSON.stringify(relPath)}`,
      cwd,
    ) ?? "";

    revisions.push({
      hash,
      shortHash: hash.slice(0, 7),
      authorDate,
      author,
      message,
      diff,
    });
  }
  return revisions;
}

export interface PostLifecycle {
  publishedAt: string;
  updatedAt: string;
}

export function getPostLifecycle(
  slug: string,
  options: PostHistoryOptions = {},
): PostLifecycle | null {
  const history = getPostHistory(slug, { ...options, maxCount: 1000 });
  if (history.length === 0) return null;
  return {
    updatedAt: history[0].authorDate,
    publishedAt: history[history.length - 1].authorDate,
  };
}

export function remoteCommitUrl(
  hash: string,
  options: { remoteUrl?: string; cwd?: string } = {},
): string | null {
  const cwd = options.cwd ?? process.cwd();
  const remoteUrl = options.remoteUrl ?? run("git config --get remote.origin.url", cwd);
  if (!remoteUrl) return null;

  const normalized = remoteUrl.trim().replace(/\.git$/, "");
  let webBase: string;
  if (normalized.startsWith("git@github.com:")) {
    webBase = `https://github.com/${normalized.slice("git@github.com:".length)}`;
  } else if (normalized.startsWith("https://") || normalized.startsWith("http://")) {
    webBase = normalized;
  } else {
    return null;
  }
  return `${webBase}/commit/${hash}`;
}
