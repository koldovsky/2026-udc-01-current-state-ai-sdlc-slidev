---
name: new-slide
description: >-
  Add a new slide to the Slidev deck (slides.md or pages/*.md) with consistent
  frontmatter, layout, and speaker notes. Use when the user asks to add a slide,
  insert a section, create a new page, or extend the deck. Keeps slides concise,
  uses v-clicks for long lists, and puts long citations into HTML-comment notes.
---

# new-slide

How to add a new slide to this Slidev deck consistently.

## Where slides live

- `slides.md` — the entry point. Each `---`-delimited block is one slide.
- `pages/*.md` — section modules included via `src:` import in `slides.md`:

  ```markdown
  ---
  src: ./pages/section-x.md
  ---
  ```

## Slide frontmatter checklist

Every non-trivial slide should have an explicit YAML frontmatter block:

```markdown
---
layout: default
# layout: image-left | image-left-bg-color | image | center | cover | section | end
# image: /assets-from-public.png
# background: /full-bleed-bg.png
# class: text-center
# zoom: 0.86   # for dense slides; see slidev-pdf-export skill
transition: slide-left
---

# Slide title

Body content...
```

Available layouts in `layouts/`:

- `default.vue` — DOU dark background, normal slide.
- `image-left.vue` — `image:` on the left half.
- `image-left-bg-color.vue` — image-left with overridable `bgColor:`.
- `image.vue` — full-bleed image, take `image:` and optional `backgroundSize:`.
- `center.vue` — content vertically/horizontally centered.

## Content conventions

- **Language**: Ukrainian primarily. Add English term in parentheses on first
  mention (e.g., "обмежений контекст (bounded context)").
- **Bullets**: max 5–7 bullets per slide. Use `<v-clicks>` to reveal one-by-one
  if more than 4 bullets.
- **Code**: prefer Slidev fenced blocks with language tag. Keep snippets ≤ 20
  lines per slide.
- **Diagrams**: prefer Mermaid (see `.cursor/skills/visuals-mermaid`) over new
  raster images.
- **Speaker notes / citations**: put longer text and source URLs into HTML
  comments at the end of the slide:

  ```markdown
  <!--
  Speaker note: emphasize the contrast between MVP-style vibe coding
  and disciplined agentic SDLC.
  Source: https://steipete.me/posts/2025/shipping-at-inference-speed
  -->
  ```

## Skeleton snippets

### Section divider

```markdown
---
layout: section
---

# Назва секції
```

### Image-left bio / about slide

```markdown
---
layout: image-left
image: /vyacheslav-koldovskyy.png
---

# В'ячеслав Колдовський

- Ph.D., Competence Manager у SoftServe Academy
- Спеціалізація: Agentic Engineering у SDLC
- Автор каналу [Programming Mentor](https://www.youtube.com/c/programmingmentorua)
- Telegram: [t.me/programmingmentor](https://t.me/programmingmentor)
```

### Progressive list with v-clicks

```markdown
# Етапи agentic-циклу

<v-clicks>

- Зафіксувати ціль продукту і обмеження
- Сформувати вимоги та source-of-truth документи
- Нарізати MVP на capability-зрізи
- Для кожної зміни — proposal / design / tasks
- Реалізація → перевірка → handoff

</v-clicks>
```

### Quote / source slide

```markdown
# Pattern: Inference-speed shipping

> "Speed comes not from typing, but from the loop."
> — Peter Steinberger

<!-- https://steipete.me/posts/2025/shipping-at-inference-speed -->
```

## After adding a slide

1. Run `npm run build` (see `slidev-build-verify` skill) and fix errors.
2. If the slide is dense (>30 non-empty lines, has tables or Mermaid), add a
   `zoom:` value (0.7–0.9) — see the `slidev-pdf-export` user-level skill.
3. Update navigation comments / TOC if you have one.

## Don'ts

- Don't put `zoom:` outside YAML frontmatter (must be between `---` markers).
- Don't combine `background:` from global headmatter with `layout:` in a
  separate per-slide block — keep them in the same frontmatter.
- Don't add custom `.slidev-layout { overflow }` CSS globally — it breaks PDF
  export. Scope to `html:not(.print)` only.
