<template>
  <form>
    <div class="vx-row mb-4">
      <div class="vx-col w-full">
        <validation-provider
          rules="required"
          v-slot="{ errors }">
          <vs-input
            name="nameProject"
            v-model="form.nameProject"
            label="Name oder Bezeichnung des Forschungsvorhabens"
            class="w-full"
            :class="{'form-error': errors.length > 0}"
            icon-pack="feather"
            icon="icon-user"
            icon-no-border
          />
        </validation-provider>
      </div>
    </div>

    <div class="vx-row mb-8">
      <div class="vx-col w-full">
        <validation-provider
          rules="required"
          v-slot="{ errors }">
          <vs-input
            name="nameApplicant"
            v-model="form.nameApplicant"
            label="Name des Antragstellers"
            class="w-full"
            :class="{'form-error': errors.length > 0}"
            icon-pack="feather"
            icon="icon-user"
            icon-no-border
          />
        </validation-provider>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full">
        <vs-button
          @click.prevent="submitForm(form)"
          :disabled="!isComplete"
          class="mr-3 mb-2">
          Speichern und weiter
        </vs-button>
        <vs-button
          :disabled="this.popupActive == true"
          color="warning"
          type="border"
          class="mb-2"
          @click="form.nameProject = form.nameApplicant = ''">
          Löschen
        </vs-button>
      </div>
    </div>
  </form>
</template>

<script>
  import {configure, extend, ValidationProvider} from 'vee-validate';
  import {required} from 'vee-validate/dist/rules';

  extend('required', {
    ...required,
    message: 'This field is required'
  });

  configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
      dirty: ['is-dirty', 'is-dirty'],
    }
  })

  export default {
    name: "MetaDataForm",

    components: {
      ValidationProvider
    },

    data() {
      return {
        form: {
          nameApplicant: '',
          nameProject: ''
        }
      }
    },

    props: {
      popupActive: {
        default: false,
        type: Boolean
      }
    },

    methods: {
      submitForm(form) {
        if (this.isComplete === true) {
          // Save data in store.
          this.$store.dispatch('email/setProjectMeta', form);

          if (this.popupActive === false) {
            // Go to home.
            this.$router.push("/");
          } else {
            // Close modal.
            this.$emit('popupActive', false)
          }

        } else {
          // Should never be triggered due to the submit button being
          // disabled as long as either field has no value,
          // but better be safe than sorry.
          this.$vs.notify({
            time: 6000,
            title: 'Fehlende Daten',
            text: 'Bitte füllen Sie das Formular aus.',
            color: 'warning'
          })
        }
      }
    },

    computed: {
      isComplete() {
        return (this.form.nameProject && this.form.nameApplicant) ? true : false;
      }
    },

    mounted() {
      this.form.nameApplicant = this.$store.getters['email/getProjectMeta'].nameApplicant
      this.form.nameProject = this.$store.getters['email/getProjectMeta'].nameProject
    },
  }

</script>


<style lang="scss">
  .form-error {
    label {
      color: red;
    }

    .vs-inputx {
      border-color: red !important;
    }
  }
</style>
