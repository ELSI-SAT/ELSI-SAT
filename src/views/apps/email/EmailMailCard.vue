<!-- =========================================================================================
    File Name: EmailMailCard.vue
    Description: Email Application - Single Email Card View
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template functional>
  <vx-card class="px-4" :class="data.staticClass">
    <!-- MAIL HEAD -->
    <div class="vx-row">
      <div class="vx-col w-full flex justify-between flex items-center">

        <div class="flex items-center">
          <div class="flex flex-col">
            <h3 class="mb-1">{{ props.mailContent.inquiry }}</h3>
          </div>
        </div>
      </div>

    </div>

    <!-- MAIL CONTENT -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mail__content break-words mt-8 mb-4" v-html="props.mailContent.message"></div>
      </div>
    </div>

    <div class="vx-row">
      <TextForm v-bind:mailContent="props.mailContent" class="vx-col w-full"></TextForm>
    </div>
  </vx-card>
</template>

<script>

  export default {
  props: {
    mailContent: {
      type: Object,
      required: true
    }
  },
}
</script>
