import Platform from '../enums/Platform'

interface Project {
  title: string
  shortDescription: string
  href: string
  appIcon: string
  images: string[]
  githubPath: string
  donateUrl?: string
  platform: Platform
  os: string
  authorName: string
  authorUrl: string
}

export default Project
