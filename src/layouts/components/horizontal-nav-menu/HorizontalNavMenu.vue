<template>
  <div class="relative">
    <div class="vx-navbar-wrapper nav-menu-wrapper">
      <vs-navbar
        class="vx-navbar navbar-custom navbar-skelton"
        :color="navbarColor"
      >
        <!-- Logo -->
        <router-link
          tag="div"
          class="vx-logo cursor-pointer flex items-center lg:ml-5 mr-0 sm:mr-5"
          to="/"
        >
          <vs-icon
            color="primary"
            icon-pack="feather"
            icon="icon-layers"
            class="mr-3 ml-2"
            size="small"
          ></vs-icon>
          <span class="vx-logo-text" style="width: 107px">ELSI-SAT</span>
        </router-link>
        <!-- /Logo -->

        <ul class="menu-items flex flex-wrap w-full items-center">
          <li
            class="menu-item"
            v-for="(item, index) in navMenuItems"
            :key="index"
          >
            <!-- If header -->
            <template v-if="item.header">
              <h-nav-menu-header :header="item" class="menu-header relative" />
            </template>

            <!-- If it's group -->
            <template v-else-if="item.submenu">
              <h-nav-menu-group
                class="menu-group relative py-4"
                bottom
                :key="`group-${index}`"
                :group="item"
                :groupIndex="index"
                :open="checkGrpChildrenActive(item)"
              />
            </template>

            <!-- If it's link -->
            <div v-else-if="item.url" class="flex flex-no-wrap menu-link">
              <h-nav-menu-item
                class="relative py-4 cursor-pointer"
                :to="item.slug !== 'external' ? item.url : null"
                :href="item.slug === 'external' ? item.url : null"
                :icon="item.icon"
                :target="item.target"
                :isDisabled="item.isDisabled"
                :slug="item.slug"
              >
                <span class="truncate">{{ item.name }}</span>
                <vs-chip :color="item.tagColor" v-if="item.tag">{{item.tag}}</vs-chip>
              </h-nav-menu-item>
              <feather-icon
                v-if="(navMenuItems.length > index+1)"
                class="xs:inline-flex text-grey-light"
                icon="ChevronRightIcon" />
            </div>

          </li>

        </ul>

        <!-- USER META -->
        <ul class="the-navbar__user-meta flex items-center">
          <li class="menu-item ml-2">
            <div class="menu-link">
              <h-nav-menu-item
                class="relative py-4 cursor-pointer"
                to="/knowledge-base"
                icon="HelpCircleIcon"
                slug="knowledge-base"
              >
                <span class="truncate">Glossar</span>
              </h-nav-menu-item>
            </div>
          </li>

        </ul>
      </vs-navbar>
    </div>
  </div>
</template>

<script>
import HNavMenuGroup from "./HorizontalNavMenuGroup.vue";
import HNavMenuHeader from "./HorizontalNavMenuHeader.vue";
import HNavMenuItem from "./HorizontalNavMenuItem.vue";
import MetaDataForm from "@/components/MetaDataForm";

export default {
  data() {
    return {
      popupActive: false,
    };
  },

  props: {
    // navbarColor  : { type: String, default: "#fff", },
    navMenuItems: { type: Array, required: true },
  },

  components: {
    HNavMenuGroup,
    HNavMenuHeader,
    HNavMenuItem,
    MetaDataForm,
  },
  computed: {
    navbarColor() {
      return this.$store.state.theme === "dark" ? "#10163a" : "#fff";
    },
  },
  methods: {
    syncPopupActive(value) {
      this.popupActive = value;
    },

    checkGrpChildrenActive(group) {
      const path = this.$route.fullPath;
      let active = false;
      const routeParent = this.$route.meta
        ? this.$route.meta.parent
        : undefined;

      if (group.submenu) {
        group.submenu.forEach((item) => {
          if (active) return true;
          if ((path == item.url || routeParent == item.slug) && item.url) {
            active = true;
          } else if (item.submenu) {
            this.checkGrpChildrenActive(item);
          }
        });
      }

      return active;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/horizontalNavMenu.scss";

.dropdown-form .vs-dropdown--custom {
  width: 300px;
  padding: 20px !important;
}
</style>
