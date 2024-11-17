import { Download } from './Download'

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
}
