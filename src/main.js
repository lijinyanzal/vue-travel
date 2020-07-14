import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import './assets/styles/swiper.css'


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
