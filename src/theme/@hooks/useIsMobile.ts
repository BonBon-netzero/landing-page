import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent))
  }, [])
  return isMobile
}

export default useIsMobile
