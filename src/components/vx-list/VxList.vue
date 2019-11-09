<!-- =========================================================================================
    File Name: VxList.vue
    Description: list Component
    Component Name: VxList
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
    <ul class="list">
        <li class="list__item" v-for="(item, index) in props.list" :key="index">
            <feather-icon :icon="props.icon" class="w-5 h-5 mr-1"></feather-icon><span v-html="item"></span>
        </li>
    </ul>
</template>

<script>
export default {
    name: "vx-list",
    props: {
        list: {
            type: Array,
            required: true,
        },
        icon: {
            type: String,
            default: "ChevronsRightIcon",
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/vxList.scss";
</style>
