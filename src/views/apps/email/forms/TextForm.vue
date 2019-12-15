<template>
  <div>
    <vs-textarea id="textarea"
                 :counter="textSize.counter"
                 :maxlength="textSize.counter"
                 :height="textSize.height"
                 :placeholder="'Bitte geben Sie hier ihre Antwort ein. Ihnen stehen ' + textSize.counter + ' Zeichen zur Verfügung. Zum Speichern muss kein Button betätigt werden: Eingaben werden sofort gespeichert.'"
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
      textsize: {
        type: String,
        required: true
      },
    },

    computed: {
      textSize() {
        let counter = 500
        let height = 130

        this.textsize == 'tinytext' ?  (counter= 100, height=60 )
          : this.textsize == 'bigtext' ?  (counter= 2000, height=300 ) : ''

        return { counter: counter, height: height };
      },

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
