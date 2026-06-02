<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "./layoutHelper";

const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: "cover",
  },
});

const style = computed(() => handleBackground(props.image, false, props.backgroundSize));
</script>

<template>
  <div
    class="slidev-layout"
    :class="props.class"
    :style="style"
    style="position: relative; overflow: hidden"
  >
    <!-- Apply global background gradient -->
    <div
      :style="{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--ia-bg)',
        zIndex: -2,
      }"
    ></div>
    <!-- Content -->
    <slot />
  </div>
</template>
