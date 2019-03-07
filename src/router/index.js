import Vue from 'vue'
import Router from 'vue-router'
import main from '../view/main.vue'
import start from '../view/start.vue'


Vue.use(Router)

export default new Router({
  // mode: 'history',//单独页面单独路径
  // base: __dirname,
  // linkActiveClass: 'active', // 更改激活状态的Class值
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
  ]
})
