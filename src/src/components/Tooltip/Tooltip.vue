<template>
  <div class="tooltip">
    <slot />
    <span class="tooltip__holder">
      <span class="tooltip__text">{{ computedText }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedText() {
      return this.text;
    },
  },
};
</script>

<style lang="scss">
@import "./Tooltip.scss";
</style>