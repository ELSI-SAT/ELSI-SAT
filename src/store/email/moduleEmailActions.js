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
  toggleIsStarred({ commit, dispatch }, payload) {
    commit("TOGGLE_IS_MAIL_STARRED", payload)
    dispatch('fetchMeta')
  },

  // Toggle isTrashed flag in mail
  toggleIsTrashed({ commit, dispatch }, payload) {
    commit("TOGGLE_IS_MAIL_TRASHED", payload)
    dispatch('fetchMeta')
  },

  // Commit filter updates
  updateFilterQuestion({ commit }, payload) {
    commit("UPDATE_FILTER_QUESTION", payload)
  },

  // Fetch Email Meta
  fetchMeta({ commit, state, getters }) {

    const filtered_questions_ids = getters.getFilteredQuestionsIDs

    // Initialize blank object.
    let meta = {
      inbox: 0,
      answered: 0,
      starred: 0,
      trashed: 0
    }

    // For each entry set folder and label.
    state.mails.forEach((mail) => {
      if (filtered_questions_ids.length > 0
        && !filtered_questions_ids.includes(mail.id)) {
        return
      }

      // Ignore followup-children
      if(getters.isFollowupChild(mail.id) === true) {
        return
      }

      // Todo usta: Centralize the logic that determines labels and folders!
      // Folders (mutually exclusive, i.e. either, or).
      if (
        mail.answer.answer == ''
        && !mail.isTrashed) {
        meta.inbox++;
      } else if (
        mail.answer.answer !== ''
        && !mail.isTrashed
      ) {
        meta.answered++;
      }

      // Labels.
      mail.isStarred ? meta.starred++ : ''
      mail.isTrashed ? meta.trashed++ : ''
    })

    commit("SET_META", meta)
  },
}
