/*=========================================================================================
  File Name: moduleEmailState.js
  Description: Email Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  mails: [
    {
      id: 1,
      inquiry: 'Titel des Forschungsprojektes',
      subject: 'Frage-ID 001',
      message: '<p> </p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 2,
      inquiry: 'Welche (weiteren/verbundenen) Einrichtungen sind an dem Forschungsprojekt beteiligt?',
      subject: 'Frage-ID 002',
      message: '<p> Bitte nennen Sie alle beteiligten Einrichtungen sowie deren Branche (Wirtschaft, Wissenschaft, Politik etc.). </p>',
      isStarred: false, // true || true
      labels: ['Allgemein'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 4,
      inquiry: 'Bitte beschreiben Sie den Zweck des Systems und erläutern Sie, wem das Forschungsergebnis helfen oder dienen soll.',
      subject: 'Frage-ID 004',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "bigtext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 5,
      inquiry: 'Hilft oder dient das System bzw. Forschungsergebnis einer schutzbedürftigen Gruppe?',
      subject: 'Frage-ID 005',
      message: '<p></p>',
      isStarred: false, // true || true
      labels: ['Allgemein'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "followup-radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 5.1, risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'

        answer: '', // String
      },
      remark: '',
    },
    {
      id: 5.1,
      inquiry: 'Ist in das Forschungsprojekt die betroffene schutzbedürftige Gruppe involviert?',
      subject: 'Frage-ID 005.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
        ],
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 7,
      inquiry: 'Um welche Art von Mensch-Technik-Interaktion handelt es sich bei dem Forschungsprojekt?',
      subject: 'Frage-ID 007',
      message: '<p>Bitte klassifizieren Sie Ihr geplantes System in der folgenden Liste. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "checkbox", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Regelungstechnik/einfache Steuerung/Apps etc?', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'einfacher Algorithmus', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'lernender Algorithmus', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'maschinelles Lernen', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'schwache KI', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'starke KI', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
        ],
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 8,
      inquiry: 'Auf welche Art von Resultaten soll die KI abzielen?',
      subject: 'Frage-ID 008',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "checkbox", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Modell', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Empfehlung', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Klassifikation', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Vorhersage', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Entscheidung', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Handlung', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
        ],
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 9,
      inquiry: 'Wie lernt das System?',
      subject: 'Frage-ID 009',
      message: `<p>Siehe auch die Definition für <a @click.prevent="$emit('kblink', {id: 5})">"Maschinelles Lernen"</a></p>`,
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'supervised (reinforced, semi-supervised, active, self-training)', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'unsupervised', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
        ],
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 10,
      inquiry: 'In welchen Branchen soll die entwickelte Mensch-Technik-Interaktion eingesetzt werden?',
      subject: 'Frage-ID 0010',
      message: '<p>Nennen Sie bitte alle denkbaren Branchen, in denen die Mensch-Technik-Interaktion einsetzbar wäre, unabhängig des angedachten Einsatzzwecks. </p>',
      isStarred: false, // true || true
      labels: ["Allgemein"],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "checkbox", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'öffentl. Behörden', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Militär', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Energie und Umwelt', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Gesundheit und Pharma', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Information, Wissen und Kommunikation', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Mobilität und Logistik', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Banken, Finanzen u. Versicherungen', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Unterhaltung, Glücksspiel und "Gaming"', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Produzierendes Gewerbe', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Branchenübergreifend', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Sonstiges', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
        ],
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 11,
      inquiry: 'Ist ein Einsatz oder Vertrieb des zu entwickelnden Systems nach Abschluss des Forschungsprojektes geplant bzw. möglich?',
      subject: 'Frage-ID 0011',
      message: '<p></p>',
      isStarred: false, // true || true
      labels: ["Allgemein"],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 12,
      inquiry: 'Beschreiben Sie kurz, welche Interaktionen die Maschine mit Menschen ausführen soll.',
      subject: 'Frage-ID 0012',
      message: '<p></p>',
      isStarred: false, // true || true
      labels: ['Allgemein'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "bigtext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 13,
      inquiry: 'Könnte das geplante System Einfluss auf Entscheidungen haben, die einen oder mehrere Menschen betreffen?',
      subject: 'Frage-ID 0013',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 13.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 13.1,
      inquiry: 'Wie stellen Sie sicher, dass die betroffene Person/Personengruppe von einer Entscheidung des Systems nicht benachteiligt wird?',
      subject: 'Frage-ID 0013.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 15,
      inquiry: 'Erfolgt die Interaktion zwischen Mensch und Maschine unter angemessener menschlicher Kontrolle?',
      subject: 'Frage-ID 0015',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 15.1, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', followupID: 15.2, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 15.1,
      inquiry: 'Was verstehen Sie unter "angemessene menschliche Kontrolle" in Ihrem Forschungsvorhaben?',
      subject: 'Frage-ID 0015.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 15.2,
      inquiry: 'Warum sind Sie der Meinung, dass keine menschliche Kontrolle notwendig ist?',
      subject: 'Frage-ID 0015.2',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 18,
      inquiry: 'Ist das System vom Nutzer jederzeit übersteuerbar?',
      subject: 'Frage-ID 0018',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 18.1, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 18.1,
      inquiry: 'Wie stellen Sie die Übersteuerbarkeit der Maschine sicher?',
      subject: 'Frage-ID 0018.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 20,
      inquiry: 'Werden durch das zu entwickelnde Produkt personenbezogene Daten verarbeitet?',
      subject: 'Frage-ID 0020',
      message: '<p>Zur Definition von "personenbezogenen Daten" nach der DSGVO: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e1508-1-1" target="_blank">personenbezogene Daten</a>  </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      // Filter: Optional array of objects
      filter: [
        {
          title: 'Ja',
          includes: [
            'Allgemein',
            'Datenschutz'
          ],
          active: false
        },
        {
          title: 'nein',
          includes: [
            'Allgemein',
          ],
          excludes: [
            'Datenschutz',
          ],
          active: false
        },
      ],
      answer: {
        type: 'filter', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 21,
      inquiry: 'Ist bekannt, wer im praktischen Systembetrieb als Datenverantwortlicher gelten müsste oder anzusehen wäre (z.B. Entwickler/Hersteller/Betreiber/Nutzer, evtl. auch kumulativ)?',
      subject: 'Frage-ID 0021',
      message: '<p>Zur Definition eines Datenverantwortlichen nach der DSGVO: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e1508-1-1" target="_blank">Daten-Verantwortlicher</a></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 22,
      inquiry: 'Ist es denkbar, dass aus einer zunächst unpersonalisierten und vermeintlich "anonymen" Datenverarbeitung auf irgendeine Weise doch ein Personenbezug hergestellt oder rückverfolgt werden könnte (z.B. Rekonstruktion, Rückverfolgung, gerichtl. Herausgabeverfügung)?',
      subject: 'Frage-ID 0022',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz','Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 23,
      inquiry: 'Sofern mehrere Datenverarbeiter beteiligt sind, könnte eine gemeinsame Verantwortlichkeit oder einer Auftragsverarbeitung Auftragsverarbeitung bestehen?',
      subject: 'Frage-ID 0023',
      message: '<p> Zur Definition von gemeinsamer Verantwortlichkeit nach der DSGVO: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e3098-1-1" target="_blank">gemeinsame Verantwortlichkeit</a>; Zur Definition einer Auftragsverarbeitung nach der DSGVO: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e3162-1-1" target="_blank">Auftragsverarbeitung </a></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 24,
      inquiry: 'Könnten durch das zu entwickelnde Produkt Daten von Kindern verarbeitet werden (ggfs. unbeabsichtigt)?',
      subject: 'Frage-ID 0024',
      message: '<p>Zur Definition eines Kindes nach der DSGVO: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e2044-1-1" target="_blank">Kindern, d.h. unter 16-jährigen </a>  </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 24.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 24.1,
      inquiry: 'Welche "angemessenen" Anstrengungen bzw. Vorkehrungen können im System getroffen werden, um sicherzustellen, dass für ein "Kind" eine notwendige Einwilligung durch den Träger der elterlichen Verantwortung erteilt wird?',
      subject: 'Frage-ID 0024.1',
      message: '<p>Zur Einwilligung nach der DSGVO: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e2044-1-1" target="_blank">notwendige Einwilligung durch den Träger der elterlichen Verantwortung</a></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 26,
      inquiry: 'Werden in der Regel durch das zu entwickelnde Produkt sog. sensible Daten verarbeitet?',
      subject: 'Frage-ID 0026',
      message: '<p>Zur Definition von sensiblen Daten nach der DSGVO: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e2066-1-1" target="_blank">"sensible Daten"</a></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 26.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 26.1,
      inquiry: 'Besteht eine Einwilligung oder eine sonstige Ausnahme nach Art. 9 Abs. 2 DSGVO?',
      subject: 'Frage-ID 0026.1',
      message: '<p><a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e2066-1-1" target="_blank">Art. 9 Abs. 2 DSGVO<a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e2066-1-1" target="_blank">Art. 9 Abs. 2 DSGVO </a></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 0, risk_existence: 0, risk_addressing: 1},
          {name: 'Nein', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 28,
      inquiry: 'Ist bekannt, dass eine ausschließlich auf einer automatisierten Verarbeitung beruhende Entscheidung - einschließlich Profiling - grundsätzlich unzulässig ist (Art. 22 DSGVO)?',
      subject: 'Frage-ID 0028',
      message: '<p>siehe hierzu:<a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e2853-1-1" target="_blank">Art. 22 DSGVO </a> </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 29,
      inquiry: 'Erschiene wegen eines hohen datenrechtlichen Risikos für die Rechte Betroffener durch den Anwender/Nutzer eine DS-Folgenabschätzung nach Art. 35 DSGVO als sinnvoll oder wahrscheinlich?',
      subject: 'Frage-ID 0029',
      message: '<p>Zur Definition einer Datenschutzfolgenabschätzung nach der DSGVO: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e3558-1-1" target="_blank">DS-Folgenabschätzung nach (Art. 35 DSGVO) </a></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 30,
      inquiry: 'Sind technische oder organisatorische Maßnahmen bzw. Vorgaben zur Ausgestaltung des Produkts geplant, um ein datenrechtliches Risiko (i. S. v. Art. 24 DSGVO) wirkungsvoll zu minimieren (z.B. Anonymisierung, technisch-organisatorische Maßnahmen, etc.)?',
      subject: 'Frage-ID 0030',
      message: 'Zur Definition eines datenrechtlichen Risikos nach der DSGVO: <p><a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e3058-1-1" target="_blank">datenrechtliches Risiko</a>,  </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 31,
      inquiry: 'Wird die Datenverarbeitung des Produkts oder der Anwendung voraussichtlich unter Zuhilfenahme fremder/dritter Infrastruktur (Server, Open Source etc.) durch- oder ausgeführt (Art. 12, 13 Abs. 1 lit. e, 30 Abs. 1 lit. d DSGVO)?',
      subject: 'Frage-ID 0031',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 31.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 31.1,
      inquiry: 'Welche (technisch-organisatorischen) Maßnahmen werden getroffen bzw. sind geplant, um hierbei einen hinreichenden Datenschutz sowie die erforderliche Datensicherheit zu gewährleisten?',
      subject: 'Frage-ID 0031.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 33,
      inquiry: 'Finden bei Einsatz des zu entwickelnden Produkts Datenübermittlungen in EU-Drittländer, d.h. also eine grenzüberschreitende Verarbeitung (Art. 4 Nr. 23, Art. 13 Abs. 1 lit. f, Art. 30 Abs. 1 lit. e DSGVO) statt?',
      subject: 'Frage-ID 0033',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 33.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 33.1,
      inquiry: 'Welche (technisch-organisatorischen) Maßnahmen werden getroffen bzw. sind geplant, um hierbei einen hinreichenden Datenschutz und die erforderliche Datensicherheit zu gewährleisten?',
      subject: 'Frage-ID 0033.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 35,
      inquiry: 'Ist bekannt, dass die Grundsätze von Privacy by Design bzw. Privacy by Default auch für den Hersteller bzw. Entwickler des Produkts Anwendung finden?',
      subject: 'Frage-ID 0035',
      message: '<p>Definition von Privacy by Design: <a @click.prevent="$emit(\'kblink\', {id: 17})">Privacy by Design </a>, Definition von Privacy by Default: <a @click.prevent="$emit(\'kblink\', {id: 18})"> Privacy by Default </a> </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 36,
      inquiry: 'Ist bekannt, dass eine unzureichende/fehlerhafte Software-Architektur (oder auch ein entsprechendes Update) eines Produkts, das digitale Inhalte bereitstellt (sog. digital sevices/contents, auch "embedded content") Gewährleistungsansprüche auslösen kann (sog. DI-RL (EU) 2019/770)?',
      subject: 'Frage-ID 0036',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 36.1, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 36.1,
      inquiry: 'Ist bekannt, dass eine unzureichende/fehlerhafte Software-Architektur eines Produkts, das digitale Inhalte bereitstellt, bereits darin liegen kann, dass den Datenschutzgrundsätzen nicht oder nicht hinreichend Rechnung getragen wurde (z.B. Datensparsamkeit, Art. 5 Abs. 1 lit. c, Art. 25 Abs. 1 u. 2 DSGVO i.V.m. ErwG 48 DI-RL)?',
      subject: 'Frage-ID 0036.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 38,
      inquiry: 'Ist geplant, dass sämtliche personenbezogenen Daten des Nutzers ausschließlich innerhalb des Systems bleiben und in der Regel nicht für Dritte zugänglich sind?',
      subject: 'Frage-ID 0038',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 38.1, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 38.1,
      inquiry: 'Mit welchen Maßnahmen wird sichergestellt, dass Datensicherheit (Art. 5  Abs. 1 lit f, Art. 32 Abs. 1/2 DSGVO) und Datenschutz (Art. 5 Abs 1a-e) in Hinblick auf die verarbeiteten Daten gewährleistet wird (keine Manipulation/Hacks)?',
      subject: 'Frage-ID 0038.1',
      message: '<p> </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 40,
      inquiry: 'Sind in der Anwendung technische Vorkehrungen getroffen, damit ein Auskunftsverlangen über personenbezogenene Daten durch den Betroffenen unkompliziert bearbeitet werden kann?',
      subject: 'Frage-ID 0040',
      message: '<p>tbd. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 0, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 41,
      inquiry: 'Sind in der Anwendung technische Vorkehrungen getroffen, damit eine ggfs. erfolgte Einwilligung der Datenverarbeitung jederzeit unkompliziert widerrufbar ist bzw. ein Widerspruch berücksichtigt werden kann?',
      subject: 'Frage-ID 0041',
      message: '<p>Zur Definition eines Widerspruchs nach der DSGVO: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e2818-1-1" target="_blank">Widerspruch </a> </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 41.1, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 0, risk_existence: 1, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 41.1,
      inquiry: 'Wie würde der Widerspruch ggfs. (technisch-organisatorisch) umgesetzt und ausgeführt?',
      subject: 'Frage-ID 0041.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 43,
      inquiry: 'Ist Ihnen bekannt, dass die Grundsätze der DSGVO bereits in der Entwicklung eines Systems berücktigt werden müssen?',
      subject: 'Frage-ID 0043',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 0, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 44,
      inquiry: 'Planen Sie den Anwender darauf aufmerksam zu machen, dass er/sie mit einem nicht-menschlichen Agenten agiert?',
      subject: 'Frage-ID 0044',
      message: '<p> </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 44.1, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', followupID: 44.2, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 44.1,
      inquiry: 'Wird sichergestellt, dass jedem Anwender bewusst ist, dass die Maschine bestimmte Ergebnisse lediglich aufgrund einer mathematischen Annäherungsrechnung (Wahrscheinlichkeit) präsentiert?',
      subject: 'Frage-ID 0044.1',
      message: '<p> </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie','Gerechtigkeit','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 44.2,
      inquiry: 'Weshalb soll dem Anwender nicht bewusst sein, dass die Maschine bestimmte Ergebnisse lediglich aufgrund einer mathematischen Annäherungsrechnung (Wahrscheinlichkeit) präsentiert?',
      subject: 'Frage-ID 0044.2',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie','Gerechtigkeit','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 47,
      inquiry: 'Gibt es Personen oder Gruppen (z. B. Minderheiten), die durch die geplante Entwicklung oder Einführung benachteiligt sein können?',
      subject: 'Frage-ID 0047',
      message: '<p> </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie','Gerechtigkeit'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 47.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 47.1,
      inquiry: 'Wie ließe sich eine mögliche Benachteiligung rechtfertigen?',
      subject: 'Frage-ID 0047.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie','Gerechtigkeit'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 49,
      inquiry: 'Ist das zu entwickelnde Produkt geeignet, in seiner praktischen Anwendung (datenrechtliche) Verstöße gegen Gleichheitsgrundsätze fördern oder gar zu bewirken?',
      subject: 'Frage-ID 0049',
      message: '<p>Gleichheitsgrundsätze nach dem Grundgesetz: <a href="https://www.gesetze-im-internet.de/gg/art_3.html" target="_blank">Gleichheitsgrundsätze </a>  </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Gerechtigkeit'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 50,
      inquiry: 'Ist bekannt, dass auch eine zunächst "undiskriminiert gefütterte" (selbstlernende) KI eine sog. BIAS aufweisen kann, d.h. also in Entscheidungen oder Ergebnissen diskriminierende Wirkung haben kann?',
      subject: 'Frage-ID 0050',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Gerechtigkeit'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 51,
      inquiry: 'Wird im zu entwickelnden Produkt voraussichtlich der Grundsatz und das Ideal der "digitalen Barrierefreiheit" berücksichtigt/umgesetzt?',
      subject: 'Frage-ID 0051',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Autonomie','Gerechtigkeit'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 52,
      inquiry: 'Ist geplant, im Projekt Maßnahmen zur Verbesserung der Privatsphäre zu ergreifen?',
      subject: 'Frage-ID 0052',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 52.1, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 52.1,
      inquiry: 'Welche Maßnahmen sollen hierzu ergriffen werden?',
      subject: 'Frage-ID 0052.1',
      message: '<p>Bitte nennen Sie die konkreten Maßnahmen zur Verbesserung der Privatsphäre im Forschungsprojekt. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 54,
      inquiry: 'Gibt es in Ihrem Projekt einen Ansprechpartner für Frage-ID 00 zum Datenschutz (z. B. Datenschutzbeauftragter (DSB) etc.)?',
      subject: 'Frage-ID 0054',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 55,
      inquiry: 'Haben Sie innerhalb ihres Projekts ein besonderes Datenschutzmanagement eingerichtet?',
      subject: 'Frage-ID 0055',
      message: '<p> Zur Definition des Datenschutzmanagements: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE#d1e3277-1-1" target="_blank">Datenschutzmanagement </a> <p>Datenschutzmanagement </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 56,
      inquiry: 'Handelt es sich bei dem zu entwickelnden Produkt um ein IT-System bzw. um eine Anwendung von Komponenten oder Prozessen des Bundes </a>',
      subject: 'Frage-ID 0056',
      message: '<p>Zur Definition von Komponenten und Prozessen des Bundes: <a href="https://www.gesetze-im-internet.de/bsig_2009/__2.html" target="_blank">Komponenten oder Prozessen für Einrichtungen des Bundes? </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 56.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 56.1,
      inquiry: 'Sind Ihnen die hiermit verbundenen Rechten und Pflichten des Betreibers oder auch des Herstellers sowie die hiermit verbundenen Eingriffe in Betroffenenrechte bekannt?',
      subject: 'Frage-ID 0056.1',
      message: '<p>Zu den Rechten und Pflichten des Betreibers: <a href"https://www.gesetze-im-internet.de/bsig_2009/__4.html" target="_blank">Rechte und Pflichten des Bundesamtes bzw. des Betreibers </a>  , Zu den Rechten und Pflichten des Herstellers: <a href="https://www.gesetze-im-internet.de/bsig_2009/__5a.html">Herstellers </a>, Zu den Betroffenenrechten: <a href="https://www.gesetze-im-internet.de/bsig_2009/__6.html">Betroffenenrechte </a> </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 58,
      inquiry: 'Handelt es sich bei dem zu entwickelnden Produkt um ein System, welches ggfs. innerhalb Kritischer Infrastrukturen (sog. KRITIS, z.B. IT/TK, Energie, Wasser, Ernährung, Transport/Verkehr, Gesundheit, Finanz-/Versicherungswesen) eingesetzt wird oder werden kann?',
      subject: 'Frage-ID 0058',
      message: '<p>Zur Definition von Kritischen Infrastrukturen: <a href="https://www.gesetze-im-internet.de/bsig_2009/__8b.html" target="_blank">"Kritischer Infrastrukturen" </a>   </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 58.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 58.1,
      inquiry: 'Sind Ihnen die hiermit verbundenen Rechte und Pflichten des Bundesamtes bzw. des Betreibers (z.B. §§ 7a, 8a, 8b BSIG) bekannt?',
      subject: 'Frage-ID 0058.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 60,
      inquiry: 'Enthält das zu entwickelnde Produkt eigenständig technische Maßnahmen/Vorkehrungen zur Schadensvermeidung nach dem "Stand der Technik" (z.B. Aufzeichnungs-, Melde- oder Informationsvorgänge)?',
      subject: 'Frage-ID 0060',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 61,
      inquiry: 'Handelt es sich bei dem zu entwickelnden Produkt um einen "digitalen Dienst" i.S.v. § 8c BSIG?',
      subject: 'Frage-ID 0061',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 61.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 61.1,
      inquiry: 'Sind die besonderen Anforderungen an deren Anbieter bekannt?',
      subject: 'Frage-ID 0061.1',
      message: '<p>Zu den Anforderungen an Anbieter: <a href="https://www.gesetze-im-internet.de/bsig_2009/__8c.html" target="_blank">"Anbieter" </a>  </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 63,
      inquiry: 'Ist bekannt, dass nicht nur das übermäßiges Sammeln und Verarbeiten von Daten, sondern auch das rechtswidrige Löschen oder Vernichten von Daten Straftatbestände erfüllen kann?',
      subject: 'Frage-ID 0063',
      message: '<p>Zur Definition von übermäßigem Sammeln und Verarbeiten von Daten: <a href="https://www.gesetze-im-internet.de/stgb/__202a.html" target="_blank">übermäßige Sammeln und Verarbeiten von Daten </a>, zum rechtswidrigen Löschen oder Vernichten von Daten: <a href="https://www.gesetze-im-internet.de/stgb/__303a.html" target="_blank">Löschen oder Vernichten von Daten </a>   </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 64,
      inquiry: 'Ist bekannt, dass eine bzgl. Datensicherheit schlecht oder unzureichend gestaltete Software oder Anwendung Schadensersatzansprüche auslösen kann, die sich auch auf sog. Folgeschäden erstrecken können?',
      subject: 'Frage-ID 0064',
      message: '<p>Zu möglichen Schadensersatzansprüchen:<a href="https://www.gesetze-im-internet.de/bgb/__823.html">Schadensersatzansprüche </a>, Zur Definition von Folgeschäden: <a href="https://www.gesetze-im-internet.de/prodhaftg/__1.html">"Folgeschäden" </a> </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 65,
      inquiry: 'Ist bekannt, dass der Grundsatz der "Sicherheit der Verarbeitung" auch in der DSGVO normiert ist und dort durch weitere Vorgaben konkretisiert wird (Art. 5 Abs. 1 lit. f i.V.m. Art. 32 DSGVO)?',
      subject: 'Frage-ID 0065',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 66,
      inquiry: 'Untersuchen und beurteilen Sie die Qualität der verwendeten Datenquellen?',
      subject: 'Frage-ID 0066',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 66.1, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 66.1,
      inquiry: 'Wie stellen Sie die Herkunft und Qualität der verwendeten Daten sicher?',
      subject: 'Frage-ID 0066.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 68,
      inquiry: 'Planen Sie, die Kompetenzen der Mitarbeiter im Projekt im Bereich Datenschutz zu berücksichtigen und zu erweitern?',
      subject: 'Frage-ID 0068',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 69,
      inquiry: 'Sollen interne/externe Datenzugriffe im Projekt dokumentiert werden?',
      subject: 'Frage-ID 0069',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 70,
      inquiry: 'Arbeiten Sie mit bereits vorhandenen Datensätzen?',
      subject: 'Frage-ID 0070',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 71,
      inquiry: 'Interagiert das System physisch mit der Welt?',
      subject: 'Frage-ID 0071',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 71.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 71.1,
      inquiry: 'Welche physischen Schäden kann das System verursachen?',
      subject: 'Frage-ID 0071.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 73,
      inquiry: 'Kann das System kontinuierlich aktualisiert werden (Updates)?',
      subject: 'Frage-ID 0073',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 74,
      inquiry: 'Sind Teile ihres Projekts outgesourced?',
      subject: 'Frage-ID 0074',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 74.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 74.1,
      inquiry: 'Wie planen Sie die Qualität der Daten und deren Sicherheit im outgesourcten Teil sicherzustellen (vgl. Art. 28 DSGVO)?',
      subject: 'Frage-ID 0074.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 76,
      inquiry: 'Verwenden Sie externe Software/Quellcode/Daten?',
      subject: 'Frage-ID 0076',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 79,
      inquiry: 'Kann die Funktionsfähigkeit (Zuverlässigkeit der Ergebnisse) des Systems regelmäßig überprüft werden?',
      subject: 'Frage-ID 0079',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 80,
      inquiry: 'Ist es vorstellbar, das System für ethisch unerwünschte Zwecke zu entfremden (Dual Use, z. B. LAWS) ?',
      subject: 'Frage-ID 0080',
      message: '<p>Definition <a @click.prevent="$emit(\'kblink\', {id: 8})">"Dual Use"</a>.</p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 81,
      inquiry: 'Wäre es für den Antragsteller denkbar, dass eine vollständige Erklärbarkeit und Transparenz des Algorithmus nicht sicher dargestellt werden kann?',
      subject: 'Frage-ID 0081',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 81.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', followupID: 81.2, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 81.2,
      inquiry: 'Wie können Sie den Algorithmus bzw. das Ergebnis des Algorithmus dem Anwender (Laien/Nicht-Programmierer) erklärbar und transparent machen?',
      subject: 'Frage-ID 0081.2',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 81.1,
      inquiry: 'Was tun Sie, um das Risiko technisch und/oder organisatorisch so gering wie möglich zu halten?',
      subject: 'Frage-ID 0081.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 84,
      inquiry: 'Ist sichergestellt, dass die Angemessenheit und Repräsentativität in Hinblick auf (Trainings-)Daten gewährleistet ist (sog. BIAS-Vermeidung)?',
      subject: 'Frage-ID 0084',
      message: '<p>Zur Definition von BIAS: <a @click.prevent="$emit(\'kblink\', {id: 20})">BIAS</a></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Gerechtigkeit'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', followupID: 84.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 84.1,
      inquiry: 'Mit welchen Maßnahmen kann eine bessere Datenqualität hergestellt werden?',
      subject: 'Frage-ID 0084.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Gerechtigkeit'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 86,
      inquiry: 'Wäre es technisch möglich, den Code Ihres Algorithmus öffentlich darstellbar und zugänglich zu machen?',
      subject: 'Frage-ID 0086',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 87,
      inquiry: 'Soll im Projektverlauf eine Technikfolgenabschätzung erfolgen?',
      subject: 'Frage-ID 0087',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 87.1, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 87.1,
      inquiry: 'Welche Bereiche müsste eine Technikfolgenabschätzung umfassen? (Gesellschaft, Umwelt etc.)',
      subject: 'Frage-ID 0087.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 89,
      inquiry: 'Sind Mechanismen geplant, die im Falle eines Schadens Abhilfe schaffen, z.B. in Form eines Rechtsschutzes oder einer Versicherungspolice?',
      subject: 'Frage-ID 0089',
      message: '<p> </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 89.1, risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },

    {
      id: 89.1,
      inquiry: 'Welche Mechanismen sollen diese Abhilfe konkret schaffen?',
      subject: 'Frage-ID 0089.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein','Schadensvermeidung'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },

    {
      id: 91,
      inquiry: 'Halten Sie es für möglich, dass das zu entwickelnde Produkt - abgesehen von Gleichheitsgrundsätzen - weitere (Grund-)Rechte Dritter tangiert oder gar in diese eingegriffen werden könnte (sog. "Drittwirkung" von Grundrechten)?',
      subject: 'Frage-ID 0091',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Autonomie','Gerechtigkeit'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 91.1, risk_contemplation: 1, risk_existence: 1, risk_addressing: 0},
          {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 91.1,
      inquiry: 'Welche Grundrechte könnten hierbei betroffen sein (z.B. Art. 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16a, 21 GG)?',
      subject: 'Frage-ID 0091.1',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Autonomie','Gerechtigkeit'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    {
      id: 93,
      inquiry: 'Welche (technisch-organisatischen) Maßnahmen werden getroffen, um mögliche Eingriffe zu minimieren?',
      subject: 'Frage-ID 0093',
      message: '<p></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Autonomie','Gerechtigkeit'],
      time: '',
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
      remark: '',
    },
    // {
    //   id: 1001,
    //   inquiry: 'Testfrage (radio)?',
    //   subject: 'Frage-ID 001001',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Allgemein'],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [
    //       {name: 'Ja', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Nein', risk_contemplation: 1, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Vielleicht', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //     ], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1002,
    //   inquiry: 'Testfrage (checkbox)?',
    //   subject: 'Frage-ID 001002',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ['Allgemein'],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "checkbox", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [
    //       {name: 'Option 1', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Option 2', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Option 3', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Option 4', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //     ], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1003,
    //   inquiry: 'Testfrage (tinytext)?',
    //   subject: 'Frage-ID 001003',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Allgemein'],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "tinytext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1004,
    //   inquiry: 'Testfrage (bigtext)?',
    //   subject: 'Frage-ID 001004',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Datenschutz'],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "bigtext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1005,
    //   inquiry: 'Testfrage (text)?',
    //   subject: 'Frage-ID 001005',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ['Allgemein'],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1006,
    //   inquiry: 'Testfrage: Datenschutz oder Allgemein & K.I. (filter)?',
    //   subject: 'Frage-ID 001006',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Allgemein'], // Filter-questions can have labels, but they don't have to.
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   // Filter: Optional array of objects
    //   filter: [
    //     {
    //       title: 'Allgemein und K.I.',
    //       includes: ['Allgemein', 'K.I.'],
    //       active: false
    //     },
    //     {
    //       title: 'Datenschutz',
    //       includes: ['Datenschutz'],
    //       active: false
    //     },
    //   ],
    //   answer: {
    //     type: "filter", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1007,
    //   inquiry: 'Testfrage (mit Folgefrage)',
    //   subject: 'Frage-ID 001007',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Allgemein'],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "followup", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [
    //       {name: 'Option 1: 1008', followupID: 1008, risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Option 2: keine weiteren Frage-ID 00, Euer Ehren', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Option 3: 1008', followupID: 1008, risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Option 4: 1009', followupID: 1009, risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //     ], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1008,
    //   inquiry: 'Folgefrage zu Frage-ID 00Nr. 1007',
    //   subject: 'Frage-ID 001008',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Allgemein'],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1009,
    //   inquiry: 'Folgefrage zu Frage-ID 00Nr. 1007',
    //   subject: 'Frage-ID 001009',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ["Allgemein"],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "tinytext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1010,
    //   inquiry: 'Mit Folgefragen',
    //   subject: 'Frage-ID 001010',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ["Datenschutz"],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "followup", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [
    //       {name: 'Option 1: 1011', followupID: 1011, risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Option 2', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Option 3: 1012', followupID: 1012, risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //       {name: 'Option 4', risk_contemplation: 0, risk_existence: 0, risk_addressing: 0},
    //     ], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1011,
    //   inquiry: 'Folgefrage zu Frage-ID 00Nr. 1010',
    //   subject: 'Frage-ID 001011',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ['Allgemein'],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
    // {
    //   id: 1012,
    //   inquiry: 'Folgefrage zu Frage-ID 00Nr. 1010',
    //   subject: 'Frage-ID 001012',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ["Allgemein"],
    //   time: '',
    //   //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // remark: '',
    // },
  ],

  // Tags and labels
  mailTags: [
    {text: 'Allgemein', value: 'Allgemein', color: '#5E5E5F'},
    {text: 'Datenschutz', value: 'Datenschutz', color: '#5E5E5F'},
    {text: 'Tue Gutes', value: 'Fürsorge', color: '#7367F0'},
    {text: 'Tue niemandem weh', value: 'Schadensvermeidung', color: '#7367F0'},
    {text: 'Bewahre die menschliche Handlungsfähigkeit', value: 'Autonomie', color: '#7367F0'},
    {text: 'Sei fair', value: 'Gerechtigkeit', color: '#7367F0'},
    {text: 'Funktioniere', value: 'Transparenz', color: '#7367F0'},
  ],

  // Sidebar-filter for state (inbox, answered) and labels.
  mail_filter: null,
  meta: {},
  project: {
    nameApplicant: '',
    nameProject: '',
  },
  mailSearchQuery: '',
}

