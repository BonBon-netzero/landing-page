export class ResponseError extends Error {
  messages: string[]
  constructor(messages: string[]) {
    super()
    this.message = messages.join('. ')
    this.messages = messages
  }
}

export type GetApiParams = {
  limit?: number
  offset?: number
}
