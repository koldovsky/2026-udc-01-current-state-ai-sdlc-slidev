# AGENTS.md

This repository is a **Slidev** presentation deck for the workshop:

> **Сучасний стан розробки з AI** (Modern AI-assisted Development) — UDC Lesson 1
> Клієнт: UDC · Тривалість: ~2 години · Формат: онлайн (Zoom)
> Автор: В'ячеслав Колдовський (Programming Mentor)

First workshop of the UDC "Modern Development with Agentic AI" course. The deck
is the deliverable; supporting docs live in `docs/`.

## Environment & commands

- **Node:** 22+ (20 also works)
- **Package manager:** npm
- **Vite is pinned to `8.0.11`** via `package.json > overrides`. Do not remove
  this. Vite 8.0.12-8.0.14 (pulled transitively by `@slidev/cli`) has a Windows
  glob-resolution regression that breaks `npm run dev` with
  `Failed to resolve import ... @slidev/conditional-styles`.

```bash
npm install
npm run dev          # dev server with HMR
npm run build        # production build → dist/
npm run export       # PDF export (per-slide)
npm run qr           # regenerate /public/slides-qr.svg
```

## Layout

- `slides.md` — entry deck. The first block is the deck **headmatter** and also
  carries **slide 1 (cover)** inline. The rest are imported via `src:` from
  `pages/`.
- `pages/NN-section/` — slide modules. Filename is `NN-short-name.md` where `NN`
  is the slide number; folder prefix orders thematic blocks.
- `components/` — Vue components auto-imported (`CoverBrand`, `SlidesQr`).
- `layouts/` — custom slide layouts (`default`, `image-left`,
  `image-left-bg-color`, `image`, `center`) + `layoutHelper.ts`. Built-in
  `cover`, `section`, `end` are also used.
- `global-top.vue` — fixed chrome: UA/EN language switcher, page counter,
  click-progress dots, UDC logo (bottom-right) + Programming Mentor logo
  (bottom-left).
- `public/` — static assets referenced with a leading `/`.
- `scripts/gen-qr.mjs` — QR generator (`npm run qr`).
- `docs/` — concept pointer + participant walkthrough.

## Authoring conventions

### Language — bilingual UA/EN

- Primary **Ukrainian**. Each slide keeps both languages side by side:
  `<div class="lang-uk">…</div>` and `<div class="lang-en">…</div>`. The
  top-right switcher toggles `lang-en-on` on `<html>`; default (no class) = UA.
- English term in parentheses on first mention: "агент (agent)",
  "контекстне вікно (context window)".
- Code, CLI commands, file names — English.

### Density

- **5-7 bullets max** per slide. Longer → split or wrap with `<v-clicks>`.
- Code snippets ≤ 20 lines per slide; use `{1|2|3}` for line-by-line reveal.
- Dense slides get `zoom: 0.78` / `0.86` inside YAML frontmatter (NEVER in body).

### Frontmatter discipline

- Every non-trivial slide has its own `---`-delimited YAML frontmatter.
- `layout:` and `background:` go in the SAME frontmatter block.
- `zoom:` MUST be inside YAML.

### Speaker notes — REQUIRED for every slide

The workshop is recorded — end each slide with an HTML comment:

```markdown
<!--
Speaker note: [що сказати, в якому темпі, з якими акцентами]
Time cue: ~N хв
Source: [URL якщо є]
-->
```

### Visuals

- **Prefer Mermaid** over raster images.
- Reference public assets with a leading `/`: `image: /vyacheslav-koldovskyy.png`.

## Guardrails

- **NEVER** add secrets, API tokens, or NDA-protected client business details.
  The deck is about generic Agentic Engineering patterns applied to the UDC
  context.
- **ASK FIRST** before deleting `slides.md` / `docs/`, restructuring the section
  blocks, changing the Ukrainian-primary convention, or adding heavyweight
  dependencies beyond the pinned Slidev stack.
- After non-trivial changes, run `npm run build` and fix any rendering/parser
  errors.
- **Windows + Git Bash:** never use `2>nul` / `>nul` (creates a literal `nul`
  file). Use `2>/dev/null` / `>/dev/null`. `nul` is in `.gitignore` as a net.

## Source of truth

Course plan: `C:/Projects/clients/udc/concept/plan.md` (12 workshops).
Lesson 1 content basis: `concept/01 Сучасний стан агентної інженерії.pptx`.
Research + mapping: `concept/research-notes.md`.
