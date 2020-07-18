<!-- =========================================================================================
    File Name: MailItem.vue
    Description: Mail Item - Displays mail item
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div class="mail__mail-item sm:px-8 px-6 py-6"
         :class="{
            'inbox': !mail.isTrashed && !mail.answer.answer,
            'answered': !mail.isTrashed && mail.answer.answer,
            'isTrashed': mail.isTrashed,
            'text-grey-dark': mail.isTrashed}">

        <!-- MAIL ROW 1 : META -->
        <div class="flex w-full">
            <div class="flex w-full justify-between items-start">
                <div class="mail__details flex w-full">
                  <h5 class="mb-1 "
                      :class="{'font-semibold': !mail.isTrashed && !mail.answer.answer, 'font-normal': mail.answer.answer}">
                    {{ mail.inquiry }}
                    <br>
                    <div class="text-grey font-light mt-1">{{ mail.subject }}</div>

                  </h5>
                </div>
                <div style="display: block">
                  <feather-icon
                    icon="StarIcon"
                    class="cursor-pointer ml-3"
                    :svgClasses="[{'text-warning fill-current stroke-current': mail.isStarred}, 'w-5', 'h-5']">
                  </feather-icon>
                </div>
            </div>
        </div>
        <!-- /MAIL ROW 1 -->

    </div>
</template>

<script>
export default {
  props: {
    mail: {
      type: Object,
      required: true,
    },
  },
  computed: {
    labelColor() {
      return (label) => {
        const tags = this.$store.state.email.mailTags

        const tag_color = tags.find((tag) => {
          return tag.value == label
        }).color

        return tag_color;
      }
    },
  },
  methods: {
    toggleIsStarred() {
      const payload = { mailId: this.mail.id, value: !this.mail.isStarred }
      this.$store.dispatch('email/toggleIsStarred', payload)
    }
  }
}

</script>

