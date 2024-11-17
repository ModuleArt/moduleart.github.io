import { FileExtension } from '@/enums/FileExtension'
import { Platform } from '@/enums/Platform'

export interface Download {
  platform: Platform
  fileExtension: FileExtension
  requirements: string
}
