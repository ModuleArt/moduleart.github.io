import { Download } from './Download'
import { ProjectFeature } from './ProjectFeature'

export interface Project {
  title: string
  shortDescription: string
  longDescription: string
  href: string
  appIcon: string
  images: string[]
  githubPath: string
  donateUrl?: string
  downloads: Download[]
  authorName: string
  authorUrl: string
  features?: ProjectFeature[]
}
