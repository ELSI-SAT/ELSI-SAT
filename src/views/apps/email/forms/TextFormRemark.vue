<template>
  <div id="textarearemark">
    <h6 class="mt-10 mb-4">Anmerkungen</h6>

    <vs-textarea
      :counter="200"
      :maxlength="200"
      height="70"
      :placeholder="'Sollten Sie Anmerkungen zur Frage oder Hinweise haben, können Sie diese hier anfügen.'"
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

#textarearemark {
  h6 {
    color: #444444;
  }

  textarea,
  .vs-con-textarea,
  .vs-textarea-primary {
    background: #FAFAFA;
    border: 0px solid !important;

    h4 {
      color: #777777;
    }
  }
}
</style>
