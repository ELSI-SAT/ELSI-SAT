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

                  <template>
                    <div class="vx-row mt-10 mb-4">
                      <div class="vx-col w-full">
                        <vs-input
                          class="w-full"
                          icon-pack="feather"
                          icon="icon-user"
                          icon-no-border
                          label="Name oder Bezeichnung des Forschungsvorhabens"
                          v-model="nameProject" />
                      </div>
                    </div>

                    <div class="vx-row mb-8">
                      <div class="vx-col w-full">
                        <vs-input
                          class="w-full"
                          icon-pack="feather"
                          icon="icon-user"
                          icon-no-border
                          label="Name des Antragstellers"
                          v-model="nameApplicant" />
                      </div>
                    </div>
                    <div class="vx-row">
                      <div class="vx-col w-full">
                        <vs-button class="mr-3 mb-2">
                          Speichern und weiter
                        </vs-button>
                        <vs-button color="warning" type="border" class="mb-2" @click="nameProject = nameApplicant = ''">
                          Löschen
                        </vs-button>
                      </div>
                    </div>
                  </template>

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

  export default {

    data() {
      return {
        nameApplicant: '',
        nameProject: ''
      }
    },

    components: {
      ImportJSON
    }
  }
</script>
