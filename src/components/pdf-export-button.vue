<template>
  <div>
    <vs-button color="primary" type="filled" v-on:click="createPDF()">
      Download PDF
    </vs-button>
  </div>
</template>

<script>
  import html2pdf from 'html2pdf.js';

  export default {
    name: "pdf-export-button",

    methods: {
      createPDF () {
        let element = "<p>We will <b>bring evidence</b> in favor of the following thesis: any associated supporting element raises serious doubts about the strong generative capacity of the theory. To provide a constituent structure for T(Z,K), the fundamental error of regarding functional notions as categorial is not quite equivalent to the extended c-command discussed in connection with (34). We will bring evidence in favor of the following thesis: any associated supporting element is not to be considered in determining a corpus of utterance tokens upon which conformity has been defined by the paired utterance test.</p>" +
          "<p>It may be, then, <i>that the natural general principle</i> that will subsume this case is not to be considered in determining nondistinctness in the sense of distinctive feature theory. Notice, incidentally, that most of the methodological work in modern linguistics delimits the extended c-command discussed in connection with (34). From C1, it follows that a descriptively adequate grammar is necessary to impose an interpretation on the system of base rules exclusive of the lexicon. Clearly, the natural general principle that will subsume this case can be defined in such a way as to impose the levels of acceptability from fairly high (e.g. (99a)) to virtual gibberish (e.g. (98d)). I suggested that these results would follow from the assumption that most of the methodological work in modern linguistics is unspecified with respect to problems of phonemic and morphological analysis. To characterize a linguistic level L, most of the methodological work in modern linguistics is not quite equivalent to a descriptive fact. I suggested that these results would follow from the assumption that a subset of English sentences interesting on quite independent grounds is, apparently, determined by the extended c-command discussed in connection with (34).</p>" +
          "<p>Notice, incidentally, that this selectionally introduced contextual feature is rather different from the ultimate standard that determines the accuracy of any proposed grammar. Nevertheless, this analysis of a formative as a pair of sets of features is to be regarded as irrelevant intervening contexts in selectional rules. Presumably, this selectionally introduced contextual feature can be defined in such a way as to impose the strong generative capacity of the theory. Note that the notion of level of grammaticalness does not affect the structure of a parasitic gap construction. Let us continue to suppose that the fundamental error of regarding functional notions as categorial may remedy and, at the same time, eliminate a stipulation to place the constructions into these various categories.</p>"

        let opt = {
          margin:       30,
          filename:     'ELSI-SAT Ergebnis.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();
      },
    }
  }
</script>

<style scoped>

</style>
