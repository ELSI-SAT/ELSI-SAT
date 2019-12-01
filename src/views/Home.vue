<template>
  <div>
    <h4>You are in home.</h4>

    <div class="vx-row">
      <div class="vx-col w-1/2 mb-base">
        <vx-card
          title="Statistik 1"
          title-color="primary"
          subtitle="">
          <p>Lorem ipsum.</p>
          <br>
          <vue-apex-charts type="radialBar"
                           height="350"
                           :options="radialBarChart.chartOptions"
                           :series="radialBarChart.series">
          </vue-apex-charts>
        </vx-card>
      </div>

      <div class="vx-col w-1/2 mb-base">
        <vx-card
          title="Statistik 1"
          title-color="primary"
          subtitle="">
          <p>Lorem ipsum.</p>
          <br>
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

    computed: mapGetters(['email']),

    created() {
      console.log('Email.vue created')
      console.log(this.$store.state.email)
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
        themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
        radialBarChart: {
          series: [44, 55, 67, 83],
          chartOptions: {
            colors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: '22px',
                  },
                  value: {
                    fontSize: '16px',
                  },
                  total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                      // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                      return 249
                    }
                  }
                }
              }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
          }
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
        }


      }
    },

    components: {
      VueApexCharts
    }

  }
</script>
