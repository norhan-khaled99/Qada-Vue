import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import {createPinia} from 'pinia'
const pinia = createPinia();
const app = createApp(App);
app.use(pinia)
app.use(router);
app.mount('#app')
