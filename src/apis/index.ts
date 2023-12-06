import axios from 'axios'

import { API_URL } from 'utils/config/constants'

const requester = axios.create({
  baseURL: API_URL,
  timeout: 30000,
})

export default requester
