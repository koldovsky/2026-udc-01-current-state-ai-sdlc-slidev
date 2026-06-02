---
layout: default
---

<div class="lang-uk">

# Demo 1: Init проєкту + конфіг IDE

</div>

<div class="lang-en">

# Demo 1: Project init + IDE config

</div>

<v-clicks>

- <span class="lang-uk">Створюємо новий проєкт: `npx create-next-app@latest udc-demo`</span><span class="lang-en">Create a new project: `npx create-next-app@latest udc-demo`</span>
- <span class="lang-uk">Відкриваємо в Cursor / Claude Code, дивимось на структуру</span><span class="lang-en">Open it in Cursor / Claude Code, look at the structure</span>
- <span class="lang-uk">Додаємо мінімальний `AGENTS.md`: стек, команди, конвенції, guardrails</span><span class="lang-en">Add a minimal `AGENTS.md`: stack, commands, conventions, guardrails</span>
- <span class="lang-uk">(Опц.) `.cursorignore` — прибрати `node_modules`, білди, секрети з контексту</span><span class="lang-en">(Opt.) `.cursorignore` — keep `node_modules`, builds, secrets out of context</span>
- <span class="lang-uk">Доставляємо готовий **Agent Skill** під стек: `npx skills add github.com/vercel-labs/agent-skills --skill vercel-react-best-practices` _(глибше — Воркшоп 5)_</span><span class="lang-en">Install a ready-made **Agent Skill** for the stack: `npx skills add github.com/vercel-labs/agent-skills --skill vercel-react-best-practices` _(deep dive — Workshop 5)_</span>
- <span class="lang-uk">Перший запит до агента: «прочитай AGENTS.md і опиши проєкт» → перевіряємо, що контекст «зчитався»</span><span class="lang-en">First agent prompt: "read AGENTS.md and describe the project" → verify the context "landed"</span>

</v-clicks>

<!--
Speaker note: ~5 хв. LIVE: запустити create-next-app наживо (або мати готовий
скелет, якщо мережа повільна). Показати, як AGENTS.md одразу змінює поведінку
агента. Акцент: контекст «в репо», не в голові. Показати skills.sh і встановлення
готового скіла (vercel-react-best-practices) — пояснити, що скіл додає експертизу
під стек у контекст; повноцінно skills розкриємо у Воркшопі 5.
Заготовка: папка udc-demo вже згенерована як бекап.
Time cue: ~5 хв
Source: https://www.skills.sh/vercel-labs/agent-skills/vercel-react-best-practices
Mapping: plan.md practice (init + configure IDE)
-->
