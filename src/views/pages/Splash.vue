<template>
  <div class="h-screen flex w-full bg-img" >
    <div class="vx-col sm:w-4/5 md:w-11/12 lg:w-4/5 mx-auto self-center">

      <div class="vx-row w-full mx-auto">
        <h2 class="w-full mx-auto mb-2" style="text-align: center;">Wilkommen bei ELSI-SAT</h2>
        <p class="w-full mx-auto mb-8" style="text-align: center;">Ein automatisiertes ELSI-Screening-& Assessment-Tool für MTI-Forschungsvorhaben</p>
      </div>

      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row">

            <div class="vx-col sm:w-full md:w-1/2 mx-auto">
              <div class="p-10 h-full bg-white">
                <div class="vx-card__title mb-8">
                  <h4 class="mb-4">Neuen Fragebogen beginnen</h4>
                  <p class="mb-10">
                    Beginnen Sie hier mit einem neuen Fragebogen, wenn Sie
                    keine ELSI-SAT-Export-Datei (<code>.json</code>) besitzen.
                  </p>

                  <MetaDataForm />

                </div>
              </div>
            </div>

            <div class="vx-col sm:w-full md:w-1/2 mx-auto">
              <div class="p-10">
                <div class="vx-card__title mb-8">
                  <h4 class="mb-4">Vorhandenen Fragebogen importieren</h4>
                  <p>
                    Wenn Sie eine ELSI-SAT-Export-Datei (<code>.json</code>) besitzen,
                    können Sie diese hier importieren und die Bearbeitung des
                    Fragebogens fortsetzen.
                  </p>
                </div>
                <ImportJSON />
              </div>
            </div>
          </div>
        </div>
      </vx-card>

      <div class="vx-row w-full mx-auto">
        <p class="w-full mx-auto mt-5" style="text-align: center;">
          Gefördert vom <a href="https://www.bmbf.de" target="_blank" style="color: #333">BMBF</a>,
          entwickelt am <a href="https://www.hdm-stuttgart.de/digitale-ethik/home" target="_blank" style="color: #333">Institut für Digitale Ethik</a>
          der <a href="https://www.hdm-stuttgart.de/index_html" target="_blank" style="color: #333">Hochschule der Medien</a>.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  import ImportJSON from "@/components/ImportJSON";
  import MetaDataForm from "@/components/MetaDataForm";

  export default {

    components: {
      MetaDataForm,
      ImportJSON
    }
  }
</script>
