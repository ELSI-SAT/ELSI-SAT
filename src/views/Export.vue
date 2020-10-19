<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card
          title="Export als PDF"
          title-color="black"
          subtitle="">
          <p>Sobald der Fragebogen vollständig beantwortet ist, kann das ELSI-SAT-Assessment als PDF-Datei heruntergeladen werden.</p>
          <br> 
          <pdfExportButton v-bind:disabled="!(this.quota >= 100)" />
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card
          title="Export als JSON"
          title-color="black"
          subtitle="">
          <p>Exportiert das ELSI-SAT-Assessment als JSON-formatierte Datei. Diese Datei können Sie später wieder einlesen oder zur weiteren Bearbeitung an andere Personen weiterleiten.</p>
          <br>
          <vs-button color="primary" type="filled" v-on:click="saveFile()">
            Export durchführen
          </vs-button>
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card
          title="Daten löschen und neu beginnen"
          title-color="black"
          subtitle="">
          <p>Löscht sämtliche Eingaben und beginnt einen neues Assessment.</p>
          <br>
          <vs-button color="primary" type="filled" v-on:click="resetstore_init()">
            Daten löschen
          </vs-button>
        </vx-card>
      </div>
    </div>

  </div>

</template>

<script>
  import {mapGetters} from "vuex";
  import ImportJSON from "../components/ImportJSON";
  import pdfExportButton from "../components/pdf-export-button";

  export default {
    name: "Home",

    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters([
        'email',
      ]),

      /**
       *
       * @returns {number}
       */
      quota() {
        return this.$store.getters['email/getQuota']
      },
    },

    components: {
      ImportJSON,
      pdfExportButton,
    },

    methods: {
      resetstore_init(){
        this.$vs.dialog({
          type:'confirm',
          color: 'danger',
          title: `Löschen bestätigen`,
          text: 'Möchten Sie wirklich sämtliche Angaben löschen und mit einem neuen Fragebogen beginnen? Die Aktion kann nicht rückgängig gemacht werden.',
          acceptText: "Löschen",
          cancelText: "Abbrechen",
          accept:this.resetstore_execute
        })
      },

      resetstore_execute(){
        this.$store.commit('email/reset')

        this.$router.push({ name: 'stammdaten' })

        this.$vs.notify({
          color:'danger',
          title:'Daten gelöscht',
          text:'Alle Daten wurden gelöscht.'
        })
      },

      saveFile: function() {
        const data = JSON.stringify(this.$store.state.email)
        const blob = new Blob([data], {type: 'text/plain'})
        const e = document.createEvent('MouseEvents'),
          a = document.createElement('a');
        a.download = "ELSI-SAT-Export.json";
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
      },
    }
  }
</script>
