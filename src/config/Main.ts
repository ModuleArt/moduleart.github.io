import { MainConfig } from '@/interfaces/MainConfig'

// projects
import { Project_QuickPictureViewer } from './projects/quick-picture-viewer'
import { Project_PlainColor } from './projects/plain-color'
import { Project_SzContext } from './projects/sz-context'
import { Project_QuickColorPicker } from './projects/quick-color-picker'

export const mainConfig: MainConfig = {
  url: 'https://moduleart.github.io',
  title: 'ModuleArt',
  description: 'Best apps with love',
  projects: [Project_PlainColor, Project_QuickPictureViewer, Project_SzContext, Project_QuickColorPicker],
}
