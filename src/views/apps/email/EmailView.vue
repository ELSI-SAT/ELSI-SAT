<!-- =========================================================================================
    File Name: EmailView.vue
    Description: Email Application - Single Email View (Offene Fragen)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div>
        <vs-sidebar click-not-close parent="#email-app" :hidden-background="true" class="full-vs-sidebar email-view-sidebar items-no-padding" v-model="isSidebarActive" position-right>
            <div class="mail-sidebar-content px-0 sm:pb-6 h-full" v-if="currentMail">
                <div class="flex flex-wrap items-center email-header justify-between md:px-8 px-6 sm:pb-2 sm: pt-6 d-theme-dark-bg">
                    <div class="flex mb-4">
                        <div class="flex items-center">
                            <feather-icon icon="ArrowLeftIcon" @click="$emit('closeSidebar')" class="cursor-pointer mr-4" svg-classes="w-6 h-6"></feather-icon>
                            <h5>{{ currentMail.subject }}</h5>
                        </div>
                    </div>
                    <div class="ml-10 mb-4 mt-1">
                        <div class="email__actions--single flex items-baseline">

                            <feather-icon icon="StarIcon" class="cursor-pointer" :svgClasses="[{'text-warning stroke-current stroke-current': currentMail.isStarred}, 'h-6 w-6']" @click="toggleIsStarred" />

                            <!-- MOVE TO DROPDOWN -->
                            <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer" v-if="mailFilter != 'answered'">
                                <feather-icon icon="FolderIcon" svg-classes="h-6 w-6" class="ml-4"></feather-icon>
                                <vs-dropdown-menu>
                                    <ul class="my-2" style="width: 170px;">
                                        <li class="px-4 mb-2 flex items-start cursor-pointer hover:text-primary" @click="moveTo('inbox')" v-if="currentMail.mailFolder != 'inbox'">
                                            <feather-icon icon="MailIcon" svg-classes="h-5 w-5" />
                                            <span class="ml-3">Offene Fragen</span>
                                        </li>
                                        <li class="px-4 mb-2 flex items-start cursor-pointer hover:text-primary" @click="moveTo('draft')" v-if="currentMail.mailFolder != 'draft'">
                                            <feather-icon icon="Edit2Icon" svg-classes="h-5 w-5"></feather-icon>
                                            <span class="ml-3">Entwurf</span>
                                        </li>
                                        <li class="px-4 flex items-start cursor-pointer hover:text-primary" @click="moveTo('trash')" v-if="currentMail.mailFolder != 'trash'">
                                            <feather-icon icon="TrashIcon" svg-classes="h-5 w-5"></feather-icon>
                                            <span class="ml-3">Nicht relevant</span>
                                        </li>
                                    </ul>
                                </vs-dropdown-menu>
                            </vs-dropdown>

                            <feather-icon icon="ChevronsLeftIcon" svg-classes="h-6 w-6" class="cursor-pointer ml-4 hidden sm:inline-flex" @click="$emit('previousMail')" />
                            <feather-icon icon="ChevronsRightIcon" svg-classes="h-6 w-6" class="cursor-pointer ml-4 hidden sm:inline-flex" @click="$emit('nextMail')" />
                        </div>
                    </div>
                </div>

                <VuePerfectScrollbar class="scroll-area md:px-8 pt-4 px-6" :settings="settings">
                <!-- LABEL ROW -->
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <div class="email__labels--single flex ml-10 items-center mt-2">
                            <transition-group name="list" tag="div" class="flex">
                                <div v-for="label in currentMail.labels" :key="label" class="open-mail-label flex items-center mr-4">
                                    <div class="h-3 w-3 rounded-full mr-1" :class="'bg-' + labelColor(label)"></div>
                                    <span class="text-sm">{{ label | capitalize }}</span>
                                </div>
                            </transition-group>
                        </div>
                    </div>
                </div>
                <!-- /LABEL ROW -->
                <br>

                <div class="vx-row mb-4" v-if="currentMail.replies.length && !showThread">
                    <div class="vx-col w-full">
                        <span class="text-primary font-medium ml-10 cursor-pointer" @click="showThread = true">{{ currentMail.replies.length }} Earlier Messages</span>
                    </div>
                </div>
                <div v-if="isSidebarActive">

                    <!-- ALL MESSAGES - THREAD -->
                    <div class="vx-row" v-for="threadMail in currentMail.replies.slice().reverse()" :key="threadMail.id" v-if="showThread">
                        <div class="vx-col w-full">
                            <email-mail-card :mailContent="threadMail" class="mb-10" />
                        </div>
                    </div>

                    <!-- LATEST MESSAGE -->
                    <div class="vx-row">
                        <div class="vx-col w-full">
                          <email-mail-card :mailContent="currentMail" />
                        </div>
                    </div>

                    <div class="vx-row" style="margin-top: 2.2rem">
                        <div class="vx-col w-full pb-10">

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
      showThread: false,
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
        setTimeout(() => {
          this.showThread = false
        }, 500)
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
    }
  },
  methods: {
    toggleIsStarred() {
      const payload = { mailId: this.openMailId, value: !this.currentMail.isStarred }
      this.$store.dispatch('email/toggleIsStarred', payload)
    },
    moveTo(to) {
      this.$emit('closeSidebar')
      this.$emit('moveTo', to)
    }
  },
  components: {
    VuePerfectScrollbar,
    EmailMailCard
  },
}

</script>

