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
          {name: 'Ja'},
          {name: 'Nein'},
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
        type: "followup", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Ja', followupID: 6},
          {name: 'Nein', }
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
          {name: 'Ja'},
          {name: 'Nein'},
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
          {name: 'Regelungstechnik/einfache Steuerung/Apps etc?'},
          {name: 'einfacher Algorithmus'},
          {name: 'lernender Algorithmus'},
          {name: 'maschinelles Lernen'},
          {name: 'schwache KI'},
          {name: 'starke KI'},
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
          {name: 'Modell'},
          {name: 'Empfehlung'},
          {name: 'Klassifikation'},
          {name: 'Vorhersage'},
          {name: 'Entscheidung'},
          {name: 'Handlung'},
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
          {name: 'supervised (reinforced, semi-supervised, active, self-training)'},
          {name: 'unsupervised'},
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
          {name: 'öffentl. Behörden'},
          {name: 'Militär'},
          {name: 'Energie und Umwelt'},
          {name: 'Gesundheit und Pharma'},
          {name: 'Information, Wissen und Kommunikation'},
          {name: 'Mobilität und Logistik'},
          {name: 'Banken, Finanzen u. Versicherungen'},
          {name: 'Unterhaltung, Glücksspiel und "Gaming"'},
          {name: 'Produzierendes Gewerbe'},
          {name: 'Branchenübergreifend'},
          {name: 'Sonstiges'},
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
          {name: 'Ja'},
          {name: 'Nein'},
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
      id: 1001,
      inquiry: 'Testfrage (radio)?',
      subject: 'Frage 1001',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Gesetzliche Anforderungen'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "radio", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: ['Ja', 'Nein', 'Vielleicht'], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 1002,
      inquiry: 'Testfrage (checkbox)?',
      subject: 'Frage 1002',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ['K.I.', 'Gesetzliche Anforderungen'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "checkbox", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 1003,
      inquiry: 'Testfrage (tinytext)?',
      subject: 'Frage 1003',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['K.I.'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "tinytext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 1004,
      inquiry: 'Testfrage (bigtext)?',
      subject: 'Frage 1004',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz'],
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
      id: 1005,
      inquiry: 'Testfrage (text)?',
      subject: 'Frage 1005',
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
      id: 1006,
      inquiry: 'Testfrage: Datenschutz oder Allgemein & K.I. (filter)?',
      subject: 'Frage 1006',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: [], // Filter-questions can have labels, but they don't have to.
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      // Filter: Optional array of objects
      filter: [
        {
          title: 'Allgemein und K.I.',
          includes: ['Allgemein', 'K.I.'],
          active: false
        },
        {
          title: 'Datenschutz',
          includes: ['Datenschutz'],
          active: false
        },
      ],
      answer: {
        type: "filter", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 1007,
      inquiry: 'Testfrage (mit Folgefrage)',
      subject: 'Frage 1007',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['K.I.'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "followup", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Option 1: 1008', followupID: 1008},
          {name: 'Option 2: keine weiteren Fragen, Euer Ehren'},
          {name: 'Option 3: 1008', followupID: 1008},
          {name: 'Option 4: 1009', followupID: 1009}
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 1008,
      inquiry: 'Folgefrage zu Frage Nr. 1007',
      subject: 'Frage 1008',
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
      id: 1009,
      inquiry: 'Folgefrage zu Frage Nr. 1007',
      subject: 'Frage 1009',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ["Allgemein"],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "tinytext", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 1010,
      inquiry: 'Mit Folgefragen',
      subject: 'Frage 1010',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ["Datenschutz"],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "followup", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [
          {name: 'Option 1: 1011', followupID: 1011},
          {name: 'Option 2'},
          {name: 'Option 3: 1012', followupID: 1012},
          {name: 'Option 4'}
        ], // Array of options for types 'radio' and 'multiple'
        answer: '', // String
      },
    },
    {
      id: 1011,
      inquiry: 'Folgefrage zu Frage Nr. 1010',
      subject: 'Frage 1011',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ['K.I.'],
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
      id: 1012,
      inquiry: 'Folgefrage zu Frage Nr. 1010',
      subject: 'Frage 1012',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ["Allgemein"],
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
  ],

  // Tags and labels
  mailTags: [
    {text: 'Allgemein', value: 'Allgemein', color: "#28C770"},
    {text: 'K.I.', value: 'K.I.', color: "#7367F1"},
    {text: 'Datenschutz', value: 'Datenschutz', color: "#FFA044"},
    {text: 'Gesetzliche Anforderungen', value: 'Gesetzliche Anforderungen', color: "#EA5556"},
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

