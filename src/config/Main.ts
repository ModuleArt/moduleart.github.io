import Platform from "../enums/Platform";
import MainConfig from "../interfaces/MainConfig";

import QpvIcon from "../assets/images/projects/quick-picture-viewer/icon.png";
import QpvImage1 from "../assets/images/projects/quick-picture-viewer/1.png";
import QpvImage2 from "../assets/images/projects/quick-picture-viewer/2.png";

import SzContextIcon from "../assets/images/projects/sz-context/icon.png";
import SzContextImage1 from "../assets/images/projects/sz-context/1.png";
import SzContextImage2 from "../assets/images/projects/sz-context/2.png";
import SzContextImage3 from "../assets/images/projects/sz-context/3.png";
import SzContextImage4 from "../assets/images/projects/sz-context/4.png";

import QcpIcon from "../assets/images/projects/quick-color-picker/icon.png";
import QcpImage1 from "../assets/images/projects/quick-color-picker/1.png";
import QcpImage2 from "../assets/images/projects/quick-color-picker/2.png";

const mainConfig: MainConfig = {
  title: "Module Art",
  projects: [
    {
      title: "Quick Picture Viewer",
      shortDescription:
        "Lightweight, versatile desktop image viewer for Windows",
      href: "/quick-picture-viewer",
      appIcon: QpvIcon,
      images: [QpvImage1, QpvImage2],
      githubPath: "ModuleArt/quick-picture-viewer",
      platform: Platform.win,
      os: "Windows 7+",
      roadmapUrl: "https://trello.com/b/mFgTs747/quick-picture-viewer",
      authorName: "Eugene Volynko",
      authorUrl: "https://github.com/Beelink",
    },
    {
      title: "Quick Color Picker",
      shortDescription:
        "Lightweight desktop color picker and color editor utility for Windows",
      href: "/quick-color-picker",
      appIcon: QcpIcon,
      images: [QcpImage1, QcpImage2],
      githubPath: "ModuleArt/quick-color-picker",
      platform: Platform.win,
      os: "Windows 7+",
      roadmapUrl: "https://trello.com/b/ocDxuOLf/quick-color-picker-v2",
      authorName: "Eugene Volynko",
      authorUrl: "https://github.com/Beelink",
    },
    {
      title: "SzContext",
      shortDescription:
        "Open files or folders using your favorite app from Finder® context menu",
      href: "/sz-context",
      appIcon: SzContextIcon,
      images: [
        SzContextImage1,
        SzContextImage2,
        SzContextImage3,
        SzContextImage4,
      ],
      githubPath: "RoadToDream/SzContext",
      platform: Platform.mac,
      os: "macOS 10.15+",
      authorName: "Duan Jiawei",
      authorUrl: "https://github.com/RoadToDream",
    },
  ],
};

export default mainConfig;
