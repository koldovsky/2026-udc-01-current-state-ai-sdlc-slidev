<script setup>
import { ref } from "vue";

// Bilingual toggle. Default = UK (no class on <html>). Clicking EN adds
// `lang-en-on`, which style.css uses to swap .lang-uk / .lang-en blocks.
const en = ref(false);
function setLang(toEn) {
  en.value = toEn;
  document.documentElement.classList.toggle("lang-en-on", toEn);
}
</script>

<template>
  <!-- Language switcher — top-right, on every slide incl. cover -->
  <div class="lang-switch-global">
    <button :class="{ active: !en }" @click="setLang(false)">UA</button>
    <span class="sep">/</span>
    <button :class="{ active: en }" @click="setLang(true)">EN</button>
  </div>

  <div
    v-if="
      $slidev.nav.currentLayout !== 'cover' &&
      $slidev.nav.currentLayout !== 'intro' &&
      $slidev.nav.currentLayout !== 'end'
    "
    class="udc-logo-global"
  >
    <!-- TODO: confirm UDC official site URL with the client. -->
    <a href="https://jobs.dou.ua/companies/udc/">
      <img src="/udc-logo.png" alt="UDC" />
    </a>
  </div>

  <div
    v-if="
      $slidev.nav.currentLayout !== 'cover' &&
      $slidev.nav.currentLayout !== 'intro' &&
      $slidev.nav.currentLayout !== 'end'
    "
    class="pm-logo-global"
  >
    <a href="https://www.youtube.com/c/programmingmentorua">
      <img src="/pm-logo.jpg" alt="Programming Mentor" />
    </a>
  </div>

  <div
    v-if="
      $slidev.nav.currentLayout !== 'cover' &&
      $slidev.nav.currentLayout !== 'intro' &&
      $slidev.nav.currentLayout !== 'end'
    "
    class="page-counter-global"
  >
    {{ $slidev.nav.currentSlideNo }} / {{ $slidev.nav.total }}
  </div>

  <!-- Click progress — only on slides that have v-clicks -->
  <div v-if="$slidev.nav.clicksTotal > 0" class="click-progress-global">
    <span
      v-for="i in $slidev.nav.clicksTotal"
      :key="i"
      class="dot"
      :class="{ filled: i <= $slidev.nav.clicks }"
    />
  </div>
</template>

<style>
.lang-switch-global {
  position: fixed;
  top: 10px;
  right: 16px;
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 12px;
  line-height: 1;
  padding: 3px 8px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.35);
  pointer-events: auto;
}

.lang-switch-global button {
  color: rgba(255, 255, 255, 0.55);
  background: transparent;
  border: none;
  padding: 2px 5px;
  border-radius: 9999px;
  cursor: pointer;
  letter-spacing: 0.04em;
}

.lang-switch-global button.active {
  color: #fff;
  background: rgba(255, 255, 255, 0.18);
  font-weight: 600;
}

.lang-switch-global .sep {
  color: rgba(255, 255, 255, 0.35);
}

.udc-logo-global {
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 100;
  pointer-events: auto;
}

/* UDC wordmark is dark, so sit it on a light pill to stay legible on the dark deck. */
.udc-logo-global img {
  height: 22px;
  width: auto;
  border-radius: 4px;
  background: #fff;
  padding: 3px 7px;
  display: block;
}

.udc-logo-global a {
  text-decoration: none;
  border: 2.4px solid transparent;
  border-radius: 6px;
  display: block;
}

.udc-logo-global a:hover {
  border-color: var(--slidev-theme-primary);
}

.pm-logo-global {
  position: fixed;
  bottom: 10px;
  left: 20px;
  z-index: 100;
  pointer-events: auto;
}

.pm-logo-global img {
  height: 24px;
  width: 24px;
  border-radius: 9999px;
}

.pm-logo-global a {
  text-decoration: none;
  border: 2.4px solid transparent;
  display: block;
}

.pm-logo-global a:hover {
  border-color: var(--slidev-theme-primary);
}

.page-counter-global {
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  pointer-events: none;
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 11px;
  line-height: 1;
  padding: 4px 10px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.35);
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.04em;
}

.click-progress-global {
  position: fixed;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.35);
}

.click-progress-global .dot {
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}

.click-progress-global .dot.filled {
  background: var(--slidev-theme-primary, #6c9cff);
  border-color: var(--slidev-theme-primary, #6c9cff);
}
</style>
