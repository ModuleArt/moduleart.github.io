import '@/assets/scss/variables.scss'
import '@/assets/scss/fonts.scss'
import '@/assets/scss/animations.scss'
import '@/assets/scss/global.scss'
import { routes } from '@/routes'
import { ViteReactSSG } from 'vite-react-ssg'

export const createRoot = ViteReactSSG({ routes })
