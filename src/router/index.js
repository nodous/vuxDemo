import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/HelloFromVux'
import dataShow from '@/components/data.vue'
import ActionSheet from '@/components/ActionSheet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/datashow',
      name: 'dataShow',
      component: dataShow
    }, {
      path: '/actionsheet',
      name: 'ActionSheet',
      component: ActionSheet
    }, {
      path: '/alert',
      name: 'Alert',
      component: (resolve) => require(['@/components/Alert.vue'], resolve),
    }
  ]
})
