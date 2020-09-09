/*
 * @Date: 2020-09-08 11:45:38
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-08 11:55:01
 * @FilePath: \vue_ghost\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/public/index/index.vue')
    }
  ]
})
