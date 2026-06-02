<!--
  QR for the slides/repo URL. Rendered as a Vue component so the public asset
  (/slides-qr.svg) is served at runtime — referencing it directly from Markdown
  makes rolldown try to import it as a module and fails the build (same reason
  as CoverBrand.vue). Regenerate the SVG with `npm run qr`.
-->
<template>
  <img
    src="/slides-qr.svg"
    alt="QR — slides + repo"
    class="w-64 h-64 bg-white p-4 rounded-xl shadow-2xl"
  />
</template>
