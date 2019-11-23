/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleEmail from './email/moduleEmail.js'

const vuexPersist = new VuexPersist({
  key: 'elsi-sat',
  storage: window.localStorage
})


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        email: moduleEmail,
    },
    plugins: [vuexPersist.plugin],
    strict: process.env.NODE_ENV !== 'production'
})
