---
layout: default
---

<div class="lang-uk">

# Як працювати з домашкою

</div>

<div class="lang-en">

# How to work on the homework

</div>

<v-clicks>

- <span class="lang-uk">Starter-repo: `github.com/koldovsky/2026-udc-01-current-state-ai-sdlc-hw`</span><span class="lang-en">Starter repo: `github.com/koldovsky/2026-udc-01-current-state-ai-sdlc-hw`</span>
- <span class="lang-uk">Усередині: `docs/walkthrough.md`, PR-шаблон, `.coderabbit.yaml` (авто-рев'ю)</span><span class="lang-en">Inside: `docs/walkthrough.md`, a PR template, `.coderabbit.yaml` (auto-review)</span>
- <span class="lang-uk">Ви **самі ініціалізуєте** свій greenfield-проєкт у форку — це частина завдання</span><span class="lang-en">You **initialize your own** greenfield project in the fork — that's part of the task</span>

</v-clicks>

```bash
gh repo fork koldovsky/2026-udc-01-current-state-ai-sdlc-hw --clone
cd 2026-udc-01-current-state-ai-sdlc-hw
git checkout -b ws01/<github-username>
# ... do the tasks (see docs/walkthrough.md) ...
gh pr create --title "WS1: <name>" --fill
```

<!--
Speaker note: ~1.5 хв. Пояснити, що repo — це обгортка з інструкціями + авто-
рев'ю, а проєкт вони створюють самі. Підкреслити walkthrough.md як покрокову
інструкцію. URL repo підтвердити перед публікацією.
Time cue: ~1.5 хв
Mapping: NEW (greenfield HW)
-->
