<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card
          title="ELSI-SAT Bericht als PDF erzeugen"
          title-color="black"
          subtitle="">

          <div v-if="this.quota !== 100">
            Die PDF kann erst erzeugt werden, wenn der Fragebogen vollständig beantwortet ist.
          </div>
          <div v-else>
            <p>Download der Ergebnisse des ELSI-SAT Fragebogens als PDF Datei.</p>
            <br>
            <pdfExportButton />
          </div>
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card
          title="Export"
          title-color="black"
          subtitle="">
          <p>Exportiert den ELSI-SAT Fragebogen als JSON-formatierte Datei.</p>
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
          title="Import"
          title-color="black"
          subtitle="">
          <p>Importiert eine ELSI-SAT Datei zur weiteren Bearbeitung.</p>
          <br>
          <ImportJSON />
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
      pdfExportButton
    },

    methods: {
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
