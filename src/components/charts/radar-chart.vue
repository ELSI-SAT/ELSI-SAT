<template>
  <div>
    <vx-card
      title="ELSI-Score"
      title-color="primary"
      subtitle="ELSI-Score gesamt und alle Kategorien.">
      <vue-apex-charts
        v-if="quota >= 50"
        type="radar"
        :height="height"
        :options="radarChart.chartOptions"
        :series="radarChart.series">
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
    name: "ELSI-Score-Chart",

    props: {
      height: {
        type: Number,
        required: true,
      },
    },

    computed: {
      quota() {
        return [this.$store.getters['email/getQuota']]
      },

      radarChart() {
        let labelsObj = this.$store.getters['email/getAllLabels']
        let labels = []
        let dataMalus = []
        let dataBonus = []
        let dataScore = []

        labelsObj.forEach((label) => {
          labels = [...labels, label.value]

          let totalMalus = this.$store.getters['email/getScoreTotalMalus'](label.value)
          let maximumMalus = this.$store.getters['email/getScoreMaximumMalus'](label.value)
          let malusQuota = Math.floor((totalMalus * 100) / maximumMalus)
          dataMalus = [...dataMalus, malusQuota]

          let totalBonus = this.$store.getters['email/getScoreTotalBonus'](label.value)
          let maximumBonus = this.$store.getters['email/getScoreMaximumBonus'](label.value)
          let bonusQuota = Math.floor((totalBonus * 100) / maximumBonus)
          dataBonus = [...dataBonus, bonusQuota]

          let scoreQuota = Math.floor(((1 - ((totalMalus / maximumMalus) - (totalBonus / maximumBonus))) / 2) * 100)
          dataScore = [...dataScore, scoreQuota]
        });

        labels.unshift('Gesamt')

        let totalMalus = this.$store.getters['email/getScoreTotalMalus'](false)
        let maximumMalus = this.$store.getters['email/getScoreMaximumMalus'](false)
        let totalBonus = this.$store.getters['email/getScoreTotalBonus'](false)
        let maximumBonus = this.$store.getters['email/getScoreMaximumBonus'](false)
        let scoreQuota = Math.floor(((1 - ((totalMalus / maximumMalus) - (totalBonus / maximumBonus))) / 2) * 100)
        dataScore.unshift(scoreQuota)


        return {
          series: [{
            name: 'Series 1',
            data: dataScore,
          }],
          chartOptions: {
            chart: {
              type: 'radar',
              fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
              animations: {
                enabled: false,
              },

            },
            plotOptions: {
              radar: {
                // size: 140,
                polygons: {
                  strokeColors: '#e9e9e9',
                  fill: {
                    colors: ['#f8f8f8', '#fff']
                  }
                }
              }
            },
            colors: ['#7367F0'],
            dataLabels: {
              enabled: true
            },
            xaxis: {
              categories: labels
            },
            yaxis: {
              show: true,
              max: 100,
              min: 0,
              tickAmount: 5,
            },
          },

        }


      },
    }
    ,

    components: {
      VueApexCharts
    }

  }
</script>
