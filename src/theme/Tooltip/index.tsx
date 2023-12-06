'use client'

import { useEffect, useState } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

function Tooltip(props: any) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted ? (
    // <BodyPortal>
    <>
      <ReactTooltip
        type="dark"
        effect="solid"
        positionStrategy="fixed"
        // className="custom_react_tooltip_css"
        // classNameArrow="custom_react_tooltip_arrow_css"
        {...props}
      >
        {props.children}
      </ReactTooltip>
    </>
  ) : (
    // </BodyPortal>
    <div></div>
  )
}

export default Tooltip
