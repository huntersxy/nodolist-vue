import { createApp } from 'vue'
// 从一个单文件组件中导入根组件


import 'mdui/mdui.css';
import 'mdui';
import 'mdui/components/icon.js';
import router from './router'



import App from './login.vue'

const app = createApp(App)
app.mount('#app')
app.use(router)

