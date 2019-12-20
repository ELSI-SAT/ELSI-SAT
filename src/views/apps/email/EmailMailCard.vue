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
    <!-- Filter Questions -->
    <div
      class="vx-row"
      v-if="mailContent.filter">
      <FilterForm
        :mailContent="mailContent"
        class="w-full"></FilterForm>
    </div>

    <!-- Regular Questions -->
    <div
      class="vx-row"
      v-if="!mailContent.isTrashed && !mailContent.filter">

      <TextForm
        v-if="mailContent.answer.type.includes('text')"
        :mailContent="mailContent"
        :textsize="mailContent.answer.type"
        class="w-full"></TextForm>

      <RadioForm
        v-if="mailContent.answer.type === 'radio'"
        :mailContent="mailContent"
        class="w-full mb-4"></RadioForm>

      <CheckboxForm
        v-if="mailContent.answer.type === 'checkbox'"
        :mailContent="mailContent"
        class="w-full mb-4"></CheckboxForm>

      <FollowupForm
        v-if="mailContent.answer.type === 'followup'"
        :mailContent="mailContent"
        class="w-full mb-4"></FollowupForm>
    </div>

    <div
      class="vx-row">
      <vs-button
        v-if="!isFollowupChild && !mailContent.filter"
        @click="toggleIsTrashed"
        color="danger"
        :type="mailContent.isTrashed ? 'filled' : 'border'"
        icon-pack="feather"
        icon="icon-trash">
        {{ mailContent.isTrashed ? 'Als nicht relevant verworfen' : 'Als nicht relevant verwerfen' }}
      </vs-button>

      <TrashReason
        v-if="mailContent.isTrashed"
        :mailContent="mailContent"
        label="Eingaben werden sofort gespeichert."
        class="w-full mt-4"/>
    </div>
  </vx-card>
</template>

<script>
  import FilterForm from './forms/FilterForm.vue'

  import TextForm from './forms/TextForm.vue'
  import RadioForm from './forms/RadioForm.vue'
  import CheckboxForm from './forms/CheckboxForm.vue'
  import FollowupForm from './forms/FollowupForm.vue'
  import TrashReason from './forms/TrashReason.vue'

  export default {
    name: 'EMailMailCard',

    components: {
      FilterForm,

      TextForm,
      RadioForm,
      CheckboxForm,
      FollowupForm,
      TrashReason,
    },

    props: {
      mailContent: {
        type: Object,
        required: true
      }
    },

    computed : {
      isFollowupChild() {
        const followupIDs = this.$store.getters['email/getAllFollowupIDs']
        if (
          followupIDs.includes(this.mailContent.id)
        ) {
          return true
        } else {
          return false
        }

      },
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
