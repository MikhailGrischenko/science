import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import cUserTable from '@/components/cUserTable'
import cUserEdit from '@/components/cUserEdit'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cUserTable',
      component: cUserTable
    },
    {
      path: '/edit/:id',
      name: 'cUserEdit',
      component: cUserEdit
    }
  ]
})
