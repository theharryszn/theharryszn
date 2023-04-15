import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import WorksView from '../views/WorksView.vue'
import ResumeView from '../views/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    }
  ]
})

export default router
