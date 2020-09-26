<template>
  <div>
    <div class="vx-row">
      <div class="vx-col mb-base">
        <vx-card
          class="p-3"
          title="Das ELSI-SAT-Datenschutzkonzept"
          title-color="black"
          subtitle="">

          <p class="mb-3">Das Software-Tool ELSI-SAT 1.0 wurde in seiner ersten Version zunächst ausschließlich für den Einsatz an Hochschulen und Forschungseinrichtungen entwickelt. Dabei fühlten sich deren Entwickler einem ethischen Ansatz verpflichtet, dessen Umsetzung den eigentlichen Sinn und die wesentliche Aufgabe des im ELSI-SAT-Forschungsprojekt der HdM Stuttgart (IDE) entwickelten Produkts – nämlich eine Software-Anwendung zur Implementierung dieses Ansatzes (auch) in anderen Forschungsprojekten - darstellen sollte und somit die gesamte Projektarbeit wesentlich prägte: ethics by design.</p>
          <p class="mb-3">Dieser Ansatz umfasst u.a. auch einen datenrechtlichen Aspekt, sofern es hierbei um das Grundrecht auf „informationelle Selbstbestimmung“ i.S.v. Art. 2 Abs. 1 GG (bzw. Art. 8 EMRK) geht, welches trotz des sog. „Forschungsprivilegs“ auch im spezifischen Bereich von Forschung und Entwicklung (FuE) eine bedeutsame Rolle spielt. Eine gesetzliche Ausgestaltung erfährt dieses Grundrecht in Form der geltenden Fassung der Datenschutzgrundverordnung (DSGVO) mit deren datenschutzrechtlichen Prinzipien (Art. 5 Abs. 1), insbesondere aber in deren erweiternden Grundsätzen des Art. 25 DSGVO: privacy by design (Abs. 1) und privacy by default (Abs. 2). </p>
          <p class="mb-3">Dabei gebietet Art. 25 DSGVO zunächst nur dem jeweils Datenverantwortlichen die Beachtung der Datenschutzgrundsätze (z.B. Datenminimierung). Eine Datenverantwortlichkeit kann jedoch erst im realen Einsatz eines Produktes entstehen und somit diejenigen Personen oder Stellen, welche das Tool für ihre jeweiligen Zwecke nutzen, zugewiesen werden und diese auch rechtlich verpflichten. Nach Erwägungsgrund (ErwG) 78 der DSGVO werden darüber hinaus auch Hersteller und Anbieter von Produkten bzw. Dienstleistungen dazu angehalten und „ermutigt“, bereits bei der Entwicklung und Gestaltung die datenrechtlichen Grundsätze zu berücksichtigen sowie deren Umsetzung durch geeignete Maßnahmen in Hinblick auf einen späteren praktischen Betrieb sicherzustellen. </p>
          <p class="mb-3">Konkret bedeutet dies für das vorliegende Projekt und die hier entwickelte Anwendung, dass man sich – obwohl im Entwicklungsstadium (noch) keine Datenverantwortlichkeit i.e.S. bestehen kann, s.o. – geradezu verpflichtet sah, ein weitestgehend und bestmöglich an den Grundsätzen der DSGVO ausgerichtetes Produkt (best practice) zu entwerfen. So lag es im Rahmen der Überlegungen und Prüfungen potentieller Maßnahmen nahe, den Hebel sehr weit unten - in Hinblick auf die Intensität eher oben - anzusetzen und das Problem „an der Wurzel zu packen“. Diese insoweit grundlegende Entscheidung hatte folgerichtig auf der Ebene der Datenvermeidung bzw. -minimierung zu erfolgen (vgl. Art. 2 Abs. 1, Art. 4 Nr. 1, Art. 5 Abs. 1 DSGVO).</p>
          <p class="mb-3">Im Ergebnis entschied man sich daher für eine softwarebasierte Anwendung, die jedenfalls in ihrer Grundvariante ohne Online-Anbindung funktioniert. So kann der einer Erhebung bzw. Verarbeitung von (personenbeziehbaren, s.u.) Daten zugrundeliegende Fragebogen offline ausgefüllt, ausgedruckt und auch analog verschickt werden. Ebenso unterliegen die generierten Resultate, Einstufungen oder Scores keiner digitalen Datenverarbeitung auf Fremdservern o.ä., sondern werden ausschließlich auf dem Desktop der Nutzerinnen und Nutzer verarbeitet und ggfs. dort ausgegeben (pdf-Dokument). </p>
          <p class="mb-3">Zusätzlich wird auf der Startseite des auszufüllenden Fragebogens auf die namentliche Angabe der konkret bearbeitenden Person(en) verzichtet. Es genügt hier die Angabe der als Antragsteller des jeweiligen Projekts auftretenden Hochschul- oder Forschungseinrichtung sowie des (kollaborativ) den Fragebogen ausfüllenden bzw. das Projekt ausführenden Instituts. Es wird somit bereits auf dieser grundlegenden Ebene eine mögliche Erhebung oder Verarbeitung personenbezogener Daten und demgemäß ein Unterfallen in den Anwendungsbereich der DSGVO regelmäßig vermieden.</p>
          <p class="mb-3">Aus den genannten Gründen erübrigt sich an dieser Stelle eine wortreiche, für Anwender*innen oft unverständliche, in ihrem rechtlichen Bedeutungsgehalt eventuell mehrdeutige und in Bezug auf die tatsächlichen Gegebenheiten nur schwierig einschätzbare Formulierung einer (produktbezogenen) Datenschutzerklärung in hinlänglich bekannter Art (gem. Art. 13 bzw. 14 DSGVO).</p>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Datenschutz"
  }
</script>

<style scoped>

</style>
