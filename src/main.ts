import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'

import locomotiveScroll from './plugins/locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import init from './plugins/init'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(init)
app.use(locomotiveScroll)

app.mount('#app')
