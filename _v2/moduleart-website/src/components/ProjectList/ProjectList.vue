<template>
  <ul class="project-list">
    <li v-for="(project, projectIndex) in projects" :key="projectIndex" class="project">
      <h2 class="project__title">
        <a :href="project.url">{{ project.title }}</a>
        <span class="light"> for </span>
        <tooltip class="project__platform" v-for="(platform, platformIndex) in project.platforms" :key="platformIndex" :text="platform.title">
          <img :src="getPlatformImage(platform.name)" :alt="platform.title" />
        </tooltip>
      </h2>
      <a class="project__image">
        <img v-if="project.image" :src="getProjectImage(project.image)" :alt="project.title" />
      </a>
    </li>
  </ul>
</template>

<script>
import Tooltip from "../Tooltip/Tooltip.vue";

export default {
  name: "ProjectList",
  components: {
    Tooltip,
  },
  data() {
    return {
      projects: [
        {
          title: "Quick Picture Viewer",
          url: "https://moduleart.github.io/quick-picture-viewer",
          image: "quick-picture-viewer.png",
          platforms: [
            {
              name: "windows",
              title: "Windows",
            },
          ],
        },
        {
          title: "Qsnip",
          url: "https://moduleart.github.io/qsnip",
          image: null,
          platforms: [
            {
              name: "windows",
              title: "Windows",
            },
            {
              name: "mac",
              title: "Mac",
            },
            {
              name: "ubuntu",
              title: "Linux (Ubuntu PPA)",
            },
            {
              name: "flatpak",
              title: "Linux (Flatpak)",
            },
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