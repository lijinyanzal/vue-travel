import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const  router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/pages/home/Home.vue'),
    },
    {
      name: 'City',
      path: '/city',
      component: () => import('@/pages/city/City.vue'),
    },
    {
      name: 'Detail',
      path: '/detail/:id',
      component: () => import('@/pages/detail/Detail.vue'),
    },
  ],
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
export default router