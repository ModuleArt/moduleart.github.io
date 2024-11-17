import { Platform } from '@/enums/Platform'

export interface Props {
  className: string
  title: string
  href?: string
  image: string
  platforms?: Platform[]
}
