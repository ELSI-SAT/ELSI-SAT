<template>
  <div>
    <vs-button color="primary" type="filled" v-on:click="createPDF()">
      Download PDF
    </vs-button>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import html2pdf from 'html2pdf.js';

  export default {
    name: "pdf-export-button",

    computed: mapGetters(['email']),

    methods: {
      createPDF() {
        const store = this.$store.state.email.mails

        let text = ''

        store.forEach((mail) => {
          text = text + '<div  style="font-family: Helvetica, Arial, sans-serif">'
            + '<h4>' + mail.subject + ' ' + mail.inquiry + '</h4>'
            + '<p>' + mail.message + '</p>'
            + '<p>' + mail.answer.answer + '</p><br>'
            + '</div>'
        })

        let opt = {
          margin:       30,
          filename:     'ELSI-SAT Ergebnis.pdf',
          image:        { type: 'jpeg', quality: 1 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak:    { mode: 'avoid-all' }
        };

        // New Promise-based usage:
        html2pdf().set(opt).from(text).save();

      },
    }
  }
</script>

<style scoped>

</style>
