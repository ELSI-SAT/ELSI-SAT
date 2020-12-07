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
      term: 'Technikfolgenabschätzung',
      definition: 'Als Technikfolgenabschätzung wird ein Teilgebiet der Technikphilosophie verstanden, das sich mit der Beobachtung und Analyse von Technologien und deren Auswirkungen auf gesellschaftliche Entwicklungen befasst. Dabei steht regelmäßig die Auseinandersetzung mit (potentiellen) Chancen und Risiken der Technologie in Hinblick auf gesellschaftliche Verhaltensweisen im Vordergrund.'
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
      term: 'Art. 3 GG',
      definition: '1. Alle Menschen sind vor dem Gesetz gleich. 2. Männer und Frauen sind gleichberechtigt. Der Staat fördert die Durchsetzung der Gleichberechtigung von Frauen und Männern und wirkt auf die Beseitigung bestehender Nachteile hin. 3. Niemand darf wegen seines Geschlechts, seiner Abstammung, seiner Rasse, seiner Sprache, seiner Heimat und Herkunft, seines Glaubens, seiner religiösen oder politischen Anschauungen benachteiligt oder bevorzugt werden. Niemand darf wegen seiner Behinderung benachteiligt werden.'
    },
    {
      id: 6,
      categoryId: [1, 3],
      term: 'Ethics by Design',
      definition: 'Ethics by Design bezeichnet ein Forschungsfeld, in dem es darum geht, ethische Prozesse bei der Konstruktion, Entwicklung  und Gestaltung von Technologien zu implementieren und deren mögliche Konsequenzen zu antizipieren. Beispielsweise könnte eine smarte Spielpuppe mit einem Ethics by Design-Ansatz so konfiguriert werden, dass die Gespräche mit dem Kind privat bleiben; das heißt, nicht von Fremden abgehört werden können und nicht an die Hersteller weitergegeben werden.'
    },
    {
      id: 7,
      categoryId: [1, 3],
      term: 'Art. 4. Abs. 7 DSGVO',
      definition: '"Verantwortlicher" die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht der Mitgliedstaaten vorgegeben, so können der Verantwortliche beziehungsweise die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden;'
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
      term: 'Art. 26 DSGVO',
      definition: '1. Legen zwei oder mehr Verantwortliche gemeinsam die Zwecke der und die Mittel zur Verarbeitung fest, so sind sie gemeinsam Verantwortliche. Sie legen in einer Vereinbarung in transparenter Form fest, wer von ihnen welche Verpflichtung gemäß dieser Verordnung erfüllt, insbesondere was die Wahrnehmung der Rechte der betroffenen Person angeht, und wer welchen Informationspflichten gemäß den Artikeln 13 und 14 nachkommt, sofern und soweit die jeweiligen Aufgaben der Verantwortlichen nicht durch Rechtsvorschriften der Union oder der Mitgliedstaaten, denen die Verantwortlichen unterliegen, festgelegt sind. In der Vereinbarung kann eine Anlaufstelle für die betroffenen Personen angegeben werden. 2. Die Vereinbarung gemäß Absatz 1 muss die jeweiligen tatsächlichen Funktionen und Beziehungen der gemeinsam Verantwortlichen gegenüber betroffenen Personen gebührend widerspiegeln. Das wesentliche der Vereinbarung wird der betroffenen Person zur Verfügung gestellt. 3. Ungeachtet der Einzelheiten der Vereinbarung gemäß Absatz 1 kann die betroffene Person ihre Rechte im Rahmen dieser Verordnung bei und gegenüber jedem einzelnen der Verantwortlichen geltend machen.'
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
      definition: 'Der Begriff der <i> personenbezogenen Daten </i> ist in Art. Nr. 1 DSGVO als "Information, die sich auf eine <b> identifizierte oder identifizierbare natürlich Person </b> beziehen" gesetzlich definiert. Als identifizierbar bezeichnet die DSGVO eine natürliche Person, "die <b> direkt oder indirekt </b>, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann".',
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
      term: 'Sensible Daten',
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
    {
      id: 30,
      categoryId: [1, 4, 5],
      term: 'Art. 8 Abs. 1 DSGVO',
      definition: 'Gilt Artikel 6 Absatz 1 Buchstabe a bei einem Angebot von Diensten der Informationsgesellschaft, das einem Kind direkt gemacht wird, so ist die Verarbeitung der personenbezogenen Daten des Kindes rechtmäßig, wenn das Kind das sechzehnte Lebensjahr vollendet hat. Hat das Kind noch nicht das sechzehnte Lebensjahr vollendet, so ist diese Verarbeitung nur rechtmäßig, sofern und soweit diese Einwilligung durch den Träger der elterlichen Verantwortung für das Kind oder mit dessen Zustimmung erteilt wird. Die Mitgliedstaaten können durch Rechtsvorschriften zu diesen Zwecken eine niedrigere Altersgrenze vorsehen, die jedoch nicht unter dem vollendeten dreizehnten Lebensjahr liegen darf.',
    },
    {
      id: 31,
      categoryId: [1, 4, 5],
      term: 'Art. 8 Abs. 2 DSGVO',
      definition: 'Der Verantwortliche unternimmt unter Berücksichtigung der verfügbaren Technik angemessene Anstrengungen, um sich in solchen Fällen zu vergewissern, dass die Einwilligung durch den Träger der elterlichen Verantwortung für das Kind oder mit dessen Zustimmung erteilt wurde.',
    },
    {
      id: 32,
      categoryId: [1, 4, 5],
      term: 'Art. 9 Abs. 2 DSGVO',
      definition: 'Absatz 1 gilt nicht in folgenden Fällen: a) Die betroffene Person hat in die Verarbeitung der genannten personenbezogenen Daten für einen oder mehrere festgelegte Zwecke ausdrücklich eingewilligt, es sei denn, nach Unionsrecht oder dem Recht der Mitgliedstaaten kann das Verbot nach Absatz 1 durch die Einwilligung der betroffenen Person nicht aufgehoben werden, b) die Verarbeitung ist erforderlich, damit der Verantwortliche oder die betroffene Person die ihm bzw. ihr aus dem Arbeitsrecht und dem Recht der sozialen Sicherheit und des Sozialschutzes erwachsenden Rechte ausüben und seinen bzw. ihren diesbezüglichen Pflichten nachkommen kann, soweit dies nach Unionsrecht oder dem Recht der Mitgliedstaaten oder einer Kollektivvereinbarung nach dem Recht der Mitgliedstaaten, das geeignete Garantien für die Grundrechte und die Interessen der betroffenen Person vorsieht, zulässig ist, c) die Verarbeitung ist zum Schutz lebenswichtiger Interessen der betroffenen Person oder einer anderen natürlichen Person erforderlich und die betroffene Person ist aus körperlichen oder rechtlichen Gründen außerstande, ihre Einwilligung zu geben, d) die Verarbeitung erfolgt auf der Grundlage geeigneter Garantien durch eine politisch, weltanschaulich, religiös oder gewerkschaftlich ausgerichtete Stiftung, Vereinigung oder sonstige Organisation ohne Gewinnerzielungsabsicht im Rahmen ihrer rechtmäßigen Tätigkeiten und unter der Voraussetzung, dass sich die Verarbeitung ausschließlich auf die Mitglieder oder ehemalige Mitglieder der Organisation oder auf Personen, die im Zusammenhang mit deren Tätigkeitszweck regelmäßige Kontakte mit ihr unterhalten, bezieht und die personenbezogenen Daten nicht ohne Einwilligung der betroffenen Personen nach außen offengelegt werden, e) die Verarbeitung bezieht sich auf personenbezogene Daten, die die betroffene Person offensichtlich öffentlich gemacht hat, f) die Verarbeitung ist zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder bei Handlungen der Gerichte im Rahmen ihrer justiziellen Tätigkeit erforderlich, g) die Verarbeitung ist auf der Grundlage des Unionsrechts oder des Rechts eines Mitgliedstaats, das in angemessenem Verhältnis zu dem verfolgten Ziel steht, den Wesensgehalt des Rechts auf Datenschutz wahrt und angemessene und spezifische Maßnahmen zur Wahrung der Grundrechte und Interessen der betroffenen Person vorsieht, aus Gründen eines erheblichen öffentlichen Interesses erforderlich, h) die Verarbeitung ist für Zwecke der Gesundheitsvorsorge oder der Arbeitsmedizin, für die Beurteilung der Arbeitsfähigkeit des Beschäftigten, für die medizinische Diagnostik, die Versorgung oder Behandlung im Gesundheits- oder Sozialbereich oder für die Verwaltung von Systemen und Diensten im Gesundheits- oder Sozialbereich auf der Grundlage des Unionsrechts oder des Rechts eines Mitgliedstaats oder aufgrund eines Vertrags mit einem Angehörigen eines Gesundheitsberufs und vorbehaltlich der in Absatz 3 genannten Bedingungen und Garantien erforderlich, i) die Verarbeitung ist aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit, wie dem Schutz vor schwerwiegenden grenzüberschreitenden Gesundheitsgefahren oder zur Gewährleistung hoher Qualitäts- und Sicherheitsstandards bei der Gesundheitsversorgung und bei Arzneimitteln und Medizinprodukten, auf der Grundlage des Unionsrechts oder des Rechts eines Mitgliedstaats, das angemessene und spezifische Maßnahmen zur Wahrung der Rechte und Freiheiten der betroffenen Person, insbesondere des Berufsgeheimnisses, vorsieht, erforderlich, oder	j) die Verarbeitung ist auf der Grundlage des Unionsrechts oder des Rechts eines Mitgliedstaats, das in angemessenem Verhältnis zu dem verfolgten Ziel steht, den Wesensgehalt des Rechts auf Datenschutz wahrt und angemessene und spezifische Maßnahmen zur Wahrung der Grundrechte und Interessen der betroffenen Person vorsieht, für im öffentlichen Interesse liegende Archivzwecke, für wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gemäß Artikel 89 Absatz 1 erforderlich..',
    },
    {
      id: 33,
      categoryId: [1, 4, 5],
      term: 'Art. 22 Abs. 1 DSGVO',
      definition: 'Die betroffene Person hat das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt.',
    },
    {
      id: 34,
      categoryId: [1, 4, 5],
      term: 'Datenschutz-Folgenabschätzung',
      definition: 'Die DSGVO regelt in Art. 35, Abs. 1 zur Datenschutz-Folgenabschätzung: "Hat eine Form der Verarbeitung, insbesondere bei Verwendung neuer Technologien, aufgrund der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung voraussichtlich ein hohes Risiko für die Rechte und Freiheiten natürlicher Personen zur Folge, so führt der Verantwortliche vorab eine Abschätzung der Folgen der vorgesehenen Verarbeitungsvorgänge für den Schutz personenbezogener Daten durch. Für die Untersuchung mehrerer ähnlicher Verarbeitungsvorgänge mit ähnlich hohen Risiken kann eine einzige Abschätzung vorgenommen werden."',
    },
    {
      id: 35,
      categoryId: [1, 4, 5],
      term: 'Art. 13 Abs. 1 lit. f DSGVO',
      definition: '[Werden personenbezogene Daten bei der betroffenen Person erhoben, so teilt der Verantwortliche der betroffenen Person zum Zeitpunkt der Erhebung dieser Daten Folgendes mit:] f) gegebenenfalls die Absicht des Verantwortlichen, die personenbezogenen Daten an ein Drittland oder eine internationale Organisation zu übermitteln, sowie das Vorhandensein oder das Fehlen eines Angemessenheitsbeschlusses der Kommission oder im Falle von Übermittlungen gemäß Artikel 46 oder Artikel 47 oder Artikel 49 Absatz 1 Unterabsatz 2 einen Verweis auf die geeigneten oder angemessenen Garantien und die Möglichkeit, wie eine Kopie von ihnen zu erhalten ist, oder wo sie verfügbar sind.',
    },
    {
      id: 37,
      categoryId: [1, 4, 5],
      term: 'Art. 7 Abs. 3 DSGVO',
      definition: 'Die betroffene Person hat das Recht, ihre Einwilligung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. Die betroffene Person wird vor Abgabe der Einwilligung hiervon in Kenntnis gesetzt. Der Widerruf der Einwilligung muss so einfach wie die Erteilung der Einwilligung sein.',
    },
    {
      id: 38,
      categoryId: [1, 4, 5],
      term: 'Art. 21 Abs. 6 DSGVO',
      definition: 'Die betroffene Person hat das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, gegen die sie betreffende Verarbeitung sie betreffender personenbezogener Daten, die zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Artikel 89 Absatz 1 erfolgt, Widerspruch einzulegen, es sei denn, die Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich.',
    },
    {
      id: 39,
      categoryId: [1, 4, 5],
      term: '§202a StGB',
      definition: 'Wer unbefugt sich oder einem anderen Zugang zu Daten, die nicht für ihn bestimmt und die gegen unberechtigten Zugang besonders gesichert sind, unter Überwindung der Zugangssicherung verschafft, wird mit Freiheitsstrafe bis zu drei Jahren oder mit Geldstrafe bestraft.',
    },
    {
      id: 40,
      categoryId: [1, 4, 5],
      term: '§303a StGB',
      definition: 'Wer rechtswidrig Daten (§ 202a Abs. 2) löscht, unterdrückt, unbrauchbar macht oder verändert, wird mit Freiheitsstrafe bis zu zwei Jahren oder mit Geldstrafe bestraft.',
    },
    {
      id: 41,
      categoryId: [1, 4, 5],
      term: '§823 Abs. 1 BGB',
      definition: 'Wer vorsätzlich oder fahrlässig das Leben, den Körper, die Gesundheit, die Freiheit, das Eigentum oder ein sonstiges Recht eines anderen widerrechtlich verletzt, ist dem anderen zum Ersatz des daraus entstehenden Schadens verpflichtet.',
    },
    {
      id: 42,
      categoryId: [1, 4, 5],
      term: '§1 Abs. 1 ProdHaftG',
      definition: 'Wird durch den Fehler eines Produkts jemand getötet, sein Körper oder seine Gesundheit verletzt oder eine Sache beschädigt, so ist der Hersteller des Produkts verpflichtet, dem Geschädigten den daraus entstehenden Schaden zu ersetzen. Im Falle der Sachbeschädigung gilt dies nur, wenn eine andere Sache als das fehlerhafte Produkt beschädigt wird und diese andere Sache ihrer Art nach gewöhnlich für den privaten Ge- oder Verbrauch bestimmt und hierzu von dem Geschädigten hauptsächlich verwendet worden ist.',
    },
    {
      id: 43,
      categoryId: [1, 4, 5],
      term: 'Art. 5 Abs. 1 lit f. DSGVO',
      definition: '[Personenbezogene Daten müssen] f) in einer Weise verarbeitet werden, die eine angemessene Sicherheit der personenbezogenen Daten gewährleistet, einschließlich Schutz vor unbefugter oder unrechtmäßiger Verarbeitung und vor unbeabsichtigtem Verlust, unbeabsichtigter Zerstörung oder unbeabsichtigter Schädigung durch geeignete technische und organisatorische Maßnahmen („Integrität und Vertraulichkeit“);',
    },
    {
      id: 44,
      categoryId: [1, 4, 5],
      term: 'Art. 32 Abs. 1 DSGVO',
      definition: 'Unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen treffen der Verantwortliche und der Auftragsverarbeiter geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten; diese Maßnahmen schließen gegebenenfalls unter anderem Folgendes ein: a) die Pseudonymisierung und Verschlüsselung personenbezogener Daten; b) die Fähigkeit, die Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit der Systeme und Dienste im Zusammenhang mit der Verarbeitung auf Dauer sicherzustellen; c) die Fähigkeit, die Verfügbarkeit der personenbezogenen Daten und den Zugang zu ihnen bei einem physischen oder technischen Zwischenfall rasch wiederherzustellen; d) ein Verfahren zur regelmäßigen Überprüfung, Bewertung und Evaluierung der Wirksamkeit der technischen und organisatorischen Maßnahmen zur Gewährleistung der Sicherheit der Verarbeitung.',
    },
    {
      id: 45,
      categoryId: [1, 4, 5],
      term: '§5a Abs. 6 BSIG',
      definition: 'Soweit es zur Wiederherstellung der Sicherheit oder Funktionsfähigkeit des informationstechnischen Systems erforderlich ist, kann das Bundesamt vom Hersteller des informationstechnischen Systems verlangen, an der Wiederherstellung der Sicherheit oder Funktionsfähigkeit mitzuwirken.',
    },
    {
      id: 46,
      categoryId: [1, 4, 5],
      term: 'Digitaler Dienst',
      definition: '„Digitale Dienste“ im Sinne des BSI-Gesetzes (§ 2 Abs. 11 BSIG) sind Dienste, die 1. Verbrauchern oder Unternehmern ermöglichen, Kauf- oder Dienstleistungsverträge mit anderen Unternehmern auf der Webseite dieser Dienste oder auch auf der Webseite eines Unternehmens, das von den Diensten bereitgestellte Rechendienste verwendet, abzuschließen (Online-Marktplätze), oder 2. Nutzern ermöglichen, Internet-Suchen auf Webseiten anhand einer Abfrage zu einem beliebigen Thema in Form eines Stichworts, einer Wortgruppe oder einer anderen Eingabe vorzunehmen, welche daraufhin Links anzeigen, über die der Suchanfrage entsprechende Inhalte abgerufen werden (Online-Suchmaschinen), oder 3. einen Zugang zu einem skalierbaren und elastischen Pool gemeinsam nutzbarer Rechenressourcen (Cloud-Computing-Dienste) ermöglichen, die nicht zum Schutz grundlegender staatlicher Funktionen eingerichtet worden sind oder für diese genutzt werden.',
    },
    {
      id: 47,
      categoryId: [1, 4, 5],
      term: '§8c Abs. 1 BSIG',
      definition: 'Anbieter digitaler Dienste haben geeignete und verhältnismäßige technische und organisatorische Maßnahmen zu treffen, um Risiken für die Sicherheit der Netz- und Informationssysteme, die sie zur Bereitstellung der digitalen Dienste innerhalb der Europäischen Union nutzen, zu bewältigen. Sie haben Maßnahmen zu treffen, um den Auswirkungen von Sicherheitsvorfällen auf innerhalb der Europäischen Union erbrachte digitale Dienste vorzubeugen oder die Auswirkungen so gering wie möglich zu halten.',
    },
    {
      id: 48,
      categoryId: [1, 4, 5],
      term: '§8b Abs. 4 BSIG',
      definition: 'Betreiber Kritischer Infrastrukturen haben die folgenden Störungen unverzüglich über die Kontaktstelle an das Bundesamt zu melden: 1.Störungen der Verfügbarkeit, Integrität, Authentizität und Vertraulichkeit ihrer informationstechnischen Systeme, Komponenten oder Prozesse, die zu einem Ausfall oder zu einer erheblichen Beeinträchtigung der Funktionsfähigkeit der von ihnen betriebenen Kritischen Infrastrukturen geführt haben, 2. erhebliche Störungen der Verfügbarkeit, Integrität, Authentizität und Vertraulichkeit ihrer informationstechnischen Systeme, Komponenten oder Prozesse, die zu einem Ausfall oder zu einer erheblichen Beeinträchtigung der Funktionsfähigkeit der von ihnen betriebenen Kritischen Infrastrukturen führen können. Die Meldung muss Angaben zu der Störung, zu möglichen grenzübergreifenden Auswirkungen sowie zu den technischen Rahmenbedingungen, insbesondere der vermuteten oder tatsächlichen Ursache, der betroffenen Informationstechnik, der Art der betroffenen Einrichtung oder Anlage sowie zur erbrachten kritischen Dienstleistung und zu den Auswirkungen der Störung auf diese Dienstleistung enthalten. Die Nennung des Betreibers ist nur dann erforderlich, wenn die Störung tatsächlich zu einem Ausfall oder einer Beeinträchtigung der Funktionsfähigkeit der Kritischen Infrastruktur geführt hat.',
    },
    {
      id: 49,
      categoryId: [1, 4, 5],
      term: '§8a Abs. 1 BSIG',
      definition: 'Betreiber Kritischer Infrastrukturen sind verpflichtet, spätestens zwei Jahre nach Inkrafttreten der Rechtsverordnung nach § 10 Absatz 1 angemessene organisatorische und technische Vorkehrungen zur Vermeidung von Störungen der Verfügbarkeit, Integrität, Authentizität und Vertraulichkeit ihrer informationstechnischen Systeme, Komponenten oder Prozesse zu treffen, die für die Funktionsfähigkeit der von ihnen betriebenen Kritischen Infrastrukturen maßgeblich sind. Dabei soll der Stand der Technik eingehalten werden. Organisatorische und technische Vorkehrungen sind angemessen, wenn der dafür erforderliche Aufwand nicht außer Verhältnis zu den Folgen eines Ausfalls oder einer Beeinträchtigung der betroffenen Kritischen Infrastruktur steht.',
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
