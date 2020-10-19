<template>
  <div>
    <div class="vx-row">
      <div class="vx-col vs-xs-12 vs-sm-12 vs-lg-6 mb-base">
        <ProgressChart/>
      </div>

      <div class="vx-col vs-xs-12 vs-sm-12 vs-lg-6 mb-base">
        <RadarChart :height="420"/>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col vs-xs-12 vs-sm-12 vs-lg-6 mb-base">
        <HeatmapChart/>
      </div>

      <div class="vx-col vs-xs-12 vs-sm-12 vs-lg-6 mb-base">
        <RiskAndAdressingChart/>
      </div>
    </div>

  </div>
</template>

<script>
  import ELSIScoreChart from "../components/charts/elsi-score";
  import ProgressChart from "../components/charts/progress-chart";
  import HeatmapChart from "../components/charts/heatmap";
  import RiskAndAdressingChart from "../components/charts/risk-and-adressing";
  import RadarChart from "../components/charts/radar-chart";
  import {mapGetters} from "vuex";

  export default {
    name: "Home",

    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters([
        'email',
      ]),

      quota() {
        return [this.$store.getters['email/getQuota']]
      },
    },

    components: {
      ELSIScoreChart,
      ProgressChart,
      HeatmapChart,
      RiskAndAdressingChart,
      RadarChart,
    }

  }
</script>
