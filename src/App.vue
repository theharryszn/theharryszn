<script setup lang="ts">
import { RouterView } from 'vue-router'
import CursorView from './components/CursorView.vue'
import PreloaderView from './components/PreloaderView.vue'
</script>
<template>
  <PreloaderView />
  <CursorView />
  <RouterView />
</template>
