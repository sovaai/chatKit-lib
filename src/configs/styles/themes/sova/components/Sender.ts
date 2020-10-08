import { ComponentArguments } from '../@types/components'

const Sender = ({ colors, fonts }: ComponentArguments) => {
  const {
    primarySenderBG,
    primaryDivider,
    secondaryButton,
    primaryAccent,
    primary,
    primaryText,
    primaryFileBackground,
    primaryPlaceholder,
  } = colors

  return {
    mainContainer: {
      display: 'flex',
      bottom: '0',
      position: 'absolute',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      background: primarySenderBG,
      borderRadius: '0px 0px 17px 17px',
      padding: '5px 20px 5px 20px',
      borderTop: `0.5px solid ${primaryDivider}`,
      minHeight: '53px',
      '@media screen and (max-width: 800px)': {
        minHeight: '6%',
        borderRadius: '0',
      },
    },
    mainContainerSearch: {
      justifyContent: 'space-between',
      color: primaryText,
    },
    searchCountContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    searchButtonContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '59.6px',
      justifyContent: 'space-between',
    },
    switchingActiveButton: {
      border: 'none',
      fontSize: '1.125rem',
      background: primarySenderBG,
      height: '34px',
      outline: 'none',
      padding: '0',
      color: secondaryButton,
      transition: 'color ease-in-out 0.1s',
      cursor: 'pointer',
      '&:hover': {
        color: '#878fa3',
      },
      '&:active': {
        color: primary,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.25rem',
      },
    },
    switchingDisableButton: {
      opacity: '0.2',
      cursor: 'auto',
      '&:hover': {},
      '&:active': {},
    },
    addFileButton: {
      border: 'none',
      fontSize: '1.125rem',
      background: primarySenderBG,
      height: '34px',
      outline: 'none',
      padding: '0',
      color: primaryAccent,
      transition: 'transform ease-in-out 0.3s, color ease-in-out 0.3s',
      cursor: 'pointer',
      '&:hover': {
        color: '#F2297B',
      },
      '&:active': {
        opacity: '0.5',
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.25rem',
      },
    },
    sendMessageButton: {
      border: 'none',
      fontSize: '1.125rem',
      background: primarySenderBG,
      outline: 'none',
      height: '34px',
      padding: '3px',
      color: primary,
      cursor: 'pointer',
      transition: 'transform ease-in-out 0.3s, color ease-in-out 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        color: '#2F66F1',
      },
      '&:active': {
        opacity: '0.5',
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.25rem',
      },
    },
    shareButton: {},
    stickersButton: {},
    textArea: {
      minWidth: '270px',
      resize: 'none',
      border: 'none',
      outline: 'none',
      minHeight: '27px',
      color: primaryText,
      background: 'none',
      overflowY: 'auto',
      wordWrap: 'break-word',
      flex: 1,
      margin: '0 1rem',
      padding: 0,
      marginTop: '10px',
      ...fonts,
      '@media screen and (max-width: 800px)': {
        borderRadius: '15px',
        border: `1px solid ${primaryDivider}`,
        padding: '6px',
        fontSize: '1rem',
        minWidth: '260px',
      },
      '@media screen and (max-width: 480px)': {
        minWidth: '74%',
      },
      '::-webkit-input-placeholder': {
        color: primaryPlaceholder,
        opacity: '0.2',
      },
      '::-moz-placeholder': {
        color: primaryPlaceholder,
        opacity: '0.2',
      },
      '-ms-input-placeholder': {
        color: primaryPlaceholder,
        opacity: '0.2',
      },
    },
    voiceButton: {},
    filesContainer: {
      width: '100%',
      overflowX: 'scroll',
      display: 'flex',
      padding: '8px 0 8px 0',
      animation: 'show 0.3s 1',
      '::-webkit-scrollbar': { width: '0' },
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    fileContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60px',
      minWidth: '60px',
      maxWidth: '60px',
      borderRadius: '5px',
      background: primaryFileBackground,
      marginRight: '8px',
      '& .ckProgressLoader': {
        position: 'absolute',
        display: 'flex',
      },
      animation: 'show 0.3s 1',
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    fileImage: {
      height: '100%',
      minWidth: '100%',
      maxWidth: '100%',
      borderRadius: '5px',
    },
    deleteFileButton: {
      position: 'absolute',
      left: '36px',
      top: '0px',
      cursor: 'pointer',
      '&:hover': {
        opacity: '0.5',
      },
      '&:active': {
        opacity: '1',
      },
    },
  }
}

export default Sender
