---
layout: default
zoom: 0.92
---

<div class="lang-uk">

# Вартість і токени

<div class="grid grid-cols-2 gap-8 mt-2 text-[0.92em]">

<div>

- **Токен (token)** — одиниця тексту (~¾ слова); платимо за input + output
- **Pay-as-you-go**: вартість = токени × ціна моделі
- Reasoning і великий контекст **множать** витрати
- Типова помилка: дамп усього репо в кожен запит

**Орієнтир: рядки коду → токени**

| Код | 100 рядків | 200 рядків |
|---|---|---|
| React JSX | ~700 | ~1,500 |
| Python | ~1,000 | ~1,700 |
| SQL | ~1,150 | ~2,500 |

</div>

<div>

**Як оптимізувати:**
- Curate контекст: лише потрібні файли
- Дешева модель для рутини, сильна — для складного
- Коротші ітерації, чіткі промпти й критерії
- `.cursorignore` / scoped MCP / Repomix
- Міряйте: токени за фічу, не «на відчуття»

</div>

</div>

<div class="mt-2 text-xs opacity-60">Джерело: prompt.16x.engineer/blog/chatgpt-context-window-token-limit</div>

</div>

<div class="lang-en">

# Cost and tokens

<div class="grid grid-cols-2 gap-8 mt-2 text-[0.92em]">

<div>

- A **token** is a unit of text (~¾ of a word); you pay for input + output
- **Pay-as-you-go**: cost = tokens × model price
- Reasoning and large context **multiply** the cost
- Common mistake: dumping the whole repo into every request

**Reference: lines of code → tokens**

| Code | 100 lines | 200 lines |
|---|---|---|
| React JSX | ~700 | ~1,500 |
| Python | ~1,000 | ~1,700 |
| SQL | ~1,150 | ~2,500 |

</div>

<div>

**How to optimize:**
- Curate context: only the files you need
- Cheap model for routine, strong one for hard tasks
- Shorter iterations, clear prompts and criteria
- `.cursorignore` / scoped MCP / Repomix
- Measure: tokens per feature, not "by feel"

</div>

</div>

<div class="mt-2 text-xs opacity-60">Source: prompt.16x.engineer/blog/chatgpt-context-window-token-limit</div>

</div>

<!--
Speaker note: ~2.5 хв. Практична частина теорії. Показати таблицю LOC→tokens,
щоб з'явилась інтуїція масштабу. Підкреслити «міряйте, не на відчуття» — це
прямо в домашці (token/cost analysis).
Time cue: ~2.5 хв
Mapping: PPTX slides 59-62 + plan.md (оцінка використання, вартість)
-->
