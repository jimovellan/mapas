import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import '@/styles/base.scss';



createApp(App)
.use(PrimeVue)
.use(router)
.mount('#app')
