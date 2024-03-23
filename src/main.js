import { createApp } from 'vue'
// 从一个单文件组件中导入根组件


import 'mdui/mdui.css';
import 'mdui';
import 'mdui/components/icon.js';



import App from './App.vue'
const app = createApp(App)
app.mount('#app')

const navigationDrawer = document.querySelector(".example-drawer");
const openButton = navigationDrawer.nextElementSibling;
const closeButton = navigationDrawer.querySelector("mdui-button");

openButton.addEventListener("click", () => navigationDrawer.open = true);
closeButton.addEventListener("click", () => navigationDrawer.open = false);
