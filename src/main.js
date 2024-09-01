import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 載入 bs
import './assets/all.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faPlus,
  faCircleXmark,
  faHourglassStart,
  faPenToSquare,
  faCheck,
  faEye,
  faEyeSlash,
  faXmark,
  faArrowRight,
  faHouse,
  faPlay
} from '@fortawesome/free-solid-svg-icons' // 所有要嵌入的 icon 都要加在這裡

/* add icons to the library */
library.add(
  faPlus,
  faCircleXmark,
  faHourglassStart,
  faPenToSquare,
  faCheck,
  faEye,
  faEyeSlash,
  faXmark,
  faArrowRight,
  faHouse,
  faPlay
) // 所有要嵌入的 icon 都要加在這裡

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
