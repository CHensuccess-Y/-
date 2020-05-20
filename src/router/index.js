import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/serach',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "async-com" */ '../views/search.vue')
  },
  {
    path:'/order',
    name:'order',
    component:() => import(/* webpackChunkName: "async-com" */ '../views/order.vue')
  },
  {
    path:'/individual',
    name:'individual',
    component:() => import(/* webpackChunkName: "async-com" */ '../views/individual.vue')
  },
  {
    path:'/store',
    name:'store',
    component:() => import(/* webpackChunkName: "async-com" */ '../views/store.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
