---
layout: default
---

<div class="lang-uk">

# Task 1: Init проєкту + конфіг IDE _(~25 хв)_

**Що зробити:**
- Ініціалізувати новий невеликий проєкт (Next.js або аналог) у `app/`
- Додати `AGENTS.md`: стек, команди (`dev`/`build`/`test`), 3-5 конвенцій, 2-3 guardrails
- Додати `.cursorignore` (або еквівалент) — прибрати з контексту `node_modules`, білди, секрети (мін. 3 патерни)
- Доставити мінімум один готовий **Agent Skill** під стек, напр.: `npx skills add github.com/vercel-labs/agent-skills --skill vercel-react-best-practices`
- Перший запит до агента: «прочитай AGENTS.md і опиши проєкт» — скрін/нотатка у `docs/workflow.md`

**Verification:** наявність `app/`, `AGENTS.md`, `.cursorignore`, встановленого скіла; проєкт стартує (`npm run dev`).

</div>

<div class="lang-en">

# Task 1: Project init + IDE config _(~25 min)_

**What to do:**
- Initialize a new small project (Next.js or similar) in `app/`
- Add `AGENTS.md`: stack, commands (`dev`/`build`/`test`), 3-5 conventions, 2-3 guardrails
- Add `.cursorignore` (or equivalent) — keep `node_modules`, builds, secrets out of context (min. 3 patterns)
- Install at least one ready-made **Agent Skill** for the stack, e.g.: `npx skills add github.com/vercel-labs/agent-skills --skill vercel-react-best-practices`
- First agent prompt: "read AGENTS.md and describe the project" — screenshot/note in `docs/workflow.md`

**Verification:** `app/`, `AGENTS.md`, `.cursorignore`, an installed skill present; the project runs (`npm run dev`).

</div>

<!--
Speaker note: ~1 хв. Найпростіша частина — повторити Demo 1. Головне — щоб
AGENTS.md був реальний, не «для галочки».
Time cue: ~1 хв
Mapping: plan.md practice
-->
