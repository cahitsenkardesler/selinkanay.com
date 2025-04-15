import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Vue uygulamasının DEBUG modunda çalışmasını sağlayalım
const app = createApp(App)
app.config.errorHandler = (err) => {
  console.error('Global error handler:', err)
}
app.use(router).mount('#app') 