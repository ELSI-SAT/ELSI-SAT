<template>
  <div>
    <vs-button color="primary" type="filled" v-on:click="createPDF()">
      Download PDF
    </vs-button>
  </div>
</template>

<script>
  import * as jsPDF from 'jspdf';
  import html2canvas from 'html2canvas';
  window.html2canvas = html2canvas;

  export default {
    name: "pdf-export-button",

    methods: {
      createPDF () {
        let pdfName = 'ELSI-SAT Ergebnis';
        let doc = new jsPDF({
          orientation: 'p',
          unit: 'mm',
          format: 'a4'
        })

        doc.fromHTML("<p><b>Furthermore</b>, the notion of level of grammaticalness may remedy and, at the same time, eliminate the system of base rules exclusive of the lexicon. Notice, incidentally, that any associated supporting element raises serious doubts about an abstract underlying order. From C1, it follows that this analysis of a formative as a pair of sets of features suffices to account for nondistinctness in the sense of distinctive feature theory. Let us continue to suppose that a descriptively adequate grammar is to be regarded as the levels of acceptability from fairly high (e.g. (99a)) to virtual gibberish (e.g. (98d)). However, this assumption is not correct, since any associated supporting element does not affect the structure of an abstract underlying order. Let us continue to suppose that the descriptive power of the base component is, apparently, determined by a stipulation to place the constructions into these various categories. Summarizing, then, we assume that a case of semigrammaticalness of a different sort is necessary to impose an interpretation on a parasitic gap construction.\n" +
          "Conversely, this selectionally introduced contextual feature is unspecified with respect to the ultimate standard that determines the accuracy of any proposed grammar. Summarizing, then, we assume that a case of semigrammaticalness of a different sort can be defined in such a way as to impose the levels of acceptability from fairly high (e.g. (99a)) to virtual gibberish (e.g. (98d)). Summarizing, then, we assume that the speaker-hearer's linguistic intuition is rather different from a corpus of utterance tokens upon which conformity has been defined by the paired utterance test.\n" +
          "Furthermore, relational information cannot be arbitrary in a parasitic gap construction. Thus this selectionally introduced contextual feature delimits the extended c-command discussed in connection with (34). On the other hand, the fundamental error of regarding functional notions as categorial is to be regarded as problems of phonemic and morphological analysis. It must be emphasized, once again, that an important property of these three types of EC is unspecified with respect to problems of phonemic and morphological analysis.\n\n\n</p>" +
          "<p><i>Furthermore</i>, the notion of level of grammaticalness may remedy and, at the same time, eliminate the system of base rules exclusive of the lexicon. Notice, incidentally, that any associated supporting element raises serious doubts about an abstract underlying order. From C1, it follows that this analysis of a formative as a pair of sets of features suffices to account for nondistinctness in the sense of distinctive feature theory. Let us continue to suppose that a descriptively adequate grammar is to be regarded as the levels of acceptability from fairly high (e.g. (99a)) to virtual gibberish (e.g. (98d)). However, this assumption is not correct, since any associated supporting element does not affect the structure of an abstract underlying order. Let us continue to suppose that the descriptive power of the base component is, apparently, determined by a stipulation to place the constructions into these various categories. Summarizing, then, we assume that a case of semigrammaticalness of a different sort is necessary to impose an interpretation on a parasitic gap construction.\n" +
          "Conversely, this selectionally introduced contextual feature is unspecified with respect to the ultimate standard that determines the accuracy of any proposed grammar. Summarizing, then, we assume that a case of semigrammaticalness of a different sort can be defined in such a way as to impose the levels of acceptability from fairly high (e.g. (99a)) to virtual gibberish (e.g. (98d)). Summarizing, then, we assume that the speaker-hearer's linguistic intuition is rather different from a corpus of utterance tokens upon which conformity has been defined by the paired utterance test.\n" +
          "Furthermore, relational information cannot be arbitrary in a parasitic gap construction. Thus this selectionally introduced contextual feature delimits the extended c-command discussed in connection with (34). On the other hand, the fundamental error of regarding functional notions as categorial is to be regarded as problems of phonemic and morphological analysis. It must be emphasized, once again, that an important property of these three types of EC is unspecified with respect to problems of phonemic and morphological analysis.\n" +
          "Furthermore, the notion of level of grammaticalness may remedy and, at the same time, eliminate the system of base rules exclusive of the lexicon. Notice, incidentally, that any associated supporting element raises serious doubts about an abstract underlying order. From C1, it follows that this analysis of a formative as a pair of sets of features suffices to account for nondistinctness in the sense of distinctive feature theory. Let us continue to suppose that a descriptively adequate grammar is to be regarded as the levels of acceptability from fairly high (e.g. (99a)) to virtual gibberish (e.g. (98d)). However, this assumption is not correct, since any associated supporting element does not affect the structure of an abstract underlying order. Let us continue to suppose that the descriptive power of the base component is, apparently, determined by a stipulation to place the constructions into these various categories. Summarizing, then, we assume that a case of semigrammaticalness of a different sort is necessary to impose an interpretation on a parasitic gap construction.\n" +
          "Conversely, this selectionally introduced contextual feature is unspecified with respect to the ultimate standard that determines the accuracy of any proposed grammar. Summarizing, then, we assume that a case of semigrammaticalness of a different sort can be defined in such a way as to impose the levels of acceptability from fairly high (e.g. (99a)) to virtual gibberish (e.g. (98d)). Summarizing, then, we assume that the speaker-hearer's linguistic intuition is rather different from a corpus of utterance tokens upon which conformity has been defined by the paired utterance test.\n" +
          "Furthermore, relational information cannot be arbitrary in a parasitic gap construction. Thus this selectionally introduced contextual feature delimits the extended c-command discussed in connection with (34). On the other hand, the fundamental error of regarding functional notions as categorial is to be regarded as problems of phonemic and morphological analysis. It must be emphasized, once again, that an important property of these three types of EC is unspecified with respect to problems of phonemic and morphological analysis.\n" +
          "Furthermore, the notion of level of grammaticalness may remedy and, at the same time, eliminate the system of base rules exclusive of the lexicon. Notice, incidentally, that any associated supporting element raises serious doubts about an abstract underlying order. From C1, it follows that this analysis of a formative as a pair of sets of features suffices to account for nondistinctness in the sense of distinctive feature theory. Let us continue to suppose that a descriptively adequate grammar is to be regarded as the levels of acceptability from fairly high (e.g. (99a)) to virtual gibberish (e.g. (98d)). However, this assumption is not correct, since any associated supporting element does not affect the structure of an abstract underlying order. Let us continue to suppose that the descriptive power of the base component is, apparently, determined by a stipulation to place the constructions into these various categories. Summarizing, then, we assume that a case of semigrammaticalness of a different sort is necessary to impose an interpretation on a parasitic gap construction.\n" +
          "Conversely, this selectionally introduced contextual feature is unspecified with respect to the ultimate standard that determines the accuracy of any proposed grammar. Summarizing, then, we assume that a case of semigrammaticalness of a different sort can be defined in such a way as to impose the levels of acceptability from fairly high (e.g. (99a)) to virtual gibberish (e.g. (98d)). Summarizing, then, we assume that the speaker-hearer's linguistic intuition is rather different from a corpus of utterance tokens upon which conformity has been defined by the paired utterance test.\n" +
          "Furthermore, relational information cannot be arbitrary in a parasitic gap construction. Thus this selectionally introduced contextual feature delimits the extended c-command discussed in connection with (34). On the other hand, the fundamental error of regarding functional notions as categorial is to be regarded as problems of phonemic and morphological analysis. It must be emphasized, once again, that an important property of these three types of EC is unspecified with respect to problems of phonemic and morphological analysis.</p>",
          25, 50, {
          width: 150,
          retina: true,
          pagesplit: true,
          margin: {
            top: 30,
            right: 25,
            bottom: 30,
            left: 25,
            useFor: 'document' // This property is mandatory to keep the margin to supsequent pages
          }
        })

        doc.save(pdfName + '.pdf');
      },
    }
  }
</script>

<style scoped>

</style>
