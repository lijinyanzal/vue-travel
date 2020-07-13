import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home.vue'

Vue.use(VueRouter)

const  router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },

  ]
})
export default router