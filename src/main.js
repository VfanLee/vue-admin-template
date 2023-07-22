import { createApp } from 'vue'
import pinia from './store'
import router from './router'
import App from './App.vue'
import './permission'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'

import 'normalize.css'
import './styles/index.scss'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.use(pinia)
   .use(router)
   .mount('#app')
