import { Project } from '@/interfaces/Project'
import { Platform } from '@/enums/Platform'
import { FileExtension } from '@/enums/FileExtension'

export const Project_QuickColorPicker: Project = {
  title: 'Quick Color Picker',
  shortDescription: 'Lightweight desktop color picker and color editor utility for Windows',
  longDescription: 'Color picker and color editor utility to pick and save color codes from your screen quickly',
  href: '/quickcolorpicker',
  appIcon: '/assets/images/projects/quick-color-picker/icon.webp',
  images: ['/assets/images/projects/quick-color-picker/1.webp', '/assets/images/projects/quick-color-picker/2.webp'],
  githubPath: 'ModuleArt/quick-color-picker',
  donateUrl: 'https://opencollective.com/moduleart',
  downloads: [{ platform: Platform.win, fileExtension: FileExtension.msi, requirements: 'Windows 7+' }],
  authorName: 'Eugene Volynko',
  authorUrl: 'https://github.com/Beelink',
}
