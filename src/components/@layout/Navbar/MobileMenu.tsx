import { List, X } from '@phosphor-icons/react'
import { ReactElement, cloneElement, useEffect, useState } from 'react'
import { animated, config, useTransition } from 'react-spring'

import IconButton from 'theme/Buttons/IconButton'
import { Box, Flex } from 'theme/base'
import { disableScroll, enableScroll } from 'utils/helpers/ui'

const MobileMenu = ({ activeIndex, children }: { activeIndex?: number; children: ReactElement | ReactElement[] }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [activeIndex])

  const fullscreenMenu = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: 'translateX(300px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    leave: { opacity: 0, transform: 'translateX(300px)' },
    config: config.default,
  })

  const toggleMenu = () => {
    setIsOpen((prev) => {
      if (prev) {
        enableScroll()
      } else {
        disableScroll()
      }
      return !prev
    })
  }

  return (
    <>
      <div
        style={{
          position: 'relative',
          zIndex: 100001,
        }}
      >
        {isOpen ? (
          <IconButton variant="ghost" onClick={toggleMenu} icon={<X size={24} />} />
        ) : (
          <IconButton variant="ghost" onClick={toggleMenu} icon={<List size={24} />} mt={0} />
        )}
      </div>
      {isOpen && (
        <Box
          onClick={toggleMenu}
          sx={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: '#fff',
            opacity: 0.5,
            zIndex: 100000,
          }}
        ></Box>
      )}
      <div>
        {fullscreenMenu(
          (props, item) =>
            item && (
              <animated.div
                style={{
                  background: '#101423',
                  position: 'fixed',
                  width: '100vw',
                  height: '100vh',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  zIndex: 100000,
                  ...props,
                }}
              >
                <Flex alignItems="center" justifyContent="center" flexDirection="column" width="100vw" height="100vh">
                  {Array.isArray(children)
                    ? children.map((child) => {
                        return cloneElement(child, {
                          onClick: toggleMenu,
                        })
                      })
                    : cloneElement(children, {
                        onClick: toggleMenu,
                      })}
                </Flex>
              </animated.div>
            )
        )}
      </div>
    </>
  )
}

export default MobileMenu
