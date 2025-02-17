/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import router from './router' // Importando as rotas manualmente
import { GChart } from 'vue-google-charts';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.use(router) // Registrando o Vue Router
app.component('GChart', GChart);
registerPlugins(app)

app.mount('#app')
