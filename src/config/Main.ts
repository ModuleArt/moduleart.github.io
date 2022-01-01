import Platform from "../enums/Platform";
import MainConfig from "../interfaces/MainConfig";

import SzContextImage1 from "../assets/images/projects/sz-context/1.png";
import SzContextImage2 from "../assets/images/projects/sz-context/2.png";

const mainConfig: MainConfig = {
  title: "Module Art",
  projects: [
    {
      title: "Quick Picture Viewer",
      shortDescription:
        "Lightweight, versatile desktop image viewer for Windows",
      href: "/quick-picture-viewer",
      images: [
        "https://moduleart.github.io/quick-picture-viewer/imgs/screenshots/main.png",

      ],
      githubUrl: "https://github.com/quick-picture-viewer",
      platform: Platform.win,
    },
    {
      title: "SzContext",
      shortDescription:
        "Open files or folders using your favorite app from Finder® context menu",
      href: "/sz-context",
      images: [
       SzContextImage1, 
       SzContextImage2,
      ],
      githubUrl: "https://github.com/quick-picture-viewer",
      platform: Platform.mac,
    },
    {
      title: "Quick Color Picker",
      shortDescription:
        "Lightweight desktop color picker and color editor utility for Windows",
      href: "/quick-color-picker",
      images: [
        "https://github.com/ModuleArt/quick-color-picker/raw/v2/docs/screenshots/main.png",
          
      ],
      githubUrl: "https://github.com/quick-color-picker",
      platform: Platform.win,
    },
  ],
};

export default mainConfig;
