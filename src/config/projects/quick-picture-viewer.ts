import { Project } from '@/interfaces/Project'
import { Platform } from '@/enums/Platform'
import { FileExtension } from '@/enums/FileExtension'

export const Project_QuickPictureViewer: Project = {
  title: 'Quick Picture Viewer',
  shortDescription: 'Lightweight, versatile desktop image viewer for Windows',
  longDescription:
    'Small and fast but still have a bunch of features. 20+ formats supported. Works great with GIF, SVG, PNG, WEBP, ICO, BMP, DDS, TGA, CR2 etc.',
  href: '/quick-picture-viewer',
  appIcon: '/assets/images/projects/quick-picture-viewer/icon.png',
  images: ['/assets/images/projects/quick-picture-viewer/1.png', '/assets/images/projects/quick-picture-viewer/2.png'],
  githubPath: 'ModuleArt/quick-picture-viewer',
  donateUrl: 'https://opencollective.com/moduleart/projects/quick-picture-viewer',
  downloads: [{ platform: Platform.win, fileExtension: FileExtension.exe, requirements: 'Windows 7+' }],
  authorName: 'Eugene Volynko',
  authorUrl: 'https://github.com/Beelink',
  features: [
    'Lightweight - Small and fast but still have a bunch of features',
    '20+ formats supported - Works great with GIF, SVG, PNG, WEBP, ICO, BMP, DDS, TGA, CR2 etc.',
    'Basic image editing: Rotate, flip, crop, change file type ...',
    'Plugins ready - You can extend the functionality of the app using the built-in plugin manager',
    'Open image with external app or show file in explorer',
    'Shortcuts - You will find a hotkey for any action',
    'PSD support',
    'Picture-in-Picture mode',
    'Always on top mode',
    'A lot of configurable settings',
    'Slideshow',
    'Dark mode',
  ],
}
