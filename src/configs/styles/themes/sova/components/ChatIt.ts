import { ComponentArguments } from '../@types/components'

const ChatIt = ({ colors, fonts }: ComponentArguments) => {
  const { primaryBackground } = colors

  return {
    mainContainer: {
      display: 'flex',
      overflow: 'hidden',
      width: 'fit-content',
      margin: 'auto',
      padding: '100px',
      '@media screen and (max-width: 800px)': {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: '0',
      },
      ...fonts,
    },
    chatContainer: {
      width: '380px',
      display: 'flex',
      flexDirection: 'column',
      background: primaryBackground,
      position: 'relative',
      borderRadius: '17px',
      height: '600px',
      boxShadow: '0px 20px 50px rgba(5, 0, 56, 0.15)',
      overflow: 'hidden',
      '@media screen and (max-width: 800px)': {
        width: '100%',
        height: '100%',
        borderRadius: '0',
      },
    },
  }
}

export default ChatIt
