import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'jquery'
import '@popperjs/core'
import 'bootstrap'
import '@fortawesome/fontawesome-free'

createApp(App).use(store).use(router).mount('#app')
