// import { envConfig } from '@/config/Env'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: envConfig.githubToken ? `Bearer ${envConfig.githubToken}` : undefined,
  },
})

export default apiClient
