<template>
  <div class="h-screen flex w-full bg-img" >
    <div class="vx-col sm:w-4/5 md:w-11/12 lg:w-4/5 mx-auto self-center">

      <div class="vx-row w-full mx-auto">
        <h2 class="w-full mx-auto mb-6" style="text-align: center;">Wilkommen zum ELSI-SAT</h2>
      </div>

      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row">

            <div class="vx-col sm:w-full md:w-1/2 mx-auto">
              <div class="p-10 h-full bg-white">
                <div class="vx-card__title mb-8">
                  <h4 class="mb-4">Neuen Fragebogen beginnen</h4>
                  <p>
                    Beginnen Sie hier mit einem neuen Fragebogen, wenn Sie
                    keine ELSI-SAT Export-Datei (<code>.json</code>) besitzen.
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
                    Wenn Sie eine ELSI-SAT Export-Datei (<code>.json</code>) besitzen,
                    können Sie diese hier importieren, und die Bearbeitung des
                    Fragebogens fortsetzen.
                  </p>
                </div>
                <ImportJSON />
              </div>
            </div>
          </div>
        </div>
      </vx-card>

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
