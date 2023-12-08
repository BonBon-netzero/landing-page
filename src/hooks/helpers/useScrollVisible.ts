import debounce from 'lodash/debounce'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function useScrollVisible(args?: { posY?: number; byDirection?: boolean; alwaysShow?: boolean }) {
  const { posY = 100, byDirection = false, alwaysShow = false } = args ?? {}
  const [show, setShow] = useState(alwaysShow)
  const [scrollY, setScrollY] = useState(0)
  const prevPos = useRef(0)
  const handleScroll = debounce(
    useCallback(() => {
      setScrollY(window.scrollY)
      if (alwaysShow) return
      if (byDirection) {
        if (window.scrollY > prevPos.current) {
          setShow(false)
        }
        if (window.scrollY < prevPos.current) {
          setShow(true)
        }
        prevPos.current = window.scrollY
        return
      }
      if (window?.scrollY > posY) setShow(true)
      if (window?.scrollY <= posY) setShow(false)
    }, [alwaysShow, byDirection, posY]),
    100
  )
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return { show, scrollY }
}
