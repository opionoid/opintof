import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CoCSelectJob from './views/CoCSelectJob.vue'
import CoCCharacter from './views/CoCCharacter.vue'
import Page404 from './views/Page404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/coc_select_job',
      name: 'coc_select_job',
      component: CoCSelectJob
    },
    {
      path: '/coc_character',
      name: 'coc_character',
      component: CoCCharacter
    },
    {
      path: '/404',
      component: Page404
    },
    {
      path: '*',
      redirect: "/404"
    }
  ]
})
