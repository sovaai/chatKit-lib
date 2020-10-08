import { ThemeColors } from '../@types/colors'

const Rate = (colors: ThemeColors) => {
  const {
    primaryWhite,
    primaryButton,
    primaryButtonHover,
    secondaryRate,
    primaryText,
    primaryRatingElement,
  } = colors

  return {
    mainContainer: {
      borderTop: `1px solid #dddee2`,
      marginTop: '1rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    titleContainer: {
      width: '100%',
      textAlign: 'center',
      marginTop: '1rem',
      marginBottom: '1rem',
    },
    negativeRateButton: {
      width: '48%',
      border: 'none',
      outline: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: primaryText,
      background: primaryButton,
      padding: '12px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color ease-in-out 0.3s',
      '&:hover': {
        backgroundColor: primaryButtonHover,
      },
      '&:active': {
        backgroundColor: secondaryRate,
        color: primaryWhite,
      },
    },
    positiveRateButton: {
      width: '48%',
      border: 'none',
      outline: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: primaryText,
      background: primaryButton,
      padding: '12px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color ease-in-out 0.3s',
      '&:hover': {
        backgroundColor: primaryButtonHover,
      },
      '&:active': {
        backgroundColor: secondaryRate,
        color: primaryWhite,
      },
    },
    ratingElement: {
      width: '100%',
      height: '32px',
      background: 'none',
      borderRadius: '4px',
      padding: '8px 6px',
      lineHeight: '17px',
      boxSizing: 'border-box',
      color: secondaryRate,
      listStyleType: 'none',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryRatingElement,
      },
      '&:active': {
        opacity: '0.5',
      },
    },
    ratingListContainer: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
    },
  }
}

export default Rate
