<template>
  <div>
    <vs-textarea id="textarea"
                 counter="100"
                 maxlength="100"
                 height="50"
                 placeholder="Bitte begründen Sie kurz, warum Sie die Frage für irrelevant erachten.Zum Speichern muss kein Button betätigt werden: Eingaben werden sofort gespeichert."
                 label="Begründung."
                 :counter-danger.sync="counterDanger"
                 v-model.trim="textarea"/>
  </div>
</template>

<script>
  export default {
    name: "TrashReason",

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
          return this.$store.getters['email/getMail'](this.mailContent.id).trashingReason
        },
        set (value) {
          const params = {
            answer: value,
            id: this.mailContent.id
          }
          this.$store.commit('email/UPDATE_TRASHREASON', params)
        }
      }

    }
  }
</script>

<style scoped>

</style>
