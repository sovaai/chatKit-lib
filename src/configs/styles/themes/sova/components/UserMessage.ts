import { ThemeColors } from '../@types/colors'

const UserMesssage = (colors: ThemeColors) => {
  const { primaryWhite, primary, primaryText, primaryAccent } = colors

  return {
    mainContainer: {
      display: 'flex',
      flexDirection: 'colomn',
      width: 'fit-content',
      maxWidth: '275px',
      marginLeft: 'auto',
      marginRight: '24px',
      marginBottom: '16px',
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
      flexWrap: 'wrap',
      padding: '16px',
    },
    buttonsContainer: {},
    imageFile: {
      maxWidth: '190px',
      maxHeight: '222px',
      display: 'flex',
      borderRadius: '17px 17px 0 17px',
    },
    fileContainer: {
      display: 'flex',
      width: '100%',
      marginBottom: '10px',
    },
    svgContainer: {
      marginRight: '16px',
      display: 'flex',
    },
    sizeTittle: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      color: primaryWhite,
      opacity: '0.5',
    },
    fileNameTittle: {
      textAlign: 'left',
      width: '100%',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      color: primaryWhite,
      marginBottom: '4px',
      cursor: 'pointer',
      transition: 'color ease-in-out 0.3s',
      textDecoration: 'none',
      '&:hover': {
        opacity: '0.5',
      },
      '&:active': {
        opacity: '1',
      },
    },
    metaContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
  }
}

export default UserMesssage
