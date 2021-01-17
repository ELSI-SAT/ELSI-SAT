<template>
  <div id="textarearemark">
    <h5 class="mb-4">Zusätzliche Erläuterungen, Anmerkungen und Ergänzungen:</h5>

    <vs-textarea
      :counter="300"
      :maxlength="300"
      height="120"
      :placeholder="'Sollten Sie zusätzliche Erläuterungen, Anmerkungen und Ergänzungen zur Frage oder Hinweise haben, können Sie diese hier anfügen.'"
      label="Eingaben werden sofort gespeichert."
      :counter-danger.sync="counterDanger"
      v-model.trim="textarea"
      @focus="fieldHasFocus(true)"
      @blur="fieldHasFocus(false)"/>
  </div>
</template>

<script>
export default {
  name: "TextFormRemark",

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
      get() {
        return this.$store.getters['email/getMail'](this.mailContent.id).remark
      },
      set(value) {
        const params = {
          remark: value,
          id: this.mailContent.id
        }
        this.$store.commit('email/UPDATE_REMARK', params)
      }
    }

  },
  methods: {
    fieldHasFocus(focus) {
      this.$store.commit("TEXTAREA_HAS_FOCUS", focus)
    },
  },
}
</script>

<style lang="scss">

</style>
