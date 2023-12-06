import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'

import { DATE_FORMAT, DAYJS_FULL_DATE_FORMAT } from 'utils/config/constants'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(weekOfYear)
dayjs.extend(duration)

export function formatDuration(duration: number | undefined) {
  if (!duration) return '--'
  return `${dayjs.duration(duration).asHours().toFixed(1)}h`
  // return dayjs.duration(duration, 'second').format(' D H[h] m[m]')
}

export const formatLocalRelativeDate = (date: string | number) => dayjs.utc(date).local().fromNow()
export const formatLocalRelativeShortDate = (date: string | number) => {
  const arr = dayjs.utc(date).local().fromNow(true).split(' ')
  return `${arr[0] === 'a' || arr[0] === 'an' ? '1' : arr[0]}${arr[1].includes('month') ? 'mo' : arr[1]?.charAt(0)}`
}

export const formatRelativeDate = (date: string | number) => dayjs.utc(date).fromNow()
export const formatRelativeShortDate = (date: string | number) => {
  const arr = dayjs.utc(date).fromNow(true).split(' ')
  return `${arr[0]}${arr[1]?.charAt(0)}`
}

export const formatLocalDate = (date: string | number | undefined, format?: string) => {
  if (!date) return ''

  return dayjs
    .utc(date)
    .local()
    .format(format ?? DATE_FORMAT)
}

export const formatDate = (date: string | number | undefined, format?: string) => {
  if (!date) return ''

  return dayjs.utc(date).format(format ?? DAYJS_FULL_DATE_FORMAT)
}

export const formatWeekInYear = (date: string | number) => dayjs.utc(date).week()

export const getUnitDate = (
  date: string | number,
  unit: 'year' | 'month' | 'date' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'
) => dayjs.utc(date).get(unit)

/**
 * https://day.js.org/docs/en/manipulate/utc-offset
 * @param {Date} date
 */
export function toCurrentOffset(date: Date) {
  // initialize
  let result = dayjs(date)

  // remove date offset
  // result = result.subtract(result.utcOffset(), 'minutes')

  // add current offset of today
  result = result.subtract(dayjs().utcOffset(), 'minutes')

  return result.toDate()
}

/**
 * https://day.js.org/docs/en/manipulate/utc-offset
 * @param {Date} date
 */
export function toDateOffset(date: Date) {
  // initialize
  let result = dayjs(date)

  // remove date offset
  // result = result.subtract(dayjs().utcOffset(), 'minutes')

  // add current offset of today
  result = result.add(result.utcOffset(), 'minutes')

  return result.toDate()
}

export const formatDateShort = (date: string) => dayjs.utc(date).local().format('DD/MM/YYYY')

export const formatBirthdayDate = (date: string) => {
  if (dayjs.utc(date, 'DD/MM/YYYY').isValid()) {
    return dayjs.utc(date, 'DD/MM/YYYY').local().toString()
  }
  if (dayjs(date, 'D/M/YYYY').isValid()) {
    return dayjs.utc(date, 'D/M/YYYY').local().toString()
  }
  if (dayjs(date, 'DD/M/YYYY').isValid()) {
    return dayjs.utc(date, 'DD/M/YYYY').local().toString()
  }

  return undefined
}

export const dateFormatReverse = (date: string) => {
  const dateParts = date.toString().split('/')
  return new Date(+dateParts[2], (dateParts[1] as any) - 1, +dateParts[0])
}
