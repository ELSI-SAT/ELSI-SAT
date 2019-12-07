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
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 1',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Gesetzliche Anforderungen'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 2,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 2',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ['K.I.', 'Gesetzliche Anforderungen'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 3,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 3',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['K.I.'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 10,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 10',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Datenschutz'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 11,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 11',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 12,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 12',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ["Allgemein"],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 13,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 13',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['K.I.'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 14,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 14',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || false
      labels: ['Allgemein'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 15,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 15',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ["Allgemein"],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 16,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 16',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ["Datenschutz"],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 17,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 17',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ['K.I.'],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
    {
      id: 18,
      inquiry: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 18',
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>',
      isStarred: false, // true || true
      labels: ["Allgemein"],
      time: '',
      replies: [],
      folder: 'inbox', // answered || draft || inbox || trash
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
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
      answer: {
        type: "text", // String: "tinytext" | "text" | "mediumtext" | "checkbox" (Options: true | false) | "multiple" (Options: Array)
        options: [], // Array of options when type == "multiple
        relevance: true, // Boolean: true | false
        riskiness: 0.5, // Float: 0 … 1
        risk_adressing: 0.5, // Float: 0 … 1
        depth_of_reflection: 0.5, // Float: 0 … 1
        answer: [""],
      },
    },
  ],

  mailTags: [
    {text: 'Allgemein', value: 'Allgemein', color: "success"},
    {text: 'K.I.', value: 'K.I.', color: "primary"},
    {text: 'Datenschutz', value: 'Datenschutz', color: "warning"},
    {text: 'Gesetzliche Anforderungen', value: 'Gesetzliche Anforderungen', color: "danger"},
  ],
  mail_filter: null,
  meta: {},
  mailSearchQuery: '',
}

