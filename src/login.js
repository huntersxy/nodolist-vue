

import { createApp } from 'vue'
import App from './login.vue'
import router from './router'

import 'mdui/mdui.css';
import 'mdui';
import 'mdui/components/icon.js';
const app = createApp(App)

app.use(router)

app.mount('#app')
