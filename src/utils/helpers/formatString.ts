export const shortenAddress = (address: string, num?: number, numsPrefix?: number) => {
  if (!address) return ''
  if (!num) num = 3
  if (num >= address.length / 2) return address
  const prefix = address.slice(0, numsPrefix ? numsPrefix : num + 2)
  const suffix = address.slice(-num, address.length)
  return `${prefix}...${suffix}`
}

export const shortenText = (text?: string, length?: number) => {
  if (!text) return ''
  if (!length || text.length <= length) return text
  const prefix = text.slice(0, length)
  return `${prefix}...`
}
