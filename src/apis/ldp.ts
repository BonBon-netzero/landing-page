import axios from 'axios'

import { WAITLIST_API_URL } from 'utils/config/constants'

export async function submitWaitListApi(data: { email: string; objective: string }) {
  return axios.post(`${WAITLIST_API_URL}/wait-list/submit`, data).then((res: any) => res.data)
}
