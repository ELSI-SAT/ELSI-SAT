<!-- =========================================================================================
    File Name: Email.vue
    Description: Email Application (Unbeantwortet)
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
            <div class="flex border border-solid d-theme-border-grey-light border-r-0 border-t-0 border-l-0 items-center">
                <vs-input
                  icon-no-border icon="icon-search"
                  size="large"
                  icon-pack="feather"
                  placeholder="Suche"
                  v-model="searchQuery"
                  class="vs-input-no-border vs-input-no-shdow-focus w-full" />
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
                        <mail-item :mail="mail" />
                    </li>
                </transition-group>
            </VuePerfectScrollbar>
        </div>

        <!-- EMAIL VIEW SIDEBAR -->
        <email-view
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
    mails() {
      return this.$store.getters['email/filteredMails']
    },
    allMails() {
      return this.$store.state.email.mails
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },
  },
  methods: {
    updateOpenMail(mailId) {
      this.openMailId = mailId
      this.isSidebarActive = true
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
    this.setSidebarWidth()
    // Fetch Unread Mails
    this.$store.dispatch("email/fetchMeta")
    // Update Mail Filter
    this.$store.commit("email/UPDATE_MAIL_FILTER", this.$route.params.filter)
  },
  mounted() {
    this.$store.dispatch("email/setEmailSearchQuery", "")
  }
}

</script>


<style lang="scss">
@import "@/assets/scss/vuexy/apps/email.scss";
</style>
