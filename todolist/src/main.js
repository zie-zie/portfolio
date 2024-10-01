import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {createPinia}from'pinia';

import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";


const pinia= createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(Vue3ColorPicker)
  .mount('#app')
