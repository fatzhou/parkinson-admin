import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import HelloWorld from '@/page/HelloWorld'
import login from "@/page/loginpage"
import home from '@/page/homepage'
import add from '@/page/add'
import initiate from '@/page/initiate'
import detailspage from '@/page/detailspage'

Vue.use(Router)
Vue.use(store)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        auth: true
      }
    },
    {
      path: '/add',
      name: 'add',
      component: add,
      meta: {
        auth: true
      }
    },
    {
      path: '/initiate',
      name: 'initiate',
      component: initiate,
      meta: {
        auth: true
      }
    },
    {
      path: '/detailspage',
      name: 'detailspage',
      component: detailspage,
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.auth) {
    if(store.state.isLogin) {
      next()
    }else {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }else {
    next()
  }
})

export default router

