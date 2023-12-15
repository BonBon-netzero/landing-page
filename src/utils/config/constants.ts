export const LINKS = {
  whitepaper: '',
  telegram: '',
  twitter: 'https://twitter.com/bonbon_netzero',
  discord: '',
  substack: '',
  docs: '',
  policy: '',
  termOfUse: '',
  metamask: 'https://metamask.io',
  github: 'https://github.com/BonBon-netzero',
  zalo: 'https://zalo.me/g/arsqwf664',
}

export const DEMO_LINKS: { [key: string]: string } = {
  en: 'https://www.figma.com/proto/EuYhOJXcPyVJzV2CsOZb72/Carbon?page-id=1%3A27&type=design&node-id=1955-20472&viewport=200%2C-32%2C0.48&t=4qOL4utn7R701vx0-1&scaling=scale-down&starting-point-node-id=1955%3A20472&show-proto-sidebar=1',
  vi: 'https://www.figma.com/proto/EuYhOJXcPyVJzV2CsOZb72/Carbon?page-id=1%3A27&type=design&node-id=2421-20743&viewport=200%2C-32%2C0.48&t=4qOL4utn7R701vx0-1&scaling=scale-down&starting-point-node-id=2421%3A20743&show-proto-sidebar=1',
  pseudo: '',
}

export const WEBSITE_URL = process.env.NEXT_PUBLIC_URL
export const API_URL = process.env.NEXT_PUBLIC_API
export const SCAN_URL = process.env.NEXT_PUBLIC_SCAN
export const WAITLIST_API_URL = process.env.NEXT_WAITLIST_API

// export const FONT_FAMILY = 'Barlow'
export const FONT_FAMILY = 'Inter'
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
