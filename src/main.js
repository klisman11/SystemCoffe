import { createApp } from "vue";
import App from "./App.vue";
import router from './router'

import "swiper/css";
import './assets/css/font-awesome.min.css'
import './assets/css/pe-icon-7-stroke.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.scss'

createApp(App).use(router).mount("#app");
