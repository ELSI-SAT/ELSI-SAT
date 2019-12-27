<template>
  <div id="pdf-export-root">
    <div id="pdf-export-content">

      <div
        v-for="question in allQuestions"
        :key="question.id"
        :class="isFollowupChild(question.id) ? 'followupChild' : ''">
        <h4
          v-html="question.subject + ' ' + question.inquiry"
          class="heading">
        </h4>

        <div class="meta">
          <p v-html="question.message"></p>

          <ul v-if="question.labels.length > 0">
            <li v-for="label in question.labels" :key="label">
              <span class="label">{{label}}</span>
            </li>
          </ul>
        </div>

        <p class="answer" v-html="parseAnswer(question)"></p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "pdf-export-template",

    computed: {
      allQuestions() {
        return this.$store.state.email.mails
      }
    },

    methods: {
      isFollowupChild(id) {
        return this.$store.getters['email/isFollowupChild'](id)
      },
      parseAnswer(question) {
        let answer
        let html

        // Get answer.
        switch (question.answer.type) {
          case 'checkbox':
            answer = this.$store.getters['email/getAnswerCheckbox'](question.id)
            html = '<ul><li>' + answer.join('</li><li>') + '</li></ul>'
            break;
          case 'followup':
            answer = this.$store.getters['email/getAnswerFollowup'](question.id)
            html = '<ul><li>' + answer.join('</li><li>') + '</li></ul>'
            break;
          case 'filter':
            answer = this.$store.getters['email/getAnswerFilter'](question.id)
            html = '<ul><li>' + answer.map(e => e.title).join('</li><li>') + '</li></ul>'
            break;
          case 'tinytext':
          case 'text':
          case 'bigtext':
          default:
            answer = question.answer.answer
            html = answer
            break;
        }

        return html;
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/main.scss';
  @import '../assets/css/main.css';

  #pdf-export-root {
    //display: none;//visibility: hidden;
  }

  #pdf-export-content * {
    font-family: 'Helvetica Neue', 'Lucida Sans', Helvetica, Arial, 'sans-serif';
    box-sizing: border-box;
  }

  .heading {
    margin-top: 3rem;
    font-weight: 500;
  }

  .followupChild {
    padding: .5rem 2rem;
    margin: 1rem 0;
    border-left: 2px solid lightgray;

    .heading {
      margin-top: .5rem;
      font-weight: normal;
      font-size: 1.2rem;
    }
  }

  .meta {
    color: #555;
    background-color: #f2f2f2;
    padding: 1rem 1.5rem;
    margin: 1rem 0;

    ul {
      list-style: disc;
      margin: 10px 0 0 10px;

      li {
        padding-left: 10px;
      }
    }

    .answer {
      color: black;
    }
  }
</style>
