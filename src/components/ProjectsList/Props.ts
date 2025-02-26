import { Platform } from '@/enums/Platform'

export interface Props {
  projects: { title: string; description: string; href: string; image: string; platforms: Platform[] }[]
  size?: 'large' | 'small'
}
