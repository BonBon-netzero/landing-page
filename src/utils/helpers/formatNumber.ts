export function formatNumber(num?: number | string, maxDigit = 2, minDigit?: number) {
  if (num == null) return '-'
  if (typeof num === 'string') num = Number(num)
  if (Math.abs(num) < 1 && maxDigit === 0) {
    maxDigit = 2
    minDigit = 2
  }
  // if (num > 1000000000) return t`${(num / 1000000000).toFixed(0)} tỷ`
  return `${num.toLocaleString('en-US', { minimumFractionDigits: minDigit, maximumFractionDigits: maxDigit })}`
}

export function compactNumber({ num, digits = 1, isInt = false }: { num: number; digits?: number; isInt?: boolean }) {
  if (num === 0) return 0
  const lookup = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'B' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'K' },
    { value: 1, symbol: '' },
  ]
  const item = lookup.find(function (item) {
    return Math.abs(num) >= item.value
  })
  return item
    ? item.value === 1
      ? (num / item.value).toFixed(isInt ? 0 : digits)
      : (num / item.value).toFixed(digits) + item.symbol
    : '-'
}

export function floorNumber(num: number, decimals: number) {
  const multipler = Number('1'.padEnd(1 + decimals, '0'))
  return Math.floor(num * multipler) / multipler
}
