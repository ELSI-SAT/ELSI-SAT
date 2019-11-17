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
        <!-- Sender Details -->
        <div class="flex items-center">

          <div class="flex flex-col">
            <h3 class="mb-1">{{ props.mailContent.sender_name }}</h3>
          </div>
        </div>
      </div>
        <!-- /Sender Details -->
    </div>

    <!-- MAIL CONTENT -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mail__content break-words mt-8 mb-4" v-html="props.mailContent.message"></div>
      </div>
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
  }
}
</script>
