import state from './moduleKBState.js'
import mutations from './moduleKBMutations.js'
import actions from './moduleKBActions.js'
import getters from './moduleKBGetters.js'

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
