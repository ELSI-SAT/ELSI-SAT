<template>
  <ul class="centerx">
    <li v-for="(item, index) in mailContent.answer.options" v-bind:key="index">
      <div class="radio-container">
        <input :id="item.name" class="form-radio" type="radio" v-model="radios" :value="item.name">
        <label :for="item.name" class="label">{{ item.name }}</label>
      </div>
    </li>

  </ul>
</template>

<script>
  export default {
    name: "RadioForm",

    props: {
      mailContent: {
        type: Object,
        required: true
      },
    },

    computed: {
      radios: {
        get() {
          return this.$store.getters['email/getMail'](this.mailContent.id).answer.answer
        },
        set(value) {
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
