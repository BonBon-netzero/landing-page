import { API_URL, SCAN_URL } from 'utils/config/constants'

export function generateExplorerAddressLink(contractAddress: string) {
  return `${SCAN_URL}/address/${contractAddress}`
}

export function generateExplorerTokenLink(contractAddress: string) {
  return `${SCAN_URL}/token/${contractAddress}?a=1`
}
export function generateExplorerTxHashLink(txHash: string) {
  return `${SCAN_URL}/tx/${txHash}`
}

export function generateMetadataLink(collectionAddress: string) {
  return `${API_URL}/nfts/metadata/${collectionAddress}/1`
}
