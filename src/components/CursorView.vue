<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const cursor = ref<HTMLDivElement | null>(null)

const moveCursor = (pageX: number, pageY: number) => {
  if (cursor.value) {
    cursor.value.style.opacity = '1'
    cursor.value.style.top = `${pageY - cursor.value.clientHeight / 2}px`
    cursor.value.style.left = `${pageX - cursor.value.clientWidth / 2}px`
  }
}

onMounted(() => {
  window.addEventListener('mousemove', (evt) => {
    moveCursor(evt.pageX, evt.clientY)
  })
})
</script>
<template>
  <div ref="cursor" class="cursor">
    <span class="dot"></span>
  </div>
</template>
<style scoped lang="scss">
.cursor {
  @apply z-[9999999] transition-opacity duration-300 pointer-events-none fixed w-20 opacity-0  justify-center items-center aspect-square rounded-full border border-zinc-950/50 dark:border-zinc-50/50;

  .dot {
    @apply w-2 h-2 dark:bg-zinc-100/50 bg-zinc-950 rounded-full;
  }
}
</style>
