<template>
  <div id="faq-page">

    <div class="vx-row">
      <div class="vx-col w-full rounded-lg">

        <vx-card>
          <vs-input
            placeholder="Suche"
            v-model="faqSearchQuery"
            icon-pack="feather"
            icon="icon-search"
            size="large"
            class="w-full mt-3"
            icon-no-border/>

          <ul class="faq-topics mt-2">
            <li
              v-for="category in categories"
              :key="category.id"
              class="p-2 font-medium flex items-center"
              @click="faqFilter = category.id">

              <div
                class="h-3 w-3 rounded-full mr-2"
                :class="'bg-' + category.color">
              </div>

              <span class="cursor-pointer">{{ category.name }}</span>
            </li>
          </ul>
        </vx-card>

      </div>
    </div>

    <div class="vx-row">
      <!-- FAQ COL -->
      <div class="vx-col w-full mt-10">
        <vs-collapse accordion type="margin" class="p-0">
          <vs-collapse-item
            v-for="(que,index) in filteredFaq"
            class="faq-bg rounded-lg"
            :class="{'mt-0': !index}"
            :ref="que.id"
            :key="que.id">

            <div slot="header">
              <h5>
                <span v-html="que.term"></span>

                <span
                  v-for="category in categories"
                  :key="category.id"
                  v-if="que.categoryId.includes(category.id)"
                  class="h-3 w-3 rounded-full ml-2 mr-0"
                  :class="'bg-' + category.color"
                  style="display: inline-block">
                </span>
              </h5>

            </div>
            <p v-html="que.definition"></p>
          </vs-collapse-item>
        </vs-collapse>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        faqSearchQuery: '',
        faqFilter: 1,

      }
    },
    computed: {
      categories() {
        return this.$store.getters['kb/getAllCategories']
      },

      terms() {
        console.log(this.$store.getters['kb/getAllTerms'])
        return this.$store.getters['kb/getAllTerms']
      },

      filteredFaq() {
        let terms = this.terms

        return terms.filter((faq) => {
          if (this.faqFilter == 1) return (faq.term.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.definition.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
          else if (this.faqFilter == 2) return faq.categoryId.includes(2) && (faq.term.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.definition.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
          else if (this.faqFilter == 3) return faq.categoryId.includes(3) && (faq.term.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.definition.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
          else if (this.faqFilter == 4) return faq.categoryId.includes(4) && (faq.term.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.definition.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
          else if (this.faqFilter == 5) return faq.categoryId.includes(5) && (faq.term.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.definition.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
        });
      }
    },
    methods: {
      goto(refName) {
        const element = this.$refs[refName][0];
        const top = element.$el.offsetTop;

        window.scrollTo(0, top);
      }
    },
    components: {}
  }
</script>

<style lang="scss">
  #faq-page {
    .faq-jumbotron-content {
    }

    .faq-bg {
      background-color: #fff;
    }
  }
</style>
