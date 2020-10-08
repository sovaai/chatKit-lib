import { ThemeColors } from '../@types/colors'

const ResponseMessage = (colors: ThemeColors) => {
  const { primaryLinks, primaryDark, primaryRatingElement, primaryResponse, primaryText, primaryAccent } = colors

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
      '& mark': {
        background: '#FFDF00',
        color: primaryDark,
      },
      '& a': {
        color: primaryLinks,
        textDecoration: 'none',
        transition: 'color ease-in-out 0.3s',
      },
      '& ul': {
        margin: '0',
        display: 'flex',
        padding: '0',
        flexDirection: 'column',
        marginLeft: '-6px',
        alignItems: 'flex-start',
        width: '100%',
      },
      '& li': {
        width: '100%',
        height: '32px',
        background: 'none',
        borderRadius: '4px',
        padding: '8px 6px',
        lineHeight: '17px',
        boxSizing: 'border-box',
        listStyleType: 'none',
        cursor: 'pointer',
        transition: 'background ease-in-out 0.3s',
      },
      '& li:hover': {
        background: primaryRatingElement,
      },
      '& li:active': {
        opacity: '0.5',
      },
      '& a:hover': {
        color: '#2F66F1',
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
