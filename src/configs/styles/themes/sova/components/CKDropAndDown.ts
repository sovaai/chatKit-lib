import { ThemeColors } from '../@types/colors'

const CKDropAndDown = (colors: ThemeColors) => {
  const { primaryBackground, primaryDashed, primaryText, primary, primaryAccent, primaryWhite } = colors

  return {
    mainContainer: {
      margin: '16px',
      height: '464px',
      background: primaryBackground,
      display: 'flex',
      alignItems: 'center',
      padding: '98px 0px 56px 0px',
      flexDirection: 'column',
      boxSizing: 'border-box',
      outline: 'none',
      border: `2px dashed ${primaryDashed}`,
      animation: 'show 0.5s 1',
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    svgContainer: {},
    dropAndDownContainer: {
      marginBottom: '21.92px',
    },
    chooseFileButton: {
      padding: '4px 20px',
      width: '149px',
      height: '41px',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '40px',
      textAlign: 'center',
      color: primaryWhite,
      background: primary,
      borderRadius: '49px',
      border: 'none',
      outline: 'none',
      marginBottom: '24px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryAccent,
      },
      '&:active': {
        opacity: '0.6',
      },
    },
    titleContainer: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '22px',
      lineHeight: '32px',
      color: primaryText,
      marginBottom: '13px',
    },
    commentContainer: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
      textAlign: 'center',
      color: primaryText,
      opacity: '0.5',
    },
    dividerContainer: {
      fontFamily: 'Helvetica',
      marginBottom: '13px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '30px',
      color: primaryText,
      opacity: '0.3',
      width: '137px',
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      '::before': {
        content: '""',
        width: '47px',
        height: '1px',
        opacity: '0.3',
        background: primaryText,
      },
      '::after': {
        content: '""',
        width: '47px',
        height: '1px',
        opacity: '0.3',
        background: primaryText,
      },
    },
  }
}
export default CKDropAndDown
