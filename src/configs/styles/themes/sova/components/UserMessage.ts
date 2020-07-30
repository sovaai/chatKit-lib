import { ThemeColors } from '../@types/colors'

const UserMesssage = (colors: ThemeColors) => {
  const { primaryWhite, primary, primaryText } = colors

  return {
    mainContainer: {
      display: 'flex',
      flexDirection: 'colomn',
      width: 'fit-content',
      maxWidth: '275px',
      marginLeft: 'auto',
      marginRight: '24px',
      marginBottom: '24px',
      color: primaryWhite,
      background: primary,
      borderRadius: '17px 17px 0 17px',
    },
    groupTypeMessagesNext: {
      marginBottom: '4px',
    },
    groupTypeMessagesPrev: {
      borderRadius: '17px 0 17px 17px',
    },
    groupTypeMessagesInter: {
      borderRadius: '17px 0 0 17px',
    },
    textContainer: {
      textAlign: 'left',
      maxWidth: '100%',
      minWidth: '5%',
      wordBreak: 'break-all',
      '@media screen and (max-width: 800px)': {
        fontSize: '1rem',
      },
    },
    avatarContainer: {},
    image: {},
    positiveRateMessageButton: {
      display: 'none',
    },
    negativeRateMessageButton: {
      display: 'none',
    },
    audioMessageButton: {},
    dataContainer: {
      width: '100%',
      textAlign: 'left',
      fontSize: '0.75rem',
      marginTop: '8px',
      color: primaryWhite,
      opacity: '0.4',
    },
    bubbleContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      padding: '16px',
    },
    buttonsContainer: {},
  }
}

export default UserMesssage
