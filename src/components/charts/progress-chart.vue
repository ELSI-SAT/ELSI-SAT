<template>
  <div>
    <vx-card
      title="Fortschritt"
      title-color="black"
      subtitle="Der Fortschritt bei der Beantwortung des Fragebogens.">
      <vue-apex-charts
        v-if="quota >= 50"
        type="bar"
        height="250"
        :options="barChart.chartOptions"
        :series="barChart.series">
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
    name: "Progress",

    computed: {
      quota() {
        return [this.$store.getters['email/getQuota']]
      },

      barChart () {
        let labelsObj = this.$store.getters['email/getAllLabels']
        let labels = []
        let colors = []
        let data = []

        labelsObj.forEach((label) => {
          let answers = this.$store.getters['email/getNumberOfAnswersWithLabel'](label.value)
          let questions = this.$store.getters['email/getNumberOfQuestionsWithLabel'](label.value)
          let quota = Math.floor((answers * 100) / questions)

          labels = [...labels, label.value]
          colors = [...colors, label.color]
          data = [...data, quota]
        });

        return {
          series: [{
            data: data
          }],
          chartOptions: {
            chart: {
              fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
              animations: {
                enabled: false,
              },

            },
            colors: colors,
            legend: {
              show: false,
            },
            plotOptions: {
              // https://apexcharts.com/docs/options/plotoptions/bar/
              bar: {
                endingShape: 'flat',
                horizontal: true,
                distributed: true,
                colors: {
                  backgroundBarColors: ['#f8f8f8']
                }
              }
            },
            dataLabels: {
              enabled: false,
            },
            grid: {
              show: true,
              borderColor: 'white',
              xaxis: {
                lines: {
                  show: false,
                }
              },
            },
            // https://apexcharts.com/docs/options/xaxis/#
            xaxis: {
              categories: labels,
              max: 100,
              labels: {
                show: false
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              labels: {
                show: true,
              }
            },
          }
        }
      },
    },

    components: {
      VueApexCharts
    }

  }
</script>
