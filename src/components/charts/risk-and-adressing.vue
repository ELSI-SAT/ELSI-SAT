<template>
  <div>
    <vx-card
      title="Risiko und Adressierung"
      title-color="primary"
      subtitle="Die Risiko- und Adressierungs-Werte für jede Kategorie.">
      <vue-apex-charts
        v-if="quota >= 50"
        type="bar"
        height="316"
        :options="columnChart.chartOptions"
        :series="columnChart.series">
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
    name: "Risk-and-Adressing",

    computed: {
      quota() {
        return [this.$store.getters['email/getQuota']]
      },

      columnChart () {
        let labelsObj = this.$store.getters['email/getAllLabels']
        let labels = []
        let colors = []
        let dataMalus = []
        let dataBonus = []
        let dataScore = []

        labelsObj.forEach((label) => {
          labels = [...labels, label.value]
          colors = [...colors, label.color]

          let totalMalus = this.$store.getters['email/getScoreTotalMalus'](label.value)
          let maximumMalus = this.$store.getters['email/getScoreMaximumMalus'](label.value)
          let malusQuota = Math.floor((totalMalus * 100) / maximumMalus)
          dataMalus = [...dataMalus, malusQuota]

          let totalBonus = this.$store.getters['email/getScoreTotalBonus'](label.value)
          let maximumBonus = this.$store.getters['email/getScoreMaximumBonus'](label.value)
          let bonusQuota = Math.floor((totalBonus * 100) / maximumBonus)
          dataBonus = [...dataBonus, bonusQuota]

          let scoreQuota = Math.floor(((1 - ((totalMalus / maximumMalus) - (totalBonus  / maximumBonus))) / 2) * 100)
          dataScore = [...dataScore, scoreQuota]

        });

        return {
          series: [{
            name: 'Risiko',
            data: dataMalus
          }, {
            name: 'Risiko-Adressierung',
            data: dataBonus
          },
            //{
            //  name: 'Score',
            //  data: dataScore
            //}
          ],

          chartOptions: {
            chart: {
              fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
              animations: {
                enabled: false,
              },

            },

            colors: ['#FF5B72', '#04E397', '#7367F0', '#FFA044'],
            plotOptions: {
              bar: {
                horizontal: false,
                endingShape: 'flat',
                columnWidth: '70%',
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },

            xaxis: {
              categories: labels,
            },
            yaxis: {
              title: {
                text: ''
              }
            },
            fill: {
              opacity: 1
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
            tooltip: {
              y: {
                formatter: function(val) {
                  return "" + val + " %"
                }
              }
            }
          }
        }
      },
    },

    components: {
      VueApexCharts
    }

  }
</script>
