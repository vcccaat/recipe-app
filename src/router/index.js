import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CardView from '../views/CardView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/card/',
    name: 'CardView',
    component: CardView
  },
  {
    path: '/recipe/:name',
    name: 'Recipe',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailRecipe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
