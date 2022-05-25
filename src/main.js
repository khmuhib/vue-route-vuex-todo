import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'

const app = createApp(App)

app.use(router).use(store)
console.log(store.state.count)

app.mount('#app')