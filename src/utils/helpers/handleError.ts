'use client'

import { AxiosError } from 'axios'

export const getAxiosErrorMessage = (error: AxiosError, messages: { [key: string]: string }): string => {
  if (!error?.response?.data) return messages.COMMON
  const message = (error.response.data as any).message
  return messages[message] || message
}

type ContractError = {
  code: number
  message: string
  data: { code: number; message: string }
}

export const getContractErrorMessage = (err: any, messages: { [key: string]: string }): string => {
  if (err?.data || err?.error?.data || err?.error?.message) {
    const error: ContractError = err.error ? err.error : err
    const message = (error?.data && error.data?.message ? error.data.message : error.message) ?? messages.COMMON
    if (message.includes('insufficient funds for gas * price + value'))
      return 'Insufficient funds for gas fee and value'
    return message.replace('execution reverted: ', '')
  }
  return err?.message ?? messages.COMMON
}

export const getErrorMessage = (err: any, messages: { [key: string]: string }) => {
  if (err.response) {
    return getAxiosErrorMessage(err, messages)
  }
  return getContractErrorMessage(err, messages)
}
