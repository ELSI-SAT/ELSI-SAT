<template>
  <div>
    <vs-button color="primary" type="filled" v-on:click="createPDF()">
      Download PDF
    </vs-button>
  </div>
</template>

<script>
  import jsPDF from 'jspdf'

  export default {
    name: "pdf-export-button",

    methods: {
      createPDF () {
        let pdfName = 'ELSI-SAT Ergebnis';
        const doc = new jsPDF();
        doc.text("Hello World", 10, 10);
        doc.save(pdfName + '.pdf');
      },
    }
  }
</script>

<style scoped>

</style>
