import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Main.vue'

Vue.use(Router)
const _import_ = file => () => import('./views/' + file + '.vue')

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/Index.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '',
      name: 'home_',
      component: Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: _import_('Home'),
          meta: {
            title: '首页'
          }
        }
      ]
    },
    // 订单管理
    {
      path: '/order',
      component: Main,
      redirect: 'noredirect',
      name: 'order',
      meta: {
        title: '订单管理',
        icon: 'el-icon-tickets'
      },
      children: [{
        path: 'orderList',
        component: () => import('@/views/order/list'),
        name: 'orderList',
        meta: {
          title: '订单列表'
        }
      },
      {
        path: 'assessList/:id',
        component: () => import('@/views/order/AssessList'),
        name: 'assessList',
        hidden: true, // 隐藏左侧菜单
        meta: {
          title: '评估列表'
        }
      },
      {
        path: 'orderDetail/:id',
        component: () => import('@/views/order/detail'),
        name: 'orderDetail',
        hidden: true, // 隐藏左侧菜单
        meta: {
          title: '订单详情'
        }
      }
      ]
    },
  ]
})
