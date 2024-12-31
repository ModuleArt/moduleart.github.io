import { Project } from '@/interfaces/Project'
import { Platform } from '@/enums/Platform'
import { FileExtension } from '@/enums/FileExtension'

export const Project_PlainColor: Project = {
  title: 'PlainColor',
  shortDescription: 'Lightweight stylish cross-platform color picker app',
  longDescription: 'We are in active development, and many new features are coming soon...',
  href: '/plaincolor',
  appIcon: '/assets/images/projects/plain-color/icon.webp',
  images: [
    '/assets/images/projects/plain-color/1.webp',
    '/assets/images/projects/plain-color/2.webp',
    '/assets/images/projects/plain-color/3.webp',
    '/assets/images/projects/plain-color/4.webp',
  ],
  githubPath: 'ModuleArt/plain-color',
  donateUrl: 'https://opencollective.com/moduleart/projects/plaincolor',
  downloads: [{ platform: Platform.mac, fileExtension: FileExtension.dmg, requirements: 'macOS 10.15+' }],
  authorName: 'Eugene Volynko',
  authorUrl: 'https://github.com/Beelink',
}
