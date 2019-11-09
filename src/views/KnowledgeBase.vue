<template>
  <div id="faq-page">

    <div class="vx-row">
      <div class="vx-col w-full rounded-lg">
        <vx-card>
          <vs-input placeholder="Suche"
                    v-model="faqSearchQuery"
                    icon-pack="feather"
                    icon="icon-search"
                    size="large"
                    class="w-full mt-3"
                    icon-no-border/>

          <ul class="faq-topics mt-2">
            <li v-for="category in categories"
                :key="category.id"
                class="p-2 font-medium flex items-center"
                @click="faqFilter = category.id">

              <div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + category.color"></div>
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
          <vs-collapse-item v-for="(que,index) in filteredFaq"
                            class="faq-bg rounded-lg"
                            :class="{'mt-0': !index}"
                            :key="que.id">

            <div slot="header">
              <h5>
                <span v-for="category in categories"
                      :key="category.id"
                      v-if="que.categoryId == category.id"
                      class="h-3 w-3 rounded-full ml-2 mr-3"
                      :class="'bg-' + category.color"
                      style="display: inline-block"></span>

                {{ que.question }}
              </h5>

            </div>
            <p>{{ que.ans }}</p>
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
        categories: [
          {
            id: 1,
            name: 'Alle',
            color: 'grey',
          },
          {
            id: 2,
            name: 'ELSI-SAT',
            color: 'primary'
          },
          {
            id: 3,
            name: 'Künstliche Intelligenz',
            color: 'success'
          },
          {
            id: 4,
            name: 'Datenschutz',
            color: 'warning'
          },
          {
            id: 5,
            name: 'Gesetzliche Grundlagen',
            color: 'danger'
          },
        ],
        faqs: [
          {
            id: 1,
            categoryId: 2,
            question: 'Lorem ipsum dolor sit amet?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            id: 2,
            categoryId: 2,
            question: 'Consetetur sadipscing elitr?',
            ans: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            id: 3,
            categoryId: 2,
            question: 'Sed diam nonumy eirmod tempor invidunt?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'          },
          {
            id: 4,
            categoryId: 2,
            question: 'Labore et dolore magna aliquyam?',
            ans: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            id: 5,
            categoryId: 3,
            question: 'Vero eos et accusam et justo?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'          },
          {
            id: 6,
            categoryId: 3,
            question: 'Stet clita kasd gubergren, no sea takimata sanctus est?',
            ans: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            id: 7,
            categoryId: 3,
            question: 'At vero eos et accusam et justo duo dolores et ea rebum?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'          },
          {
            id: 8,
            categoryId: 3,
            question: 'At vero eos et accusam et justo duo dolores?',
            ans: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            id: 9,
            categoryId: 4,
            question: 'Lorem ipsum dolor sit amet, consetetur sadipscing?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'          },
          {
            id: 10,
            categoryId: 4,
            question: 'Ut wisi enim ad minim veniam, quis nostrud?',
            ans: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            id: 11,
            categoryId: 5,
            question: 'Duis autem vel eum iriure dolor in hendrerit?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'          },
          {
            id: 12,
            categoryId: 5,
            question: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore?',
            ans: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            id: 13,
            categoryId: 5,
            question: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia?',
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'          },
        ],
      }
    },
    computed: {
      filteredFaq() {
        return this.faqs.filter((faq) => {
          if (this.faqFilter == 1) return (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
          else if (this.faqFilter == 2) return faq.categoryId == 2 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
          else if (this.faqFilter == 3) return faq.categoryId == 3 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
          else if (this.faqFilter == 4) return faq.categoryId == 4 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
          else if (this.faqFilter == 5) return faq.categoryId == 5 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()));
        });
      }
    },
    methods: {},
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
