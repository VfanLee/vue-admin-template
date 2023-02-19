import { createApp } from "vue";

import 'normalize.css'
import 'element-plus/dist/index.css'

import '@/styles/index.scss'

import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from 'element-plus'

import './permission'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(ElementPlus, {
    size: 'large'
  })
  .mount("#app");
