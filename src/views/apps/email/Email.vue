<!-- =========================================================================================
    File Name: Email.vue
    Description: Email Application (Offene Fragen)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="email-app"
         class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden">

        <vs-sidebar class="items-no-padding"
                    parent="#email-app"
                    :click-not-close="clickNotClose"
                    :hidden-background="clickNotClose"
                    v-model="isEmailSidebarActive">
            <email-sidebar :mailTags="mailTags"
                           @closeSidebar="toggleEmailSidebar"
                           :mailFilter="mailFilter" />
        </vs-sidebar>

        <div :class="{'sidebar-spacer': clickNotClose}"
             class="app-fixed-height border border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0">

            <!-- SEARCH BAR -->
            <div class="flex border d-theme-dark-bg items-center">
                <feather-icon class="md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer"
                              @click.stop="toggleEmailSidebar(true)"/>
                <vs-input icon-no-border icon="icon-search"
                          size="large"
                          icon-pack="feather"
                          placeholder="Suche"
                          v-model="searchQuery"
                          class="vs-input-no-border vs-input-no-shdow-focus w-full" />
            </div>

            <!-- EMAIL ACTION BAR -->
            <div class="email__actions flex items-center flex-wrap justify-between p-4 border border-r-0 border-l-0 border-solid d-theme-border-grey-light">
                <div class="flex items-center">
                    <vs-checkbox v-model="selectAllCheckBox"
                                 icon-pack="feather"
                                :icon="selectAllIcon"
                                class="select-all-chexkbox ml-0">
                      Alle auswählen
                    </vs-checkbox>
                </div>
                <div class="flex">

                    <vs-dropdown vs-custom-content vs-trigger-click
                                 class="cursor-pointer"
                                 v-if="mailFilter != 'answered'">

                        <feather-icon icon="FolderIcon"
                                      class="cursor-pointer"
                                      svg-classes="h-6 w-6"></feather-icon>

                        <vs-dropdown-menu>
                            <ul class="my-2" style="width: 170px;">
                                <li class="px-4 mb-2 flex items-start cursor-pointer hover:text-primary"
                                    @click="moveTo('inbox')"
                                    v-if="mailFilter != 'inbox'">
                                    <feather-icon icon="MailIcon"
                                                  svg-classes="h-5 w-5" />
                                    <span class="ml-3">Offene Fragen</span>
                                </li>
                                <li class="px-4 mb-2 flex items-start cursor-pointer hover:text-primary"
                                    @click="moveTo('draft')"
                                    v-if="mailFilter != 'draft'">
                                    <feather-icon icon="Edit2Icon"
                                                  svg-classes="h-5 w-5"></feather-icon>
                                    <span class="ml-3">Entwurf</span>
                                </li>
                                <li class="px-4 flex items-start cursor-pointer hover:text-primary"
                                    @click="moveTo('trash')"
                                    v-if="mailFilter != 'trash'">
                                    <feather-icon icon="TrashIcon"
                                                  svg-classes="h-5 w-5"></feather-icon>
                                    <span class="ml-3">Nicht relevant</span>
                                </li>
                            </ul>
                        </vs-dropdown-menu>
                    </vs-dropdown>

                    <feather-icon v-if="mailFilter != 'trash'"
                                  icon="TrashIcon"
                                  class="cursor-pointer ml-5"
                                  svg-classes="h-6 w-6"
                                  @click="moveTo('trash')" />
                </div>
            </div>

            <!-- EMAILS LIST -->
            <VuePerfectScrollbar class="email-content-scroll-area"
                                 :settings="settings"
                                 ref="mailListPS">
                <transition-group name="list-enter-up"
                                  class="email__mails"
                                  tag="ul"
                                  appear>
                    <li class="cursor-pointer email__mail-item"
                        v-for="(mail, index) in mails"
                        :key="String(mailFilter) + String(mail.id)"
                        @click.stop="updateOpenMail(mail.id)"
                        :style="{transitionDelay: (index * 0.1) + 's'}">
                        <mail-item :mail="mail"
                                   :isSelected="isMailSelected(mail.id)"
                                   @addToSelected="addToSelectedMails"
                                   @removeSelected="removeSelectedMail" />
                    </li>
                </transition-group>
            </VuePerfectScrollbar>
        </div>

        <!-- EMAIL VIEW SIDEBAR -->
        <email-view
            :mailTags       = "mailTags"
            :openMailId      = "openMailId"
            :isSidebarActive = "isSidebarActive"
            :mailFilter      = "mailFilter"
            @removeMail      = "removeOpenMail"
            @previousMail    = "previousMail"
            @nextMail        = "nextMail"
            @moveTo          = "moveCurrentTo"
            @closeSidebar    = "closeMailViewSidebar">
        </email-view>
    </div>
