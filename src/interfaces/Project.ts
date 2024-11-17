import { Platform } from '@/enums/Platform'

export interface Project {
  title: string
  shortDescription: string
  longDescription: string
  href: string
  appIcon: string
  images: string[]
  githubPath: string
  donateUrl?: string
  platforms: Platform[]
  os: string
  authorName: string
  authorUrl: string
}
