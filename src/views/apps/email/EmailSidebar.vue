<!-- =========================================================================================
    File Name: EmailSidebar.vue
    Description: Email Application Sidebar(Filter) (Unbeantwortet)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="email__email-sidebar h-full">
        <div class="m-6 clearfix"></div>

        <VuePerfectScrollbar
          class="email-scroll-area"
          :settings="settings">
            <div class="px-6 pb-2 flex flex-col">

              <!-- inbox -->
              <router-link
                tag="span"
                :to="`${baseUrl}/inbox`"
                @click.native="$emit('closeSidebar')"
                class="flex justify-between items-center cursor-pointer"
                :class="{'text-primary': mailFilter == 'inbox'}">

                <div class="flex items-center mb-2">
                    <feather-icon icon="CircleIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'inbox'}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">Unbeantwortet</span>
                </div>

                <template>
                  <vs-chip style="color: grey;" class="number pr-2 pl-2" color="white"><span style="font-weight: 100!important;">{{ mailMeta.inbox }}</span></vs-chip>
                </template>

              </router-link>

              <!-- answered -->
              <router-link
                tag="span"
                :to="`${baseUrl}/answered`"
                @click.native="$emit('closeSidebar')"
                class="flex justify-between items-center cursor-pointer mt-4"
                :class="{'text-primary': mailFilter == 'answered'}">

                <div class="flex items-center mb-2">
                  <feather-icon icon="CheckCircleIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'answered'}, 'h-6 w-6']"></feather-icon>
                  <span class="text-lg ml-3">Beantwortet</span>
                </div>

                <template>
                  <vs-chip style="color: grey;" class="number pr-2 pl-2" color="white"><span style="font-weight: 100!important;">{{ mailMeta.answered }}</span></vs-chip>
                </template>

              </router-link>

              <!-- starred -->
              <router-link
                tag="span"
                :to="`${baseUrl}/starred`"
                class="flex justify-between items-center cursor-pointer mt-4"
                @click.native="$emit('closeSidebar')"
                :class="{'text-primary': mailFilter == 'starred'}">

                <div class="flex items-center mb-2">
                  <feather-icon icon="StarIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'starred'}, 'h-6 w-6']"></feather-icon>
                  <span class="text-lg ml-3">Markiert</span>
                </div>

                <template>
                  <vs-chip style="color: grey;" class="number pr-2 pl-2" color="white"><span style="font-weight: 100!important;">{{ mailMeta.starred }}</span></vs-chip>
                </template>

              </router-link>

              <!-- trash
              <router-link
                tag="span"
                :to="`${baseUrl}/trash`"
                @click.native="$emit('closeSidebar')"
                class="flex justify-between items-center cursor-pointer mt-4"
                :class="{'text-primary': mailFilter == 'trash'}">

                  <div class="flex items-center mb-2">
                    <feather-icon icon="TrashIcon" :svgClasses="[{'text-primary stroke-current': mailFilter == 'trash'}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">Nicht relevant</span>
                  </div>

                  <template>
                    <vs-chip style="color: grey;" class="number pr-2 pl-2" color="white"><span style="font-weight: 100!important;">{{ mailMeta.trashed }}</span></vs-chip>
                  </template>
              </router-link>
              -->

            </div>

            <vs-divider></vs-divider>

            <div class="email__labels px-6 py-4">
              <h5 class="mb-8">Kategorien</h5>
              <div class="email__lables-list">
                <router-link
                  tag="span"
                  class="email__label flex items-center mb-4 cursor-pointer"
                  v-for="(tag, index) in mailTags"
                  :key="index"
                  :to="`${baseUrl}/${tag.value}`"
                  @click.native="$emit('closeSidebar')">

                  <div
                    class="ml-1 h-3 w-3 rounded-full mr-4"
                    :class="'border-2 border-solid'"
                    :style="'border-color: ' + tag.color">
                  </div>

                  <span
                    class="text-lg"
                    :class="{'text-primary': mailFilter == tag.value}">
                    {{ tag.value }}
                  </span>
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
import {mapGetters} from "vuex";


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
    ...mapGetters([
      'email',
    ]),

    validateForm() {
      return !this.errors.any() && this.mailTo != ''
    },
    baseUrl() {
      const path = this.$route.path
      return path.slice(0, path.lastIndexOf("/"))
    },
    mailMeta() {
      return this.$store.getters['email/getMeta']
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

