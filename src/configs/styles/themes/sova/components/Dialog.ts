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
      animation: 'show 0.5s 1',
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
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
