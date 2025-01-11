import { Platform } from '@/enums/Platform'

export interface Props {
  className: string
  title: string
  description?: string
  href?: string
  image: string
  platforms?: Platform[]
  size?: 'large' | 'small'
}
