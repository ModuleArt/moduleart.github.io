<template>
  <footer class="global-footer">
    <global-menu />
  </footer>
</template>

<script>
import GlobalMenu from "../GlobalMenu/GlobalMenu.vue";

export default {
  name: "GlobalFooter",
  components: {
    GlobalMenu,
  },
};
</script>

<style lang="scss" scoped>
@import "./GlobalFooter.scss";
</style>
