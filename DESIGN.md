# Frankiewang Site Design System

## 1. Atmosphere & Identity

A quiet academic notebook on the web: narrow, text-first, and intentionally restrained. The signature is a warm paper surface with serif typography, where identity comes from scholarly pacing and precise links rather than decoration.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/page | --paper | #fdfcf8 | n/a | Body background |
| Surface/card | --surface | #ffffff | n/a | Reusable cards and elevated content |
| Text/primary | --ink | #1a1a1a | n/a | Body text, headings, brand |
| Text/secondary | --muted | #5c5c5c | n/a | Captions, metadata, secondary labels |
| Border/default | --line | #e5e2d8 | n/a | Section dividers and list separators |
| Border/strong | --line-strong | #c8c5bb | n/a | Tags and stronger outlines |
| Accent/warm | --accent | #8a4a2a | n/a | Reserved accent; used sparingly |
| Link/default | --link | #1a4a7a | n/a | Inline links and hover emphasis |

### Rules

- Use the existing light color scheme only.
- Text and links carry most interaction; avoid decorative color fills.
- New colors must be added here before use.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| H1 | 1.8rem | 600 | 1.2 | -0.005em | Page titles and homepage name |
| H2 | 1.25rem | 600 | 1.25 | 0 | Section titles |
| H3 | 1.02rem | 600 | 1.35 | 0 | Card and list item titles |
| Body | 17px | 400 | 1.65 | 0 | Default prose |
| Body/sm | 0.95rem | 400 | 1.65 | 0 | Navigation and inline controls |
| Caption | 0.85rem | 400-600 | 1.65 | 0-0.06em | Metadata, language switcher, group labels |

### Font Stack

- Primary: "Source Serif Pro", "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif
- Mono: not currently used
- Serif is the site identity font; do not introduce a sans-serif default.

### Rules

- Keep text readable and prose-led.
- Use letter spacing only for compact labels, not long text.

## 4. Spacing & Layout

### Base Unit

Spacing follows a 4px-derived rhythm, expressed mostly in rem.

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 0.25rem | Tight inline adjustment |
| --space-2 | 0.5rem | Compact inline gaps |
| --space-3 | 0.75rem | Button and link rows |
| --space-4 | 1rem | Grid gaps, minor section offsets |
| --space-5 | 1.25rem | Header/footer row gaps |
| --space-6 | 1.5rem | Page side padding, section groups |
| --space-8 | 2rem | Medium section spacing |
| --space-9 | 2.25rem | Default section vertical padding |
| --space-10 | 2.5rem | Homepage intro top padding |

### Grid

- Max content width: 760px.
- Page padding: 1.5rem inline.
- Cards use a two-column grid where room allows and collapse naturally.
- Mobile breakpoint: 640px.

### Rules

- Keep the single-column reading measure intact.
- Preserve existing compact academic density; do not add marketing-style whitespace.

## 5. Components

### Base Layout

- Structure: header with brand, primary nav, language switcher; centered main; footer with update, GitHub, email.
- Variants: localized content for en, zh, fr.
- Spacing: --space-5 header gaps, --space-6 page padding, --space-9 section padding.
- States: nav hover shifts from --muted to --ink; active language is bold --ink.
- Accessibility: semantic header, nav, main, footer; localized html lang.
- Motion: none.

### Text Link

- Structure: inline anchor using inherited prose rhythm.
- Variants: default link, muted secondary link, underlined identity link.
- Spacing: inline only.
- States: hover underline or color shift to --link depending on context.
- Accessibility: visible text must describe destination.
- Motion: none.

### Resource Card

- Structure: article with h3 link/title, optional tag, muted description.
- Variants: internal link, external link, todo tag.
- Spacing: compact title gap and no card padding.
- States: title/link color shifts to --link on hover.
- Accessibility: external links use target and rel attributes.
- Motion: none.

### Project Card

- Structure: article wrapping an external project link, h3 title, metadata, description.
- Variants: academic and software groups.
- Spacing: compact vertical text stack.
- States: title color shifts to --link on hover.
- Accessibility: whole article link has visible project name and destination context.
- Motion: none.

### Contact List

- Structure: unordered list with label, middle dot separator, and inline links.
- Variants: email, GitHub handles, ORCID identifier.
- Spacing: 0.25rem to 0.35rem between rows.
- States: links follow Text Link behavior.
- Accessibility: each row starts with a plain-text label.
- Motion: none.

### ORCID Link

- Structure: inline identity link with official ORCID icon and canonical ORCID URL text.
- Variants: none.
- Spacing: icon uses 0.5em inline-start spacing as supplied by the ORCID markup.
- States: always underlined; hover follows browser/link underline behavior.
- Accessibility: icon has alt text "ORCID iD icon"; URL text remains visible.
- Motion: none.

## 6. Motion & Interaction

### Timing

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 150ms | ease | Existing disclosure arrow rotation |

### Rules

- Motion is minimal and only supports comprehension.
- Continue using transform-only motion for disclosure indicators.
- Respect the text-first academic tone.

## 7. Depth & Surface

### Strategy

Borders-only.

| Type | Value | Usage |
|------|-------|-------|
| Default | 1px solid var(--line) | Header, section, and list separators |
| Strong | 1px solid var(--line-strong) | Tags and stronger inline outlines |

No shadows are currently part of the system.
