<!-- =========================================================================================
File Name: TheFooter.vue
Description: Footer component
Component Name: TheFooter
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
  <footer
    class="the-footer flex-wrap justify-between"
    :class="classes">

    <span>ELSI-SAT
      <router-link to="/datenschutz">Datenschutz</router-link>
      • <router-link to="/impressum">Impressum</router-link>
    </span>
    <span class="md:flex hidden items-center">
      <span>Version&nbsp;</span> {{ $options.methods.myappVersion() }}
    </span>
  </footer>
</template>

<script>
export default {
  name: "the-footer",
  props: {
    classes: {
      type: String,
    },
  },
  methods: {
    myappVersion() {
// console.log("node_env: " + process.env)
// console.log("version: " + process.env.VUE_APP_VERSION)
      return process.env.VUE_APP_VERSION;
    },
  },
}
</script>
