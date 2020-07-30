import { ThemeColors } from '../@types/colors'

const Dialog = (colors: ThemeColors) => {
  const { primaryBackground } = colors

  return {
    mainContainer: {
      height: '496px',
      minHeight: '496px',
      background: primaryBackground,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      boxSizing: 'border-box',
      '@media screen and (max-width: 800px)': {
        height: '100vh',
        paddingTop: '60px',
      },
    },
    panel: {},
    rateButton: {},
    searchButton: {},
    messagesContainer: {
      maxHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      '@media screen and (max-width: 800px)': {
      },
    },
  }
}

export default Dialog
