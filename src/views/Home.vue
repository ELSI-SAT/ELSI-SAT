<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-1/2 mb-base">
        <vx-card
          title="Test"
          title-color="primary"
          subtitle="Link zum Fragebogen">
          Hier geht es zum <a href="#/apps/email/inbox">Fragebogen</a>.
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-1/2 mb-base">
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

      <div class="vx-col w-1/2 mb-base">
        <vx-card
          title="Fortschritt"
          title-color="primary"
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
    </div>

    <div class="vx-row">
      <div class="vx-col w-1/2 mb-base">
        <vx-card
          title="Heatmap"
          title-color="primary"
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

      <div class="vx-col w-1/2 mb-base">
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
    </div>

  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import VueApexCharts from 'vue-apexcharts';

  export default {
    name: "Home",

    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters([
        'email',
      ]),

      quota () {
        return [this.$store.getters['email/getQuota']]
      },

      radialBarChart () {
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
                      // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
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

      heatMapChart () {
        let labelsObj = this.$store.getters['email/getAllLabels']
        let labels = []
        let colors = []
        let dataHeatmap = []

        labelsObj.forEach((label) => {
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

    methods: {

      generateData(count, yrange) {
        let i = 0;
        let series = [];
        while (i < count) {
          let x = 'R' + (i + 1).toString();
          let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

          series.push({
            x: x,
            y: y
          });
          i++;
        }

        return series;
      }
    },


    components: {
      VueApexCharts
    }

  }
</script>
