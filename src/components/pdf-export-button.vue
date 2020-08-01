<template>
  <div>
    <vs-button color="primary" type="filled" v-on:click="createPDF()">
      Download PDF
    </vs-button>

    <pdfExportTemplate/>
  </div>
</template>

<script>
  import html2pdf from 'html2pdf.js'
  import pdfExportTemplate from './pdf-export-template'

  export default {
    name: "pdf-export-button",

    components: {
      pdfExportTemplate
    },

    methods: {
      createPDF() {

        let opt = {
          margin: 30,
          filename: 'ELSI-SAT Ergebnis.pdf',
          image: {type: 'jpeg', quality: 1},
          // Scales larger than 2 tend to result in empty pages.
          // https://github.com/eKoopmans/html2pdf.js/issues/19#issuecomment-315583260
          html2canvas: {scale: 1.8},
          jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'},
          pagebreak: {mode: 'avoid-all'}
        };

        const element = document.getElementById('pdf-export-content');
        
        html2pdf().from(element).set(opt).toPdf().get('pdf').then(function (pdf) {
          let totalPages = pdf.internal.getNumberOfPages();

          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(10);
            pdf.setTextColor(150);
            pdf.text(
              'Seite ' + i + ' von ' + totalPages,
              pdf.internal.pageSize.getWidth() - 116,
              pdf.internal.pageSize.getHeight() - 15
            );
          }
        }).save();

      },
    }
  }
</script>

<style scoped>

</style>
