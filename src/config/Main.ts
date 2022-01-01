import Platform from "../enums/Platform";
import MainConfig from "../interfaces/MainConfig";

import QpvImage from "../assets/images/projects/quick-picture-viewer.png";

const mainConfig: MainConfig = {
  title: "Module Art",
  projects: [
    {
      title: "Quick Picture Viewer",
      shortDescription: "Lightweight, versatile desktop image viewer for Windows",
      href: "/quick-picture-viewer",
      // image: QpvImage,
      image: "https://moduleart.github.io/quick-picture-viewer/imgs/screenshots/main.png",
      githubUrl: "https://github.com/quick-picture-viewer",
      platform: Platform.win,
    },
    {
      title: "SzContext",
      shortDescription: "Open files or folders using your favorite app from Finder® context menu",
      href: "/sz-context",
      image: "https://github.com/RoadToDream/SzContext/raw/main/images/SzContextLight.png",
      githubUrl: "https://github.com/quick-picture-viewer",
      platform: Platform.mac,
    },
    {
      title: "Quick Color Picker",
      shortDescription: "Lightweight desktop color picker and color editor utility for Windows",
      href: "/quick-color-picker",
      image: "https://github.com/ModuleArt/quick-color-picker/raw/v2/docs/screenshots/main.png",
      githubUrl: "https://github.com/quick-color-picker",
      platform: Platform.win,
    }
  ],
};

export default mainConfig;
