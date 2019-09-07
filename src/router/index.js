import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/pages/shouye'
import reg from '@/pages/reg'
import login from '@/pages/login'
import dianYing from '@/pages/dianYing'
import tuShu from '@/pages/tuShu'
import guangBo from '@/pages/guangBo'
import xiaoZu from '@/pages/xiaoZu'
import sousuo from '@/pages/sousuo'
import details from '@/pages/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dianYing',
      name: 'dianYing',
      component: dianYing
    },
    {
      path: '/tuShu',
      name: 'tuShu',
      component: tuShu
    },
    {
      path: '/guangBo',
      name: 'guangBo',
      component: guangBo
    },
    {
      path: '/xiaoZu',
      name: 'xiaoZu',
      component: xiaoZu
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    },
  ]
})
