import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

import axios from '@/axios'

import * as ElIcon from "@element-plus/icons"

const app = createApp(App)

for (const name in ElIcon) {
    app.component(name,(ElIcon)[name])
}

app.config.globalProperties.$axios = axios
app.use(ElementPlus, {
    locale: zhCn
})
app.use(store)
app.use(router)
app.mount('#app')
