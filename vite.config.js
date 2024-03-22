import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8081, // 设置您想要的自定义端口
    open: true, // 自动打开浏览器
    proxy: {
      '/nodolist': {
        target: 'http://127.0.0.1:8000', // 后端服务器地址
        changeOrigin: true, // 是否改变域名
        pathRewrite: {
          '^/nodolist': '/' // 路径重写，将'/api'替换为空串
        }
      }
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 所有以 mdui- 开头的标签名都是 mdui 组件
          isCustomElement: (tag) => tag.startsWith('mdui-')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

