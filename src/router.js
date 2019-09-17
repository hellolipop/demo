import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Ability from './components/Ability.vue'
import Work from './components/Work.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index

    },
    {
      path: '/ability',
      name: 'ability',
      component: Ability

    },
    {
      path: '/work',
      name: 'work',
      component: Work

    }
  ]
})
