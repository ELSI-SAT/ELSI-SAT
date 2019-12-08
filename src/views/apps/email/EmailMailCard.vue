<!-- =========================================================================================
    File Name: EmailMailCard.vue
    Description: Email Application - Single Email Card View
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vx-card class="px-4">
    <div class="vx-row">
      <TextForm
        v-if="!mailContent.isTrashed && mailContent.answer.type === 'text'"
        v-bind:mailContent="mailContent"
        class="w-full"></TextForm>

      <RadioForm
        v-if="!mailContent.isTrashed && mailContent.answer.type === 'radio'"
        v-bind:mailContent="mailContent"
        class="w-full mb-4"></RadioForm>

      <vs-button
        @click="toggleIsTrashed"
        color="danger"
        :type="mailContent.isTrashed ? 'filled' : 'border'"
        icon-pack="feather"
        icon="icon-trash">
        {{ mailContent.isTrashed ? 'Als nicht relevant verworfen' : 'Als nicht relevant verwerfen' }}
      </vs-button>

      <TrashReason
        v-if="mailContent.isTrashed"
        v-bind:mailContent="mailContent"
        label="Eingaben werden sofort gespeichert."
        class="w-full mt-4"/>

    </div>
  </vx-card>
</template>

<script>
  import TextForm from './forms/TextForm.vue'
  import RadioForm from './forms/RadioForm.vue'
  import TrashReason from './forms/TrashReason.vue'

  export default {
    name: 'EMailMailCard',

    components: {
      TextForm,
      RadioForm,
      TrashReason,
    },

    props: {
      mailContent: {
        type: Object,
        required: true
      }
    },

    methods: {
      toggleIsTrashed() {
        const payload = {mailId: this.mailContent.id, value: !this.mailContent.isTrashed}
        this.$store.dispatch('email/toggleIsTrashed', payload)
        // todo usta: trashreason löschen
      },
    }
  }
</script>
