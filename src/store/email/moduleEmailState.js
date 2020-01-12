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
      inquiry: 'Welche Maßnahmen ergreifen Sie (radio)?',
      subject: 'Frage 1',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 2,
      inquiry: 'Welche Maßnahmen ergreifen Sie (checkbox)?',
      subject: 'Frage 2',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 3,
      inquiry: 'Welche Maßnahmen ergreifen Sie (tinytext)?',
      subject: 'Frage 3',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 10,
      inquiry: 'Welche Maßnahmen ergreifen Sie (bigtext)?',
      subject: 'Frage 10',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 11,
      inquiry: 'Welche Maßnahmen ergreifen Sie (text)?',
      subject: 'Frage 11',
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
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 12,
      inquiry: 'Datenschutz oder Allgemein & K.I. (filter)?',
      subject: 'Frage 12',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 13,
      inquiry: 'Welche Maßnahmen ergreifen Sie (mit Folgefrage)',
      subject: 'Frage 13',
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
          {name: 'Option 1: 14', followupID: 14},
          {name: 'Option 2: keine weiteren Fragen, Euer Ehren'},
          {name: 'Option 3: 14', followupID: 14},
          {name: 'Option 4: 15', followupID: 15}
        ], // Array of options for types 'radio' and 'multiple'
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 14,
      inquiry: 'Folgefrage zu Frage Nr. 13',
      subject: 'Frage 14',
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
      id: 15,
      inquiry: 'Folgefrage zu Frage Nr. 13',
      subject: 'Frage 15',
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
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 16,
      inquiry: 'Mit Folgefragen',
      subject: 'Frage 16',
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
          {name: 'Option 1: 17', followupID: 17},
          {name: 'Option 2'},
          {name: 'Option 3: 18', followupID: 18},
          {name: 'Option 4'}
        ], // Array of options for types 'radio' and 'multiple'
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: '', // String
      },
    },
    {
      id: 17,
      inquiry: 'Folgefrage zu Frage Nr. 16',
      subject: 'Frage 17',
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

