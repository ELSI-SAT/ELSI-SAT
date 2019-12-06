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
    return (
        state.mail_filter === "starred" ? mail.isStarred : state.mail_filter === mail.mailFolder
          || mail.labels.includes(state.mail_filter))
      && (mail.inquiry.toLowerCase().includes(state.mailSearchQuery.toLowerCase())
        || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase())
        || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase())
      )
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
      if (state.mails[i].answer.answer[0] !== ''
      && state.mails[i].answer.answer !== '') {
        answers++;
      }
    }
    return (answers)
  },
}
