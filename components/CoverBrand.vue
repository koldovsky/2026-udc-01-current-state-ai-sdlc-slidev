<!--
  Cover co-branding (UDC × Programming Mentor).

  Rendered as a Vue component on purpose: referencing a public asset like
  /udc-logo.png directly from the headmatter cover slide's Markdown makes
  rolldown try to import it as a module (resolving to the drive root and failing
  the build). Vue SFC templates serve /public assets at runtime instead, so the
  logo is safe here.
-->
<template>
  <div class="mt-10 flex flex-col items-center gap-3 opacity-95">
    <img src="/udc-logo.png" alt="UDC" class="h-12 w-auto rounded-md bg-white px-3 py-2" />
    <div class="text-lg opacity-80">× &nbsp;Programming Mentor</div>
  </div>
</template>
