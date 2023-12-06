// import preloadImage from "assets/images/preload.png";
import { useEffect } from 'react'

export default function Preload() {
  useEffect(() => {
    setTimeout(() => {
      const preload = document.getElementById('preload')
      if (!preload) return
      preload.style.opacity = '0'
    }, 1000)
    setTimeout(() => {
      const preload = document.getElementById('preload')
      if (!preload) return
      preload.style.display = 'none'
    }, 2000)
  }, [])

  return (
    <div
      id="preload"
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        background: '#FFEEB6',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '1s ease',
      }}
    >
      {/* <Image {...preloadImage} alt="preload" /> */}
    </div>
  )
}
