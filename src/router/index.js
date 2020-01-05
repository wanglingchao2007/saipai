import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import base from '@/components/base.vue'
import miste from '@/components/miste.vue'
import setting from '@/components/setting.vue'
import search from '@/components/search.vue'
import home from '@/components/home.vue'
import friends from '@/components/friends.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/base',
      name: 'base',
      component: base,
      children:[
        {
          path: 'miste',
          name: 'miste',
          component: miste,
       },
       {
        path: 'setting',
        name: 'setting',
        component: setting,
       },
        {
        path: 'search',
        name: 'search',
        component: search,
        },
        {
        path: 'home',
        name: 'home',
        component: home,
        },
        {
        path: 'friends',
        name: 'friends',
        component: friends,
        },
      ]
    },
    {
      path: "/",
      redirect: "/base/miste"
    }
  ]
})
