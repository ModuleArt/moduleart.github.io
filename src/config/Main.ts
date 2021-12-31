import Platform from "../enums/Platform";
import MainConfig from "../interfaces/MainConfig";

import QpvImage from "../assets/images/projects/quick-picture-viewer.png";

const mainConfig: MainConfig = {
  projects: [
    {
      title: "Quick Picture Viewer",
      href: "/quick-picture-viewer",
      image: QpvImage,
      githubUrl: "https://github.com/quick-picture-viewer",
      platform: Platform.win,
    },
    {
      title: "SzContext",
      href: "/sz-context",
      image: "https://github.com/RoadToDream/SzContext/raw/main/images/SzContextLight.png",
      githubUrl: "https://github.com/quick-picture-viewer",
      platform: Platform.mac,
    },
  ],
};

export default mainConfig;
