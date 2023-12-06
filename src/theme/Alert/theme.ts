import colors from 'theme/colors'

import { variants } from './types'

export const styleVariants = {
  [variants.PRIMARY]: {
    color: 'primary2',
    background: `${colors(false).primary1}10`,
  },
  [variants.INFO]: {
    color: 'info2',
    background: `${colors(false).info1}10`,
  },
  [variants.WARNING]: {
    color: 'warning2',
    background: `${colors(false).warning1}10`,
  },
  [variants.SUCCESS]: {
    color: 'success2',
    background: `${colors(false).success1}10`,
  },
  [variants.DANGER]: {
    color: 'danger2',
    background: `${colors(false).danger1}10`,
  },
}
