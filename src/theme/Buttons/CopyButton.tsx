import { CheckCircle, Copy } from '@phosphor-icons/react'
import { SystemStyleObject } from '@styled-system/css'
import { ReactNode, useMemo, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { GridProps } from 'styled-system'

import Tooltip from 'theme/Tooltip'
import { Flex, IconBox, Type } from 'theme/base'

import { Button } from '.'
import { ButtonProps } from './types'

const CopyButton = ({
  iconSize = 20,
  variant = 'outline',
  value,
  children,
  type = 'button',
  block = false,
  sx,
  iconSx,
  direction = 'left',
  centered = true,
  ...props
}: ButtonProps & {
  iconSize?: number
  iconSx?: SystemStyleObject & GridProps
  type?: 'button' | 'submit' | 'reset'
  direction?: 'left' | 'right'
  centered?: boolean
  additionalComponent?: ReactNode
  value: string
}) => {
  const [isCopied, setIsCopied] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  async function copyTextToClipboard(text: string) {
    let textarea
    let result

    try {
      textarea = document.createElement('textarea')
      textarea.setAttribute('readonly', 'true')
      textarea.setAttribute('contenteditable', 'true')
      textarea.style.position = 'fixed' // prevent scroll from jumping to the bottom when focus is set.
      textarea.value = text

      document.body.appendChild(textarea)

      textarea.focus()
      textarea.select()

      const range = document.createRange()
      range.selectNodeContents(textarea)

      const sel = window.getSelection()
      if (sel) {
        sel.removeAllRanges()
        sel.addRange(range)
      }

      textarea.setSelectionRange(0, textarea.value.length)
      result = document.execCommand('copy')
    } catch (err) {
      result = null
    } finally {
      if (textarea) document.body.removeChild(textarea)
    }
    if (!result) {
      throw Error(`Can't copy`)
    }
  }

  const copyIcon = useMemo(
    () => (isCopied ? <CheckCircle size={iconSize} /> : <Copy size={iconSize} />),
    [isCopied, iconSize]
  )
  // onClick handler function for the copy button
  const handleCopyClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(value)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true)
        if (ref.current) {
          ref.current.blur()
        }
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err: any) => {
        toast.error(<Type.Caption color="danger2">{err}</Type.Caption>)
      })
  }

  return (
    <>
      <Button
        variant={variant}
        type={type}
        onClick={handleCopyClick}
        ref={ref}
        sx={{
          py: 1,
          px: 12,
          display: 'flex',
          alignItems: 'center',
          flexDirection: direction === 'right' ? 'row-reverse' : 'row',
          justifyContent: centered ? 'center' : 'space-between',
          ...sx,
        }}
        {...props}
        data-tooltip-id="tt_icon_copy"
      >
        {!children ? (
          <IconBox
            icon={copyIcon}
            sx={iconSx}
            // mr={direction === 'center' ? 2 : 0}
            // ml={direction === 'right' ? 2 : 0}
          />
        ) : (
          <Flex alignItems="center" width={block ? '100%' : 'auto'} sx={{ gap: 2 }}>
            <Type.Caption fontWeight="normal" sx={{ wordBreak: 'break-all' }}>
              {children}
            </Type.Caption>
            <IconBox color="neutral5" icon={copyIcon} sx={iconSx} />
          </Flex>
        )}
      </Button>
      <Tooltip id="tt_icon_copy" place="top" type="dark" effect="solid">
        Press to copy
      </Tooltip>
    </>
  )
}

export default CopyButton
