import { ThemeColors } from '../@types/colors'

const Settings = (colors: ThemeColors) => {
  const { primaryWhite, primaryDivider, primaryDark, primaryBackground, primaryText, primary } = colors

  return {
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: primaryBackground,
      color: primaryText,
      height: '100%',
      transition: 'background 0.35s ease-in-out',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box',
      height: '50px',
      borderBottom: `0.5px solid ${primaryDivider}`,
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
        padding: '0',
      },
    },
    titleContainer: {
      flex: '0.9',
      fontSize: '1.125rem',
      textAlign: 'center',
      '@media screen and (max-width: 800px)': {
        flex: '0.85',
      },
    },
    closeSettingsButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
      },
    },
    fieldcontainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      width: '100%',
      boxSizing: 'border-box',
      '@media screen and (max-width: 800px)': {
        height: '100vh',
        paddingTop: '10vh',
      },
    },
    heading: {
      marginBottom: '2rem',
      color: primaryText,
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    languages: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: '2rem',
    },
    themes: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: '2rem',
      justifyContent: 'space-between',
    },
    languagesCheckboxContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '20%',
      justifyContent: 'space-between',
      marginRight: '2rem',
    },
    themesCheckboxContainer: {
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
    boxTitle: {
      color: primaryText,
    },
    checkbox: {
      display: 'none',
      '&:hover + .settings-switcher': {
        opacity: '50%',
        background: primary,
      },
      '&:checked + .settings-switcher': {
        backgroundColor: primary,
        border: 'none',
        opacity: '1',
      },
      '&:checked + .settings-switcher::after': {
        height: '2px',
        width: '16px',
        borderRadius: '3px',
        content: '""',
        transform: 'translateX(36%) translateY(308%) rotate(-45deg)',
        transformOrigin: 'left bottom',
        backgroundColor: primaryBackground,
      },
      '&:checked + .settings-switcher::before': {
        height: '10px',
        width: '2px',
        borderRadius: '3px',
        backgroundColor: primaryBackground,
        content: '""',
        transform: 'translateX(372%) translateY(22%) rotate(-45deg)',
        transformOrigin: 'left bottom',
      },
    },
    switcher: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '2rem',
      height: ' 2rem',
      border: `1px solid ${primaryText}`,
      opacity: '0.2',
      borderRadius: '50%',
      cursor: 'pointer',
      boxSizing: 'border-box',
      transition: 'all 0.3s',
      '&:hover': {
        border: 'none',
      },
      '&:hover::after': {
        height: '2px',
        width: '16px',
        borderRadius: '3px',
        content: '""',
        transform: 'translateX(36%) translateY(308%) rotate(-45deg)',
        transformOrigin: 'left bottom',
        backgroundColor: primaryBackground,
        transition: 'all 0.3s',
      },
      '&:hover::before': {
        height: '10px',
        width: '2px',
        borderRadius: '3px',
        backgroundColor: primaryBackground,
        content: '""',
        transform: 'translateX(372%) translateY(22%) rotate(-45deg)',
        transformOrigin: 'left bottom',
      },
    },
  }
}

export default Settings
