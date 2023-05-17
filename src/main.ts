import { createApp } from 'vue'

import 'normalize.css'
import './styles/index.scss'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './mock/user'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
