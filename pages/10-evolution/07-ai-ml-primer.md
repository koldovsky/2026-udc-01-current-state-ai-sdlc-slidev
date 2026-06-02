---
layout: default
zoom: 0.9
---

<div class="lang-uk">

# Від нейрона до LLM — коротко

```mermaid {scale: 0.62}
flowchart LR
  P["Перцептрон<br/>(perceptron)"] --> NN["Нейромережа<br/>(neural network)"]
  NN --> DL["Deep Learning<br/>(багато шарів)"]
  DL --> T["Transformer<br/>(attention)"]
  T --> LLM["LLM<br/>(next-token)"]
  D["Дані + тренування<br/>(dataset + training)"] --> LLM
```

- **Transformer** + механізм уваги (attention) — основа сучасних моделей
- Модель навчається на величезному **датасеті (dataset)** коду й тексту
- **Thinking vs non-thinking**: «reasoning»-моделі витрачають більше токенів на роздуми → краще на складних задачах, дорожче

</div>

<div class="lang-en">

# From neuron to LLM — briefly

```mermaid {scale: 0.62}
flowchart LR
  P["Perceptron"] --> NN["Neural network"]
  NN --> DL["Deep Learning<br/>(many layers)"]
  DL --> T["Transformer<br/>(attention)"]
  T --> LLM["LLM<br/>(next-token)"]
  D["Dataset + training"] --> LLM
```

- **Transformer** + attention is the backbone of modern models
- The model learns from a huge **dataset** of code and text
- **Thinking vs non-thinking**: "reasoning" models spend more tokens thinking → better on hard tasks, more expensive

</div>

<!--
Speaker note: ~2 хв. НЕ читати лекцію з ML. Один слайд-карта, щоб усі мали
спільні слова: transformer, dataset, reasoning. Акцент на thinking vs
non-thinking — це впливає на вибір моделі й вартість далі.
Time cue: ~2 хв
Mapping: PPTX slides 15-23 (condensed)
-->
