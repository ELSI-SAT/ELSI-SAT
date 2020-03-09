<!-- =========================================================================================
    File Name: EmailView.vue
    Description: Email Application - Single Email View (Unbeantwortet)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div>
        <vs-sidebar click-not-close parent="#email-app" :hidden-background="true" class="full-vs-sidebar email-view-sidebar items-no-padding" v-model="isSidebarActive" position-right>
            <div class="mail-sidebar-content px-0 sm:pb-6 h-full" v-if="currentMail">
                <div class="flex flex-wrap items-center justify-between md:px-8 px-6 sm:pb-2 sm: pt-6 d-theme-dark-bg">
                    <div class="flex mb-4">
                        <div class="flex items-center">
                            <feather-icon icon="ArrowLeftIcon" @click="$emit('closeSidebar')" class="cursor-pointer mr-4" svg-classes="w-6 h-6"></feather-icon>
                            <h4>{{ currentMail.inquiry }}</h4>
                        </div>
                    </div>
                    <div class="ml-10 mb-4 mt-1">
                        <div class="email__actions--single flex items-baseline">
                          <vx-tooltip :text="currentMail.isStarred ? 'Markierung entfernen' : 'markieren'">
                            <feather-icon
                              icon="StarIcon"
                              class="cursor-pointer "
                              :svgClasses="[{'text-warning stroke-current stroke-current': currentMail.isStarred}, 'h-6 w-6']"
                              @click="toggleIsStarred" />
                          </vx-tooltip>

                          <feather-icon icon="ChevronsLeftIcon" svg-classes="h-6 w-6" class="cursor-pointer ml-4 hidden sm:inline-flex" @click="$emit('previousMail')" />
                          <feather-icon icon="ChevronsRightIcon" svg-classes="h-6 w-6" class="cursor-pointer ml-4 hidden sm:inline-flex" @click="$emit('nextMail')" />
                        </div>
                    </div>
                </div>

                <VuePerfectScrollbar class="scroll-area md:px-8 pt-4 pb-8 px-6" :settings="settings">
                <!-- LABEL ROW -->
                <div class="vx-row">
                    <div class="vx-col w-full">
                      <div class="ml-10 mr-10 items-center mt-0">
                        <div class="mail__content break-words mt-3 mb-4" v-html="currentMail.message"></div>
                        <transition-group name="list" tag="div" class="flex mb-6">
                          <div v-for="label in currentMail.labels" :key="label" class="open-mail-label flex items-center mr-4">
                            <vs-chip :style="'color: ' + labelColor(label)">{{ label }}</vs-chip>
                          </div>
                        </transition-group>
                      </div>
                    </div>
                </div>
                <!-- /LABEL ROW -->

                <div v-if="isSidebarActive">
                    <!-- LATEST MESSAGE -->
                    <div class="vx-row">
                        <div class="vx-col w-full">
                          <email-mail-card :mailContent="currentMail" />
                        </div>
                    </div>

                    <!-- ALL MESSAGES - THREAD -->
                    <div
                      class="vx-row"
                      v-for="threadMail in followupQuestions"
                      :key="threadMail.id">
                      <div class="vx-col w-full">
                        <email-mail-card :mailContent="threadMail" class="mt-10" />
                      </div>
                    </div>


                </div>
                </VuePerfectScrollbar>
            </div>
        </vs-sidebar>
    </div>
</template>

<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  import EmailMailCard from "./EmailMailCard.vue"
  import TextForm  from './forms/TextForm.vue'

  export default {
  props: {
    mailTags: {
      type: Array,
      required: true,
    },
    openMailId: {
      required: true,
      validator: prop => typeof prop === 'number' || prop === null
    },
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    mailFilter: {
      type: String
    }
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.50,
      },
    }
  },
  watch: {
    isSidebarActive(value) {
      if (!value) {
        this.$emit('closeSidebar')
      }
    },
  },
  computed: {
    currentMail() {
      return this.$store.getters['email/getMail'](this.openMailId)
    },
    labelColor() {
      return (label) => {
        const tags = this.$store.state.email.mailTags
        return tags.find((tag) => {
          return tag.value == label
        }).color
      }
    },
    currentMailLabels: {
      get() {
        return this.currentMail.labels
      },
    },
    followupQuestionIDs() {
      const question = this.$store.getters['email/getMail'](this.openMailId)
      let folloups = []

      if (
        question.answer.type === 'followup'
        || question.answer.type === 'followup-radio'
      ) {
        const answerString = question.answer.answer
        const answerArray = answerString.split(this.$store.state.stringSeparator)

        answerArray.forEach(function (answer) {
          const options = question.answer.options
          let option = options.find(
            element =>
              element.name == answer
              && element.hasOwnProperty('followupID')
          )

          if (option) { folloups.push( option.followupID ) }
        })
      }

      // Filter duplicates
      return folloups.filter((item, index) =>
        folloups.indexOf(item) === index
      )
    },
    followupQuestions() {
      const folloupIDs = this.followupQuestionIDs
      const store = this.$store
      let questions = []

      folloupIDs.forEach(function (ID) {
        let q = store.getters['email/getMail'](ID)
        questions.push(q)
      })

      return questions
    }

  },
  methods: {
    toggleIsStarred() {
      const payload = { mailId: this.openMailId, value: !this.currentMail.isStarred }
      this.$store.dispatch('email/toggleIsStarred', payload)
    },
  },
  components: {
    VuePerfectScrollbar,
    EmailMailCard,
    TextForm
  },
}

</script>

