import { STORAGE_KEYS } from 'utils/config/keys'

import requester from './index'

export const setJwt = (jwt: string) => {
  requester.defaults.headers.common['Authorization'] = jwt
}
export const storeAuth = (jwt: string, account: string) => {
  setJwt(jwt)
  localStorage.setItem(STORAGE_KEYS.JWT, jwt)
  localStorage.setItem(STORAGE_KEYS.ACCOUNT, account)
}
export const clearAuth = () => {
  requester.defaults.headers.common['Authorization'] = ''
  localStorage.removeItem(STORAGE_KEYS.JWT)
  localStorage.removeItem(STORAGE_KEYS.ACCOUNT)
}
export const getStoredJwt = (): string | null => {
  const storedJwt = localStorage.getItem(STORAGE_KEYS.JWT)
  if (!storedJwt) return null
  return storedJwt
}
export const getStoredAccount = (): string | null => {
  const account = localStorage.getItem(STORAGE_KEYS.ACCOUNT)
  if (!account) return null
  return account
}

const URL_PUBLIC = '/public/'
const URL_PRIVATE = '/'

export const apiWrapper = (url: string): string => {
  if (requester?.defaults?.headers && requester.defaults.headers.common['Authorization']) {
    return URL_PRIVATE + url
  }
  return URL_PUBLIC + url
}
