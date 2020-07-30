import { ThemeColors } from '../@types/colors'

const Header = (colors: ThemeColors) => {
  const { primaryWhite, primaryDivider, primaryDark } = colors

  return {
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box',
      borderBottom: `0.5px solid ${primaryDivider}`,
      height: '50px',
      minHeight: '50px',
      background: primaryDark,
      borderRadius: '17px 17px 0px 0px',
      padding: '10px',
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
      width: '12%',
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
      width: '10%',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
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
      width: '10%',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
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
      width: '10%',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
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
    headerSearchInput: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '1rem',
      border: 'none',
      background: 'none',
      color: '#fff',
      outline: 'none',
      fontSize: '1.125rem',
    },
    searchButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      width: '10%',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.5rem',
      },
    },
  }
}

export default Header
