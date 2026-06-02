---
name: slidev-build-verify
description: >-
  Verify the Slidev deck builds and runs cleanly after non-trivial edits to
  slides.md, pages/, components/, layouts/, or global-top.vue. Use after
  creating/modifying slides, components, or layouts to catch broken Markdown,
  invalid Mermaid, missing imports, or frontmatter parsing errors before the
  user runs the deck.
---

# slidev-build-verify

Quick post-edit verification ritual for this Slidev deck.

## Commands

```bash
# Production build (fails on real errors)
npm run build

# Dev server (live HMR, opens browser)
npm run dev

# PDF export (requires playwright, see slidev-pdf-export skill)
npm run export
```

`npm run build` is the canonical gate — if it passes, dev usually passes too.

## When to run

Always after one of:

- Editing `slides.md` or any `pages/*.md` (especially adding a slide or
  changing frontmatter).
- Adding/changing a component in `components/`.
- Adding/changing a layout in `layouts/`.
- Editing `global-top.vue` or `global-bottom.vue`.
- Adding new images to `public/` that are referenced from slides.
- Bumping `@slidev/cli` version.

## Common build errors and fixes

### 1. "Failed to resolve component: X"

A component referenced in a slide isn't imported / doesn't exist. Slidev
auto-imports from `components/`, so check spelling and that the file exists.

### 2. "Unknown layout: X"

The `layout:` value in frontmatter doesn't match any file in `layouts/`.
Check the filename (case-sensitive on Linux/Netlify).

### 3. "Failed to parse frontmatter"

YAML syntax error. Common causes:

- Tab indentation in YAML (use spaces).
- Unquoted string with `:`, e.g. `title: My talk: AI`. Quote it.
- `zoom:` placed in slide body instead of between `---` markers
  (see `slidev-pdf-export`).

### 4. Mermaid render error

`Parse error on line X`. See `.cursor/skills/visuals-mermaid` for syntax
constraints (no spaces in node IDs, escape special chars in labels).

### 5. Missing public asset

Image path like `/foo.png` references `public/foo.png`. Verify the file
exists and the path uses leading `/`.

### 6. "Top-level await" / Vite chunk errors

Usually caused by a corrupted `.remote-assets/` or stale dist. Clean and
rebuild:

```bash
rm -rf dist .remote-assets components.d.ts node_modules/.vite
npm run build
```

### 7. `nul` file appears at repo root

Git Bash on Windows interprets `2>nul` literally. Delete the file:

```bash
rm -f nul
```

(`nul` is in `.gitignore` for safety.) Avoid `>nul` / `2>nul` — use
`>/dev/null` / `2>/dev/null`.

## Sanity check after build

```bash
ls dist/ | head
# expect: index.html, assets/, ...
```

Optionally serve `dist/` locally:

```bash
npx serve dist
```

## Definition of done

- `npm run build` exits 0.
- No console warnings about missing components / layouts / assets.
- `dist/index.html` opens in a browser without runtime errors.
