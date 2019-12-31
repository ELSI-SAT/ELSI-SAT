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
   * Returns a list of items, for which "filter" is true,
   * as an array of objects.
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

    // Ignore followup-children
    if (getters.isFollowupChild(mail.id) === true) {
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
    let filtered_questions = [];

    // Stop, if no filters are active.
    // Otherwise `state.mails.forEach` would only show filter-questions,
    // wich might (!) be handy later, but is rather confusing for now.
    if (filter_labels.length == 0) {
      return []
    }

    // For each question …
    state.mails.forEach(function (mail) {
      if (
        // … check if one of its labels matches a filter-label …
        mail.labels.some(r => filter_labels.indexOf(r) >= 0)
        // … or the question is a filter-question.
        || Array.isArray(mail.filter) // ggf: && mail.filter.length > 0
      ) {
        // THEN push the question to the final array.
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
        // … and not a followup-child
        && getters.isFollowupChild(mail.id) != true
        // … and that is positively filtered, if filters are set
        && (
          !(filtered_questions_ids.length > 0)
          || filtered_questions_ids.includes(mail.id)
        )
      ) {
        // … add 1 to the number of questions.
        number_of_questions++
      }
    })

    return (number_of_questions)
  },


  /**
   * Returns the number of completed answers,
   * i.e. all answers that are:
   * - not empty and not trashed
   * - and, if filters are set,
   *   + either positively filtered
   *   + or a filter-question
   *
   * @param state
   * @param getters
   * @returns {number}
   */
  getNumberOfAnswers: (state, getters) => {
    const filter_labels = getters.getFilterLabels
    let answers = 0

    // For each question …
    state.mails.forEach(function (mail) {
      // Todo usta: Centralize this logic.
      if (
        // … that has an answer …
        mail.answer.answer !== ''
        // … and is not trashed
        && mail.isTrashed !== true
        // … and not a followup-child
        && getters.isFollowupChild(mail.id) != true
        // and that is, if filters are set …
        && (
          !(filter_labels.length > 0)
          || (
            // … either a filtered question
            mail.labels.some(r => filter_labels.indexOf(r) >= 0)
            // … or a filter-question
            || Array.isArray(mail.filter) // ggf: && mail.filter.length > 0
          )
        )
      ) {
        // … count it as an answer.
        answers++;
      }
    })

    return (answers)
  },

  /**
   *
   * @param id
   * @returns {function(*): [parser.Node[], parser.Node[]] | * | string[]}
   */
  getAnswerCheckbox: (state, getters, rootState) => (id) => {
    const answer = getters.getMail(id).answer.answer
    const arr = answer.split(rootState.stringSeparator)

    return arr
  },

  /**
   * Basically followup-questions are checkboxes.
   *
   * @param id
   * @returns {function(*): [parser.Node[], parser.Node[]] | * | string[]}
   */
  getAnswerFollowup: (state, getters) => (id) => {
    return getters.getAnswerCheckbox(id)
  },

  /**
   * Returns all active filters of a filter-question,
   * as an array of objects.
   *
   * @param id
   * @returns {function(*): [parser.Node[], parser.Node[]] | * | string[]}
   */
  getAnswerFilter: (state, getters) => (id) => {
    let activeFilters = []
    const filters = getters.getMail(id).filter

    filters.forEach(function (filter) {
      filter.active ? activeFilters.push(filter) : ''
    });

    return activeFilters
  },


  /**
   * Returns an array of objects of all followup questions.
   * @param state
   * @returns {*}
   */
  getAllFollowupQuestions: state => {
    return state.mails.filter((item) => {
      return item.answer.type == 'followup'
    })
  },


  /**
   * Returns an array with the IDs of *all* followup-children.
   *
   * @param state
   * @param getters
   * @returns {*[]}
   */
  getAllFollowupIDs: (state, getters) => {
    let folloupIDs = []

    // For each question of type followup …
    getters.getAllFollowupQuestions.forEach(function (question) {
      // … push its child-IDs to the array of all followup-child IDs.
      folloupIDs = [...folloupIDs, ...getters.getFollowupIDs(question)]
    });

    // Remove duplicates.
    return folloupIDs.filter((item, index) =>
      folloupIDs.indexOf(item) === index
    )
  },


  /**
   * Returns an array with the IDs of the followup-children of *a single*
   * followup-parent.
   *
   * @param state
   * @returns {function(*): []}
   */
  getFollowupIDs: state => (question) => {
    if (question.answer.type != "followup") {
      return
    }

    let folloupIDs = [];

    // For each option …
    question.answer.options.map(obj => {
      // … that has the property 'followupID'
      if (obj.hasOwnProperty('followupID')) {
        // … add its ID to the array of followup IDs.
        folloupIDs.push(obj.followupID)
      }
    })

    return folloupIDs
  },

  /**
   * Returns TRUE when a question is the child of a followup question,
   * returns FALSE if it is not.
   *
   * @param state
   * @param getters
   * @returns {function(...[*]=)}
   */
  isFollowupChild: (state, getters) => (ID) => {
    return getters.getAllFollowupIDs.includes(ID) ? true : false
  },


  getMeta: state => {
    return (state.meta)
  },


  projectMetaIsSet: state => {
    return (state.meta.project.nameProject && state.meta.project.nameApplicant) ? true : false
  },
}
