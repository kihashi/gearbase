import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GearCloset from '@/views/GearCloset'
import UserLists from '@/views/UserLists'
import PublicLists from '@/views/PublicLists'
import List from '@/views/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/closet',
      name: 'Gear Closet',
      component: GearCloset
    },
    {
      path: '/lists',
      name: 'User Lists',
      component: UserLists
    },
    {
      path: '/public',
      name: 'Public Lists',
      component: PublicLists
    },
    {
      path: '/lists/:id',
      name: 'List',
      component: List
    }
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
