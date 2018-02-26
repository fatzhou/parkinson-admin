import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

import login from "@/page/login/login"
import register from "@/page/login/register"
import participate from '@/page/list/participate'
import organize from '@/page/list/organize'
import create from '@/page/create/create'
import detailo from '@/page/detail/organizer'
import detailp from '@/page/detail/participate'
import edit from '@/page/edit/edit'

console.log(login)

Vue.use(Router)
Vue.use(store)

const router = new Router({
  routes: [
    {
      path: '*',
      name: 'any',
      redirect: '/login'
    },    
    {
      path: '/',
      name: 'root',
      redirect: '/paticiapate'
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        auth: false
      }
    },    
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        auth: false
      }
    },
    {
      path: '/participate',
      name: 'participate',
      component: participate,
      meta: {
        auth: true
      }
    },      
    {
      path: '/organize',
      name: 'organize',
      component: organize,
      meta: {
        auth: true
      }
    },    
    {
      path: '/detailo/:id',
      name: 'detailo',
      component: detailo,
      meta: {
        auth: true
      },
    },    
    {
      path: '/detailp/:id',
      name: 'detailp',
      component: detailp,
      meta: {
        auth: false
      }
    },
    {
      path: '/create',
      name: 'create',
      component: create,
      meta: {
        auth: true
      }
    },     
    {
      path: '/edit',
      name: 'edit',
      component: edit,
      meta: {
        auth: true
      }
    },    
  ]
})

// router.beforeEach((to, from, next) => {
//   if(to.meta.auth) {
//     console.log(store.state.isLogin)
//     if(store.state.isLogin) {
//       next()
//     } else {
//       next({
//         name: 'login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   }else {
//     next()
//   }
// })

export default router

