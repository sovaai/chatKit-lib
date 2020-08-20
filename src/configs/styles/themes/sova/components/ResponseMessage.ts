import { ThemeColors } from '../@types/colors'

const ResponseMessage = (colors: ThemeColors) => {
  const { primaryLinks, primaryResponse, primaryText, primaryAccent } = colors

  return {
    mainContainer: {
      display: 'flex',
      flexDirection: 'colomn',
      width: 'fit-content',
      maxWidth: '275px',
      marginLeft: '24px',
      marginRight: 'auto',
      marginBottom: '16px',
      color: primaryText,
      background: primaryResponse,
      borderRadius: '17px 17px 17px 0',
    },
    groupTypeMessagesNext: {
      marginBottom: '4px',
    },
    groupTypeMessagesPrev: {
      borderRadius: '0 17px 17px 17px',
    },
    groupTypeMessagesInter: {
      borderRadius: '0 17px 17px 0',
    },
    textContainer: {
      color: primaryText,
      boxSizing: 'border-box',
      background: primaryResponse,
      maxWidth: '100%',
      minWidth: '5%',
      textAlign: 'left',
      '@media screen and (max-width: 800px)': {
        fontSize: '1rem',
      },

      '& a': {
        color: primaryLinks,
        transition: 'color ease-in-out 0.3s',
      },
      '& a:hover': {
        color: primaryAccent,
      },
      '& a:active': {
        color: primaryAccent,
      },
    },
    avatarContainer: {},
    image: {},
    positiveRateMessageButton: {
      padding: 0,
      alignSelf: 'flex-end',
      marginLeft: '4%',
      display: 'flex',
      alignItems: 'flex-end',
      border: 'none',
      outline: 'none',
      color: primaryText,
      background: 'none',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
      },
    },
    negativeRateMessageButton: {
      padding: 0,
      alignSelf: 'flex-end',
      marginLeft: '4%',
      display: 'flex',
      border: 'none',
      outline: 'none',
      color: primaryText,
      background: 'none',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
      },
    },
    audioMessageButton: {},
    dataContainer: {
      width: '100%',
      textAlign: 'right',
      fontSize: '0.75rem',
      marginTop: '8px',
      color: primaryText,
      opacity: '0.4',
    },
    bubbleContainer: {
      display: 'flex',
      padding: '16px',
      flexDirection: 'column',
      width: '100%',
    },
    buttonsContainer: {},
  }
}

export default ResponseMessage
