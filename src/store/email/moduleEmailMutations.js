/*=========================================================================================
  File Name: moduleEmailMutations.js
  Description: Email Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    SET_STATE(state, text) {
        const JSONparsed = JSON.parse(text)
        state.mails = JSONparsed.mails
        state.mailTags = JSONparsed.mailTags
        state.mail_filter = JSONparsed.mail_filter
        state.meta = JSONparsed.meta
        state.mailSearchQuery = JSONparsed.mailSearchQuery
    },
    SET_EMAIL_SEARCH_QUERY(state, query) {
        state.mailSearchQuery = query
    },
    SET_MAILS(state, mails) {
      state.mails = mails
    },
    SET_TAGS(state, tags) {
      state.mailTags = tags
    },
    SET_META(state, meta) {
      state.meta = meta
    },
    UPDATE_MAIL_FILTER(state, filterName) {
      state.mail_filter = filterName
    },
    UPDATE_LABELS(state, payload) {
        payload.mails.forEach((mailId) => {
            const mailIndex = state.mails.findIndex((mail) => mail.id == mailId)
            const index = state.mails[mailIndex].labels.indexOf(payload.label)

            if(index == -1) state.mails[mailIndex].labels.push(payload.label)
            else state.mails[mailIndex].labels.splice(index, 1)
        })
    },

    MOVE_MAILS_TO(state, payload) {
      payload.emailIds.forEach((mailId) => {
        const mailIndex = state.mails.findIndex((mail) => mail.id == mailId)
        state.mails[mailIndex].folder = payload.to
      })
    },

    TOGGLE_IS_MAIL_STARRED(state, payload) {
      state.mails.find((mail) => mail.id === payload.mailId).isStarred = payload.value
    },

    TOGGLE_IS_MAIL_TRASHED(state, payload) {
      state.mails.find((mail) => mail.id === payload.mailId).isTrashed = payload.value
    },

    // If your process of fetching is different than ours. Please update action and mutation
    // Maybe this mutation is redundant for you. Feel free to remove it.
    UPDATE_UNREAD_META(state, payload) {

      // Loop over email meta
      for(const folder in state.meta.unreadMails.folder) {

        // If folder is same as current filter
        if(folder == state.mail_filter) {

          // If unread flag is true - increase count
          if(payload.unreadFlag) {
            payload.emailIds.forEach((mailId) => {
              if(state.meta.unreadMails.folder[folder].indexOf(mailId) === -1) state.meta.unreadMails.folder[folder].push(mailId)
            })
          }

          // else reduce unread mails count
          else {
            payload.emailIds.forEach((mailId) => {
              let mailIdIndex = state.meta.unreadMails.folder[folder].indexOf(mailId)
              if(mailIdIndex !== -1) state.meta.unreadMails.folder[folder].splice(mailIdIndex, 1)
            })
          }
        }
      }
    },

    UPDATE_ANSWER(state, payload) {
      // Answer ist always a string.
      state.mails.find((mail) => mail.id === payload.id).answer.answer = payload.answer.toString()
    },

    UPDATE_TRASHREASON(state, payload) {
      state.mails.find((mail) => mail.id === payload.id).trashingReason = payload.answer
    },

    UPDATE_FILTER_QUESTION(state, payload) {
      state.mails.find((mail) => mail.id === payload.id).filter = payload.filters
    },
}
