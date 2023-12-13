import { ReactNode } from 'react'

export const LINKS = {
  whitepaper: '',
  telegram: '',
  twitter: '',
  discord: '',
  substack: '',
  docs: '',
  policy: '',
  termOfUse: '',
  metamask: 'https://metamask.io',
  github: '',
  gmail: '',
}

export const WEBSITE_URL = process.env.NEXT_PUBLIC_URL
export const API_URL = process.env.NEXT_PUBLIC_API
export const SCAN_URL = process.env.NEXT_PUBLIC_SCAN

// export const FONT_FAMILY = 'Barlow'
export const FONT_FAMILY = 'AeonikPro'
export const DATE_FORMAT = 'YYYY/MM/DD'
export const DAYJS_FULL_DATE_FORMAT = 'YYYY/MM/DD - HH:mm A'

export const DEFAULT_LIMIT = 20
export const DEFAULT_LIMIT_VALUES = [20, 50, 100]
export const SEARCH_DEBOUNCE_TIME = 200 //ms

export const COUNTDOWN_TIME = 60 // s

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
export const NAME_REGEX = /^[^\d@$!%*#?&^_<>/-]*$/
export const PHONE_NUMBER_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

export const PASSWORD_MIN_LENGTH = 8

export const MAX_IMAGE_SIZE = 10 * 1024 * 1024 //mb

export const CURRENCY = 'VND'

interface BankInfoProps {
  id: string
  text: ReactNode
  icon: string
}
