import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './permission'

import 'normalize.css'
import './styles/index.scss'

const app = createApp(App)

app.use(createPinia())
   .use(router)
   .mount('#app')
