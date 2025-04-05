import axios from 'axios'

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  ...axios.defaults,
})

export default API
