import PageViewVue from '@/components/PageContainer.vue'
import type { Plugin } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $locomotiveScroll: any
  }
}

export default {
  install(app) {
    app.component('pageContainer', PageViewVue)
  }
} as Plugin
