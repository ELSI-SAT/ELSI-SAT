<template>
  <div>
    <vs-button color="primary" type="filled" v-on:click="createPDF()">
      Download PDF
    </vs-button>
  </div>
</template>

<script>
  import * as jsPDF from 'jspdf'

  export default {
    name: "pdf-export-button",

    methods: {
      createPDF() {
        let pdfName = 'ELSI-SAT Ergebnis'
        let doc = new jsPDF({
          orientation: 'p',
          unit: 'mm',
          format: 'a4'
        })

        let margins = {
          top: 30,
          bottom: 30,
          left: 30,
          width: 140
        }

        // doc.setFont("helvetica");
        // doc.setFontSize(9)

        let text = "<h2  style='font-family: Helvetica, Arial, sans-serif;'>Lorem Ipsum</h2><p style='font-family: Helvetica, Arial, sans-serif; line-height: 150%; font-size: 14px'>Realize the <b>need</b> to mesh viral schemas??? Visualize how you can engage transparent e-tailers? Best practices dictate the necessity to whiteboard enterprise portals? Looking forward, leverage real-time channels! Whenever you can, incubate granular mindshare? Whenver possible, aggregate new age metrics!!! Our value proposition is that we syndicate global action-items! To embrace new age synergies? Be able to grow integrated supply-chains??? We are committed to streamline extensible e-commerce! Realize the need to unleash dot-com supply-chains. Accellerate the trend to innovate user-centric ROI? Realize the need to evolve sticky models... Increase the need to reintermediate bricks-and-clicks paradigms! Visualize how you can maximize cyber users... Accellerate the trend to productize green niches? Looking forward, exploit mass platforms!!! Best practices dictate the necessity to cultivate value-added infomediaries! You can e-enable sticky portals? Realize how to leverage cross-media systems??? We must transform collaborative niches? Best practices dictate the necessity to strategize bleeding-edge infrastructures??? Our value proposition is that we morph viral partnerships. Increase the need to synergize cutting-edge communities. Please embrace dynamic architectures? Please benchmark killer web-readiness??? We must grow bricks-and-clicks models! Visualize how you can benchmark viral communities??? Develop products that facilitate end-to-end synergies... Develop products that scale sexy ROI??? Visualize how you can utilize web-enabled metrics... Realize the need to grow transparent functionalities!!! We are committed to maximize B2B platforms! Realize how to strategize customized web services! e able to generate robust experiences! You can implement user-enables supply-chains. Whenver possible, synthesize magnetic relationships!!! We are committed to enhance distributed niches??? You can syndicate innovative initiatives! Develop products that innovate out-of-the-box e-services? Whenever you can, redefine ubiquitous systems... It is mission critical that we architect synergistic ROI! Our value proposition is that we morph best-of-breed paradigms? Best practices dictate the necessity to drive open-source synergies? We are committed to benchmark viral convergence!!! We must revolutionize impactful experiences??? Whenver possible, integrate ubiquitous solutions... Realize how to deliver dynamic schemas??? Increase the need to enable B2C vortals!!! To leverage back-end technologies? You can embrace back-end partnerships... Looking forward, e-enable distributed content. Accellerate the trend to recontextualize clicks-and-mortar channels! We must repurpose user-enables ROI??? Accellerate the trend to reintermediate green channels! Whenever you can, integrate cross-platform networks!!! Be able to synthesize holistic markets?</p>"

        let pageHeight= doc.internal.pageSize.height
        let y = margins.top
        let options = {
          width: margins.width,
          pagesplit: true
        }

        doc.fromHTML(text+text+text, margins.left, y, options, function() {
          if (y >= pageHeight) {
            y = margins.top
            doc.addPage();
          }
        }, margins);


        doc.save(pdfName + '.pdf')
      },
    }
  }
</script>

<style scoped>

</style>
