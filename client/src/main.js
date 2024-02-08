import { createApp } from 'vue'
import App from './App.vue'
import axios from './axios';
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import './assets/css/style.css'

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(router);
app.use(createPinia());

app.mount('#app');
