import { sizes, variants } from './types'

export const sizeVariants = {
  [sizes.ICON]: {
    p: 2,
    borderRadius: '50%',
    lineHeight: 'calc(100% - 4px)',
  },
  [sizes.XS]: {
    px: '12px',
    py: '4px',
    lineHeight: '20px',
    fontSize: '12px',
  },
  [sizes.SM]: {
    px: 3,
    py: 2,
    lineHeight: '20px',
    fontSize: '14px',
  },
  [sizes.MD]: {
    px: 24,
    py: 12,
    lineHeight: '20px',
    fontSize: '14px',
  },
  [sizes.LG]: {
    px: 24,
    py: 12,
    lineHeight: '24px',
    fontSize: '16px',
  },
}

export const styleVariants = {
  [variants.PRIMARY]: {
    color: 'neutral1',
    bg: 'primary1',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      bg: 'primary2',
      color: 'neutral1',
    },
    '&:before': {
      borderColor: 'rgba(0,0,0,0.2)',
      borderTopColor: 'neutral1',
    },
  },
  [variants.INFO]: {
    color: 'white',
    bg: 'info1',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      bg: 'info2',
    },
  },
  [variants.WARNING]: {
    color: 'white',
    bg: 'warning1',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      bg: 'warning2',
    },
  },
  [variants.SUCCESS]: {
    color: 'white',
    bg: 'success1',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      bg: 'success2',
    },
  },
  [variants.DANGER]: {
    color: 'white',
    bg: 'danger1',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      bg: 'danger2',
    },
  },
  [variants.OUTLINE]: {
    color: 'neutral1',
    bg: 'transparent',
    border: 'small',
    borderColor: 'neutral6',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      borderColor: 'neutral1',
    },
  },

  [variants.OUTLINE_DANGER]: {
    color: 'danger1',
    bg: 'transparent',
    border: 'small',
    borderColor: 'danger1',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      borderColor: 'danger2',
      color: 'danger2',
    },
  },
  [variants.OUTLINE_PRIMARY]: {
    color: 'primary1',
    bg: 'transparent',
    border: 'small',
    borderColor: 'primary1',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      borderColor: 'primary2',
      color: 'primary2',
    },
  },
  [variants.GHOST]: {
    color: 'neutral4',
    bg: 'transparent',
    border: 'none',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      color: 'neutral1',
    },
  },
  [variants.GHOST_PRIMARY]: {
    color: 'primary2',
    bg: 'transparent',
    border: 'none',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      color: 'primary1',
    },
  },
  [variants.GHOST_DANGER]: {
    color: 'danger1',
    bg: 'transparent',
    border: 'none',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      color: 'danger2',
    },
  },
  [variants.NAV]: {
    color: 'neutral1',
    bg: 'transparent',
    border: 'none',
    borderRadius: 0,
    justifyContent: 'start!important',
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      color: 'primary2',
    },
  },
  [variants.TEXT]: {
    color: 'primary2',
    bg: 'transparent',
    border: 'none',
    px: 0,
    py: 0,
    borderRadius: 0,
    '&:hover:not(:disabled),&:active:not(:disabled)': {
      color: 'primary1',
    },
  },
}
