import { Project } from '@/interfaces/Project'
import { Platform } from '@/enums/Platform'
import { FileExtension } from '@/enums/FileExtension'

export const Project_QuickColorPicker: Project = {
  title: 'Quick Color Picker',
  shortDescription: 'Lightweight desktop color picker and color editor utility for Windows',
  longDescription: 'Color picker and color editor utility to pick and save color codes from your screen quickly',
  href: '/quick-color-picker',
  appIcon: '/assets/images/projects/quick-color-picker/icon.png',
  images: ['/assets/images/projects/quick-color-picker/1.png', '/assets/images/projects/quick-color-picker/2.png'],
  githubPath: 'ModuleArt/quick-color-picker',
  donateUrl: 'https://opencollective.com/moduleart',
  downloads: [{ platform: Platform.win, fileExtension: FileExtension.exe, requirements: 'Windows 7+' }],
  authorName: 'Eugene Volynko',
  authorUrl: 'https://github.com/Beelink',
}
