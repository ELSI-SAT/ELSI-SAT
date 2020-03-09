<template>
  <ul class="centerx">
    <li v-for="(item, index) in  mailContent.filter" v-bind:key="index">
      <vs-checkbox v-model="checkbox" :vs-value="item">{{ item.title }}</vs-checkbox>
    </li>
  </ul>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "FilterForm",

    props: {
      mailContent: {
        type: Object,
        required: true
      },
    },

    computed: {
      ...mapGetters([]),

      checkbox: {
        get() {
          // Returns all selected options as an array.
          return this.$store.getters['email/getAnswerFilter'](this.mailContent.id)
        },
        set(value) {
          const activeFilters = value
          let numberOfActiveFilters = 0

          // Make a real copy of a JavaScript Array with Objects (without a reference)!
          // @see discussion of [...array] and other methods (that only create shallow copies) at
          // https://dev.to/rsschouwenaar/how-to-make-a-real-copy-of-a-javascript-array-with-objects-without-a-reference-5md
          // Alternatively use lodash's https://lodash.com/docs/4.17.15#cloneDeep
          let filters =
            JSON.parse(
              JSON.stringify(
                this.$store.getters['email/getMail'](this.mailContent.id).filter
              )
            );

          // Set selected filters to true
          filters.forEach(function (filter) {
            // Reset all filters to false …
            filter.active = false

            activeFilters.forEach(function (activeFilter) {
              // … except those that are set in the form.
              if (filter.title == activeFilter.title) {
                filter.active = true
                numberOfActiveFilters++
              }
            })
          })

          const payload = {
            id: this.mailContent.id,
            filters: filters,
          }

          // Dispatch the filters-array.
          this.$store.dispatch('email/updateFilterQuestion', payload)

          // Set question as answered
          if (numberOfActiveFilters > 0) {
            this.$store.commit('email/UPDATE_ANSWER', {answer: 'filterIsSet', id: this.mailContent.id})
          } else {
            this.$store.commit('email/UPDATE_ANSWER', {answer: '', id: this.mailContent.id})
          }

          // Todo usta: Maybe instead of dispatching this action
          // that always scans the complete state
          // instead create a button that submits the form once.
          this.$store.dispatch("email/fetchMeta");
        }
      }
    }
  }
</script>

<style scoped>

</style>
