import { Colors } from './types'

const white = '#FFFFFF'
const black = '#000000'

function colors(darkMode: boolean): Colors {
  return {
    darkMode,
    // base
    white,
    black,

    // backgrounds / greys
    neutral8: darkMode ? '#0B0E18' : '#FFFFFF',
    neutral7: darkMode ? '#0B0E18' : '#F4F5F6',
    neutral6: darkMode ? '#101423' : '#E6E8EC',
    neutral5: darkMode ? '#1F2232' : '#B1B5C3',
    neutral4: darkMode ? '#313856' : '#777E90',
    neutral3: darkMode ? '#777E90' : '#353945',
    neutral2: darkMode ? '#C0C0C9' : '#23262F',
    neutral1: darkMode ? '#FCFCFD' : '#141416',

    //primary colors
    primary1: '#09DCAE',
    primary2: '#00B58D',
    primary3: '#07C39A',
    primary4: '#9DE7CC',

    // secondary colors
    secondary1: '#FA5547',
    secondary2: '#EA850F',

    // other
    info1: '#3A8EEF',
    info2: '#1F77DE',
    success1: '#6CB726',
    success2: '#56A012',
    warning1: '#FDBE44',
    warning2: '#F7AA16',
    danger1: '#FF5858',
    danger2: '#EA4545',

    // gradients
    gradient1: 'linear-gradient(180deg, #4EAEFD 0%, #008CFF 100%)',
    gradient2: 'linear-gradient(90deg, #64CEB9 0%, rgba(70, 93, 221, 0.4) 100%)',
    gradient3: 'linear-gradient(75.96deg, #FCEFD1 0%, #7E8EE8 100%)',

    modalBG: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)',
    cardBG: 'rgba(49, 56, 86, 0.20)',
    stroke: '#EEF0F1',
  }
}

export default colors

export type ColorsIndexType = keyof Omit<ReturnType<typeof colors>, 'darkMode'>
