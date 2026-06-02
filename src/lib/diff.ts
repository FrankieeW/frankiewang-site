function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export interface DiffLine {
  kind: "diff" | "index" | "file" | "hunk" | "add" | "del" | "context" | "meta" | "empty";
  text: string;
}

export function parseDiff(diff: string): DiffLine[] {
  const out: DiffLine[] = [];
  for (const raw of diff.split("\n")) {
    let kind: DiffLine["kind"] = "context";
    if (raw.startsWith("diff --git")) kind = "diff";
    else if (raw.startsWith("index ")) kind = "index";
    else if (raw.startsWith("--- ") || raw.startsWith("+++ ")) kind = "file";
    else if (raw.startsWith("@@")) kind = "hunk";
    else if (raw.startsWith("+")) kind = "add";
    else if (raw.startsWith("-")) kind = "del";
    else if (raw === "") kind = "empty";
    else if (/^[A-Za-z][A-Za-z0-9 _-]*$/.test(raw) && raw.length < 80) kind = "meta";
    out.push({ kind, text: raw });
  }
  return out;
}

export function renderDiffHtml(diff: string): string {
  return parseDiff(diff)
    .map((line) => {
      const text = escapeHtml(line.text);
      return `<span class="d d-${line.kind}">${text}</span>`;
    })
    .join("\n");
}
