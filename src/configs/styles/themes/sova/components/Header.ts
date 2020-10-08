import { ThemeColors } from '../@types/colors'

const Header = (colors: ThemeColors) => {
  const { primaryWhite, primaryDivider, primaryDark, primaryHeaderButtonHover, primaryHeaderButtonActive } = colors

  return {
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box',
      borderBottom: `0.5px solid ${primaryDivider}`,
      justifyContent: 'space-between',
      height: '50px',
      minHeight: '50px',
      background: primaryDark,
      borderRadius: '17px 17px 0px 0px',
      padding: '13px 17px',
      color: primaryWhite,
      zIndex: 50,
      '@media screen and (max-width: 800px)': {
        borderRadius: '0',
        height: '60px',
        position: 'absolute',
        top: '0',
      },
    },
    avatarContainer: {
      borderRadius: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      '@media screen and (max-width: 800px)': {
        width: '6%',
      },
      '@media screen and (max-width: 480px)': {
        width: '10%',
      },
    },
    image: {
      maxWidth: '24px',
      maxHeight: '24px',
      '@media screen and (max-width: 800px)': {
        maxWidth: '35px',
        maxHeight: '35px',
      },
      '@media screen and (max-width: 480px)': {
        maxWidth: '25px',
        maxHeight: '25px',
      },
    },
    titleContainer: {
      textAlign: 'left',
      width: '50%',
      fontSize: '1.125rem',
      marginLeft: '15px',
      '@media screen and (max-width: 800px)': {
        width: '60%',
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        width: '50%',
        fontSize: '1.125rem',
      },
    },
    resetButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryHeaderButtonHover,
      },
      '&:active': {
        background: primaryHeaderButtonActive,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        fontSize: '0.875rem',
      },
    },
    closeButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryHeaderButtonHover,
      },
      '&:active': {
        background: primaryHeaderButtonActive,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        fontSize: '0.875rem',
      },
    },
    settingsButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryHeaderButtonHover,
      },
      '&:active': {
        background: primaryHeaderButtonActive,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        fontSize: '0.875rem',
      },
    },
    headerSearchContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    headerSearchResetButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      padding: '0',
      justifyContent: 'center',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryHeaderButtonHover,
      },
      '&:active': {
        background: primaryHeaderButtonActive,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        fontSize: '0.875rem',
      },
    },
    headerSearchInput: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '1rem',
      border: 'none',
      width: '85%',
      background: 'none',
      color: primaryWhite,
      outline: 'none',
      padding: '0',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: '200',
      lineHeight: '20px',
      fontSize: '1.125rem',
      '::-webkit-input-placeholder': {
        color: primaryWhite,
        opacity: '0.2',
      },
      '::-moz-placeholder': {
        color: primaryWhite,
        opacity: '0.2',
      },
      '-ms-input-placeholder': {
        color: primaryWhite,
        opacity: '0.2',
      },
    },
    searchButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryHeaderButtonHover,
      },
      '&:active': {
        background: primaryHeaderButtonActive,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        fontSize: '0.875rem',
      },
    },
  }
}

export default Header
