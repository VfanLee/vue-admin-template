import { createApp } from 'vue'
import pinia from './store'
import router from './router'
import App from './App.vue'
import './permission'

import 'normalize.css'
import 'element-plus/dist/index.css'
import './styles/index.scss'


const app = createApp(App)

app.use(pinia)
   .use(router)
   .mount('#app')
