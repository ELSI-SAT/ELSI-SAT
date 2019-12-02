<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-1/2 mb-base">
        <vx-card
          title="Beantwortete Fragen"
          title-color="primary"
          subtitle="">
          <vue-apex-charts type="radialBar"
                           height="350"
                           :options="radialBarChart.chartOptions"
                           :series="quota">
          </vue-apex-charts>
        </vx-card>
      </div>

      <div class="vx-col w-1/2 mb-base">
        <vx-card
          title="Bar"
          title-color="primary"
          subtitle="">
          <vue-apex-charts type="bar"
                           height="200"
                           :options="barChart.chartOptions"
                           :series="barChart.series">
          </vue-apex-charts>
        </vx-card>
      </div>

    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card
          title="Heatmap"
          title-color="primary"
          subtitle="">
          <vue-apex-charts type="heatmap"
                           height="316"
                           :options="heatMapChart.chartOptions"
                           :series="heatMapChart.series">
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
        const answered = this.$store.getters['email/getNumberOfAnswers']
        const questions = this.$store.getters['email/getNumberOfQuestions']
        const quota = Math.floor((answered / questions) * 100)
        // Return an array!
        return [quota]
      },
    },

    methods: {

      generateData(count, yrange) {
        let i = 0;
        let series = [];
        while (i < count) {
          let x = 'w' + (i + 1).toString();
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
              toolbar: {
                show: true,
              },
            },
            labels: [''],
          },
        },


        heatMapChart: {
          series: [{
            name: 'Metric1',
            data: this.generateData(8, {
              min: 0,
              max: 90
            })
          },
            {
              name: 'Metric2',
              data: this.generateData(8, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric3',
              data: this.generateData(8, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric4',
              data: this.generateData(8, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric5',
              data: this.generateData(8, {
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric6',
              data: this.generateData(8, {
                min: 0,
                max: 90
              })
            },
          ],
          chartOptions: {
            dataLabels: {
              enabled: false
            },
            colors: ["#008FFB"],
          }
        },


        barChart: {
          series: [{
            data: [400, 430, 448, 470]
          }],
          chartOptions: {
            colors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
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
              enabled: false
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
              categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands'],
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

    components: {
      VueApexCharts
    }

  }
</script>
