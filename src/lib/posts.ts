import type { Locale } from "../data/site";
import { locales } from "../data/site";

export interface PostSection {
  heading: string;
  paragraphs: string[];
}

export interface PostContent {
  topic: string;
  title: string;
  text: string;
  sections: PostSection[];
}

const modules = import.meta.glob<PostContent>(
  "../content/posts/*/*.json",
  { eager: true, import: "default" },
);

interface PostEntry {
  slug: string;
  locales: Partial<Record<Locale, PostContent>>;
}

const postIndex: Map<string, PostEntry> = (() => {
  const map = new Map<string, PostEntry>();
  for (const [path, content] of Object.entries(modules)) {
    const match = path.match(/\/content\/posts\/([^/]+)\/([^/]+)\.json$/);
    if (!match) continue;
    const [, slug, localeRaw] = match;
    if (!(locales as readonly string[]).includes(localeRaw)) continue;
    const locale = localeRaw as Locale;
    const entry = map.get(slug) ?? { slug, locales: {} };
    entry.locales[locale] = content;
    map.set(slug, entry);
  }
  return map;
})();

export function listPostSlugs(): string[] {
  return [...postIndex.keys()].sort();
}

export function getPost(slug: string, locale: Locale): PostContent | null {
  return postIndex.get(slug)?.locales[locale] ?? null;
}

export function getPostLocales(slug: string): Locale[] {
  const entry = postIndex.get(slug);
  if (!entry) return [];
  return locales.filter((l) => entry.locales[l] !== undefined);
}
