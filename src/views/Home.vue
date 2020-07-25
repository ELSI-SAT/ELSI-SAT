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
        <ELSIScoreChart :height="280"/>
      </div>

      <div class="vx-col w-1/2 mb-base">
        <ProgressChart/>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-1/2 mb-base">
        <HeatmapChart/>
      </div>

      <div class="vx-col w-1/2 mb-base">
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

  export default {
    name: "Home",

    computed: {
      quota() {
        return [this.$store.getters['email/getQuota']]
      },
    },

    components: {
      ELSIScoreChart,
      ProgressChart,
      HeatmapChart,
      RiskAndAdressingChart,
    }

  }
</script>
