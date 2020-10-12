<template>
  <div>

    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card
          class="p-3"
          title="Willkommen bei ELSI-SAT!"
          title-color="black"
          subtitle="Informationen über die ELSI-SAT App">

          <p>ELSI-SAT ist ein automatisiertes ELSI-Screening- und Assessment-Tool für Forschungsvorhaben im Feld der
            Mensch-Technik-Interaktion. Die Software ist das Ergebnis des vom BMBF-geförderten Projekts ELSI-SAT, das an
            der Hochschule der Medien und dem Institut für Digitale Ethik in Stuttgart entwickelt wurde.</p>

          <br>
          <vs-button color="primary" type="filled" href="#/apps/email/all">Zum Fragebogen</vs-button>
        </vx-card>
      </div>
    </div>

    <div class="mt-2 mb-8">
      <div class="content-area__heading pr-4 border-0 md:border-r border-solid border-grey-light">
        <h4 class="mb-1" style="color: rgb(99, 99, 99);">Über die Software</h4>
      </div>
    </div>

    <vs-tabs
      :position="isSmallerScreen ? 'top' : 'left'"
      class="tabs-shadow-none"
      id="my-tabs"
      :key="isSmallerScreen">

      <vs-tab
        icon-pack="feather"
        icon="icon-chevron-right"
        :label="!isSmallerScreen ? 'Leistungsumfang' : ''">
        <div class="tab-text md:ml-6 md:mt-0 mt-4 ml-0">
          <div class="vx-card no-shadow"><!---->
            <div class="vx-card__collapsible-content vs-con-loading__container">
              <div class="vx-card__body">
                <div class="m-2">
                  <h5 class="mb-4">Leistungsumfang: Sensibilisierung für ELS-Implikationen</h5>
                  <p>Über einen <a href="#/apps/email/all">Fragenkatalog</a> ermittelt die Software relevante
                    ELS-Gesichtspunkte des jeweiligen Forschungsvorhabens und sensibilisiert für ethische, rechtliche
                    und soziale Aspekte (ELSI) bei ihrem Forschungsvorhaben. In einer Wissensdatenbank werden
                    ELS-Begriffe
                    erklärt. Am Ende des Fragebogens erhalten Sie eine Matrix, die Risikobereiche und die bisherigen
                    Vorhaben zur Risikoadressierung Ihres Forschungsvorhabens visualisiert</p>
                  <br>
                  <p>Die ELSI-SAT-Software ist eine plattformunabhängige Desktop-Anwendung, bei der die Datenhaltung
                    lokal erfolgt. Eingaben können in mehreren Sitzungen komplettiert werden. Ergebnisse können sowohl
                    unmittelbar in der Anwendung betrachtet als auch in standardisierter Form exportiert und den
                    Antragsdokumenten beigefügt werden.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vs-tab>

      <vs-tab
        icon-pack="feather"
        icon="icon-chevron-right"
        :label="!isSmallerScreen ? 'Werteorientierung' : ''">
        <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
          <div class="vx-card no-shadow"><!---->
            <div class="vx-card__collapsible-content vs-con-loading__container">
              <div class="vx-card__body">
                <div class="m-2">
                  <h5 class="mb-4">Werteorientierte Technikgestaltung</h5>
                  <p>Die Beantwortung des Fragenkatalogs ermöglicht eine Sensibilisierung, Reflexion und Evaluation
                    ethischer, rechtlicher und sozialer Fragen. Dies ermöglicht Ihnen noch nicht berücksichtigte
                    ELS-Implikationen zu erkennen und in die zu entwickelnde MTI und deren Planung miteinzubeziehen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vs-tab>

      <vs-tab
        icon-pack="feather"
        icon="icon-chevron-right"
        :label="!isSmallerScreen ? 'Vorteile' : ''">
        <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
          <div class="vx-card no-shadow"><!---->
            <div class="vx-card__collapsible-content vs-con-loading__container">
              <div class="vx-card__body">
                <div class="m-2">

                  <h5 class="mb-4">Zu den Vorteilen</h5>

                  <p>Erstens wird der Ablehnung von Forschungsprojektanträgen aufgrund einer Nichtberücksichtigung von
                    ELS-Aspekten entgegengewirkt. Zweitens leistet die Software einen wesentlichen Beitrag zur
                    Technikgestaltung, die am Menschen und an Werten orientiert ist (sog. Ethics by Design), die einen
                    Wettbewerbsvorteil darstellen kann.</p>
                  <br>
                  <ul style="list-style-type: disc; margin-left: 1.5rem;">
                    <li>eine bessere Usability (durch auf den User zugeschnittene Fragen)</li>
                    <li>eine Reduktion der Komplexität (durch eine Risiko-Matrix)</li>
                    <li>eine übersichtliche, statistische Auswertung</li>
                    <li>eine Überprüfung der Vollständigkeit</li>
                    <li>Portabilität durch Weitergabe an andere ProjektmitarbeiterInnen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vs-tab>

      <vs-tab
        icon-pack="feather"
        icon="icon-chevron-right"
        :label="!isSmallerScreen ? 'Big-5' : ''">
        <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
          <div class="vx-card no-shadow"><!---->
            <div class="vx-card__collapsible-content vs-con-loading__container">
              <div class="vx-card__body">
                <div class="m-2">

                  <h6 class="mt-0 mb-4">Welche Informationen gibt die Matrix?</h6>
                  <ul style="list-style-type: disc; margin-left: 1.5rem;">
                    <li>Risikoreiche Aspekte werden übersichtlich nach fünf Wertekategorien aufgeschlüsselt</li>
                    <li>Jede Wertekategorie kann einzeln detailliert ausgewertet und analysiert werden</li>
                    <li>Ein Abgleich der risikoreichen Aspekte mit der Berücksichtigung des Risikos (Risikoadressierung)
                      zeigt Verbesserungspotenziale auf
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </vs-tab>

    </vs-tabs>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768
    }
  }
}
</script>

<style lang="scss">
.vs-button {
  padding: 0.65rem 1.4rem;
  font-size: .95rem;
}

#my-tabs {
  .vs-tabs--content {
    padding: 0;
  }

  .vs-tabs--ul {
    box-shadow: none;
  }

  .con-ul-tabs {
    min-width: 210px;

    .vs-tabs--li .vs-tabs--btn SPAN {
      text-align: left;
    }
  }
}
</style>
