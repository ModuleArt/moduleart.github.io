import { Project } from '@/interfaces/Project'
import { Platform } from '@/enums/Platform'
import { FileExtension } from '@/enums/FileExtension'

export const Project_PlainColor: Project = {
  title: 'PlainColor',
  shortDescription: 'Lightweight, versatile, cross-platform color picker app',
  longDescription: 'We are in active development, and many new features are coming soon...',
  href: '/plaincolor',
  appIcon: '/assets/images/projects/plain-color/icon.webp',
  images: ['/assets/images/projects/plain-color/1.webp'],
  githubPath: 'ModuleArt/plain-color',
  donateUrl: 'https://opencollective.com/moduleart/projects/plaincolor',
  downloads: [{ platform: Platform.mac, fileExtension: FileExtension.dmg, requirements: 'macOS 10.15+' }],
  authorName: 'Eugene Volynko',
  authorUrl: 'https://github.com/Beelink',
  features: [
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-colorize.svg',
      title: 'Picker',
      description: 'Pick a color from your screen with advanced magnifying glass',
      image: '/assets/images/projects/plain-color/features/picker.webp',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-palette.svg',
      title: 'Custom palettes',
      description: 'Organize your colors with palettes. Name colors and add them to palettes to use in your projects',
      image: '/assets/images/projects/plain-color/features/palettes.webp',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-content-paste.svg',
      title: 'A lot of color formats',
      description: 'Copy your colors in different formats: HEX, RGB, Display P3, HSL, CMYK, etc.',
      image: '/assets/images/projects/plain-color/features/formats.webp',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-ios-share.svg',
      title: 'Export palettes',
      description: 'Export your palettes to JSON, CSS variables, SASS variables, JavaScript object',
      image: '/assets/images/projects/plain-color/features/export.webp',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-rocket-launch.svg',
      title: 'Lightweight',
      description: 'Small and fast but crammed with a bunch of features',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-apple.svg',
      title: 'Great macOS support',
      description: 'Works on top of menu bar and fullscreen windows',
    },
  ],
}
