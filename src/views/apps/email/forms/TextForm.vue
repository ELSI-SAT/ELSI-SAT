<template>
  <div>
    <vs-textarea id="textarea"
                 counter="500"
                 maxlength="500"
                 height="200"
                 placeholder="Bitte geben Sie hier ihre Antwort ein. Ihnen stehen 500 Zeichen zur Verfügung. Zum Speichern muss kein Button betätigt werden: Eingaben werden sofort gespeichert."
                 label="Eingaben werden sofort gespeichert."
                 :counter-danger.sync="counterDanger"
                 v-model.trim="textarea"/>
  </div>
</template>

<script>
  export default {
    name: "TextForm",

    data() {
      return {
        counterDanger: true,
      }
    },

    props: {
      mailContent: {
        type: Object,
        required: true
      },
    },

    computed: {

      textarea: {
        get () {
          return this.$store.getters['email/getMail'](this.mailContent.id).answer.answer
        },
        set (value) {
          const params = {
            answer: value,
            id: this.mailContent.id
          }
          this.$store.commit('email/UPDATE_ANSWER', params)
        }
      }

    }
  }
</script>

<style scoped>

</style>
