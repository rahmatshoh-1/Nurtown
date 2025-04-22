import './assets/main.css'

import { createApp } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import App from './App.vue'
import router from './router' // 👈 Импорт роутера
createApp(App).use(router).use(VueEasyLightbox).mount('#app')
