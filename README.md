# Сучасний стан розробки з AI — UDC Lesson 1

Slidev deck for the first workshop of the UDC "Modern Development with Agentic
AI" course:

> **Сучасний стан розробки з AI** (Modern AI-assisted Development)
> Клієнт: UDC · Формат: онлайн (Zoom) · Тривалість: ~2 години
> Автор: В'ячеслав Колдовський (Programming Mentor)

~2 години: теорія (еволюція SDLC, моделі, agentic-розробка, інструменти,
безпека та вартість) + practice (live demo, greenfield) + Q&A / homework.
Мова — українська, з перемикачем UA/EN.

## Quick start

```bash
npm install
npm run dev          # dev server with HMR → opens browser
npm run build        # production build → dist/
npm run export       # PDF export (per-slide)
npm run qr           # regenerate public/slides-qr.svg
```

- **Node:** 22+ (20 works)

## Structure

- `slides.md` — entry deck (headmatter + cover) with `src:` imports.
- `pages/NN-section/` — one file per slide, numbered to match the deck order.
- `layouts/`, `components/`, `public/`, `scripts/` — Slidev plumbing.
- `global-top.vue` — UA/EN switcher, page counter, click-progress, logos.
- `docs/` — concept pointer + participant walkthrough.

See [AGENTS.md](./AGENTS.md) for authoring conventions and guardrails.

## Deploy

GitHub Pages via `npm run build:gh-pages` (base path
`/2026-udc-01-current-state-ai-sdlc-slidev/`) — see `.github/workflows/deploy.yml`.
Netlify/Vercel configs (`netlify.toml`, `vercel.json`) are included as
alternatives.
