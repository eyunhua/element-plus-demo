import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
import { components, plugins } from 'config/element.config'

const app = createApp(App)

components.forEach((component: any) => {
  app.component(component.name, component)
})

plugins.forEach((plugin: any) => {
  app.use(plugin)
})
app.use(store).use(router).mount('#app')
