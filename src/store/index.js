import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import formData from './modules/formData'
import tableSettings from './modules/tableSettings'
import usersPosition from './modules/usersPosition'
import control from './modules/control'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    formData,
    tableSettings,
    usersPosition,
    control
  }
})
