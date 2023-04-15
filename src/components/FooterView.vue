<script lang="ts" setup>
import DigitalClockView from './DigitalClockView.vue'
</script>
<template>
  <footer data-scroll-section class="p-10">
    <hr class="mb-10 opacity-10" />
    <div class="w-full flex items-center gap-5 justify-between text-xs">
      <div class="opacity-50 hover:opacity-100">
        Built with
        <a class="shrink" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"
          >VueJs</a
        >
        and
        <a class="shrink" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"
          >TailwindCSS</a
        >
        <!-- and ❤️ -->
      </div>
      <!-- <div class="opacity-50 hover:opacity-100 shrink" @click="scrollToTop">Back To Top</div> -->
      <div class="opacity-50 hover:opacity-100">
        <DigitalClockView />
      </div>
    </div>
  </footer>
</template>
