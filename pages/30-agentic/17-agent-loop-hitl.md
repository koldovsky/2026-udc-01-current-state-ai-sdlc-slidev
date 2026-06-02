---
layout: default
zoom: 0.9
---

<div class="lang-uk">

# Як працює сучасний агент

```mermaid {scale: 0.6}
flowchart LR
  G["Ціль<br/>(goal)"] --> PL["План"]
  PL --> ACT["Дія: tool / edit / shell"]
  ACT --> OBS["Спостереження<br/>(observation)"]
  OBS --> CHK{"Ціль<br/>досягнута?"}
  CHK -- ні --> PL
  CHK -- так --> DONE["Результат"]
  H(("Людина<br/>HITL")) -.review/approve.-> ACT
```

- Цикл: **план → дія → спостереження → корекція**, з доступом до файлів, терміналу, інструментів
- **Human-in-the-loop (HITL):** людина задає ціль, рев'ює зміни, апрувить ризиковані дії
- Автономність — це **спектр**, а не вмикач: більше довіри = більше перевірки

</div>

<div class="lang-en">

# How a modern agent works

```mermaid {scale: 0.6}
flowchart LR
  G["Goal"] --> PL["Plan"]
  PL --> ACT["Act: tool / edit / shell"]
  ACT --> OBS["Observation"]
  OBS --> CHK{"Goal<br/>reached?"}
  CHK -- no --> PL
  CHK -- yes --> DONE["Result"]
  H(("Human<br/>HITL")) -.review/approve.-> ACT
```

- The loop: **plan → act → observe → correct**, with access to files, terminal, tools
- **Human-in-the-loop (HITL):** the human sets the goal, reviews diffs, approves risky actions
- Autonomy is a **spectrum**, not a switch: more trust = more verification

</div>

<!--
Speaker note: ~2 хв. Demystify «агента»: це цикл plan-act-observe, не магія.
Підкреслити HITL — ми не прибираємо людину, ми її піднімаємо на рівень
рев'ю/апрувів. Простий vs сучасний агент (PPTX 40-41) = додані інструменти.
Time cue: ~2 хв
Mapping: PPTX slides 40-42
-->
