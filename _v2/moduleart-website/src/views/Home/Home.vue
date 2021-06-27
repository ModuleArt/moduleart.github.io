<template>
  <div class="home">
    <project-list />
  </div>
</template>

<script>
import ProjectList from "../../components/ProjectList/ProjectList.vue";

export default {
  name: "Home",
  components: {
    ProjectList,
  },
}
</script>
