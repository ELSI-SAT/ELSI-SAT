export default {
  terms: [
    {
      id: -1,
      categoryId: [1, 2],
      term: 'Berechnung des ELSI-Scores',
      definition: 'Der ELSI-Score berechnet sich nach einer mathematischen Formel. Hierbei werden bei der Beantwortung der Fragen Risikopunkte (R) und Risiko-Adressierungspunkte (A) vergeben, die anschließend wie folgt miteinander in ein Verhältnis gesetzt werden: ELSI-Score = (1-(R-A))/2. Die grundlegenden Ausgangswerte sind die "1" oder "0" der jeweiligen Antwort-Optionen einer Frage. Bspw.: "Achten Sie auf Datenschutz?" "Nein = Risiko 1, Adressierung 0" vs. "Ja und zwar so … = Risiko 0, Adressierung 1". Diese Ausgangswerte werden zur Berechnung der Gesamtwerte (jeweils für Risiko und Adressierung) addiert und durch den maximal erreichbaren Wert geteilt. Das Ergebnis ist jeweils ein Quotient zwischen 0 und 1. Dabei gelten folgende Besonderheiten: Mehrkategorienmalus: Fragen, die mehr als 2 Labels haben, werden doppelt gewichtet. Filterfragen: herausgefilterte Fragen werden nicht berücksichtigt. Folgefragen: Werden nur dann berücksichtigt, wenn sie aktiviert wurden, d.h. abhängig von der gewählten Option der übergeordneten Frage. Anschließend gehen die Gesamtwerte für Risiko und Adressierung in die obige Formel für den Score ein. Da Gesamtwerte für jedes einzelne Label, aber auch über alle Labels hinweg berechnet werden können, kann sowohl ein Gesamt-Score als auch ein Score für jedes einzelne Label berechnet werden.'
    },
    {
      id: 1,
      categoryId: [1, 3],
      term: 'Mensch-Technik-Interaktion',
      definition: 'Der Begriff Mensch-Technik-Interaktion (MTI) bezeichnet ein interdisziplinäres Themengebiet, das sich mit dem Umgang, der Kommunikation und den Schnittstellen zwischen Mensch und Maschine auseinandersetzt.'
    },
    {
      id: 2,
      categoryId: [1, 3],
      term: 'Künstliche Intelligenz',
      definition: 'Wenngleich keine allgemein gültige Defintion von Künstlicher Intelligenz (KI) existiert, lässt sich diese grundsätzlich als Teilgebiet der Informatik beschreiben, das sich mit der Automatisierung von Systemen befasst und diese in die Lage versetzen soll, bereits erlernte Fähigkeiten bzw. erlerntes Wissen (häufig als "intelligentes Verhalten" bezeichnet) ohne Steuerungsnotwendigkeit wiederholt abzurufen und ggf. verbessern zu können. Insbesondere wird dabei häufig versucht, menschliche Entscheidungsstrukturen maschinell nachzubilden, um Systeme einen Grad an Eigenständigkeit zu verschaffen.'
    },
    {
      id: 3,
      categoryId: [1, 3],
      term: 'ADM-Systeme',
      definition: 'Beschreibt ganz allgemein und bereichsübergreifend Systeme oder Programme zur algorithmischen Entscheidungsfindung (Algorithm Decision Making), insbesondere zur Bewertung von Risiken (z. B. in der Banken- oder Versicherungsbranche). Die Systeme können auf vor- bzw. eingegebenen Datensätzen oder Algorithmen basieren, in einem höheren Entwicklungsstadion jedoch auch selbstlernend sein.'
    },
    {
      id: 4,
      categoryId: [1, 3],
      term: 'Algorithmus',
      definition: 'Algorithmus beschreibt eine eindeutige Handlungsanweisung zur Lösung eines vorgegebenen Problems. Damit lassen sich Algorithmen mathematisch auch als Rechenvorgang sich wiederholender Schemata bezeichnen, die anhand eines vorgegebenen Lösungsplans in Einzelschritten deterministisch (d.h. der nächste Rechenschritt ist anhand des Lösungsplans immer klar vorgegeben) Eingabedaten in Ausgabedaten umwandeln. Wenngleich Algorithmen auch in menschlicher Sprache formuliert werden können, spielen sie in der Informatik eine besondere Rolle und stellen eine Grundlage der maschinellen Programmierung dar. Algorithmen müssen eindeutig determiniert sein, dürfen also bei gleicher Eingabe keine unterschiedlichen Ausgaben liefern.'
    },
    {
      id: 5,
      categoryId: [1, 3],
      term: 'maschinelles Lernen',
      definition: 'Maschinelles Lernen bezeichnet ein Teilgebiet der Künstlichen Intelligenz, bei dem Systeme künstliches "Wissen" aus gesammelten Erfahrungen "erlernen" sollen. Mithilfe von Lernalgorithmen werden hierbei komplexe Modelle entwickelt, die Vorhersagen oder Empfehlungen anhand einer Wissensrepräsentation von bereits "erlernten Trainingsdaten" mithilfe von mathematischer Wahrscheinlichkeitsrechung auf bislang unbekannte Daten übertragen können.'
    },
    {
      id: 6,
      categoryId: [1, 3],
      term: 'Wie Systeme lernen',
      definition: 'Beim maschinellen Lernen wird zwischen unterschiedlichen algorithmischen Ansätzen unterschieden. In Grobform lässt sich dabei das <b> überwachte Lernen (supervised learning) </b> vom <b>unüberwachten Lernen (unsupervised learning) </b> unterscheiden. Während beim überwachten Lernen eine Funktion aus gegebenen Ein-/Ausgabepaaren lernt und den korrekten Funktionswert von einem Lehrenden bereitgestellt bekommt, erzeugt der Algorithmus beim unüberwachten Lernen für die Eingaben ein statistisches Modell, das diese erkennt, Kategorien und Zusammenhänge erschließt und hieraus Vorhersagen ermöglicht werden. Die beiden Grobformen können noch detaillierter in semi-supervised, reinforcement oder active learning unterteilt werden. Weitere Informationen zu lernenden Systemen finden Sie in entsprechender Fachliteratur.'
    },
    {
      id: 7,
      categoryId: [1, 3],
      term: 'nicht-menschlicher Agent',
      definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 8,
      categoryId: [1, 3],
      term: 'Dual Use',
      definition: 'Dual Use (dt. Doppelverwendungsfähigkeit) bezeichnet die prinzipiell vorhandene Möglichkeit, materielle oder immaterielle Güter neben dem eigentlichen angedachten Einsatzzweck missbräuchlich verwenden zu können. Dies wird insbesondere bei der Verwendung von "zivilen Gütern" für militärsiche Zwecke relevant und findet sich bspw. bei Luftfahrt- und Schiffseletronik regelmäßig. Durch eine mögliche missbräuchliche Verwendung entstehen auch bei der Entwicklung von KI- bzw. ADM-Systemen zunehmend ethische Konfliktsituationen, denen sich Forschende stellen und das vorhandende Risiko einer missbräuchlichen Verwendung bereits im Entwicklungsstadium reflektieren und in Abwägungsentscheidungen einbeziehen müssen.'
    },
    {
      id: 9,
      categoryId: [1, 3],
      term: 'Lethal Autonomous Weapon Systems (LAWS)',
      definition: '(dt. Tötliche autonome Waffensysteme) bezeichnet automatisierte Waffensysteme, die (militärische) Ziele mithilfe von Künstlicher Intellizeng ohne menschliche Einwirkung auswählen und angreifen können.'
    },
    {
      id: 10,
      categoryId: [1, 4],
      term: 'Anonyme Daten',
      definition: 'Dieser rechtlich nicht ausdrücklich bestimmte und daher nur negativ definierbare Begriff vollzieht eine sprachliche <b> Abgrenzung </b> zu sog. <b> personenbezogenen Daten </b> i.S.d. Datenschutz-Grundverordnung (vgl. Art. 4 Nr. 1 DSGVO). Dabei ist zu beachten, dass nach höchstrichterlicher Rechtsprechung einerseits ein sog. "relativer Personenbezug" gefordert wird, andererseits bereits die Möglichkeit zur Herstellung des Personenbezugs für den jeweils Verantwortlichen und damit die rein theoretische "Personenbeziehbarkeit" (z. B. durch Einsatz zumutbarer Technik(en), mögliche Hinzuziehung Dritter, Erwirkung/Vollzug von Gerichtsurteilen) ausreicht und damit das Vorliegen anonymer Daten ausschließt. Ein Abgrenzungsproblem stellt sich auch zur <b> Pseudonymisierung </b> (vgl. Art. 4 Nr. 5 DSGVO), welche lediglich ein technisches oder organisatorisches Verfahren zur Verhinderung oder Erschweung der Herstellung eines Personenbezugs beschreibt, nicht jedoch dessen generelle Aufhebung voraussetzt oder gar bewirkt (vgl. ErwGr 25, 28, 29 zur DSGVO). In digitalen (Online-) Zusammenhängen können Daten immer seltener als "anonym" bezeichnet werden, da die Herstellung eines Personenbezugs nach herrschender Meinung z. B. bereits über IP-Adressen möglich sein soll.'
    },
    {
      id: 11,
      categoryId: [1, 4],
      term: 'Personenbezogene Daten',
      definition: 'Der Begriff der <i> personenbezogenen Daten </i> ist in Art. Nr. 1 DSGVO als "Information, die sich auf eine <b> identifizierte oder identifizierbare natürlich Person </b> beziehen" gesetzliche definiert. Als identifizierbar bezeichnet die DSGVO eine natürliche Person, "die <b> direkt oder indirekt </b>, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann".',
    },
    {
      id: 12,
      categoryId: [1, 4],
      term: 'Technisch-Organisatorische Maßnahmen (TOMs)',
      definition: 'TOMs sind ein wesentlicher Bestandteil einer DSGVO-konformen Datenverarbeitung, insbesondere für die <b> Sicherheit der Datenverarbeitung </b> (Art. 32 DSGVO). Geeignete TOMs können z. B. sein: Datenminimierung, Pseudonymisierung, Verschlüsselung, Maßnahmen zur Sicherstellnug der Vertraulichkeit und Integrität sowie zur Verfügbarkeit und Belastbarkeit der Systeme, Verfahren zur Gewährleistung von Transparenz etc. (Überprüfung/Evaluierung/Bewertung), ErwGr 78. Die Intensität dieser Maßnahmen richtet sich nach dem <b> voraussichtlichen Risiko </b> für die Rechte und Freiheiten natürlicher Personen und einem hieran anzupassenden <b> Schutzniveau </b> (vgl. Art. 32 Abs. 2 DSGVO). TOMs stellen nach herrschender Meinung "geeignete Garantien" im Sinne der DSGVO dar.'
    },
    {
      id: 13,
      categoryId: [1, 4],
      term: 'Einwilligung',
      definition: 'Die Einwilligung ist die vom DSGVO-Verordnungsgeber intendierte <b> Grundform </b> einer <b> Rechtsgrundlage zur Datenverarbeitung </b> ("Verbot mit Erlaubnisvorbehalt"), vgl. Art. 6 Abs. 1 lit. a. Zwar ist die DSGVO-Einwilligung nicht unbedingt "schriftlich" zu erteilen, jedoch trifft den Datenverantwortlichen hier eine Nachweispflicht (Art. 7 Abs. 1 DSGVO). Das Ersuchen um eine wirsamke (schriftliche) Einwilligung muss in verständlicher und einfacher Sprache erfolgen. Die Einwilligung ist <b> jederzeit mit Wirkung für die Zukunft frei wiederruflich </b> (Art. 7 Abs. 3), was mit Unsicherheiten und Kalkulationsrisiken beim Datenverantwortlichen einhergehen kann. Bei der Erteilung gilt das sog. "Koppelungsverbot", d.h. eine vertraglich geschuldete (Dienst-)Leistung darf grundsätzlich nicht von einer Überlassung von Daten, die für die Erbringung dieser Leistung nicht unbedingt notwendig sind, abhängig gemacht werden. Eine wirksame Einwilligung muss "informiert" erfolgen, d.h. der Erklärende muss zuvor Informationen zur Datenverarbeitung nach Art. 12 ff. DSGVO (nachweislich) erhalten. Besondere Bedingungen gelten für <b> Kinder und Jugendliche bis zum 16. Lebensjahr </b> (Zustimmung der Eltern), Art. 8 DSGVO. Die Verarbeitung <b> sensibler Daten </b> setzt grundsätzlich immer eine Einwilligung des Betroffenen voraus (Art. 9 DSGVO).'
    },
    {
      id: 14,
      categoryId: [1, 4],
      term: 'sensible Daten',
      definition: 'In der DSGVO sind besondere Kategorien personenbezogener Daten in Art. 9 Abs. 1 definiert. Eine Erhebung dieser "sensiblen Daten" ist nur mit einer Ausnahme nach Art. 9 Abs. 2 DSGVO zulässig. Zu diesen besonderen Kategorien gehören Daten, aus denen rassische und ethische Herkunft, politische Meinungen, religiöse oder weltanschauliche Überzeugungen oder Gewerkschaftszugehörigkeiten oder die sexuelle Orientierung hervorgehen. Zudem sind hiervon genetische und biometrische Daten sowie Gesundheitsdaten umfasst.  '
    },
    {
      id: 15,
      categoryId: [1, 4],
      term: 'Datenrechtliches Risiko',
      definition: 'Beschreibt das <b> Risiko für die Rechte und Freiheiten natürlicher Personen </b> i.S.v. Art. 35 DSGVO. Dabei sind die sich aus Art. 2 Abs. 1 DSGVO ergebenen Persönlichkeitsrechte, hier in Form des Rechts auf <b> informationelle Selbstbestimmung </b> gemeint. Der Begriff wurde bereits anlässlich des sog. "Volkszählungsurteils" des Bundesverfassungsgerichts (BVerfGE 65, 1) geprägt. Feststellung, Analyse und Bewertung eines solchen Risiko sind wesentlicher Bestandteil einer <b> Datenschutz-Folgenabschätzung </b>, welche bei einem voraussichtlich hohen Risiko vor Aufnahme einer Datenverarbeitung vorzunehmen ist.'
    },
    {
      id: 16,
      categoryId: [1, 4],
      term: 'Pseudonymisierung',
      definition: 'Die Pseudonymisierung stellt die stärkste technisch-organisatorische Maßnahme zur Verringerung eines bestehenden Risikos und zur Gewährleistung eines angemessenen Schutzniveaus dar (vgl. Art. 32 Abs. 1 lit, a, ErwGr 28). In ihrer extremsten Form grenzt sie unmittelbar an die Anonymisierung, unterscheidet sich jedoch von dieser insofern, als dort ein Personenbezug nur unter einem zusätzlichen, nicht mehr zumutbaren Aufwand herstellbar ist. Für eine Pseudonymisierung bedarf es jedoch lediglich des Erfordernisses, dass die <b> Zuordnung </b> zu einer Person <b> "ohne Hinzuziehung zusätzlicher Informationen" nicht möglich </b> sein darf (vgl. Art. 4 Nr. 5 DSGVO). In der Regel dürften sich diese zusätzlichen Informationen regelmäßig in der Sphäre des Datenverantwortlichen befinden. daher muss dieser durch eine getrennte, nur mit erheblichem (technischen oder personellen) Aufwand wieder zusammenführbare Aufbewahrung der Datensätze und/oder sonstige TOMs einer unkontrollierten Zusammenführung entgegenwirken (vgl. ErwGr 29 zur DSGVO).'
    },
    {
      id: 17,
      categoryId: [1, 4],
      term: 'Privacy by Design',
      definition: 'Dieses in <b> Art. 25 Abs. 1 DSGVO </b> kodifizierte Institut des modernen Datenschutzrechts beschreibt ein erweitertes Verständnis des Datenschutzes in Hinblick auf eine frühzeitige technische <b> Implementierung </b> datenschützender Maßnahmen und Anwendungen bereits im <b> Entwicklungsstadium </b> von Produkten oder Dienstleistungen. Dabei bindet das Prinzip - entgegen der in der DSGVO eigentlich vorherrschenden Dogmatik, jedoch folgerichtig - nicht nur den Datenverantwortlichen, sondern ebenfalls die <b> Hersteller und Entwickler </b>, wobei der Verordnungsgeber hier konsequenterweise eine offene Formulierung wählt ( <i> "sollten...ermutigt werden" </i>, vgl. ErwGr 78 zur DSGVO). Wesentlicher Maßstab und zentrales Merkmal zur Beurteilung einer "gebührenden Berücksichtigung" dieser datenschützenden Vorgabe ist der zum Zeitpunkt der Entwicklung anerkannte "Stand der Technik".'
    },
    {
      id: 18,
      categoryId: [1, 4],
      term: 'Privacy by Default',
      definition: 'Als Annex zu dem Grundsatz von <i> Privacy by Design </i> besteht das in <b> Art.25 Abs. 2 DSGVO </b> geregelte Prinzip von <i> Privacy by Default </i>. Es bedeutet für den Datenverantwortlichen, dass datenschützende <b> Voreinstellungen </b>, die in der jeweiligen Anwendung implementiert sind, in Form der datensparsamsten Einstellung (z. B. Setzen lediglich notwendiger Cookies) <b> ohne weitere Konfiguration oder Änderung </b> von Einstellung bereits zum <b> Beginn der Sitzung </b> zum Einsatz kommen. Jedoch sollte sich der Ansatz auch sitzungsübergreifend auf nutzerdefinierte, gerätespezifische (ggfs. datensparsame) Voreinstellungen erstrecken. Ebenso wie das Prinzip <i> Privacy by Design </i> bezieht sich auch dieser Grundsatz zunächst zwar nur auf Datenverantwortliche, d.h. BetreiberInnen der Anwendung oder des Tools. Über ErwGr 78 zur DSGVO werden jedoch auch <b> Hersteller und Entwickler </b> eingebunden und zur Schaffung technischer Möglichkeiten und Systemvoraussetzungen zwecks Einhaltung der Datenschutzpflichten (der datenrechtlich verantwortlichen BetreiberInnen) angehalten.'
    },
    {
      id: 19,
      categoryId: [1, 4],
      term: 'Embedded Content',
      definition: 'Inhalte von <b>Drittanbietern</b>, die auf einer Website (oder auch sonstigen Tools oder Plattformen z. B. Apps, Software) eingebunden werden. Oftmals dienen solche Content-Integrationen der Veranschaulichung, Erläuterung oder Erklärung (z. B. Gesetzeslink). Dabei handelt es sich um eine <b> digitale Verknüpfung </b >, die normalerweise in Form eines < b > Hyperlinks < /b> eingebunden wird. Die eingebundenen Datei wird somit nicht auf eigenen Webservern abgelegt, sondern per Mausklick auf den verlinkten Content zugegriffen. Dabei sind auf Formen der Einbindung denkbar und technisch ohne weiteres machbar, wo sich NutzerInnen einer Einbeziehung fremder Inhalte überhaupt nicht bewusst sind.',
    },
    {
      id: 20,
      categoryId: [1, 3, 4],
      term: 'BIAS',
      definition: 'Die <b> Verzerrung </b> als <b> systematischer Fehler </b> einer Schätzfunktion in der Schätztheorie, einem Teilgebiet der mathematischen Statistik. Diese wird gemessen mittels Kennzahl als Eigenschaft einer <b> Schätzfunktion </b>, welche die systematische Über- oder Unterschätzung der Schätzfunktion quantifiziert. Erwartungstreue Schätzfunktionen haben per Definition eine Verzerrung von 0. Eine technische Verzerrung kann <b> systematisch </b> oder auf <b> zufällig </b> entstehen (z. B. falsch/nicht geeichte Waage). Im Sprachgebrauch der digitalen Ethik beschreibt BIAS normativ ein psitives oder negatives Vorurteil bzgl. einer Gruppe, welches sich (z. B. beim Einsatz von ADM oder KI) systematisch und nicht nur im Einzelfall auswirkt. Aus rechtlicher Perspektive geht es dabei meist um die Einhaltung des Grundsatzes der Nicht-Diskriminierung nach Art. 3 GG. Dieser kann durch Benachteiligung von bestimmten Nutzergruppen durch das erzielte Ergebnis verletzt sein.',
    },
    {
      id: 21,
      categoryId: [1, 4],
      term: 'Digitale Barrierefreiheit',
      definition: 'Digital barrierefrei sind Angebote, die <b> unabhängig von Einschränkungen, technischen Möglichkeiten oder Fähigkeiten der NutzerInnen </b> angewendet werden können. Dies schließt Menschen mit gesundheits-, technik- oder altersbedingten Einschränkungen ein. Aber auch NutzerInnen oder personelle Einschränkungen sollen z. B. nicht gezwungen werden, bei Abruf von Angeboten dieselbe Hard-/Softwarekonfiguration verwenden zu müssen wie dessen Autor (<i> technische Barrierefreiheit </i>). Neben dieser allgemeinen <b> Zugänglichkeit </b> (<i> Accessibility </i>) geht es jedoch auch um Plattformunabhängigkeit (z. B. von Betriebssystem oder Software, sofern beides standardmäßig normal funktioniert). Inhalte sollten zudem <b> überichtlich und in leicht verständlicher Sprache </b> dargestellt werden und der jeweiligen Thematik sowie der Bildung und dem intellektuellem Niveai der avisierten Zielgruppe angepasst sein. Insbesondere im <b> öffentlich-rechtlichen Bereich </b> (Behörden) ist digitale Barrierefreiheit in Hinblick auf einen bürgernahen und diskriminierungsfreien Zugang zu Leistungen (vgl. Art. 3 GG) relevant, z. B. zugunsten älterer, nicht mit modernen Kommunikationsmitteln vertrauten oder auch sozial benachteiligten Menschen.',
    },
    {
      id: 22,
      categoryId: [1, 5],
      term: 'Kritische Infrastrukturen (KRITIS)',
      definition: 'Anlagen, Systeme oder auch Teile davon, die von wesentlicher Bedeutung für die Aufrechterhaltung (existenz-)wichtiger <b> gesellschaftlicher Einrichtungen, Institutionen und Funktionen </b> (z. B. Versorgung, Gesundheit, zivile/öffentliche Sicherheit) und des wirtschaftliche oder sozialen Wohlergehens der Bevölkerung sind und deren Sötrung oder Zerstörung (auch Hacking von EDV- und Computersystemen) <b> erhebliche Auswirkungen </b> hätte, da ihre Funktionen nicht (voll) aufrechterhalten werden könnten.',
    },
    {
      id: 23,
      categoryId: [1, 5],
      term: 'Folgeschäden (Schadensersatz)',
      definition: 'Grundsätzlich besteht im Zivilrecht eine verschuldensabhängige Haftung, d.h. es muss ein schuldhaftes (vorsätzliches oder fahrlässiges) Verhalten für einen zu ersetzenden Schaden vorliegen. Dabei ist die Schadensersatzpflicht jedoch - anders als z. B. im Strafrecht - begrenzt auf den <b> adäquaten Kausalzusammenhang </b>. Demnach scheiden hier Ursachen, die nach allgemeiner Lebenserfahrung für den eintretenden Erfolg ohne Bedeutung sind und außerhalb der Wahrscheinlichkeit liegen, als schadensbegründende Ereignisse aus. Allerdings ist diese Entscheidung objektiv (d.h. ungeachtet der handelnden Person) und rückschauend (z. B. nach damaligem Stand der Technik) zu treffen. Dass der Schaden nur <b> mittelbar </b>, also nicht direkt durch einen Fehler des Handelnden eingetreten ist, <b> hindert </b> die adäquate Ursächlichkeit dabei <b> grundsätzlich nicht </b>. Im Produkthaftungsrecht erfährt der Gedanke des Folgeschadens weitere Relevanz und eine besondere Ausformung, da hier eine Haftung für Sachschäden insofern begrenzt ist, als lediglich andere Rpdoukte als das schadensverursachende haftungsrechtlich gesichtert sind (§ 1 Abs. 1 S. 2 ProdHG).',
    },
    {
      id: 24,
      categoryId: [1, 5],
      term: 'Drittwirkung von Grundrechten',
      definition: 'Nach der verfassungsrechtlichen Grundkonzeption richten sich (Individual-)<b>Grundrechte</b> nur <b> gegen den Staat </b>, da sie dem Einzelnen einen Freiheitsbereich diesem gegenüber sichern sollen (vgl. Art. 1 Abs. 3 GG, Ausn.: Art. 9 Abs. 3 GG). Daüberhinaus erhalten diese grundrechtlich verankerten Wertungen auch Bedeutung bei der Auslegung allgemeiner zivilrechtlicher Normen (z. B. Treu und Glaube, § 242 (welches Gesetz?)) sowie unbestimmter Rechtsbegriffe (z. B. Boykottaufruf Privater entgegen Art. 5 GG, Verletzung der Intimsphäre durch Medien gg. Art. 1,2 GG). Insbesondere bei <b> wirtschaftlichen Monopol- und Machstellungen </b> können die grundrechtlichen Prinzipien und Positionen Eingang ins <b> Privatrecht </b> finden. Dies gilt immer weniger für das fiskalische handeln öffentlich-rechtlicher Körperschaften, aktuell umso mehr für global agierende Internetportale und -konzerne, welche aufgrund (faktisch) bestehender Monopolstellungen durch eigene Maßnahmen oder Regelungen grundlegende Fragen zur <b> gesellschaftlichen Teilhabe </b> von NutzerInnen eigentständig, wenn auch unter zunehmender Einflussnahme und stetigen Regulierungsversuchen des Gesetzgebers, zu entscheiden vermögen (z. B. "Gemeinschaftsstandards" bei Facebook).',
    },
    {
      id: 25,
      categoryId: [1, 4, 5],
      term: 'Datensicherheit',
      definition: 'Datensicherheit ist das technische Ziel, Daten jeglicher Art in ausreichendem Maß gegen <b> Manupulation, Verlust, unberechtigte Kenntnisnahme </b> durch Dritte <b> oder andere Bedrohungen </b> zu sichern. Im Kontext des Datenschutzes ist gemäß Art. 32 DSGVO die Datensicherheit durch die Umsetzung geeigneter TOMs zu gewährleisten. In diesem Zusammenhang ist es also auch die Aufgabe des Datenschutzes, Datensicherheit personenbezogener Daten zu gewährleisten. Datensicherheit ist somit auch ein Datenschutzziel, welches durch entsprechende Datenschutzmaßnahmen erreicht werden soll (Art. 5 Abs. 1 lit. f. DSGVO).',
    },
    {
      id: 26,
      categoryId: [1, 4, 5],
      term: 'Datenschutz',
      definition: 'Datenschutz soll den <b> Schutz des Bürgers </b> vor Beeinträchtigungen seiner <b> Privatsphäre </b> durch unbefugte Erhebung, Speicherung oder Weitergabe personenbezogener Daten gewährleisten. Datenschutz möchte den Wert der Privatheit schützen, damit eine Person noch immer das <b> Recht auf informationelle Selbstbestimmung </b> (Art. 2 Abs. 1 GG i.V.m. Art. 1 Abs. 1 GG) haben kann. Ein Grundsatz, der nach der DSGVO hierzu beitragen soll, ist <i> Privacy by Design </i>. ',
    },
    {
      id: 27,
      categoryId: [1, 4],
      term: 'Technikfolgenabschätzung',
      definition: 'Die Technikfolgenabschätzung umfasst eine Untersuchung der Chancen und Risiken sowie die gesellschaftlichen Folgen technischer Neuerungen. Hierbei können die Auswirkungen auf der Ebene der Gesellschaft, Umwelt und Politik unterschieden werden. Zu den Zielen gehören neben einer Früherkennung der Chancen und Probleme auch eine Konfliktprävention in Richtung Mediation und eine Herausarbeitung von Werten.',
    },
    {
      id: 28,
      categoryId: [1, 4],
      term: 'Repräsentativität (von Daten)',
      definition: 'Datenrepräsentativität ist gegeben, wenn die Daten stellvertretend für die Grundgesamtheit stehen und ohne systematische Fehler auf die Grundgesamtheit skaliert werden können. Durch eine Repräsentativität der Daten soll <i> BIAS </i> vermieden werden. ',
    },
    {
      id: 29,
      categoryId: [1, 4, 5],
      term: 'schutzbedürftige Gruppe',
      definition: 'Eine schützbedürfige Gruppe bezeichnet natürliche Personen, die aufgrund persönlicher, physischer, psychischer, sozialer oder kultureller Einschränkungen einem erhöhten Risiko ausgesetzt sind, Benachteiligungen zu erfahren. Hierunter fallen im Anwendungsbereich der DSGVO insbesondere Kinder und Jugendliche.',
    },
  ],
  categories: [
    {
      id: 1,
      name: 'Alle',
      color: 'grey',
    },
    {
      id: 2,
      name: 'ELSI-SAT',
      color: 'primary'
    },
    {
      id: 3,
      name: 'Künstliche Intelligenz',
      color: 'success'
    },
    {
      id: 4,
      name: 'Datenschutz',
      color: 'warning'
    },
    {
      id: 5,
      name: 'Gesetzliche Grundlagen',
      color: 'danger'
    },
  ],
}
