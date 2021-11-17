import Platform from "../enums/Platform";
import MainConfig from "../interfaces/MainConfig";

import QpvImage from "../assets/images/projects/quick-picture-viewer.png";

const mainConfig: MainConfig = {
  projects: [
    {
      title: "Quick Picture Viewer",
      href: "https://moduleart.github.io/quick-picture-viewer",
      image: QpvImage,
      githubUrl: "https://github.com/quick-picture-viewer",
      platform: Platform.win,
    },
    {
      title: "Quick Color Picker",
      href: "https://moduleart.github.io/quick-picture-viewer",
      image: QpvImage,
      githubUrl: "https://github.com/quick-picture-viewer",
      platform: Platform.win,
    },
  ],
};

export default mainConfig;
