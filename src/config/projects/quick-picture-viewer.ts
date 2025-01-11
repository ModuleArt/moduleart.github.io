import { Project } from '@/interfaces/Project'
import { Platform } from '@/enums/Platform'
import { FileExtension } from '@/enums/FileExtension'

export const Project_QuickPictureViewer: Project = {
  title: 'Quick Picture Viewer',
  shortDescription: 'Lightweight, versatile desktop image viewer for Windows',
  longDescription:
    'Small and fast but still have a bunch of features. 20+ formats supported. Works great with GIF, SVG, PNG, WEBP, ICO, BMP, DDS, TGA, CR2 etc.',
  href: '/quickpictureviewer',
  appIcon: '/assets/images/projects/quick-picture-viewer/icon.webp',
  images: ['/assets/images/projects/quick-picture-viewer/1.webp', '/assets/images/projects/quick-picture-viewer/2.webp'],
  githubPath: 'ModuleArt/quick-picture-viewer',
  donateUrl: 'https://opencollective.com/moduleart/projects/quick-picture-viewer',
  downloads: [{ platform: Platform.win, fileExtension: FileExtension.exe, requirements: 'Windows 7+' }],
  authorName: 'Eugene Volynko',
  authorUrl: 'https://github.com/Beelink',
  features: [
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-rocket-launch.svg',
      title: 'Lightweight',
      description: 'Small and fast but crammed with a bunch of features',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-image.svg',
      title: '20+ formats supported',
      description: 'Works great with GIF, SVG, PNG, WEBP, ICO, BMP, DDS, TGA, CR2, etc.',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-draw.svg',
      title: 'Basic image editing',
      description: 'Rotate, flip, crop, change file type ...',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-square-foot.svg',
      title: 'Plugins ready',
      description: 'Extend the app features using the built-in plugin manager',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-picture-in-picture.svg',
      title: 'Picture-in-Picture mode',
      description: 'Great for placing references while drawing',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-keyboard.svg',
      title: 'Shortcuts',
      description: 'You will find a hotkey for any action',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-adobe.svg',
      title: 'PSD support',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-file-upload.svg',
      title: 'Always on top mode',
    },
    {
      icon: '/assets/images/icons/google-material-icons/ic:baseline-ondemand-video.svg',
      title: 'Slideshow',
    },
  ],
}
