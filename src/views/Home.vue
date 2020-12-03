<template>
    <div class="vx-row">
        <div class="vx-col w-full mb-base">
            <vx-card class="px-3 py-3 lg:py-20 mb-base flex justify-center">
                <div class="flex flex-wrap-reverse xl:flex-no-wrap app-max-width">
                  <div class="flex flex-wrap overflow-hidden">
                    <div class="w-full overflow-hidden lg:w-2/3 xl:w-2/3">
                        <div class="app-title">ELSI-SAT</div>
                        <div class="app-subtitle mb-base">Mehr Ethik und Recht in Forschungs&shy;projekten</div>
                        <p>
                            Bei der Entwicklung von Mensch-Technik-Interaktionen (MTI) wird die Berücksichtigung ethischer, rechtlicher und sozialer Aspekte (engl. ELSI) immer relevanter. Ein Screening- und Assessment-Tool (SAT) dient dabei
                            Forschungsinstitutionen als Orientierungshilfe.
                        </p>
                        <p class="mt-3">ELSI-SAT sensibilisiert Forschungsteams mithilfe eines Fragenkatalogs für ELSI und weist in Form von Ergebnis-Grafiken auf mögliche Risikobereiche in Forschungsvorhaben hin.</p>
                        <vs-button class="mt-base" color="primary" type="filled" href="#/stammdaten">Starten</vs-button>
                    </div>
                    <div class="w-full overflow-hidden hidden lg:block lg:w-1/3 xl:w-1/3">
                        <img class="pl-3 pt-8" :src="images.robot" style="max-width: 100%; max-height: 100%;" />
                    </div>
                </div>
              </div>
            </vx-card>

            <vx-card class="p-3 mb-base flex flex-col items-center">
                <div class="text-center app-max-width">
                    <div class="app-heading">Warum eine eigene Software für ELSI?</div>
                    <div class="app-subheading">Im Gegensatz zu einem herkömmlichen Fragebogen bietet ELSI-SAT folgende Vorteile:</div>
                </div>
                <div class="flex flex-wrap content-center justify-content app-max-width">
                    <div class="flex flex-col items-center text-center p-5 w-56 md:w-1/3">
                        <img :src="images.chart" class="m-5 app-icons" />
                        <div class="app-buzzword">Automatische Auswertung</div>
                        <p>Die Antworten des Fragebogens werden in Grafiken visualisiert, die auf mögliche Risiken hinweisen.</p>
                    </div>
                    <div class="flex flex-col items-center text-center p-5 w-56 md:w-1/3">
                        <img :src="images.export" class="m-5 app-icons" />
                        <div class="app-buzzword">Export-/Importfunktion</div>
                        <p>Zwischenstände und das Ergebnis des Fragebogens kann an andere Personen weitergegeben werden.</p>
                    </div>
                    <div class="flex flex-col items-center text-center p-5 w-56 md:w-1/3">
                        <img :src="images.book" class="m-5 app-icons" />
                        <div class="app-buzzword">Nachschlagewerk</div>
                        <p>In einem Glossar werden Begriffe des Fragenkatalogs erklärt.</p>
                    </div>
                </div>
            </vx-card>

            <vx-card class="p-3 mb-base flex flex-col items-center">
                <div class="app-max-width text-center">
                    <div class="text-center">
                        <div class="app-heading">Wie hilft mir ELSI-SAT bei der Antragserstellung?</div>
                    </div>
                    <div class="flex flex-wrap app-max-width">
                        <ul class="flex flex-wrap items-center text-center p-5">
                            <li class="w-1/2 p-3">
                                <div class="app-buzzword">Schneller</div>
                                Bessere Usabiliy durch Filterfunktionen
                            </li>
                            <li class="w-1/2 p-3">
                                <div class="app-buzzword">Einfacher</div>
                                Reduzierte Komplexität durch Kategorien
                            </li>
                            <li class="w-1/2 p-3">
                                <div class="app-buzzword">Übersichtlicher</div>
                                Grafische Auswertungen
                            </li>
                            <li class="w-1/2 p-3">
                                <div class="app-buzzword">Vollständiger</div>
                                Geführter Fragebogen
                            </li>
                            <li class="w-1/2 p-3">
                                <div class="app-buzzword">Erfolgreicher</div>
                                Systematische ELSI-Berücksichtigung
                            </li>
                            <li class="w-1/2 p-3">
                                <div class="app-buzzword">Sicherer</div>
                                Lokale Datenhaltung
                            </li>
                        </ul>
                    </div>
                </div>
            </vx-card>

            <vx-card class="p-3 mb-base flex flex-col items-center">
                <div class="text-center app-max-width">
                    <div class="app-heading">Welche Kategorien werden betrachtet?</div>
                    <div class="app-subheading">
                        Jeder Frage des Fragenkatalogs ist mindestens einer Kategorie zugeordnet. Im Ergebnisteil wird jede Kategorie mit ihrer jeweiligen Risikoeinstufung und ihrer Risikoberücksichtigung in einer Grafik veranschaulicht. Die
                        Kategorien sind folgendermaßen unterteilt:
                    </div>
                </div>
                <div class="flex flex-wrap content-center justify-content app-max-width">
                    <div class="flex flex-col items-center text-center p-5 w-56 md:w-1/3">
                        <img :src="images.form" class="m-5 app-icons" />
                        <div class="app-buzzword">Allgemein</div>
                        <p>Hintergrundinformationen zu Ihrem Forschungsvorhaben fallen in die Kategorie Allgemein.</p>
                    </div>
                    <div class="flex flex-col items-center text-center p-5 w-56 md:w-1/3">
                        <img :src="images.scale" class="m-5 app-icons" />
                        <div class="app-buzzword">Datenschutz</div>
                        <p>Rechtliche Aspekte werden in der Kategorie Datenschutz zusammengefasst.</p>
                    </div>
                    <div class="flex flex-col items-center text-center p-5 w-56 md:w-1/3">
                        <img :src="images.compass" class="m-5 app-icons" />
                        <div class="app-buzzword">Werte</div>
                        <p>Ethische Aspekte sind in fünf Werte-Kategorien gegliedert: Fürsorge, Schadensvermeidung, Autonomie, Gerechtigkeit, Transparenz.</p>
                    </div>
                </div>
            </vx-card>

            <vx-card class="p-3 mb-3 flex flex-col items-center">
                <div class="text-center app-max-width">
                    <p>
                        ELSI-SAT wurde gefördert durch das
                        <a href="https://www.bmbf.de" target="_blank" class="app-link">Bundesministerium für Bildung und Forschung (BMBF)</a>,<br />realisiert am
                        <a href="https://www.hdm-stuttgart.de/digitale-ethik" target="_blank" class="app-link">Institut für Digitale Ethik</a>
                        der <a href="https://www.hdm-stuttgart.de" target="_blank" class="app-link">Hochschule der Medien</a>.
                    </p>
                    <div class="flex justify-center mt-8">
                        <a href="https://www.bmbf.de" target="_blank"><img :src="images.bmbflogo" class="mx-8 app-logos" /></a>
                        <a href="https://www.hdm-stuttgart.de/digitale-ethik" target="_blank"><img :src="images.idelogo" class="mx-8 app-logos" /></a>
                        <a href="https://www.hdm-stuttgart.de" target="_blank"><img :src="images.hdmlogo" class="mx-8 app-logos" /></a>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: {
                hdmlogo: require("@/assets/images/elsisat/hdm_logo.svg"),
                bmbflogo: require("@/assets/images/elsisat/bmbf_logo.svg"),
                idelogo: require("@/assets/images/elsisat/ide_logo.svg"),
                robot: require("@/assets/images/elsisat/robot.png"),
                compass: require("@/assets/images/elsisat/compass.svg"),
                export: require("@/assets/images/elsisat/document-export.svg"),
                form: require("@/assets/images/elsisat/form-line.svg"),
                chart: require("@/assets/images/elsisat/radar-chart-outlined.svg"),
                scale: require("@/assets/images/elsisat/scale.svg"),
                book: require("@/assets/images/elsisat/bx-book-reader.svg"),
            },
        };
    },
};
</script>
