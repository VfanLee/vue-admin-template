import { createApp } from 'vue'
import pinia from './store'
import i18n from './locale'
import router from './router'

import './permission'

import App from './App.vue'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'

import 'normalize.css'
import './styles/variable.css'
import './styles/index.scss'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.use(pinia)
   .use(i18n)
   .use(router)
   .mount('#app')
