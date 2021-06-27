<template>
  <main>
    <global-header />
    <router-view />
    <global-footer />
    <apps />
  </main>
</template>

<script>
import GlobalHeader from "../GlobalHeader/GlobalHeader.vue";
import GlobalFooter from "../GlobalFooter/GlobalFooter.vue";

export default {
  name: "App",
  components: {
    GlobalHeader,
    GlobalFooter,
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
