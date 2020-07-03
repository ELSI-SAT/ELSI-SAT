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
          title="Beantwortete Fragen"
          title-color="primary"
          subtitle="Fortschritt bei der Beantwortung aller Fragen">
          <vue-apex-charts
            type="radialBar"
            height="350"
            :options="radialBarChart.chartOptions"
            :series="quota">
          </vue-apex-charts>
        </vx-card>
      </div>

      <div class="vx-col w-1/2 mb-base">
        <vx-card
          title="Fortschritt"
          title-color="primary"
          subtitle="Zeigt den Fortschritt bei der Beantwortung aller Fragen pro Kategorie">
          <vue-apex-charts
            type="bar"
            height="250"
            :options="barChartOptions.chartOptions"
            :series="barChartOptions.series">
          </vue-apex-charts>
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-1/2 mb-base">
        <vx-card
          title="Heatmap: Big5-Risikowerte"
          title-color="primary"
          subtitle="Zeigt für alle Big5 Kategorien die dazugehörigen Risiko-Werte">
          <vue-apex-charts
            type="heatmap"
            height="316"
            :options="heatMapChart.chartOptions"
            :series="heatMapChart.series">
          </vue-apex-charts>
        </vx-card>
      </div>

      <div class="vx-col w-1/2 mb-base">
        <vx-card
          title="ELSI-Score"
          title-color="primary"
          subtitle="Zeigt das Verhältnis von Risiko und Risiko-Adressierung.">
          <vue-apex-charts
            type="bar"
            height="316"
            :options="columnChart.chartOptions"
            :series="columnChart.series">
          </vue-apex-charts>
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

      barChartOptions () {
        let labelsObj = this.$store.getters['email/getAllLabels']
        let labels = []
        let colors = []
        let data = []

        labelsObj.forEach((label) => {
          console.log('hey')
          let answers = this.$store.getters['email/getNumberOfAnswersWithLabel'](label.value)
          let questions = this.$store.getters['email/getNumberOfQuestionsWithLabel'](label.value)
          let quota = (answers * 100) / questions
          console.log(quota)
          labels = [...labels, label.value]
          colors = [...colors, label.color]
          data = [...data, quota]
        });

        console.log(data)

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
      }
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
        console.log(series)
        return series;
      }
    },

    data() {

      return {
        radialBarChart: {
          series: ["0"],
          chartOptions: {
            plotOptions: {
              radialBar: {
                size: 140,
                offsetY: -30,
                startAngle: -150,
                endAngle: 150,
                hollow: {
                  size: '60%',
                },
                track: {
                  background: "#f8f8f8",
                  strokeWidth: '100%',

                },
                dataLabels: {
                  value: {
                    offsetY: 0,
                    color: '#99a2ac',
                    fontSize: '2rem'
                  }
                }
              },
            },
            colors: ['#7367F0'],
            fill: {
              // type: 'gradient',
              // gradient: {
              //   // enabled: true,
              //   shade: 'dark',
              //   type: 'horizontal',
              //   shadeIntensity: 0.5,
              //   gradientToColors: ['#76B9F4'],
              //   inverseColors: true,
              //   opacityFrom: 1,
              //   opacityTo: 1,
              //   stops: [0, 100]
              // },
            },
            stroke: {
              // dashArray: 8
            },
            chart: {
              fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
              toolbar: {
                show: true,
              },
            },
            labels: [''],
          },
        },

        heatMapChart: {
          series: [{
            name: 'Tue Gutes.',
            data: [
              {
                x: 'Risiko',
                y: Math.floor(Math.random() * 100)
              },
              {
                x: 'R.-Reflexion',
                y: Math.floor(Math.random() * 100)
              },
              {
                x: 'R.-Adresierung',
                y: Math.floor(Math.random() * 100)
              },
            ]
          },
            {
              name: 'Tue niemandem weh.',
              data: [
                {
                  x: 'Risiko',
                  y: Math.floor(Math.random() * 100)
                },
                {
                  x: 'R.-Reflexion',
                  y: Math.floor(Math.random() * 100)
                },
                {
                  x: 'R.-Adresierung',
                  y: Math.floor(Math.random() * 100)
                },
              ]
            },
            {
              name: 'Handlungsfähigkeit.',
              data: [
                {
                  x: 'Risiko',
                  y: Math.floor(Math.random() * 100)
                },
                {
                  x: 'R.-Reflexion',
                  y: Math.floor(Math.random() * 100)
                },
                {
                  x: 'R.-Adresierung',
                  y: Math.floor(Math.random() * 100)
                },
              ]
            },
            {
              name: 'Sei Fair.',
              data: [
                {
                  x: 'Risiko',
                  y: Math.floor(Math.random() * 100)
                },
                {
                  x: 'R.-Reflexion',
                  y: Math.floor(Math.random() * 100)
                },
                {
                  x: 'R.-Adresierung',
                  y: Math.floor(Math.random() * 100)
                },
              ]
            },
            {
              name: 'Funktioniere.',
              data: [
                {
                  x: 'Risiko',
                  y: Math.floor(Math.random() * 100)
                },
                {
                  x: 'R.-Reflexion',
                  y: Math.floor(Math.random() * 100)
                },
                {
                  x: 'R.-Adresierung',
                  y: Math.floor(Math.random() * 100)
                },
              ]
            },
          ],

          chartOptions: {
            chart: {
              height: 350,
              type: 'heatmap',
              fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
            },

            plotOptions: {
              heatmap: {
                enableShades: false,
                shadeIntensity: 0,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                  ranges: [
                    {
                      from: 0,
                      to: 33,
                      name: 'niedrig',
                      color: '#04E397'
                    },
                    {
                      from: 34,
                      to: 66,
                      name: 'mittel',
                      color: '#FEC047'
                    },
                    {
                      from: 67,
                      to: 100,
                      name: 'hoch',
                      color: '#FF5B72'
                    }
                  ]
                }
              }
            },
            dataLabels: {
              enabled: false
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

            stroke: {
              width: 1
            },
          },


        },

        columnChart: {
          series: [{
            name: 'Risiko',
            data: [15, 5, 30, 85, 60]
          }, {
            name: 'Risiko-Adressierung',
            data: [50, 85, 70, 20, 40]
          }, {
            name: 'ELSI-Score',
            data: [80, 97, 50, 3, 20]
          }],
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
              categories: ['Fürsorge', 'Schadensvermeidung', 'Autonomie', 'Gerechtigkeit', 'Transparenz'],
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

      }
    },

    components: {
      VueApexCharts
    }

  }
</script>
