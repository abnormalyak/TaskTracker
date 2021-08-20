import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

<script src="https://cdn.jsdelivr.net/npm/quasar@2.0.3/dist/quasar.umd.prod.js"></script>

const app = createApp(App).use(Quasar, quasarUserOptions)
app.use(router)
app.component()

app.mount('#app')
