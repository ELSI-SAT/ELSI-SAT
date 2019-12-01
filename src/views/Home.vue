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
          <vue-apex-charts type="radialBar" height="350" :options="radialBarChart.chartOptions"
                           :series="radialBarChart.series"></vue-apex-charts>
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
      }
    },

    components: {
      VueApexCharts
    }

  }
</script>
