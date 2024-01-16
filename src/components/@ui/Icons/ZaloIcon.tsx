import Image from 'next/image'

import zaloIcon from 'assets/icons/ic-zalo.svg'
import zaloLightIcon from 'assets/icons/zalo.png'

const ZaloIcon = ({ isLight = false }: { isLight?: boolean }) => {
  return <Image src={isLight ? zaloLightIcon : zaloIcon} width={24} height={24} alt="zalo" />
}

export default ZaloIcon
