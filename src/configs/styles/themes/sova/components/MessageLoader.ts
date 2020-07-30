import { ThemeColors } from '../@types/colors'

const MessageLoader = (colors: ThemeColors) => {
  const { primaryResponse, primaryText } = colors

  return {
    mainContainer: {
      marginLeft: '24px',
      marginRight: 'auto',
      marginBottom: '10px',
      borderRadius: '17px 17px 17px 0',
      width: '70px',
      padding: '6px',
      height: '24px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      textAlign: 'center',
      zIndex: '5',
      userSelect: 'none',
      color: primaryText,
      background: primaryResponse,
    },
    elementOne: {
      fontSize: '60px',
      animation: 'loader 1.5s ease-in-out infinite',
      animationDelay: ' 0.2s',
      paddingBottom: '28px',
      '@keyframes loader': {
        '0%, 100%': {
          opacity: '0.4',
        },
        '50%, 60%': {
          opacity: '1',
          fontSize: '75px',
          paddingBottom: '38px',
        },
      },
    },
    elementTwo: {
      fontSize: '60px',
      animation: 'loader 1.5s ease-in-out infinite',
      paddingBottom: '28px',
      animationDelay: ' 0.4s',
      '@keyframes loader': {
        '0%, 100%': {
          opacity: '0.4',
        },
        '50%, 60%': {
          opacity: '1',
          fontSize: '75px',
          paddingBottom: '38px',
        },
      },
    },
    elementThree: {
      fontSize: '60px',
      animation: 'loader 1.5s ease-in-out infinite',
      animationDelay: ' 0.6s',
      paddingBottom: '28px',
      '@keyframes loader': {
        '0%, 100%': {
          opacity: '0.4',
        },
        '50%, 60%': {
          opacity: '1',
          fontSize: '75px',
          paddingBottom: '38px',
        },
      },
    },
  }
}

export default MessageLoader
