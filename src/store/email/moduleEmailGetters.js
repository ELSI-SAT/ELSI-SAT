/*=========================================================================================
  File Name: moduleEmailGetters.js
  Description: Email Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  filteredMails: state => state.mails.filter((mail) => {
    let filter;

    // IF the search field is not empty
    if (state.mailSearchQuery !== '') {
      // THEN search for the term in these fields
      filter = mail.inquiry.toLowerCase().includes(state.mailSearchQuery.toLowerCase())
        || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase())
        || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase())
        || mail.answer.answer.toLowerCase().includes(state.mailSearchQuery.toLowerCase());
    } else {
      // ELSE filter according to the selected option in the sidebar
      filter = state.mail_filter === "starred" ? mail.isStarred
        : state.mail_filter === "trash" ? mail.isTrashed
          : state.mail_filter === "inbox" ? (!mail.answer.answer && !mail.isTrashed)
            : state.mail_filter === "answered" ? (mail.answer.answer && !mail.isTrashed)
              // Labels, aka Categories
              : mail.labels.includes(state.mail_filter);
    }
    // IF false the mail gets filtered out
    return (filter)
  }),

  // possible alternative to Array.prototype.find():
  // Array.prototype.findIndex(), an ES2015/ES6 standard.
  getMail: state => (emailId) => state.mails.find((email) => email.id == emailId),

  // Todo usta: Exclude irrelevant questions
  getNumberOfQuestions: state => {
    return (state.mails.length)
  },

  // Todo usta: Exclude irrelevant questions
  getNumberOfAnswers: state => {
    let answers = 0
    for (let i = 0; i < state.mails.length; i++) {
      // Todo usta: Centralize this logic.
      if (state.mails[i].answer.answer !== '') {
        answers++;
      }
    }
    return (answers)
  },

  // Todo usta: Exclude irrelevant questions
  getMeta: state => {
    return (state.meta)
  },
}
