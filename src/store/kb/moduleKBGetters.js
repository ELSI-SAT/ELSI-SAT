export default {

  getAllTerms: (state) => {
    return state.terms
  },

  getTermById: (state) => (termid) => {
    return state.terms.find((term) => term.id == termid)
  },

  getAllCategories: (state) => {
    return state.categories
  },

}
