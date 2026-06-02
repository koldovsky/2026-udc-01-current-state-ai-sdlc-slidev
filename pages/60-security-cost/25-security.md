---
layout: default
---

<div class="lang-uk">

# Безпека роботи з AI

</div>

<div class="lang-en">

# Security when working with AI

</div>

<v-clicks>

- <span class="lang-uk">**Витік контексту (context leakage):** що ви відправляєте в модель — може покинути периметр; для банку це критично</span><span class="lang-en">**Context leakage:** what you send to the model may leave the perimeter; critical for banking</span>
- <span class="lang-uk">**Secrets management:** ключі, токени, паролі — **ніколи** в промпт/контекст; використовуйте env, `.cursorignore`, no-train моделі</span><span class="lang-en">**Secrets management:** keys, tokens, passwords — **never** in prompts/context; use env, `.cursorignore`, no-train models</span>
- <span class="lang-uk">**Prompt injection:** шкідливі інструкції в документах, веб-сторінках, MCP-ресурсах змушують агента діяти проти вас</span><span class="lang-en">**Prompt injection:** malicious instructions in docs, web pages, MCP resources make the agent act against you</span>
- <span class="lang-uk">**Розширений attack surface:** кожна інтеграція (MCP, tools) — нові вектори; обмежуйте скоупи й права</span><span class="lang-en">**Wider attack surface:** every integration (MCP, tools) is a new vector; limit scopes and permissions</span>
- <span class="lang-uk">Базове правило: **класифікуйте дані** (PII, банківська таємниця, секрети) і маскуйте/синтезуйте чутливе</span><span class="lang-en">Baseline rule: **classify data** (PII, banking secrets, credentials) and mask/synthesize the sensitive parts</span>

</v-clicks>

<div class="lang-uk">

<div class="mt-3 text-sm opacity-80">Глибоко — Воркшоп 2 (промпти + безпека).</div>

</div>

<div class="lang-en">

<div class="mt-3 text-sm opacity-80">In depth — Workshop 2 (prompts + security).</div>

</div>

<!--
Speaker note: ~2 хв. Для UDC (enterprise/банк) це найчутливіша тема. Сьогодні —
обриси й базові правила; цілий воркшоп 2 присвячений безпеці. Підкреслити
prompt injection — багато хто про нього не думає.
Time cue: ~2 хв
Mapping: plan.md Lesson 1 (безпека: leakage, secrets, prompt injection)
-->
