<template>
  <header class="global-header">
    <div class="global-header__logo">
      <h1><a class="NO_ANIM" href="/">Module Art</a></h1>
    </div>
    <global-menu />
  </header>
</template>

<script>
import GlobalMenu from "../GlobalMenu/GlobalMenu.vue";

export default {
  name: "GlobalHeader",
  components: {
    GlobalMenu,
  },
};
</script>

<style lang="scss" scoped>
@import "./GlobalHeader.scss";
</style>
