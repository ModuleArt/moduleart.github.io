<template>
  <ul class="project-list">
    <li v-for="(project, projectIndex) in projects" :key="projectIndex" class="project">
      <h2 class="project__title">
        <a :href="project.url">{{ project.title }}</a>
        <span class="project__info"> for </span>
        <tooltip class="project__platform" v-for="(platform, platformIndex) in project.platforms" :key="platformIndex" :text="platform.tooltip">
          <span class="project__info">{{ platform.title }}</span>
        </tooltip>
        <tooltip class="project__status" text="Under active development" v-if="project.activeDev">
          <span class="project__info">♡</span>
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
              title: "Win",
              tooltip: "Windows 7-11",
            },
          ],
          activeDev: false,
        },
        {
          title: "Mshot",
          url: "https://moduleart.github.io/mshot",
          image: "quick-picture-viewer.png",
          platforms: [
            {
              name: "mac",
              title: "Mac",
              tooltip: "MacOS",
            },
          ],
          activeDev: true,
        },
        // {
        //   title: "Qsnip",
        //   url: "https://moduleart.github.io/qsnip",
        //   image: null,
        //   platforms: [
        //     {
        //       name: "windows",
        //       title: "Windows",
        //     },
        //     {
        //       name: "mac",
        //       title: "Mac",
        //     },
        //     {
        //       name: "ubuntu",
        //       title: "Linux (Ubuntu PPA)",
        //     },
        //     {
        //       name: "flatpak",
        //       title: "Linux (Flatpak)",
        //     },
        //   ],
        // },
      ],
    }
  },
  methods: {
    getProjectImage(imageName) {
      return require("../../assets/images/projects/" + imageName);
    },
  },
};
</script>

<style lang="scss">
@import "./ProjectList.scss";
</style>