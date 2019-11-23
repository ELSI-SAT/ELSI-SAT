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
      sender: 'tommys@mail.com',
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 1',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ['Gesetzliche Anforderungen'],
      time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
      replies: [],
      mailFolder: 'inbox',
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
      sender: 'tressag@mail.com',
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 2',
      cc: ['vrushankbrahmshatriya@mail.com'],
      bcc: ['menka@mail.com'],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ['K.I.', 'Gesetzliche Anforderungen'],
      time: 'Mon Dec 10 2018 07:55:00 GMT+0000 (GMT)',
      replies: [],
      mailFolder: 'inbox',
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
      sender: 'hettiem@mail.com',
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 3',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ['K.I.'],
      time: 'Mon Dec 10 2018 08:35:00 GMT+0000 (GMT)',
      replies: [],
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
      sender: 'louettae@mail.com',
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 10',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ['Datenschutz'],
      time: 'Mon Dec 11 2018 10:55:00 GMT+0000 (GMT)',
      replies: [],
      mailFolder: 'inbox',
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
      sender: "bposvner0@zdnet.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 11',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ['Allgemein'],
      time: "Tue Dec 12 2018 11:55:00 GMT+0000 (GMT)",
      replies: [],
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
      sender: "rgilder1@illinois.edu",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 12',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ["Allgemein"],
      time: "Thu Dec 13 2018 08:25:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "trash",
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
      sender: "swilby2@yandex.ru",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 13',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ['K.I.'],
      time: "Fri Dec 14 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "draft",
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
      sender: "wmannering3@mozilla.org",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 14',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ['Allgemein'],
      time: "Tue Dec 15 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "inbox",
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
      sender: "hfrostdyke4@scientificamerican.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 15',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ["Allgemein"],
      time: "Tue Jan 01 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "trash",
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
      sender: "pjentzsch5@tamu.edu",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 16',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ["Datenschutz"],
      time: "Tue Jan 03 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "draft",
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
      sender: "lminghetti6@yale.edu",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 17',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ['K.I.'],
      time: "Tue Jan 03 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "trash",
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
      sender: "efinessy7@sbwire.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 18',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ["Allgemein"],
      time: "Tue Jan 04 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "answered",
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
      sender: "tmckeurton8@163.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 19',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ["Datenschutz"],
      time: "Tue Jan 05 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "draft",
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
      sender: "ebegg9@wikia.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 20',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ['K.I.'],
      time: "Tue Jan 06 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "inbox",
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
      sender: "mspata@sina.com.cn",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 21',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ['K.I.'],
      time: "Tue Jan 07 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "inbox",
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
      sender: "cprandob@rambler.ru",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 22',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ['K.I.'],
      time: "Tue Jan 08 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "answered",
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
      sender: "nbartlesc@merriam-webster.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 23',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ["Allgemein"],
      time: "Tue Jan 09 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
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
      sender: "rgennd@dedecms.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 24',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ["Allgemein"],
      time: "Tue Jan 10 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
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
      sender: "eramelote@webeden.co.uk",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 25',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ["Allgemein"],
      time: "Tue Jan 11 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
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
      sender: "pcuzenf@mediafire.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 26',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ['Allgemein'],
      time: "Tue Jan 12 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
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
      sender: "abaldersong@utexas.edu",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 27',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ['K.I.'],
      time: "Tue Jan 13 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "inbox",
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
      sender: "dmallallh@ask.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 28',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ['K.I.'],
      time: "Tue Jan 14 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "draft",
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
      sender: "nmacgaughyi@aol.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 29',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: false,
      labels: ['Allgemein'],
      time: "Tue Jan 16 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "trash",
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
      sender: "douldcottj@yellowpages.com",
      sender_name: 'Welche Maßnahmen ergreifen Sie, um xyz zu verhindern?',
      subject: 'Frage 30',
      cc: [],
      bcc: [],
      message: '<p>Lorem ipsum dolor sit amet, <i>consetetur sadipscing elitr</i>, sed diam nonumy eirmod tempor invidunt ut labore <strong>et dolore magna</strong> aliquyam erat, sed diam voluptua. </p> <br> <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>',
      isStarred: true,
      labels: ["Allgemein"],
      time: "Tue Jan 17 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "trash",
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
