import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SelectSystem from './views/SelectSystem.vue'
import CharacterCoC from './views/CharacterCoC.vue'

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
      path: '/select_system',
      name: 'slect_system',
      component: SelectSystem
    },
    {
      path: '/character_coc',
      name: 'character_coc',
      component: CharacterCoC
    }
  ]
})
