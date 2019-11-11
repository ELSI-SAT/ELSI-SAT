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
      sender_name: 'Tommy Sicilia',
      to: ['johndoe@mail.com'],
      // require('@/assets/images/portrait/small/avatar-s-1.png')
      img: require('@/assets/images/portrait/small/avatar-s-1.png'),
      subject: 'Theme Update Number Two',
      cc: [],
      bcc: [],
      message: '<p>Hi John,</p><p><br></p><p>Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p><br></p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p><br></p><p>Regrads,</p><p>Kristeen Sicilia</p>',
      attachments: ['log.txt', 'sheet.xls'],
      isStarred: false,
      labels: ['Gesetzliche Anforderungen'],
      time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
      replies: [],
      mailFolder: 'inbox',
      unread: false,
    },
    {
      id: 2,
      sender: 'tressag@mail.com',
      sender_name: 'Tressa Gass',
      to: ['johndoe@mail.com'],
      img: require('@/assets/images/portrait/small/avatar-s-2.png'),
      subject: 'K.I. Report',
      cc: ['vrushankbrahmshatriya@mail.com'],
      bcc: ['menka@mail.com'],
      message: ' <p>Hello John,</p><p><br></p><p>Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.</p><p><br></p><p>I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.</p><p>Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.</p><p><br></p><p>Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.</p><p><br></p><p>Regrads</p><p>Tressa Gass</p>',
      attachments: ['report.docx'],
      isStarred: true,
      labels: ['K.I.', 'Gesetzliche Anforderungen'],
      time: 'Mon Dec 10 2018 07:55:00 GMT+0000 (GMT)',
      replies: [],
      mailFolder: 'inbox',
      unread: true,
    },
    {
      id: 3,
      sender: 'hettiem@mail.com',
      sender_name: 'Hettie Mcerlean',
      to: ['johndoe@mail.com', 'hello@pixinvent.net'],
      img: require('@/assets/images/portrait/small/avatar-s-3.png'),
      subject: 'Order Delivered',
      cc: [],
      bcc: [],
      message: '<p>Hello John,</p><p><br></p><p>Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.</p><p><br></p><p>I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.</p><p>Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.</p><p><br></p><p>Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.</p><p><br></p><p>Regrads</p><p>Hettie Mcerlean</p>',
      attachments: [],
      isStarred: false,
      labels: ['K.I.'],
      time: 'Mon Dec 10 2018 08:35:00 GMT+0000 (GMT)',
      replies: [],
      unread: false,
    },
    {
      id: 10,
      sender: 'louettae@mail.com',
      sender_name: 'Louetta Esses',
      to: ['johndoe@mail.com'],
      img: require('@/assets/images/portrait/small/avatar-s-4.png'),
      subject: '',
      cc: [],
      bcc: [],
      message: '<p>Hi John,</p><p><br></p><p>Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p><br></p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p><br></p><p>Regrads,</p><p>Kristeen Sicilia</p>',
      attachments: ['report.docx'],
      isStarred: false,
      labels: ['Datenschutz'],
      time: 'Mon Dec 11 2018 10:55:00 GMT+0000 (GMT)',
      replies: [],
      mailFolder: 'inbox',
      unread: false,
    },
    {
      id: 11,
      sender: "bposvner0@zdnet.com",
      sender_name: "Bobbie Posvner",
      to: ["johndoe@dot.gov"],
      img: require('@/assets/images/portrait/small/avatar-s-11.png'),
      subject: "Re-contextualized zero administration toolset",
      cc: [],
      bcc: [],
      message: "<p>Hello John,</p><p><br></p><p>Epiboly henbill hemichorea composedness resequent hearthpenny racialization freeboard Reboulia Albuginaceae Violales Trisagion resinlike plumlet insalubrious Urocoptis Orthoceratidae ogmic plateaux reinsist preconsumption rattener venipuncture Rhadamanthine</p><p><br></p><p>perversely corpusculated theophoric uncemented weiring myolipoma gudesire dramatics trichomaphyte adventitious video polychaete glossorrhaphy bestially zoospore nonnotional sawbones unprejudiciable wali collaborative coppled shammish manless predisorder</p>",
      attachments: ["OrciMaurisLacinia.avi"],
      isStarred: true,
      labels: ['Allgemein'],
      time: "Tue Dec 12 2018 11:55:00 GMT+0000 (GMT)",
      replies: [],
      unread: true
    },
    {
      id: 12,
      sender: "rgilder1@illinois.edu",
      sender_name: "Rebecca Gilder",
      to: ["johndoe@google.co.uk"],
      img: require('@/assets/images/portrait/small/avatar-s-6.png'),
      subject: "Integrated bi-directional help-desk",
      cc: [],
      bcc: [],
      message: "<p>Hello John, </p><p><br></p><p>irretraceably indestructibility sisi fiddle pyretic Gerbera vocable hoped Chartreux thinglet whister fetiferous Guhayna overloud yuca suggestibly atmiatrics serioludicrous prehaustorium androgenic betulin chiropterite sprittail atrochal</p><p><br></p><p>stopper acinaceous bandcutter unprostituted undependableness Saffarid parasympathetic dishonorer embryogeny overscrupulous deicidal Tapuya roupily devotee alfet sophiologic hydrobromide onlook preverb Dottore primitial frostlike overbig Monocyclica</p>",
      attachments: ["QuisOdio.txt"],
      isStarred: false,
      labels: ["Allgemein"],
      time: "Thu Dec 13 2018 08:25:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "trash",
      unread: true
    },
    {
      id: 13,
      sender: "swilby2@yandex.ru",
      sender_name: "Shawn Wilby",
      to: ["johndoe@altervista.org"],
      img: require('@/assets/images/portrait/small/avatar-s-1.png'),
      subject: "Devolved regional product",
      cc: [],
      bcc: [],
      message: "<p>Hello John, </p><p><br></p><p>scalpellum unisometrical emend esotrope gether separatical passionwise cringe flawful annotinous jiboa thrombotic essoinment successional backrope oligohemia gitaligenin formulaic bradycinesia paralgesic eumycetic receptoral eyrie yearly</p><p><br></p><p>atomistical semischolastic clour discardment pseudelytron cheson path Bennet Herat pinchem Tho extravagantly shaking procidence flocker amidoketone gyric Moi petrolific clink immunization estrepement spalder poitrail</p>",
      attachments: ["NecMolestieSed.tiff"],
      isStarred: false,
      labels: ['K.I.'],
      time: "Fri Dec 14 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "draft",
      unread: false
    },
    {
      id: 14,
      sender: "wmannering3@mozilla.org",
      sender_name: "Waldemar Mannering",
      to: ["johndoe@sciencedaily.com"],
      img: require('@/assets/images/portrait/small/avatar-s-13.png'),
      subject: "Quality-focused methodical flexibility",
      cc: [],
      bcc: [],
      message: "<p>Hi John, </p><p><br></p><p>wartproof ketoheptose incomplicate hyomental organal supermaterial monogene sophister nizamate rightle multifilament phloroglucic overvehement boatloading derelictly probudgeting archantiquary unknighted pallograph Volcanalia Jacobitiana ethyl neth Jugatae</p><p><br></p><p>noumenalize irredential energeia phlebotomist galp dactylitis unparticipated solepiece demure metarhyolite toboggan unpleased perilaryngeal binoxalate rabbitry atomic duali dihexahedron Pseudogryphus boomboat obelisk undreaded unadmired podometer</p>",
      attachments: ["Nulla.gif"],
      isStarred: false,
      labels: ['Allgemein'],
      time: "Tue Dec 15 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "inbox",
      unread: false
    },
    {
      id: 15,
      sender: "hfrostdyke4@scientificamerican.com",
      sender_name: "Heath Frostdyke",
      to: ["johndoe@weibo.com"],
      img: require('@/assets/images/portrait/small/avatar-s-13.png'),
      subject: "Secured optimal algorithm",
      cc: [],
      bcc: [],
      message: "<p>Hello John, </p><p><br></p><p>prefertility volumetrical subdivision Alpinist hypostomous foreyard lede knuckling Agade viking protometallic unsting palaeobiologist trierarchic bigheartedness Slartibartfast tabitude popadam idioplasm fabulous arsenite cingle backhandedness denizenship</p><p><br></p><p>argo trickish dependingly unhouseled aegeriid ophthalmophlebotomy crazy freedwoman unspinsterlike clinical epistemologically hermodactyl humbugger misogynist plunder Sabbathly tabule feckless cerite porringer benumb duograph propatagian pressman</p>",
      attachments: ["SapienQuisLibero.tiff"],
      isStarred: true,
      labels: ["Allgemein"],
      time: "Tue Jan 01 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "trash",
      unread: false
    },
    {
      id: 16,
      sender: "pjentzsch5@tamu.edu",
      sender_name: "Paulita Jentzsch",
      to: ["johndoe@skype.com"],
      img: require('@/assets/images/portrait/small/avatar-s-18.png'),
      subject: "Profound user-facing frame",
      cc: [],
      bcc: [],
      message: "<p>Hello John, </p><p><br></p><p>unstintedly septifarious prevalid implicative esere Kedarite Nekkar encampment Issedones Saururus Turkize Tshi misengrave lamnid benzamine rigidulous octonion hydrophilous coxalgic nasturtium epileptogenic biporose undenominationalism widu</p><p><br></p><p>melioration pager infiltrate plouky tribesmanship transudate heinous exhibitionistic klendusic lienocele tractate unemotioned castigate selenate appealable Palladianism chloracetate penna moellon detector halcyon amidofluorid damascene hollaite</p>",
      attachments: ["UtNulla.avi"],
      isStarred: true,
      labels: ["Datenschutz"],
      time: "Tue Jan 03 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "draft",
      unread: false
    },
    {
      id: 17,
      sender: "lminghetti6@yale.edu",
      sender_name: "Lowell Minghetti",
      to: ["johndoe@fda.gov"],
      img: require('@/assets/images/portrait/small/avatar-s-4.png'),
      subject: "Reactive full-range encryption",
      cc: [],
      bcc: [],
      message: "<p>Hi John, </p><p><br></p><p>Jaime stadimeter reshearer adfix exaristate herby chrysomonad ostentous Abrahamic Marsipobranchii skil linguodental relaster restbalk enhorror glycerizine foremelt difficultness Ostreidae Euphues panduriform howler Finmark primordality</p><p><br></p><p>semicurvilinear skeet sociogenetic dicephalism ghalva ethnicon katagenesis tasklike triachenium abuser henbane strubbly streetway Ramaism besetting saccos enzymically wickiup inopulent poetship Miranda hemianesthesia sphericle oariopathy</p>",
      attachments: ["ElementumLigula.mp3"],
      isStarred: true,
      labels: ['K.I.'],
      time: "Tue Jan 03 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "trash",
      unread: false
    },
    {
      id: 18,
      sender: "efinessy7@sbwire.com",
      sender_name: "Eugenie Finessy",
      to: ["johndoe@odnoklassniki.ru"],
      img: require('@/assets/images/portrait/small/avatar-s-2.png'),
      subject: "Polarised holistic protocol",
      cc: [],
      bcc: [],
      message: "<p>Hello John, </p><p><br></p><p>nonmotile generale punctated humanify escharine unlatch alrighty unshepherding standstill upcrane unilobular prefrontal primate fluviatic premundane tritocone compaternity dolina phonautographic cobby corse neurohypnotic cyrtopia wreathy</p><p><br></p><p>slanderousness Lemosi myxochondroma haemogram electrothermostat piperonyl spital reappeal pyopneumothorax Yunca eyoty forecourse extensive kickout germanization vigilant Criophoros muss aortostenosis Berchta phonophotoscopic precorrespondence rigidist castling</p>",
      attachments: ["Hac.xls"],
      isStarred: true,
      labels: ["Allgemein"],
      time: "Tue Jan 04 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "answered",
      unread: false
    },
    {
      id: 19,
      sender: "tmckeurton8@163.com",
      sender_name: "Tadio McKeurton",
      to: ["johndoe@nifty.com"],
      img: require('@/assets/images/portrait/small/avatar-s-14.png'),
      subject: "Down-sized transitional intranet",
      cc: [],
      bcc: [],
      message: "<p>Hey John, </p><p><br></p><p>calcimine gramineal nonfreezable interradial setula undertakable Abranchiata ultrasystematic spectroelectric Astarte Abraham bedsite enantiopathia exlex precoincident thiocarbamic meanswerederiform daturism thioantimoniate tripudiate unsultry predynastic benzidino doxasticon</p><p><br></p><p>overstale confessory glossed jane smoodger modernization Dehkan progymnospermic gangliectomy volumenometry Paulinistically tippy Gelfomino hive preredemption coccygine horrendous unintrusted plainer interrelatedly tearer arrojadite incircumspectly yokemating</p>",
      attachments: ["SedAnteVivamus.avi"],
      isStarred: true,
      labels: ["Datenschutz"],
      time: "Tue Jan 05 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "draft",
      unread: true
    },
    {
      id: 20,
      sender: "ebegg9@wikia.com",
      sender_name: "Eb Begg",
      to: ["johndoe@51.la"],
      img: require('@/assets/images/portrait/small/avatar-s-19.png'),
      subject: "Organized value-added model",
      cc: [],
      bcc: [],
      message: "<p>Hello Sir, </p><p><br></p><p>Lituola restrengthen bathofloric manciple decaffeinize Debby aciliated eatage proscribe prejurisdiction buttle quacky hyposecretion indemonstrableness schelling lymphopathy consumptivity nonappointment filminess spumiform erotogenicity equestrianize boneflower interlardation</p><p><br></p><p>allocate ponzite cote guilder tuff strind blamefully cocaine monstrously apocalyptically sublanate cherubimical oligoplasmia Miltonian hydrazyl unbeset statured Unami Cordeau strouthiocamelian geitjie larigo sociometry align</p>",
      attachments: ["Eget.jpeg"],
      isStarred: false,
      labels: ['K.I.'],
      time: "Tue Jan 06 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "inbox",
      unread: false
    },
    {
      id: 21,
      sender: "mspata@sina.com.cn",
      sender_name: "Modestine Spat",
      to: ["johndoe@oracle.com"],
      img: require('@/assets/images/portrait/small/avatar-s-9.png'),
      subject: "Profound systemic alliance 🎉 🎊",
      cc: [],
      bcc: [],
      message: "<p>Hey John, </p><p><br></p><p>Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescent</p><p><br></p><p>cinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing crea venesector Cirrostomi</p>",
      attachments: ["Felis.xls"],
      isStarred: false,
      labels: ['K.I.'],
      time: "Tue Jan 07 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "inbox",
      unread: true
    },
    {
      id: 22,
      sender: "cprandob@rambler.ru",
      sender_name: "Chase Prando",
      to: ["johndoe@vistaprint.com"],
      img: require('@/assets/images/portrait/small/avatar-s-2.png'),
      subject: "Centralized intermediate instruction set",
      cc: [],
      bcc: [],
      message: "<p>Respected Sir, </p><p><br></p><p>drainman merman pleurosteal slatted serenader Tantalus slodder cachalot guerdon flannelflower digestibility priggish loa monocarbide endive rented kelep pangamous gummata siris stockproof butlerism polycrystalline begetter</p><p><br></p><p>rack unpaining beglue astucious yardstick laniflorous tetrachloride avidious Biblicistic clival myosinogen antilobium unamiability unperforate Elaphurus wrapping deformity revocative kovil unwainscoted councilmanic saccharobiose federalize procellous</p>",
      attachments: ["HabitasJanlateaDictumst.avi"],
      isStarred: false,
      labels: ['K.I.'],
      time: "Tue Jan 08 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "answered",
      unread: false
    },
    {
      id: 23,
      sender: "nbartlesc@merriam-webster.com",
      sender_name: "Normand Bartles",
      to: ["johndoe@si.edu"],
      img: require('@/assets/images/portrait/small/avatar-s-9.png'),
      subject: "Re-contextualized leading edge projection",
      cc: [],
      bcc: [],
      message: "<p>Hello John, </p><p><br></p><p>orpine anidiomatic protoreptilian lacklusterness macromastia obstetricate Phaneroglossa tripleness laxatively hypophloeous ocellate sinoauricular porch lignitic miche strinkle hyperthyreosis tugui Alascan unrailroaded Cypriote vesuvian gradative hardener</p><p><br></p><p>forthink Locarno wattlework Nordicist formoxime demipriest medrick Lomentaria lucible Canossa Manatus anaplasty Spirochaete bonus overgown Amurru Skupshtina opisthorchiasis preworthy Brodie shortchange Nikko Gaviae crosscut</p>",
      attachments: ["UltricesPosuere.mpeg"],
      isStarred: false,
      labels: ["Allgemein"],
      time: "Tue Jan 09 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      unread: false
    },
    {
      id: 24,
      sender: "rgennd@dedecms.com",
      sender_name: "Robin Genn",
      to: ["johndoe@about.com"],
      img: require('@/assets/images/portrait/small/avatar-s-6.png'),
      subject: "Team-oriented system-worthy intranet",
      cc: [],
      bcc: [],
      message: "<p>Hi John, </p><p><br></p><p>balsamation teachableness enarthrodia dentilation superguarantee Yuapin schedulize antarctically biocoenotic unspottedly stinter admonitorily uncollatedness umquhile grayhead dephase stopgap evenglow photogenically desmacyte rink osiered specking ratwa</p><p><br></p><p>hospitize epithymetical montage rhapsodical Ninja superdramatist westerner clubionid haustellate Saltator rodding ophthalmomalacia concupiscibleness tingle hyperuresis Trigoniidae rearousal sanctimonial Munychia counterpaned exhibitable communer triadism Janiform</p>",
      attachments: ["Id.tiff"],
      isStarred: true,
      labels: ["Allgemein"],
      time: "Tue Jan 10 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      unread: false
    },
    {
      id: 25,
      sender: "eramelote@webeden.co.uk",
      sender_name: "Emmalynn Ramelot",
      to: ["johndoe@tinypic.com"],
      img: require('@/assets/images/portrait/small/avatar-s-6.png'),
      subject: "Phased eco-centric architecture",
      cc: [],
      bcc: [],
      message: "<p>Hey John, </p><p><br></p><p>hightoby Maja vindicatorship unglobe poduran bronchodilatation uncontorted underwarden cyclometric orgiacs tigerhearted upscale curatize Scylliorhinidae slick unisolated nanocephalous cuirassier heartwise Venusian titanitic requirement antirestoration toluido</p><p><br></p><p>Trematosaurus procreant ethos pessimistic antiselene pisk Amphipneusta anconad Corchorus unswabbed sizable Balanites sardonical shovelbill trammeler carpetwork rhexis remade myelinated right bounteous unsin retroduction Montanist</p>",
      attachments: ["Augue.mp3"],
      isStarred: true,
      labels: ["Allgemein"],
      time: "Tue Jan 11 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      unread: true
    },
    {
      id: 26,
      sender: "pcuzenf@mediafire.com",
      sender_name: "Penni Cuzen",
      to: ["johndoe@google.es"],
      img: require('@/assets/images/portrait/small/avatar-s-9.png'),
      subject: "Future-proofed motivating support",
      cc: [],
      bcc: [],
      message: "<p>Hello John, </p><p><br></p><p>yonder secessionalist astringer Ovangangela overcumber supracaecal scutulate Aglaonema Pakawan citril unsubducted cavernal multivalve ladify Cichorium supplication flexion cricothyroidean picaro locally etiogenic timeously scalpeen sapropel</p><p><br></p><p>agglutinative hyperideation Flamandize antipragmatic wincer brachyphalangia forenotion Angloman ornamentation merch revulsed windingly tristate orgic sateless orseilline Anchietea pilferer aroid counselor forevermore kulmet maladventure haruspice</p>",
      attachments: ["Leo.avi"],
      isStarred: false,
      labels: ['Allgemein'],
      time: "Tue Jan 12 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      unread: true
    },
    {
      id: 27,
      sender: "abaldersong@utexas.edu",
      sender_name: "Ardis Balderson",
      to: ["johndoe@ow.ly"],
      img: require('@/assets/images/portrait/small/avatar-s-18.png'),
      subject: "Focused impactful open system 📷 😃",
      cc: [],
      bcc: [],
      message: "<p>Hey John, </p><p><br></p><p>bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto Chelonia</p><p><br></p><p>Freudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose</p>",
      attachments: ["Interdum.doc"],
      isStarred: true,
      labels: ['K.I.'],
      time: "Tue Jan 13 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "inbox",
      unread: true
    },
    {
      id: 28,
      sender: "dmallallh@ask.com",
      sender_name: "Dagmar Mallall",
      to: ["johndoe@furl.net"],
      img: require('@/assets/images/portrait/small/avatar-s-4.png'),
      subject: "Function-based local productivity",
      cc: [],
      bcc: [],
      message: "<p>Dear Consumer, </p><p><br></p><p>gibbed preconceptual passionwort Goanese confluence ungnaw aubepine coadjacency Romipetal isochronic convener overinsistently psammophyte colpenchyma unlogic instinctivist motorcab wellhole receptacle sinistrocular avifaunal decagram paramountness samhita</p><p><br></p><p>sphincterismus Aunjetitz vagabondage parallelotropism unreceipted io wheretoever semivolcanic Chlamydomonadidae spittlestaff spermatogenic Sephardi berrigan lowly grotesquerie Pentameridae unsuccessive archlexicographer Stephanian reimpatriate untossed beth ventriloquial dedicational</p>",
      attachments: ["AdipiscingElit.ppt"],
      isStarred: true,
      labels: ['K.I.'],
      time: "Tue Jan 14 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "draft",
      unread: true
    },
    {
      id: 29,
      sender: "nmacgaughyi@aol.com",
      sender_name: "Nada MacGaughy",
      to: ["johndoe@cnet.com"],
      img: require('@/assets/images/portrait/small/avatar-s-18.png'),
      subject: "Compatible object-oriented policy",
      cc: [],
      bcc: [],
      message: "<p>Hello John, </p><p><br></p><p>miraculous pirijiri meekheartedness superoxygenation Elric paries epideictical Prajapati reassign stridlins spoach overreadily abusion sailmaking illiterately septangularness retinene Hler exceptionary ferberite possessionalist piperide Oschophoria beau</p><p><br></p><p>abnormalize yearnfulness Janiculum sixhaend abstemiousness uterogestation orchestrina gallotannin muckment melanoblast supercivilization inclusionist electroosmotically immatchable stomatoplastic satinity hydrogen unexorable quinamidine milksopism fascinating ratsbane endocline Zolaist</p>",
      attachments: ["AnteIpsumPrimis.ppt"],
      isStarred: false,
      labels: ['Allgemein'],
      time: "Tue Jan 16 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "trash",
      unread: false
    },
    {
      id: 30,
      sender: "douldcottj@yellowpages.com",
      sender_name: "Dalila Ouldcott",
      to: ["johndoe@github.io"],
      img: require('@/assets/images/portrait/small/avatar-s-19.png'),
      subject: "User-friendly value-added application",
      cc: [],
      bcc: [],
      message: "<p>Hey John, </p><p><br></p><p>wellish laminable ineunt popshop catalyte prismatize campimetrical lentisk excluding portlet coccinellid impestation Bangash Lollardist perameloid procerebrum presume cashmerette washbasin nainsook Odontolcae Alea holcodont welted</p><p><br></p><p>cibarious terrifical uploop naphthaleneacetic containable nonsailor Zwinglian blighty benchful guar porch fallectomy building coinvolve eidolism warmth unclericalize seismographic recongeal ethanethial clog regicidal regainment legific</p>",
      attachments: ["EratFermentum.mpeg"],
      isStarred: true,
      labels: ["Allgemein"],
      time: "Tue Jan 17 2018 10:55:00 GMT+0000 (GMT)",
      replies: [],
      mailFolder: "trash",
      unread: false
    }
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
