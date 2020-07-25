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
              : state.mail_filter === "all" ? (1 === 1)
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
   * Returns the total number of actionable questions, that have a specific label,
   * i.e. questions that are:
   * - not trashed
   * - positively filtered, if a filter is set
   *
   * @param state
   * @param getters
   * @returns {function(*=): number}
   */
  getNumberOfQuestionsWithLabel: (state, getters) => (label) => {
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
        && mail.labels.includes(label)
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
   * Returns the number of completed answers, that have a specific label,
   * i.e. all answers that are:
   * - not empty and not trashed
   * - and, if filters are set,
   *   + either positively filtered
   *   + or a filter-question
   *
   * @param state
   * @param getters
   * @returns {function(*=): number}
   */
  getNumberOfAnswersWithLabel: (state, getters) => (label) => {
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
        && mail.labels.includes(label)
      ) {
        // … count it as an answer.
        answers++;
      }
    })

    return (answers)
  },


  /**
   * Returns the overall answering-progress.
   *
   * @param state
   * @param getters
   * @returns {number}
   */
  getQuota: (state, getters) => {
    const answered = getters.getNumberOfAnswers
    const questions = getters.getNumberOfQuestions

    return Math.floor((answered / questions) * 100)
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
      return (item.answer.type == 'followup' || item.answer.type == 'followup-radio')
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
    if (
      question.answer.type != "followup"
      && question.answer.type != "followup-radio"
    ) {
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
   * Determines if a question is a followup question.
   *
   * @param state
   * @param getters
   * @returns {function(...[*]=)}
   */
  isFollowup: (state, getters) => (mailid) => {
    if (getters['getAllFollowupIDs'].includes(mailid)) {
      return true
    } else {
      return false
    }
  },


  /**
   *
   * @param state
   * @param getters
   */
  isActiveFollowup: (state, getters) => (mailid) => {
    let isActiveFollowup = false

    // get its parent's option of which it is the followup
    // Since followup-questions are indexed with a dot (eg. 15.1)
    // the parent's id is the current ID as an integer
    let parentID = parseInt(mailid)
    let parent = getters.getMail(parentID)
    let triggerOption = parent.answer.options.find(o => o.followupID == mailid).name

    if (triggerOption == parent.answer.answer) {
      isActiveFollowup = true
    }

    // console.log('mailid: ' + mailid)
    // console.log('triggerOption: ' + triggerOption)
    // console.log('parent.answer.answer: ' + parent.answer.answer)
    // console.log('isActiveFollowup: ' + isActiveFollowup)

    return isActiveFollowup;
  },


  getScoreTotalMalus: (state, getters) => (label) =>{
    let totalMalus = 0;

    state.mails.forEach(function (mail) {
      // Ignore questions without answers.
      // Todo: check other criteria, like trashed, followup etc.
      if (mail.answer.answer == '') return;

      // If a label is set, discard questions without this label.
      if (label !== false && !mail.labels.includes(label)) return;

      // If this question is a followup-question,
      // only consider it, if its parent's answer triggers it.
      if (
        getters.isFollowup(mail.id)
        && getters.isActiveFollowup(mail.id) !== true
      ) {
        return;
      }

      if (getters._filterCheck(mail.id) != true) { return }

      let risk = 0;
      let answer_value = mail.answer.answer
      // Todo: refactor: abstract/centralize
      let factor = 1; if (getters.getNumberOfLabels(mail.id) >= 3) factor = 2

      switch (mail.answer.type) {
        case 'radio':
        case 'followup-radio':
          // Ignore type 'filter' for the time being.
          risk = mail.answer.options.find(o => o.name === answer_value).risk_existence;
          break
        case 'tinytext':
        case 'text':
        case 'bigtext':
          // Text-type questions NEVER have "risk_existence" values set.
          break
      }

      totalMalus = totalMalus + risk * factor
    })

    return totalMalus
  },



  getScoreMaximumMalus: (state, getters) => (label) =>{
    let maximumMalus = 0;

    state.mails.forEach(function (mail) {
      // If a label is set, discard questions without this label.
      if (label !== false && !mail.labels.includes(label)) return;

      // If this question is a followup-question,
      // only consider it, if its parent's answer triggers it.
      if (
        getters.isFollowup(mail.id)
        && getters.isActiveFollowup(mail.id) !== true
      ) {
        return;
      }

      if (getters._filterCheck(mail.id) != true) { return }

      let risk = 0;
      // Todo: refactor: abstract/centralize
      let factor = 1; if (getters.getNumberOfLabels(mail.id) >= 3) factor = 2

      // Skip empty option-arrays.
      if (typeof mail.answer.options == 'undefined' || mail.answer.options.length == 0) {
        return
      }

      mail.answer.options.forEach(function (option) {
        risk = option.risk_existence
        maximumMalus = maximumMalus + risk * factor
      })
    })

    return maximumMalus
  },


  getScoreTotalBonus: (state, getters) => (label) =>{
    let totalBonus = 0;

    state.mails.forEach(function (mail) {
      // Ignore questions without answers.
      // Todo: check other criteria, like trashed, followup etc.
      if (mail.answer.answer == '') return;

      // If a label is set, discard questions without this label.
      if (label !== false && !mail.labels.includes(label)) return;

      // If this question is a followup-question,
      // only consider it, if its parent's answer triggers it.
      if (
        getters.isFollowup(mail.id)
        && getters.isActiveFollowup(mail.id) !== true
      ) {
        return;
      }

      if (getters._filterCheck(mail.id) != true) { return }

      let bonus = 0
      let answer_value = mail.answer.answer
      // Todo: refactor: abstract/centralize
      let factor = 1; if (getters.getNumberOfLabels(mail.id) >= 3) factor = 2

      switch (mail.answer.type) {
        case 'radio':
        case 'followup-radio':
          // Ignore type 'filter' for the time being.
          bonus = mail.answer.options.find(o => o.name === answer_value).risk_addressing;
          break
        case 'tinytext':
        case 'text':
        case 'bigtext':
          // Text-type questions Do have "risk_addressing" values set.
          bonus = 1
          break
      }

      totalBonus = totalBonus + bonus * factor
    })

    return totalBonus
  },



  getScoreMaximumBonus: (state, getters) => (label) =>{
    let maximumBonus = 0;

    state.mails.forEach(function (mail) {
      // Todo: check other criteria, like trashed, followup etc.

      // If a label is set, discard questions without this label.
      if (label !== false && !mail.labels.includes(label)) return;

      // If this question is a followup-question,
      // only consider it, if its parent's answer triggers it.
      if (
        getters.isFollowup(mail.id)
        && getters.isActiveFollowup(mail.id) !== true
      ) {
        return;
      }

      if (getters._filterCheck(mail.id) != true) { return }

      let bonus = 0;
      // Todo: refactor: abstract/centralize
      let factor = 1; if (getters.getNumberOfLabels(mail.id) >= 3) factor = 2

      switch (mail.answer.type) {
        case 'radio':
        case 'followup-radio':
          // Ignore type 'filter' for the time being.
          mail.answer.options.forEach(function (option) {
            bonus = option.risk_addressing
          })

          break
        case 'tinytext':
        case 'text':
        case 'bigtext':
          // Text-type questions Do have "risk_addressing" values set.
          bonus = 1
          break
      }

      maximumBonus = maximumBonus + bonus * factor
    })


    return maximumBonus
  },


  getNumberOfLabels: (state, getters) => (id) => {
    let mail = state.mails.find((email) => email.id == id)
    return mail.labels.length
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


  getProjectMeta: state => {
    return state.project
  },


  projectMetaIsSet: state => {
    return (state.project.nameProject && state.project.nameApplicant) ? true : false
  },


  /**
   * Returns the mailTags Object
   *
   * @param state
   * @returns {*}
   */
  getAllLabels: state => {
    return state.mailTags;
  },


  /**
   * Returns false, if filters are set,
   * and mailID got filtered out.
   *
   * Returns true if either no filters are set,
   * or filters are set an mailID is included.
   *
   * @param state
   * @param getters
   * @returns {function(*=): boolean}
   * @private
   */
  _filterCheck: (state, getters) => (mailID) => {
    let pass = true

    const filtered_questions_ids = getters.getFilteredQuestionsIDs

    if (
      (filtered_questions_ids.length > 0)
      && !filtered_questions_ids.includes(mailID)
    ) {
      pass = false
    }

    return pass
  },
}
