---
layout: image-left
image: /pptx/needle-haystack.png
backgroundSize: contain
---

<div class="lang-uk">

# Контекстне вікно (context window)

</div>

<div class="lang-en">

# Context window

</div>

<v-clicks>

- <span class="lang-uk">Контекстне вікно — скільки токенів модель «бачить» одночасно (запит + код + історія + відповідь)</span><span class="lang-en">The context window = how many tokens the model "sees" at once (prompt + code + history + answer)</span>
- <span class="lang-uk">Великий ліміт ≠ гарне використання: **«голка в копиці сіна» (needle in a haystack)** — модель губить деталі в середині</span><span class="lang-en">A large limit ≠ good use: **needle in a haystack** — the model loses details in the middle</span>
- <span class="lang-uk">Чим більше «сміття» в контексті, тим **гірша** якість і **вища** вартість</span><span class="lang-en">The more "noise" in context, the **worse** the quality and **higher** the cost</span>
- <span class="lang-uk">Тому: давати **релевантний** контекст, а не «весь репозиторій»</span><span class="lang-en">So: feed **relevant** context, not "the whole repo"</span>
- <span class="lang-uk">Інструменти керування: `.cursorignore`, вибір файлів, MCP зі скоупом, Repomix</span><span class="lang-en">Control tools: `.cursorignore`, file selection, scoped MCP, Repomix</span>

</v-clicks>

<!--
Speaker note: ~2 хв. Ключова інтуїція: більший контекст не рятує сам по собі.
Needle-in-haystack — показати, що деталі в середині губляться. Це підводить до
теми керування контекстом і вартості.
Time cue: ~2 хв
Mapping: PPTX slide 31 + plan.md (керування контекстом)
-->
