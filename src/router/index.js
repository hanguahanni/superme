import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../components/home'),
      children: [
        {
          path: '/',
          component: () => import('../components/basechart')
        },
        {
          path: '/size',
          component: () => import('../components/size')
        },
        {
          path: '/style',
          component: () => import('../components/style')
        },
        {
          path: '/dataset',
          component: () => import('../components/dataset')
        },
        {
          path: '/dataconversion',
          component: () => import('../components/dataconversion')
        },
        {
          path: '/coordinateaxis',
          component: () => import('../components/coordinateaxis')
        },
        {
          path: '/legend',
          component: () => import('../components/legend')
        },
        {
          path: '/eventsandbehaviors',
          component: () => import('../components/eventsandbehaviors')
        },
        {
          path: '/bar',
          component: () => import('../components/bar')
        },
        {
          path: '/line',
          component: () => import('../components/line')
        },
        {
          path: '/pie',
          component: () => import('../components/pie')
        }
      ]
    }
  ]
})
