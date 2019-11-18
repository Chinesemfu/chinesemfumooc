import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import loginGoogle from '@/components/loginWithGoogle'
import homeS from '@/components/home'
import menuAll from '@/components/menu_all_chap'
import homeT from '@/components/homeTeacher.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/loginGoogle',
      name: 'loginGoogle',
      component: loginGoogle 
    },
    {
      path: '/homeS',
      name: 'homeS',
      component: homeS
    },
    {
      path: '/homeT',
      name: 'homeT',
      component: homeT
    }
   
   
  ]
})