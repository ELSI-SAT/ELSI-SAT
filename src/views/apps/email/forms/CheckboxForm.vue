<template>
  <ul class="centerx">
    <li v-for="item in mailContent.answer.options">
      <vs-checkbox v-model="checkbox" :vs-value="item">{{ item }}</vs-checkbox>
    </li>
  </ul>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "CheckboxForm",

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
          // Create an array ["Option 1", "Option 2"]
          // from a string "Option 1,Option 2"
          const answer = this.$store.getters['email/getMail'](this.mailContent.id).answer.answer
          const arr = answer.split(this.$store.state.stringSeparator)
          return arr
        },
        set(value) {
          const params = {
            answer: value.filter(item => item).join(this.$store.state.stringSeparator), // remove empty strings
            id: this.mailContent.id
          }

          this.$store.commit('email/UPDATE_ANSWER', params)

          // Todo usta: Maybe instead of dispatching this action
          // that always scans the complete state
          // instead create a button that submits the form once.
          this.$store.dispatch("email/fetchMeta")
        }
      }
    }
  }
</script>

<style scoped>

</style>
