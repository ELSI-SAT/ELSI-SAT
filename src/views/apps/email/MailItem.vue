<!-- =========================================================================================
    File Name: MailItem.vue
    Description: Mail Item - Displays mail item
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div class="mail__mail-item sm:px-4 px-2 py-6">

        <!-- MAIL ROW 1 : META -->
        <div class="flex w-full">
          <div class="mt-1 ml-1 mr-1">
            <vs-checkbox
              v-model="isSelectedMail"
              @click.stop class="vs-checkbox-small ml-0 mr-1">
            </vs-checkbox>
          </div>

            <div class="flex w-full justify-between items-start">
                <div class="mail__details">
                  <h5 class="mb-1 flex font-semibold">
                    {{ mail.inquiry }}
                    <feather-icon
                      icon="StarIcon"
                      class="cursor-pointer ml-3"
                      :svgClasses="[{'text-warning fill-current stroke-current': mail.isStarred}, 'w-5', 'h-5']">
                    </feather-icon>

                  </h5>
                    <span v-if="mail.subject">{{ mail.subject }}</span>
                    <span v-else>(no subject)</span>
                </div>

                <div class="mail-item__meta flex items-center">
                    <div class="email__labels hidden sm:flex items-center">
                        <div
                          class="h-2 w-2 rounded-full mr-2"
                          :style="'background-color: ' + labelColor(label)"
                          v-for="(label, index) in mail.labels"
                          :key="index">
                        </div>
                    </div>
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
    isSelected: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      isSelectedMail: this.isSelected,
    }
  },
  watch: {
    isSelected(value) {
      this.isSelectedMail = value
    },
    isSelectedMail(val) {
      val ? this.$emit('addToSelected', this.mail.id) : this.$emit('removeSelected', this.mail.id)
    }
  },
  computed: {
    labelColor() {
      return (label) => {
        const tags = this.$store.state.email.mailTags
        return tags.find((tag) => {
          return tag.value == label
        }).color
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

