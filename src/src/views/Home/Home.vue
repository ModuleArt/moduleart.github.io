<template>
  <div class="home-view">
    <project-list />
  </div>
</template>

<script>
import ProjectList from "../../components/ProjectList/ProjectList.vue";

export default {
  name: "HomeView",
  components: {
    ProjectList,
  },
}
</script>
