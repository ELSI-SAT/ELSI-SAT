/*=========================================================================================
  File Name: moduleEmailActions.js
  Description: Email Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
    setState({ commit }, text){
        commit("SET_STATE", text)
    },

    setEmailSearchQuery({ commit }, query){
        commit("SET_EMAIL_SEARCH_QUERY", query)
    },

    // Move mails to another folder
    moveMailsTo({commit}, payload) {
      commit("MOVE_MAILS_TO", payload)
    },

  // Toggle isStarred flag in mail
  toggleIsStarred({ commit }, payload) {
    commit("TOGGLE_IS_MAIL_STARRED", payload)
  },

  // Toggle isTrashed flag in mail
  toggleIsTrashed({ commit }, payload) {
    commit("TOGGLE_IS_MAIL_TRASHED", payload)
  },
}