</template>

<script>
import EmailSidebar        from './EmailSidebar.vue'
import MailItem            from './MailItem.vue'
import EmailView           from './EmailView.vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
// Todo-usta
import moduleEmail         from '@/store/email/moduleEmail.js'

export default {
  data() {
    return {
      openMailId           : null,
      selectedMails        : [],
      isSidebarActive      : false,
      showThread           : false,
      clickNotClose        : true,
      isEmailSidebarActive : true,
      settings             : {
        maxScrollbarLength : 60,
        wheelSpeed         : 0.30,
      },
    }
  },
  watch: {
    isSidebarActive(value) {
      if (!value) this.showThread = false
    },
    mailFilter() {
      this.selectedMails = []
      this.$refs.mailListPS.$el.scrollTop = 0
      this.$store.commit("email/UPDATE_MAIL_FILTER", this.$route.params.filter)
      this.toggleEmailSidebar()
    },
    windowWidth() {
      this.setSidebarWidth()
    }
  },
  computed: {
    mailFilter() {
      return this.$route.params.filter
    },
    mailTags() {
      return this.$store.state.email.mailTags
    },
    searchQuery: {
      get() {
        return this.$store.state.email.mailSearchQuery
      },
      set(val) {
        this.$store.dispatch('email/setEmailSearchQuery', val)
      }
    },
    selectAllCheckBox: {
      get() {
        return this.selectedMails.length
      },
      set(value) {
        value ? this.selectedMails = this.mails.map(mail => mail.id) : this.selectedMails = []
      }
    },
    mails() {
      return this.$store.getters['email/filteredMails']
    },
    selectAllIcon() {
      return this.selectedMails.length == this.mails.length ? 'icon-check' : 'icon-minus'
    },
    isMailSelected() {
      return (mailId) => this.selectedMails.indexOf(mailId) == -1 ? false : true
    },
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  methods: {
    updateOpenMail(mailId) {
      this.openMailId = mailId
      this.isSidebarActive = true
    },
    addToSelectedMails(mailId) {
      if (this.selectedMails.indexOf(mailId) === -1) this.selectedMails.push(mailId)
    },
    removeSelectedMail(mailId) {
      const mailIndex = this.selectedMails.indexOf(mailId)
      if (mailIndex !== -1) this.selectedMails.splice(mailIndex, 1)
    },
    moveTo(to) {
      const payload = { emailIds: this.selectedMails, to: to }
      this.$store.dispatch('email/moveMailsTo', payload)
        .catch((error) => { console.error(error) })
      this.selectedMails = []
    },
    moveCurrentTo(to) {
      this.selectedMails = [this.openMailId]
      this.moveTo(to)
    },
    removeOpenMail() {
      this.selectedMails = [this.openMailId]
      this.moveTo('trashed')
      this.isSidebarActive = false
    },
    toggleIsStarred() {
      const payload = { mailId: this.currentMail.id, value: !this.currentMail.isStarred }
      this.$store.dispatch('email/toggleIsStarred', payload)
    },
    nextMail() {
      const currentMailIndex = this.mails.findIndex((mail) => mail.id == this.openMailId)
      if (this.mails[currentMailIndex + 1]) this.openMailId = this.mails[currentMailIndex + 1].id
    },
    previousMail() {
      const currentMailIndex = this.mails.findIndex((mail) => mail.id == this.openMailId)
      if (this.mails[currentMailIndex - 1]) this.openMailId = this.mails[currentMailIndex - 1].id
    },
    closeMailViewSidebar() {
      this.isSidebarActive = false
    },
    setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isEmailSidebarActive = this.clickNotClose = false
      } else {
        this.isEmailSidebarActive = this.clickNotClose = true
      }
    },
    toggleEmailSidebar(value = false) {
      if (!value) {
        this.closeMailViewSidebar()
        if (this.clickNotClose) {
          return
        }
      }
      this.isEmailSidebarActive = value
    },
  },
  components: {
    MailItem,
    EmailSidebar,
    EmailView,
    VuePerfectScrollbar
  },
  created() {
    this.$store.registerModule('email', moduleEmail)
    this.setSidebarWidth()

    // Folders
    this.$store.commit("email/UPDATE_MAIL_FILTER", this.$route.params.filter)        // Update Mail Filter
  },
  beforeDestroy: function() {
    this.$store.unregisterModule('email')
  },
  mounted() {
    this.$store.dispatch("email/setEmailSearchQuery", "")
  }
}

</script>


<style lang="scss">
@import "@/assets/scss/vuexy/apps/email.scss";
</style>