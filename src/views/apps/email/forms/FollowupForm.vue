<template>
  <ul class="centerx">
    <li v-for="(item, index) in mailContent.answer.options" v-bind:key="index">
      <vs-checkbox v-model="followup" :vs-value="item.name">{{ item.name }}</vs-checkbox>
    </li>
  </ul>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "FollowupForm",

    props: {
      mailContent: {
        type: Object,
        required: true
      },
    },

    computed: {
      ...mapGetters([]),

      followup: {
        get() {
          // Returns all selected options as an array.
          return this.$store.getters['email/getAnswerCheckbox'](this.mailContent.id)
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
