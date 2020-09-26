<template>
  <div>
    <vx-card
      title="Heatmap"
      title-color="black"
      subtitle="Risiko, Adressierung und ELSI-Score als Ampel für alle Kategorien.">
      <vue-apex-charts
        v-if="quota >= 50"
        type="heatmap"
        height="316"
        :options="heatMapChart.chartOptions"
        :series="heatMapChart.series">
      </vue-apex-charts>
      <div
        v-if="quota < 50"
        style="height: 50px;">
        <p>Zu wenige Daten zur Berechnung (ab 50 Prozent Vollständigkeit).</p>
      </div>
    </vx-card>
  </div>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts';

  export default {
    name: "Heatmap",

    computed: {
      quota() {
        return [this.$store.getters['email/getQuota']]
      },

      heatMapChart () {
        let labelsObj = this.$store.getters['email/getAllLabels']
        let labels = []
        let colors = []
        let dataHeatmap = []

        let filteredLabels = this.$store.getters['email/getFilteredLabels']

        labelsObj.forEach((label) => {
          if(filteredLabels.includes(label.value) ){
            return
          }

          labels = [...labels, label.value]
          colors = [...colors, label.color]

          let totalMalus = this.$store.getters['email/getScoreTotalMalus'](label.value)
          let maximumMalus = this.$store.getters['email/getScoreMaximumMalus'](label.value)
          let malusQuota = Math.floor((totalMalus * 100 ) / maximumMalus)

          let totalBonus = this.$store.getters['email/getScoreTotalBonus'](label.value)
          let maximumBonus = this.$store.getters['email/getScoreMaximumBonus'](label.value)
          let bonusQuota = Math.floor((totalBonus * 100 ) / maximumBonus)

          let scoreQuota = Math.floor(((1 - ((totalMalus / maximumMalus) - (totalBonus  / maximumBonus))) / 2) * 100 )

          let invertedBonusQuota = 100-bonusQuota
          let invertedScoreQuota = 100-scoreQuota

          // Apexcharts heatmap shows values of zero as blank.
          invertedBonusQuota <= 0 ? invertedBonusQuota = 1 : ''
          invertedScoreQuota <= 0 ? invertedScoreQuota = 1 : ''

          let dataLabel = new Object();
          dataLabel.name = label.value
          dataLabel.data = [
            {x: 'Risiko', y: malusQuota},
            {x: 'Adressierung', y: invertedBonusQuota},
            {x: 'Score', y: invertedScoreQuota},
          ]

          dataHeatmap = [...dataHeatmap, dataLabel]
        });

        return {
          series: dataHeatmap,

          chartOptions: {
            chart: {
              height: 350,
              type: 'heatmap',
              fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
              animations: {
                enabled: false,
              },

            },

            plotOptions: {
              heatmap: {
                enableShades: true,
                shadeIntensity: 0,
                radius: 0,
                useFillColorAsStroke: false,
                colorScale: {
                  ranges: [
                    {
                      from: -100,
                      to: 40,
                      name: 'positiv',
                      color: '#04E397'
                    },
                    {
                      from: 41,
                      to: 65,
                      name: 'mittel',
                      color: '#FEC047'
                    },
                    {
                      from: 66,
                      to: 100,
                      name: 'negativ',
                      color: '#FF5B72'
                    }
                  ]
                }
              }
            },
            dataLabels: {
              enabled: false
            },
            tooltip: {
              enabled: true,
            },
            stroke: {
              show: true,
              curve: 'smooth',
              lineCap: 'butt',
              colors: ['white'],
              width: 4,
              dashArray: 0,
            },

            legend: {
              position: 'top',
              offsetY: 0,
              fontSize: '12px',
              fontFamily: 'Montserrat, Helvetica, Arial',
              itemMargin: {
                horizontal: 5,
                vertical: 10
              },
            },

          },
        }
      },
    },

    components: {
      VueApexCharts
    }

  }
</script>
