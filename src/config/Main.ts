import Platform from '@/enums/Platform'
import MainConfig from '@/interfaces/MainConfig'

const mainConfig: MainConfig = {
  title: 'ModuleArt',
  projects: [
    {
      title: 'PlainColor',
      shortDescription: 'Lightweight stylish cross-platform color picker app',
      href: '/plain-color',
      appIcon: '/assets/images/projects/plain-color/icon.png',
      images: ['/assets/images/projects/plain-color/1.webp'],
      githubPath: 'ModuleArt/plain-color',
      donateUrl: 'https://opencollective.com/moduleart/projects/plaincolor',
      platform: Platform.mac,
      os: 'macOS 10.15+',
      authorName: 'Eugene Volynko',
      authorUrl: 'https://github.com/Beelink',
    },
    {
      title: 'Quick Picture Viewer',
      shortDescription: 'Lightweight, versatile desktop image viewer for Windows',
      href: '/quick-picture-viewer',
      appIcon: '/assets/images/projects/quick-picture-viewer/icon.png',
      images: ['/assets/images/projects/quick-picture-viewer/1.png', '/assets/images/projects/quick-picture-viewer/2.png'],
      githubPath: 'ModuleArt/quick-picture-viewer',
      donateUrl: 'https://opencollective.com/moduleart/projects/quick-picture-viewer',
      platform: Platform.win,
      os: 'Windows 7+',
      authorName: 'Eugene Volynko',
      authorUrl: 'https://github.com/Beelink',
    },
    {
      title: 'SzContext',
      shortDescription: 'Open files or folders using your favorite app from Finder® context menu',
      href: '/sz-context',
      appIcon: '/assets/images/projects/sz-context/icon.png',
      images: [
        '/assets/images/projects/sz-context/1.png',
        '/assets/images/projects/sz-context/2.png',
        '/assets/images/projects/sz-context/3.png',
        '/assets/images/projects/sz-context/4.png',
      ],
      githubPath: 'RoadToDream/SzContext',
      platform: Platform.mac,
      os: 'macOS 10.15+',
      authorName: 'Duan Jiawei',
      authorUrl: 'https://github.com/RoadToDream',
    },
    {
      title: 'Quick Color Picker',
      shortDescription: 'Lightweight desktop color picker and color editor utility for Windows',
      href: '/quick-color-picker',
      appIcon: '/assets/images/projects/quick-color-picker/icon.png',
      images: ['/assets/images/projects/quick-color-picker/1.png', '/assets/images/projects/quick-color-picker/2.png'],
      githubPath: 'ModuleArt/quick-color-picker',
      platform: Platform.win,
      os: 'Windows 7+',
      authorName: 'Eugene Volynko',
      authorUrl: 'https://github.com/Beelink',
    },
  ],
}

export default mainConfig
