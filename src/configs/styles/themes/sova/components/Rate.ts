import { ThemeColors } from '../@types/colors'

const Rate = (colors: ThemeColors) => {
  const {
    primaryWhite,
    primaryDivider,
    primaryButton,
    primaryButtonHover,
    secondaryRate,
    primaryAccent,
    primaryText,
  } = colors

  return {
    mainContainer: {
      borderTop: `0.5px solid ${primaryDivider}`,
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
      width: '47%',
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
      width: '47%',
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
      marginTop: '5px',
      width: '100%',
      color: secondaryRate,
      listStyleType: 'none',
      cursor: 'pointer',
      transition: 'color ease-in-out 0.3s',
      '&:hover': {
        color: primaryAccent,
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
