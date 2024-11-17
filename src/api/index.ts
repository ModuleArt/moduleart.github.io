// import { envConfig } from '@/config/Env'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${envConfig.githubToken}`,
  },
})

export default apiClient
