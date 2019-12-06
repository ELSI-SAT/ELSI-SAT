<!-- =========================================================================================
    File Name: EmailSidebar.vue
    Description: Email Application Sidebar(Filter) (Offene Fragen)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="email__email-sidebar h-full">
        <div class="m-6 clearfix">
        </div>

        <VuePerfectScrollbar class="email-scroll-area" :settings="settings">
            <div class="px-6 pb-2 flex flex-col">

                <!-- inbox -->
                <router-link tag="span" :to="`${baseUrl}/inbox`" class="flex justify-between items-center cursor-pointer" :class="{'text-primary': mailFilter == 'inbox'}">
                    <div class="flex items-center mb-2">
                        <feather-icon icon="MailIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'inbox'}, 'h-6 w-6']"></feather-icon>
                        <span class="text-lg ml-3">Offene Fragen</span>
                    </div>
                    <template v-if="emailMeta.unreadMails">
                      <vs-chip class="number" color="primary" v-if="emailMeta.unreadMails.folder.inbox.length > 0">{{ emailMeta.unreadMails.folder.inbox.length }}</vs-chip>
                    </template>
                </router-link>

                <!-- answered -->
                <router-link tag="span" :to="`${baseUrl}/answered`" class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'answered'}">
                    <feather-icon icon="SendIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'answered'}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">Beantwortet</span>
                </router-link>

                <!-- draft -->
                <router-link tag="span" :to="`${baseUrl}/draft`" class="flex justify-between items-center mt-4 cursor-pointer" :class="{'text-primary': mailFilter == 'draft'}">
                    <div class="flex items-center mb-2">
                        <feather-icon icon="Edit2Icon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'draft'}, 'h-6 w-6']"></feather-icon>
                        <span class="text-lg ml-3">Entwurf</span>
                    </div>
                    <template v-if="emailMeta.draftMails">
                      <vs-chip class="number" color="warning" v-if="emailMeta.draftMails.length > 0">{{ emailMeta.draftMails.length }}</vs-chip>
                    </template>
                </router-link>

                <!-- starred -->
                <router-link tag="span" :to="`${baseUrl}/starred`" class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'starred'}">
                    <feather-icon icon="StarIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'starred'}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">Markiert</span>
                </router-link>

                <!-- trash -->
                <router-link tag="span" :to="`${baseUrl}/trash`" class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': mailFilter == 'trash'}">
                    <feather-icon icon="TrashIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'trash'}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">Nicht relevant</span>
                </router-link>
            </div>
            <vs-divider></vs-divider>
            <div class="email__labels px-6 py-4">
                <h5 class="mb-8">Kategorien</h5>
                <div class="email__lables-list">
                    <router-link tag="span" class="email__label flex items-center mb-4 cursor-pointer" v-for="(tag, index) in mailTags" :key="index" :to="`${baseUrl}/${tag.value}`">
                        <div class="ml-1 h-3 w-3 rounded-full mr-4" :class="'border-2 border-solid border-' + tag.color"></div>
                        <span class="text-lg" :class="{'text-primary': mailFilter == tag.value}">{{ tag.text }}</span>
                    </router-link>
                </div>
            </div>
        </VuePerfectScrollbar>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    mailTags: {
      type: Array,
      required: true,
    },
    mailFilter: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      activePrompt: false,
      mailTo: '',
      mailSubject: '',
      mailMessage: '',
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'link', 'blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'font': [] }],
          ],
        },
        placeholder: 'Message'
      },
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.30,
      },
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.mailTo != ''
    },
    baseUrl() {
      const path = this.$route.path
      return path.slice(0, path.lastIndexOf("/"))
    },
    emailMeta() {
      return this.$store.state.email.meta
    }
  },
  methods: {
    clearFields() {
      this.$nextTick(() => {
        this.mailTo = ''
        this.mailSubject = ''
        this.mailCC = ''
        this.mailBCC = ''
        this.mailMessage = ''
      })
    },
    sendMail() {
      this.clearFields()
    },
  },
  components: {
    quillEditor,
    VuePerfectScrollbar
  }
}

</script>

