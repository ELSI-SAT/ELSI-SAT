<template>
	<h4>You are in home.</h4>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "Home",
    computed: mapGetters(['email']),
    created() {
      console.log('Email.vue created')
      console.log(this.$store.state.email)
    }
  }
</script>
