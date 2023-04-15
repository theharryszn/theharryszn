<script setup lang="ts">
import { RouterView } from 'vue-router'
import CursorView from './components/CursorView.vue'
import PreloaderView from './components/PreloaderView.vue'
</script>
<template>
  <PreloaderView />
  <CursorView />
  <RouterView v-slot="{ Component }">
    <Transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
<style lang="scss">
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
