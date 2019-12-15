/*=========================================================================================
  File Name: moduleEmailGetters.js
  Description: Email Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  /**
   * Returns a list of items, for which filter === true,
   * i.e. a list of questions as an array of objects.
   *
   * @param state
   * @param getters
   * @returns {*}
   */
  filteredMails: (state, getters) => state.mails.filter((mail) => {
    // If a filter-question has been answered,
    // i.e. one or more filters are set,
    // then skip questions that are not positively filtered.
    const filtered_questions_ids = getters.getFilteredQuestionsIDs
    if (
      filtered_questions_ids.length > 0
      && !filtered_questions_ids.includes(mail.id)
    ) {
      return false
    }

    // For all remaining question proceed as such:
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
              : mail.labels.includes(state.mail_filter); // Labels, aka Categories
    }

    // IF filter === false, the item will not be returned.
    return (filter)
  }),

  // possible alternative to Array.prototype.find():
  // Array.prototype.findIndex(), an ES2015/ES6 standard.
  getMail: state => (emailId) => state.mails.find((email) => email.id == emailId),


  /**
   * Returns all active filter-labels
   * as an array of strings.
   *
   * @param state
   * @returns {[]}
   */
  getFilterLabels: state => {
    let filter_labels = []

    // For each question …
    for (let i = 0; i < state.mails.length; i++) {
      // … that contains a filter-array.
      if (state.mails[i].filter) {
        // Check for each filter …
        state.mails[i].filter.forEach(function (filter) {
          // … if it is active.
          if (filter.active == true) {
            // Then for each label-array …
            filter.includes.forEach(function (label) {
              // … push it to the array of all active filter-labels.
              filter_labels.push(label);
            })
          }
        })
      }
    }

    return filter_labels
  },

  /**
   * Returns all positively filtered questions
   * as an array of objects.
   *
   * @param state
   * @param getters
   * @returns {[]}
   */
  getFilteredQuestions: (state, getters) => {
    // Get an arary of all active filter-labels.
    const filter_labels = getters.getFilterLabels
    let filtered_questions = []

    // For each question …
    state.mails.forEach(function (mail) {
      // … check if it contains a label, tha is also
      // an element of the array of filter labels
      if (mail.labels.some(r => filter_labels.indexOf(r) >= 0)) {
        // When true push the question to the final array.
        filtered_questions.push(mail)
      }
    })

    return filtered_questions
  },

  /**
   * Returns the IDs of all positively filtered questions
   * as an array of integers.
   *
   * @param state
   * @param getters
   * @returns {[]}
   */
  getFilteredQuestionsIDs: (state, getters) => {
    // Get all positively filtered questions,
    // as an array of objects.
    const filtered_questions = getters.getFilteredQuestions
    let filtered_questions_ids = []

    // For each question …
    filtered_questions.forEach(function (question) {
      // … get its ID and push it to the final array.
      filtered_questions_ids.push(question.id)
    })

    return filtered_questions_ids
  },

  /**
   * Returns the total number of actionable questions,
   * i.e. questions that are:
   * - not trashed
   * - positively filtered, if a filter is set
   *
   * @param state
   * @param getters
   * @returns {number}
   */
  getNumberOfQuestions: (state, getters) => {
    const filtered_questions_ids = getters.getFilteredQuestionsIDs
    let number_of_questions = 0

    // For each question …
    state.mails.forEach(function (mail) {
      // Todo usta: Centralize this logic.
      if (
        // … that is not trashed
        mail.isTrashed !== true
        // … and that is positively filtered, if filters are set
        && (
          !(filtered_questions_ids.length > 0)
          || filtered_questions_ids.includes(mail.id)
        )
      ) {
        // … add 1 to the number of questions.
        number_of_questions++;
      }
    })

    return (number_of_questions)
  },


  /**
   * Returns the number of completed answers,
   * i.e. all answers that are:
   * - not empty
   * - not trashed
   * - positively filtered, if a filter is set
   *
   * @param state
   * @param getters
   * @returns {number}
   */
  getNumberOfAnswers: (state, getters) => {
    const filter_labels = getters.getFilterLabels
    let answers = 0

    state.mails.forEach(function (mail) {
      // Todo usta: Centralize this logic.
      if (mail.answer.answer !== ''
        && mail.isTrashed !== true
        && (
          !(filter_labels.length > 0)
          || mail.labels.some(r => filter_labels.indexOf(r) >= 0)
        )
      ) {
        answers++;
      }
    })

    return (answers)
  },


  getMeta: state => {
    return (state.meta)
  },
}
