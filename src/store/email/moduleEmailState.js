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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false

        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
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
        relevance: true, // Boolean: true | false
        riskiness: 0, // Float: 0 … 1
        risk_adressing: 0, // Float: 0 … 1
        depth_of_reflection: 0, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 18,
      inquiry: 'Folgefrage zu Frage Nr. 16',
      subject: 'Frage 18',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 19,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 19',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ["Datenschutz"],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 20,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 20',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['K.I.'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 21,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 21',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['K.I.'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 22,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 22',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['K.I.'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 23,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 23',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ["Allgemein"],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      isTrashed: false, // true || false
      trashingReason: '', // String
      answer: {
        type: "text", // String: 'tinytext' (100) | 'text' (500) | 'bigtext' (2000) | 'radio' (mutually exclusive) | 'checkbox' (multiple) | 'filter'
        options: [], // Array of options for types 'radio' and 'multiple'
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 24,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 24',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 25,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 25',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 26,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 26',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 27,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 27',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 28,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 28',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 29,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 29',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 30,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 30',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
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

