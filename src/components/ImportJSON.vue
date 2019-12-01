<template>
  <div class="excel-import">
    <input type="file" ref="fileInput" class="hidden"
           accept=".json"
           @change="handleClick">
    <div @click="$refs.fileInput.click()"
         @drop="handleDrop"
         @dragover="handleDragover"
         @dragenter="handleDragover"
         class="px-8 py-16 cursor-pointer text-center border-2 border-dashed d-theme-border-grey-light d-theme-dark-bg text-xl">
      <feather-icon icon="UploadCloudIcon" svgClasses="h-16 w-16 stroke-current text-grey" class="block" />
      <span>JSON-Export ablegen oder </span>
      <span class="font-medium text-primary"
            @click.stop="$refs.fileInput.click()">
        Computer durchsuchen
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
  },

  methods: {
    handleClick(e) {
      const files = e.target.files
      const rawFile = files[0]
      if (!rawFile) return
      this.uploadFile(rawFile)
    },

    handleDragover(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },

    handleDrop(e) {
      // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
      e.stopPropagation()
      e.preventDefault()

      const fileList = e.dataTransfer.files

      // Check number of files.
      if (fileList.length !== 1) {
        this.$vs.notify({
          time:6000,
          title: 'Zu viele Dateien',
          text: 'Es kann nur eine einzige Datei hochgeladen werden.',
          color: 'warning'
        })
        return
      }

      // Only use the file.
      // fileList[1] = "length".
      const rawFile = fileList[0]

      // Check fileformat.
      if (!this.isJSON(rawFile)) {
        this.$vs.notify({
          time:6000,
          title: 'Falsches Dateiformat',
          text: 'Es können ausschließlich JSON-Dateien hochgeladen werden.',
          color: 'warning'
        })
        return false
      }

      this.uploadFile(rawFile)
    },

    // https://developer.mozilla.org/de/docs/Web/API/FileReader/FileReader
    readerData(rawFile) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => {resolve(e.target.result)}
        reader.onerror = e => {reject(e);}
        reader.readAsText(rawFile, "UTF-8");
      })
    },

    uploadFile(file) {
      this.$refs['fileInput'].value = null // fix can't select the same file
      this.readerData(file)
        .then(data => this.checkJSON(data))
        .catch(err => console.error(err))
    },

    isJSON(file) {
      return /\.(json)$/.test(file.name)
    },

    isValidJSON(text) {
      try {
        JSON.parse(text);
      } catch (e) {
        return false;
      }
      return true;
    },

    checkJSON(text) {
      if (!this.isValidJSON(text)) {
        this.$vs.notify({
          time:6000,
          title: 'Fehlerhafte Formatierung',
          text: 'Die Import-Datei ist fehlerhaft formatiert.',
          color: 'warning'
        })
      } else {
        this.$vs.notify({
          time:6000,
          title: 'Import-Datei ist gültig.',
          color: 'success'
        })

        this.setStore(text)
      }
    },

    setStore(text) {
      this.$store.dispatch('email/setState', text)

      // Todo usta: Check if store really was updated,
      // eg hash(store) = hash(json)
      this.$vs.notify({
        time:6000,
        title: 'Import erfolgreich durchgeführt.',
        color: 'success'
      })
    }

  }
}
</script>
