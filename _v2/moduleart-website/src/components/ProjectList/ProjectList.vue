<template>
  <ul class="project-list">
    <li v-for="(project, projectIndex) in projects" :key="projectIndex" class="project">
      <h2 class="project__title">
        <a :href="project.url">
          <span>{{ project.title }}</span>
          <span class="light"> for </span>
          <img 
            v-for="(platform, platformIndex) in project.platforms"
            :key="platformIndex"
            :src="getPlatformImage(platform)" 
            :alt="platform"
            :title="platform"
          /></a>
      </h2>
      <a class="project__image">
        <img :src="getProjectImage(project.image)" :alt="project.title" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      projects: [
        {
          title: "Quick Picture Viewer",
          url: "https://moduleart.github.io/quick-picture-viewer",
          image: "quick-picture-viewer.png",
          platforms: [
            "windows",
          ],
        },
        {
          title: "Qsnip",
          url: "https://moduleart.github.io/qsnip",
          image: "qsnip.png",
          platforms: [
            "windows",
            "mac",
            "linux",
          ],
        },
      ],
    }
  },
  methods: {
    getProjectImage(imageName) {
      return require("../../assets/images/projects/" + imageName);
    },
    getPlatformImage(platformName) {
      return require("../../assets/images/platforms/" + platformName + ".png");
    },
  },
};
</script>

<style lang="scss">
@import "./ProjectList.scss";
</style>