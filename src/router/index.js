import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'

Vue.use(VueRouter)

const  router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'City',
      path: '/city',
      component: City,
    }

  ]
})
export default router