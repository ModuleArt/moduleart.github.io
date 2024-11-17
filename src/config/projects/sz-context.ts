import { Project } from '@/interfaces/Project'
import { Platform } from '@/enums/Platform'
import { FileExtension } from '@/enums/FileExtension'

export const Project_SzContext: Project = {
  title: 'SzContext',
  shortDescription: 'Open files or folders using your favorite app from Finder® context menu',
  longDescription: 'Provides your favorite apps at your hands. Open files or folders using your favorite app from Finder® context menu',
  href: '/sz-context',
  appIcon: '/assets/images/projects/sz-context/icon.webp',
  images: [
    '/assets/images/projects/sz-context/1.webp',
    '/assets/images/projects/sz-context/2.webp',
    '/assets/images/projects/sz-context/3.webp',
    '/assets/images/projects/sz-context/4.webp',
  ],
  githubPath: 'RoadToDream/SzContext',
  downloads: [{ platform: Platform.mac, fileExtension: FileExtension.dmg, requirements: 'macOS 10.15+' }],
  authorName: 'Duan Jiawei',
  authorUrl: 'https://github.com/RoadToDream',
}
