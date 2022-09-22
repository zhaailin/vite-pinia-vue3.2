import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createPinia } from 'pinia' // 从pinia中导入createPinia方法

import router from './router'
 
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.mount('#app')

