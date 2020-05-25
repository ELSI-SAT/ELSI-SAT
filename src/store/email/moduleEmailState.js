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
      subject: 'Frage 1',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 2,
      inquiry: 'Welche (weiteren/verbundenen) Einrichtungen sind an dem Forschungsprojekt beteiligt?',
      subject: 'Frage 2',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 3,
      inquiry: 'Sind am Forschungsprojekt Partner aus der Wirtschaft oder sonstige Private beteiligt?',
      subject: 'Frage 3',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 4,
      inquiry: 'Bitte beschreiben Sie den Zweck des Systems und erläutern Sie, wem das Forschungsergebnis helfen oder dienen soll.',
      subject: 'Frage 4',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "bigtext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 5,
      inquiry: 'Hilft oder dient das System bzw. Forschungsergebnis einer schutzbedürftigen Gruppe (z.B. Kinder/Jugendliche, ältere oder behinderte Menschen)?',
      subject: 'Frage 5',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "followup-radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 6, risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'

        answer: '', // String
      },
    },
    {
      id: 6,
      inquiry: 'Ist in das Forschungsprojekt die betroffene schutzbedürftige Gruppe involviert?',
      subject: 'Frage 6',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
        ],
        answer: '', // String
      },
    },
    {
      id: 7,
      inquiry: 'Um welche Art von Mensch-Technik-Interaktion handelt es sich bei dem Forschungsprojekt?',
      subject: 'Frage 7',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "checkbox", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Regelungstechnik/einfache Steuerung/Apps etc?', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'einfacher Algorithmus', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'lernender Algorithmus', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'maschinelles Lernen', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'schwache KI', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'starke KI', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
        ],
        answer: '', // String
      },
    },
    {
      id: 8,
      inquiry: 'Auf welche Art von Resultaten soll die KI abzielen?',
      subject: 'Frage 8',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "checkbox", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Modell', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Empfehlung', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Klassifikation', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Vorhersage', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Entscheidung', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Handlung', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
        ],
        answer: '', // String
      },
    },
    {
      id: 9,
      inquiry: 'Wie lernt das System?',
      subject: 'Frage 9',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'supervised (reinforced, semi-supervised, active, self-training)', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'unsupervised', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
        ],
        answer: '', // String
      },
    },
    {
      id: 10,
      inquiry: 'In welchen Branchen soll die entwickelte Mensch-Technik-Interaktion eingesetzt werden?',
      subject: 'Frage 10',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ["Allgemein"],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "checkbox", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'öffentl. Behörden', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Militär', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Energie und Umwelt', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Gesundheit und Pharma', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Information, Wissen und Kommunikation', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Mobilität und Logistik', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Banken, Finanzen u. Versicherungen', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Unterhaltung, Glücksspiel und "Gaming"', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Produzierendes Gewerbe', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Branchenübergreifend', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Sonstiges', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
        ],
        answer: '', // String
      },
    },
    {
      id: 11,
      inquiry: 'Ist ein Einsatz oder Vertrieb des zu entwickelnden Systems nach Abschluss des Forschungsprojektes geplant bzw. möglich?',
      subject: 'Frage 11',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ["Allgemein"],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 12,
      inquiry: 'Beschreiben Sie kurz, welche Interaktionen die Maschine mit Menschen ausführen soll.',
      subject: 'Frage 12',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "bigtext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 13,
      inquiry: 'Könnte das geplante System Einfluss auf Entscheidungen haben, die einen oder mehrere Menschen betreffen?',
      subject: 'Frage 13',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 14, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 14,
      inquiry: 'Wenn ja: Wie stellen Sie sicher, dass die betroffene Person/Personengruppe von einer Entscheidung des Systems nicht benachteiligt wird?',
      subject: 'Frage 14',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 15,
      inquiry: 'Erfolgt die Interaktion zwischen Mensch und Maschine unter angemessener menschlicher Kontrolle?',
      subject: 'Frage 15',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 16, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', followupID: 17, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 16,
      inquiry: 'Was verstehen Sie unter "angemessene menschliche Kontrolle" in Ihrem Forschungsvorhaben?',
      subject: 'Frage 16',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 17,
      inquiry: 'Warum sind Sie der Meinung, dass keine menschliche Kontrolle notwendig ist?',
      subject: 'Frage 17',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 18,
      inquiry: 'Ist das System vom Nutzer jederzeit übersteuerbar?',
      subject: 'Frage 18',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 19, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 19,
      inquiry: 'Wie stellen Sie die Übersteuerbarkeit der Maschine sicher?',
      subject: 'Frage 19',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 20,
      inquiry: 'Werden durch das zu entwickelnde Produkt personenbezogene Daten (Gesetzeslink: Art. 4 Nr. 1 DSGVO) verarbeitet (Art. 4 Nr. 2 DSGVO)?',
      subject: 'Frage 20',
      message: '<p>Gesetzeslink zu Art. 4 Nr. 1 DSGVO: <a href="https://dsgvo-gesetz.de/art-4-dsgvo/" target="_blank">dsgvo-gesetz.de/art-4-dsgvo/</a></p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
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
          active: false
        },
      ],
      answer: {
        type: 'filter', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 21,
      inquiry: 'Ist bekannt, dass ggfs. (mindestens) ein datenrechtlich Verantwortlicher (Art. 4 Nr. 7 DSGVO) existiert (z.B. Entwickler/Hersteller/Betreiber/Nutzer)?',
      subject: 'Frage 21',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 22,
      inquiry: 'Ist es denkbar, dass aus der (unpersonalisierten) Datenverarbeitung ein Personenbezug hergestellt werden kann (z.B. Rekonstruktion, Rückverfolgung, gerichtl. Herausgabeverfügung)?',
      subject: 'Frage 22',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 23,
      inquiry: 'Sofern mehrere Datenverarbeiter beteiligt sind, könnte im Betrieb der Anwendung evtl. eine gemeinsame Verantwortlichkeit (Art. 26 DSGVO) oder einer Auftragsverarbeitung (Art. 28 DSGVO) bestehen?',
      subject: 'Frage 23',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 24,
      inquiry: 'Falls ja: Könnten durch das zu entwickelnde Produkt Daten von "Kindern", d.h. unter 16-jährigen (Art. 8 DSGVO), verarbeitet werden?',
      subject: 'Frage 24',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 25, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 25,
      inquiry: 'Falls ja (16.4): Welche "angemessenen" Anstrengungen werden unternommen, um sich zu vergewissern, dass die Einwilligung durch den Träger der elterlichen Verantwortung für das Kind erteilt wurde (Art. 8 Abs. 2 DSGVO)?',
      subject: 'Frage 25',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 26,
      inquiry: 'Werden durch das zu entwickelnde Produkt sog. "sensible Daten" (Art. 9 DSGVO) verarbeitet?',
      subject: 'Frage 26',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 27, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 27,
      inquiry: 'Falls ja: Besteht eine Einwilligung oder eine sonstige Ausnahme nach (Art. 9 Abs. 2 DSGVO)?',
      subject: 'Frage 27',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 0, risk_awareness: 0, risk_response: 1},
          {name: 'Nein', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 28,
      inquiry: 'Ist bekannt, dass die DSGVO eine ausschließlich auf einer automatisierten Verarbeitung - einschließlich Profiling - beruhende Entscheidung grundsätzlich nicht gestattet (Art. 22 DSGVO)?',
      subject: 'Frage 28',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 29,
      inquiry: 'Wäre voraussichtlich wegen eines hohen datenrechtlichen Risikos für die Rechte Betroffener durch den Anwender/Nutzer eine DS-Folgenabschätzung (Art. 35 DSGVO) durchzuführen?',
      subject: 'Frage 29',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 30,
      inquiry: 'Welche Maßnahmen werden in Hinblick auf die Entwicklung bzw. Ausgestaltung des Produkts getroffen, um ein datenrechtliches Risiko möglichst weitgehend zu minimieren (Anonymisierung, TOMs, etc., vgl. Art. 24 DSGVO)?',
      subject: 'Frage 30',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 31,
      inquiry: 'Wird die Datenverarbeitung des Produkts oder der Anwendung voraussichtlich auf oder mithilfe fremder/dritter Infrastruktur (Server, Open Source etc.) durch- oder ausgeführt (Art. 12, 13 Abs. 1 lit. e, 30 Abs. 1 lit. d DSGVO)?',
      subject: 'Frage 31',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 32, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 32,
      inquiry: 'Falls ja: Welche (technisch-organisatorischen) Maßnahmen werden getroffen bzw. sind geplant, um hierbei einen hinreichenden Datenschutz sowie die erforderliche Datensicherheit zu gewährleisten?',
      subject: 'Frage 32',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 33,
      inquiry: 'Finden bei Einsatz des zu entwickelnden Produkts Datenübermittlungsvorgänge in EU-Drittländer, d.h. also eine grenzüberschreitende Verarbeitung (Art. 4 Nr. 23, Art. 13 Abs. 1 lit. f, Art. 30 Abs. 1 lit. e DSGVO) statt?',
      subject: 'Frage 33',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 34, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 34,
      inquiry: 'Falls ja: Welche (technisch-organisatorischen) Maßnahmen werden getroffen bzw. sind geplant, um hierbei einen hinreichenden Datenschutz und die erforderliche Datensicherheit zu gewährleisten?',
      subject: 'Frage 34',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 35,
      inquiry: 'Ist bekannt, dass die Grundsätze von Privacy by Design (Art. 25 Abs. 1 DSGVO) bzw. Privacy by Default (Art. 25 Abs. 2 DSGVO) auch für den Hersteller bzw. Entwickler des Produkts Anwendung finden (ErwG 78 DSGVO)?',
      subject: 'Frage 35',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 36,
      inquiry: 'Ist bekannt, dass eine unzureichende/fehlerhafte Software-Architektur (oder auch ein entsprechendes Update) eines Produkts, das digitale Inhalte bereitstellt (sog. digital sevices/contents, auch "embedded content") Gewährleistungsansprüche auslösen kann (sog. DI-RL (EU) 2019/770)?',
      subject: 'Frage 36',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 37, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 37,
      inquiry: 'Falls ja: Ist bekannt, dass eine unzureichende/fehlerhafte Software-Architektur eines Produkts, das digitale Inhalte bereitstellt (s.o.), auch darin liegen kann, dass den Datenschutzgrundsätzen nicht ausreichend Rechnung getragen wurde (z.B. Grds. d. Datensparsamkeit, Art. 5 Abs. 1 lit. c, Art. 25 Abs. 1 u. 2 DSGVO i.V.m. ErwG 48 DI-RL)?',
      subject: 'Frage 37',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 38,
      inquiry: 'Ist geplant, dass sämtliche personenbezogenen Daten des Nutzers ausschließlich innerhalb des Systems bleiben und i.d.R. nicht für Dritte zugänglich sind?',
      subject: 'Frage 38',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 39, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 39,
      inquiry: 'Mit welchen Maßnahmen wird sichergestellt, dass Datensicherheit (Art. 5  Abs. 1 lit f, Art. 32 Abs. 1/2 DSGVO) und Datenschutz (Art. 5 Abs 1a-e) in Hinblick auf die verarbeiteten Daten gewährleistet wird (keine Manipulation/Hacks)?',
      subject: 'Frage 39',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 40,
      inquiry: 'Sind in der Anwendung technische Vorkehrungen getroffen, damit ein Auskunftsverlangen über personenbezogenene Daten durch den Betroffenen unkompliziert bearbeitet werden kann?',
      subject: 'Frage 40',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 0, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 41,
      inquiry: 'Sind in der Anwendung technische Vorkehrungen getroffen, damit eine ggfs. erfolgte Einwilligung der Datenverarbeitung jederzeit unkompliziert widerrufbar ist bzw. ein Widerspruch (Art. 21 Abs. 6 DSGVO) berücksichtigt werden kann?',
      subject: 'Frage 41',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Schadensvermeidung','Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 42, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 0, risk_awareness: 1, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 42,
      inquiry: 'Wie würde der Widerspruch ggfs. (technisch-organisatorisch) umgesetzt und ausgeführt?',
      subject: 'Frage 42',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 43,
      inquiry: 'Ist Ihnen bekannt, dass die Grundsätze der DSGVO bereits in der Entwicklung eines Systems berücktigt werden müssen?',
      subject: 'Frage 43',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz', 'Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 0, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 44,
      inquiry: 'Planen Sie den Anwender darauf aufmerksam zu machen, dass er/sie mit einem nicht-menschlichen Agenten agiert?',
      subject: 'Frage 44',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 45, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', followupID: 46, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 45,
      inquiry: 'Wird sichergestellt, dass jedem Anwender bewusst ist, dass die Maschine bestimmte Ergebnisse lediglich aufgrund einer mathematischen Annäherungsrechnung (Wahrscheinlichkeit) präsentiert?',
      subject: 'Frage 45',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie','Gerechtigkeit','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 46,
      inquiry: 'Weshalb soll dem Anwender nicht bewusst sein, dass die Maschine bestimmte Ergebnisse lediglich aufgrund einer mathematischen Annäherungsrechnung (Wahrscheinlichkeit) präsentiert?',
      subject: 'Frage 46',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Autonomie','Gerechtigkeit','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 47,
      inquiry: 'Gibt es Personen oder Gruppen (z. B. Minderheiten), die durch die geplante Entwicklung oder Einführung benachteiligt sein können?',
      subject: 'Frage 47',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie','Gerechtigkeit'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 48, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 48,
      inquiry: 'Falls ja: Wie ließe sich eine mögliche Benachteiligung rechtfertigen?',
      subject: 'Frage 48',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie','Gerechtigkeit'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 49,
      inquiry: 'Ist das zu entwickelnde Produkt geeignet, in seiner Anwendung (datenrechtliche) Verstöße gegen den Gleichheitsgrundsatz zu fördern oder zu bewirken (Art. 3 GG, ggfs. i.V.m. Art. 9 DSGVO)?',
      subject: 'Frage 49',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Gerechtigkeit'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 50,
      inquiry: 'Ist bekannt, dass auch eine funktionierende und zunächst "undiskriminiert gefütterte" (selbstlernende) KI eine sog. BIAS aufweisen kann, also in Entscheidungen o. Ergebnissen diskriminiert?',
      subject: 'Frage 50',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Gerechtigkeit'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 51,
      inquiry: 'Wird im zu entwickelnden Produkt voraussichtlich der Grundsatz und das Ideal der "digitalen Barrierefreiheit" berücksichtigt/umgesetzt?',
      subject: 'Frage 51',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Gerechtigkeit'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 52,
      inquiry: 'Ist geplant, im Projekt Maßnahmen zur Verbesserung der Privatsphäre zu ergreifen)?',
      subject: 'Frage 52',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 53, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 53,
      inquiry: 'Falls ja: Welche Maßnahmen sollen hierzu ergriffen werden?',
      subject: 'Frage 53',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 54,
      inquiry: 'Gibt es in Ihrem Projekt einen Ansprechpartner für Fragen zum Datenschutz (z. B. DSB etc.)?',
      subject: 'Frage 54',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 55,
      inquiry: 'Haben Sie innerhalb ihres Projekts ein besonderes Datenschutzmanagement eingerichtet (vgl. Art. 30 DSGVO)?',
      subject: 'Frage 55',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 56,
      inquiry: 'Handelt es sich bei dem zu entwickelnden Produkt um ein IT-System bzw. um eine Anwendung von Komponenten oder Prozessen für Einrichtungen des Bundes (i.S.v. § 2 Abs. 1 bzw. 3 BSIG)',
      subject: 'Frage 56',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 57, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 57,
      inquiry: 'Falls ja: Sind Ihnen die hiermit verbundenen Rechte und Pflichten des Bundesamtes bzw. des Betreibers (z.B. §§ 4, 5 BSIG) oder auch Herstellers (§ 5a Abs. 6 BSIG) sowie die hiermit verbundenen Eingriffe in Betroffenenrechte (vgl. § 5 Abs. 1, §§ 6 ff. BSIG) bekannt?',
      subject: 'Frage 57',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 58,
      inquiry: 'Handelt es sich bei dem zu entwickelnden Produkt um ein System, welches ggfs. innerhalb "Kritischer Infrastrukturen" (sog. KRITIS, z.B. IT/TK, Energie, Wasser, Ernährung, Transport/Verkehr, Gesundheit, Finanz-/Versicherungswesen) eingesetzt wird oder werden kann (§ 8b BSIG)?',
      subject: 'Frage 58',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 59, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 59,
      inquiry: 'Falls ja: Sind Ihnen die hiermit verbundenen Rechte und Pflichten des Bundesamtes bzw. des Betreibers (z.B. §§ 7a, 8a, 8b BSIG) bekannt?',
      subject: 'Frage 59',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 60,
      inquiry: 'Falls ja: Trifft das zu entwickelnde Produkt eigenständig technische Maßnahmen und Vorkehrungen zur Schadensvermeidung "nach dem Stand der Technik" nach § 8a Abs. 1 BSIG (z.B. Aufzeichnungs-, Melde- oder Informationsvorgänge)?',
      subject: 'Frage 60',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 61,
      inquiry: 'Handelt es sich bei dem zu entwickelnden Produkt um einen "digitalen Dienst" i.S.v. § 8c BSIG?',
      subject: 'Frage 61',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 62, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 62,
      inquiry: 'Falls ja: Sind die besonderen Anforderungen an deren Anbieter (§ 8c BSIG) bekannt?',
      subject: 'Frage 62',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 63,
      inquiry: 'Ist bekannt, dass nicht nur das übermäßige Sammeln und Verarbeiten von Daten (Art. 5 Abs. 1 lit. c DSGVO, § 202a StGB), sondern auch das rechtswidrige Löschen oder Vernichten von Daten sogar einen Straftatbestand erfüllen kann (§ 303a StGB)?',
      subject: 'Frage 63',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 64,
      inquiry: 'Ist bekannt, dass durch eine auch bzgl. Datensicherheit unzureichend gestaltete Software oder Anwendung Schadensersatzansprüche (§ 823 Abs. 1 BGB), die sich auch auf sog. "Folgeschäden" beziehen können (§ 1 Abs. 1 ProdHaftG), ausgelöst werden können.',
      subject: 'Frage 64',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 65,
      inquiry: 'Ist bekannt, dass der Grundsatz der Sicherheit der Verarbeitung auch in der DSGVO normiert ist und dort durch weitere Vorgaben konkretisiert wird (Art. 5 Abs. 1 lit. f i.V.m. Art. 32 DSGVO)?',
      subject: 'Frage 65',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Autonomie','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 66,
      inquiry: 'Untersuchen und beurteilen Sie die Qualität der verwendeten Datenquellen?',
      subject: 'Frage 66',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 67, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 67,
      inquiry: 'Wie stellen Sie die Herkunft und Qualität der verwendeten Daten sicher?',
      subject: 'Frage 67',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 68,
      inquiry: 'Planen Sie, die Kompetenzen der Mitarbeiter im Projekt im Bereich Datenschutz zu berücksichtigen und zu erweitern?',
      subject: 'Frage 68',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 69,
      inquiry: 'Sollen interne/externe Datenzugriffe im Projekt dokumentiert werden?',
      subject: 'Frage 69',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 70,
      inquiry: 'Arbeiten Sie mit bereits vorhandenen Datensätzen?',
      subject: 'Frage 70',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 71,
      inquiry: 'Interagiert das System physisch mit der Welt?',
      subject: 'Frage 71',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 72, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 72,
      inquiry: 'Welche physischen Schäden kann das System verursachen?',
      subject: 'Frage 72',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 73,
      inquiry: 'Kann das System kontinuierlich aktualisiert werden (Updates)?',
      subject: 'Frage 73',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 74,
      inquiry: 'Sind Teile ihres Projekts outgesourced?',
      subject: 'Frage 74',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 75, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 75,
      inquiry: 'Falls ja: Wie planen Sie die Qualität der Daten und deren Sicherheit im outgesourcten Teil sicherzustellen (vgl. Art. 28 DSGVO)?',
      subject: 'Frage 75',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 76,
      inquiry: 'Verwenden Sie externe Software/Quellcode/Daten?',
      subject: 'Frage 76',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 77,
      inquiry: 'Sind weitere Partner am Forschungsprojekt beteiligt?',
      subject: 'Frage 77',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'tbd.'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 78, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 78,
      inquiry: 'Wie wird deren Eignung bzw. Zuverlässigkeit geprüft oder gewährleistet?',
      subject: 'Frage 78',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 79,
      inquiry: 'Kann die Funktionsfähigkeit (Zuverlässigkeit der Ergebnisse) des Systems regelmäßig überprüft werden?',
      subject: 'Frage 79',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung','Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 80,
      inquiry: 'Ist es vorstellbar, das System für ethisch unerwünschte Zwecke zu entfremden (Dual Use, z. B. LAWS) ?',
      subject: 'Frage 80',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 81,
      inquiry: 'Wäre es für den Antragsteller denkbar, dass eine vollständige Erklärbarkeit und Transparenz des Algorithmus nicht sicher dargestellt werden kann?',
      subject: 'Frage 81',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 83, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', followupID: 82, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 82,
      inquiry: 'Wie können Sie den Algorithmus bzw. das Ergebnis des Algorithmus dem Anwender (Laien/Nicht-Programmierer) erklärbar und transparent machen?',
      subject: 'Frage 82',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 83,
      inquiry: 'Was tun Sie, um das Risiko technisch und/oder organisatorisch so gering wie möglich zu halten?',
      subject: 'Frage 83',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 84,
      inquiry: 'Ist sichergestellt, dass die Angemessenheit und Repräsentativität in Hinblick auf (Trainings-)Daten gewährleistet ist (sog. BIAS-Vermeidung)?',
      subject: 'Frage 84',
      message: '<p>Unter Bias werden Verzerrungen bzw. Vorurteile verstanden, die eine Diskriminierung bestimmter Personengruppen oder Minderheiten verursachen. Dadurch können soziale Vorurteile in Bezug auf Rasse, Geschlecht, Sexualität und ethnische Zugehörigkeit verstärkt werden. Bias kann bei der Codierung, Sammlung und Auswahl der (Trainings-)Daten eines Algorithmus auftreten. Dies geschieht etwa durch fehlende Repräsentativität des (Trainings-)Datensatzes (Unterschied zwischen gesammelten Daten und realer Situation) oder veralteten Datensätzen (mit veralteten Wertevorstellungen, historischen Ungleichheiten).</p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Gerechtigkeit'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', followupID: 85, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 85,
      inquiry: 'Falls nein: Mit welchen Maßnahmen kann eine bessere Datenqualität hergestellt werden?',
      subject: 'Frage 85',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Gerechtigkeit'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 86,
      inquiry: 'Wäre es technisch möglich, den Code Ihres Algorithmus öffentlich darstellbar und zugänglich zu machen?',
      subject: 'Frage 86',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Transparenz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 87,
      inquiry: 'Soll im Projektverlauf eine Technikfolgenabschätzung erfolgen?',
      subject: 'Frage 87',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 88, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 88,
      inquiry: 'Welche Bereiche müsste eine Technikfolgenabschätzung umfassen? (Gesellschaft, Umwelt etc.)',
      subject: 'Frage 88',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 89,
      inquiry: 'Sind Mechanismen geplant, die im Falle eines Schadens Abhilfe schaffen, z.B. in Form eines Rechtsschutzes oder einer Versicherungspolice?',
      subject: 'Frage 89',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Schadensvermeidung'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 90, risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 91,
      inquiry: 'Halten Sie es für möglich, dass das zu entwickelnde Produkt - abgesehen von Gleichheitsgrundsätzen - weitere (Grund-)Rechte Dritter tangiert oder gar in diese eingegriffen werden könnte (sog. "Drittwirkung" von Grundrechten ggü. Privaten)?',
      subject: 'Frage 91',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'followup-radio', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 92, risk_contemplation: 1, risk_awareness: 1, risk_response: 0},
          {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
          ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 92,
      inquiry: 'Falls ja: Welche Grundrechte könnten hierbei betroffen sein (z.B. Art. 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16a, 21 GG)?',
      subject: 'Frage 92',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 93,
      inquiry: 'Falls ja: Welche (technisch-organisatischen) Maßnahmen werden getroffen, um diesen Eingriff minimalinvasiv zu gestalten?',
      subject: 'Frage 93',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein', 'Fürsorge','Schadensvermeidung','Autonomie'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: 'text', // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    // {
    //   id: 1001,
    //   inquiry: 'Testfrage (radio)?',
    //   subject: 'Frage 1001',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Allgemein'],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [
    //       {name: 'Ja', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
    //       {name: 'Nein', risk_contemplation: 1, risk_awareness: 0, risk_response: 0},
    //       {name: 'Vielleicht', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //     ], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
    // {
    //   id: 1002,
    //   inquiry: 'Testfrage (checkbox)?',
    //   subject: 'Frage 1002',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ['Allgemein'],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "checkbox", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [
    //       {name: 'Option 1', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //       {name: 'Option 2', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //       {name: 'Option 3', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //       {name: 'Option 4', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //     ], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
    // {
    //   id: 1003,
    //   inquiry: 'Testfrage (tinytext)?',
    //   subject: 'Frage 1003',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Allgemein'],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "tinytext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
    // {
    //   id: 1004,
    //   inquiry: 'Testfrage (bigtext)?',
    //   subject: 'Frage 1004',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Datenschutz'],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "bigtext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
    // {
    //   id: 1005,
    //   inquiry: 'Testfrage (text)?',
    //   subject: 'Frage 1005',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ['Allgemein'],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
    // {
    //   id: 1006,
    //   inquiry: 'Testfrage: Datenschutz oder Allgemein & K.I. (filter)?',
    //   subject: 'Frage 1006',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Allgemein'], // Filter-questions can have labels, but they don't have to.
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
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
    // },
    // {
    //   id: 1007,
    //   inquiry: 'Testfrage (mit Folgefrage)',
    //   subject: 'Frage 1007',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Allgemein'],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "followup", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [
    //       {name: 'Option 1: 1008', followupID: 1008, risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //       {name: 'Option 2: keine weiteren Fragen, Euer Ehren', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //       {name: 'Option 3: 1008', followupID: 1008, risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //       {name: 'Option 4: 1009', followupID: 1009, risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //     ], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
    // {
    //   id: 1008,
    //   inquiry: 'Folgefrage zu Frage Nr. 1007',
    //   subject: 'Frage 1008',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || false
    //   labels: ['Allgemein'],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
    // {
    //   id: 1009,
    //   inquiry: 'Folgefrage zu Frage Nr. 1007',
    //   subject: 'Frage 1009',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ["Allgemein"],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "tinytext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
    // {
    //   id: 1010,
    //   inquiry: 'Mit Folgefragen',
    //   subject: 'Frage 1010',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ["Datenschutz"],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "followup", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [
    //       {name: 'Option 1: 1011', followupID: 1011, risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //       {name: 'Option 2', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //       {name: 'Option 3: 1012', followupID: 1012, risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //       {name: 'Option 4', risk_contemplation: 0, risk_awareness: 0, risk_response: 0},
    //     ], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
    // {
    //   id: 1011,
    //   inquiry: 'Folgefrage zu Frage Nr. 1010',
    //   subject: 'Frage 1011',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ['Allgemein'],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
    // {
    //   id: 1012,
    //   inquiry: 'Folgefrage zu Frage Nr. 1010',
    //   subject: 'Frage 1012',
    //   message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
    //   isStarred: false, // true || true
    //   labels: ["Allgemein"],
    //   time: '',
    //   replies: [],
    //   folder: 'inbox', // answered || draft || inbox || trash
    //   isTrashed: false, // true || false
    //   trashingReason: '', // String
    //   answer: {
    //     type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
    //     options: [], // Array of options for types 'radio' and 'multiple'
    //     answer: '', // String
    //   },
    // },
  ],

  // Tags and labels
  mailTags: [
    {text: 'Allgemein', value: 'Allgemein', color: "#FFA044"},
    {text: 'Datenschutz', value: 'Datenschutz', color: "#FFA044"},
    {text: 'Tue Gutes', value: 'Fürsorge', color: '#28C770'},
    {text: 'Tue niemandem weh', value: 'Schadensvermeidung', color: '#28C770'},
    {text: 'Bewahre die menschliche Handlungsfähigkeit', value: 'Autonomie', color: '#28C770'},
    {text: 'Sei fair', value: 'Gerechtigkeit', color: '#28C770'},
    {text: 'Funktioniere', value: 'Transparenz', color: '#28C770'},
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

