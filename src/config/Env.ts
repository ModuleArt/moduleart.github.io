import { EnvConfig } from '@/interfaces/EnvConfig'

export const envConfig: EnvConfig = {
  githubToken: import.meta.env.VITE_GITHUB_TOKEN || '',
}
