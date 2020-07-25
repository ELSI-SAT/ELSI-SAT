<template>
  <div>
    <vx-card
      title="ELSI-Score"
      title-color="primary"
      subtitle="ELSI-Score gesamt und alle Kategorien.">
      <vue-apex-charts
        v-if="quota >= 50"
        type="radialBar"
        height="300"
        :options="radialBarChart.chartOptions"
        :series="radialBarChart.series">
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

    computed: {
      quota() {
        return [this.$store.getters['email/getQuota']]
      },

      radialBarChart() {
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

          let scoreQuota = Math.floor(((1 - ((totalMalus / maximumMalus) - (totalBonus / maximumBonus))) / 2) * 100)
          dataScore = [...dataScore, scoreQuota]

        });

        return {
          series: dataScore,

          chartOptions: {
            chart: {
              height: 300,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '40%',
                },
                dataLabels: {
                  name: {
                    fontSize: '22px',
                  },
                  value: {
                    fontSize: '16px',
                  },
                  total: {
                    show: true,
                    label: "Gesamt",
                    formatter: function (w) {
                      return dataScore[0] + ' %'
                    }
                  }
                }
              }
            },
            colors: colors,
            labels: labels,
          },
        }
      },
    },

    components: {
      VueApexCharts
    }

  }
</script>
