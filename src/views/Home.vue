<template>
  <div>
    <div class="vx-row">
      <div class="vx-col mb-base">
        <vx-card
          class="p-3"
          title="Willkommen bei ELSI-SAT!"
          title-color="black"
          subtitle="Informationen über die ELSI-SAT App">

          <p>ELSI-SAT ist ein automatisiertes ELSI-Screening- und Assessment-Tool für Forschungsvorhaben im Feld der Mensch-Technik-Interaktion. Die Software ist das Ergebnis des vom BMBF-geförderten Projekts ELSI-SAT, das an der Hochschule der Medien und dem Institut für Digitale Ethik in Stuttgart entwickelt wurde.</p>

          <h5 class="mt-5 mb-4">Leistungsumfang: Sensibilisierung für ELS-Implikationen</h5>
          <p>Über einen <a href="#/apps/email/all">Fragenkatalog</a> ermittelt die Software relevante ELS-Gesichtspunkte des jeweiligen Forschungsvorhabens und sensibilisiert für ethische, rechtliche und soziale Aspekte (ELSI) bei ihrem Forschungsvorhaben. In einer Wissensdatenbank werden ELS-Begriffe erklärt. Am Ende des Fragebogens erhalten Sie eine Matrix, die Risikobereiche und die bisherigen Vorhaben zur Risikoadressierung Ihres Forschungsvorhabens visualisiert</p>
          <br><p>Die ELSI-SAT-Software ist eine plattformunabhängige Desktop-Anwendung, bei der die Datenhaltung lokal erfolgt. Eingaben können in mehreren Sitzungen komplettiert werden. Ergebnisse können sowohl unmittelbar in der Anwendung betrachtet als auch in standardisierter Form exportiert und den Antragsdokumenten beigefügt werden.</p>

          <h5 class="mt-5 mb-4">Ziel: Werteorientierte Technikgestaltung</h5>
          <p>Die Beantwortung des Fragenkatalogs ermöglicht eine Sensibilisierung, Reflexion und Evaluation ethischer, rechtlicher und sozialer Fragen. Dies ermöglicht Ihnen noch nicht berücksichtigte ELS-Implikationen zu erkennen und in die zu entwickelnde MTI und deren Planung miteinzubeziehen.</p>

          <h5 class="mt-5 mb-4">Weitere Informationen</h5>

          <vs-collapse accordion type="border" class="mt-6 mb-6">
            <vs-collapse-item>
              <div slot="header">
                <h6>Zu den Vorteilen</h6>
              </div>
              <h6 class="mt-0 mb-2">Welche Vorteile bringt dies in Hinblick auf Forschungsprojekte mit sich?</h6>
              <p>Erstens wird der Ablehnung von Forschungsprojektanträgen aufgrund einer Nichtberücksichtigung von ELS-Aspekten entgegengewirkt. Zweitens leistet die Software einen wesentlichen Beitrag zur Technikgestaltung, die am Menschen und an Werten orientiert ist (sog. Ethics by Design), die einen Wettbewerbsvorteil darstellen kann.</p>
              <br>
              <p>Welche Vorteile hat eine Software im Gegensatz zu einem analogen Fragenkatalog?</p>
              <ul style="list-style-type: disc; margin-left: 1.5rem;">
                <li>eine bessere Usability (durch auf den User zugeschnittene Fragen)</li>
                <li>eine Reduktion der Komplexität (durch eine Risiko-Matrix)</li>
                <li>eine übersichtliche, statistische Auswertung</li>
                <li>eine Überprüfung der Vollständigkeit</li>
                <li>Portabilität durch Weitergabe an andere ProjektmitarbeiterInnen</li>
              </ul>
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">
                <h6>Zur Matrix</h6>
              </div>
              <h6 class="mt-0 mb-2">Welche Informationen gibt die Matrix?</h6>
              <ul style="list-style-type: disc; margin-left: 1.5rem;">
                <li>Risikoreiche Aspekte werden übersichtlich nach fünf Wertekategorien aufgeschlüsselt</li>
                <li>Jede Wertekategorie kann einzeln detailliert ausgewertet und analysiert werden</li>
                <li>Ein Abgleich der risikoreichen Aspekte mit der Berücksichtigung des Risikos (Risikoadressierung) zeigt Verbesserungspotenziale auf</li>
              </ul>
            </vs-collapse-item>

          </vs-collapse>


          <vs-button color="primary" type="filled" href="#/apps/email/all">Zum Fragebogen</vs-button>


        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-1/2 mb-base">
        <RadarChart :height="420"/>
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
  import RadarChart from "../components/charts/radar-chart";

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
      RadarChart,
    }

  }
</script>
