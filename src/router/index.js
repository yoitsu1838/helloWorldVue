import Vue from 'vue'
import VueRouter from 'vue-router'
import MyPage from '../views/MyPage.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'MyPage',
    component: MyPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
