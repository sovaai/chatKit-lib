import { ThemeColors } from '../@types/colors'

const CKContents = (colors: ThemeColors) => {
  const { primaryBadge } = colors

  return {
    mainContainer: {
      width: '372px',
      display: 'flex',
      marginBottom: '16px',
      marginLeft: '8px',
      oveflowX: 'hidden',
    },
    scrollbar: {
      '& .scrollbar-container': {
        // position: 'unset',
      },
    },
    elementContainer: {
      display: 'flex',
      border: '0.5px solid #F3F3F3',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '17px',
      width: '280px',
      marginLeft: '16px',
      fontFamily: 'Helvetica',
      background: '#F3F3F3',
    },
    buttonsContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },
    webUrlButton: {
      fontSize: '14px',
      lineHeight: '18px',
      height: '44px',
      width: '100%',
      border: 'none',
      outline: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      color: '#386FFE',
      textDecoration: 'none',
    },
    postbackButton: {
      fontSize: '14px',
      lineHeight: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '44px',
      width: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: '#386FFE',
      textDecoration: 'none',
    },
    image: {
      width: '280px',
      objectFit: 'cover',
      height: '200px',
      borderRadius: '17px 17px 0 0',
    },
    textContainer: {
      display: 'flex',
      width: '100%',
      padding: '16px 12px',
      fontSize: '12px',
      height: '127px',
      boxSizing: 'border-box',
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderBottom: '1px solid #E1E1E1',
    },
    title: {
      lineHeight: '18px',

      color: '#0F1F48',
      marginBottom: '4px',
    },
    subTitle: {
      lineHeight: '18px',

      color: '#000000',
      opacity: '0.3',
    },
  }
}

export default CKContents
