<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card
          title="Neues Assessment beginnen"
          title-color="black"
          subtitle=""
        >
          <p class="mb-10">
            Beginnen Sie hier mit einem neuen Assessment, wenn Sie keine
            ELSI-SAT-Export-Datei (*.json) besitzen.
          </p>
          <MetaDataForm />
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card
          title="Vorhandenes Assessment importieren"
          title-color="black"
          subtitle=""
        >
          <p>
            Wenn Sie eine ELSI-SAT-Export-Datei (*.json) besitzen,
            können Sie diese hier importieren und die Bearbeitung des
            Assessments fortsetzen.
          </p>
          <ImportJSON />
        </vx-card>
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
    ImportJSON,
  },
  data() {
    return {};
  },
  computed: {
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    },
  },
};
</script>

<style lang="scss">
.vs-button {
  padding: 0.65rem 1.4rem;
  font-size: 0.95rem;
}

#my-tabs {
  .vs-tabs--content {
    padding: 0;
  }

  .vs-tabs--ul {
    box-shadow: none;
  }

  .con-ul-tabs {
    min-width: 210px;

    .vs-tabs--li .vs-tabs--btn SPAN {
      text-align: left;
    }
  }
}
</style>
