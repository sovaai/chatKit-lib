import { ThemeColors } from '../@types/colors'

const ToggleSlider = (colors: ThemeColors) => {
  const { primary, primaryText, primaryWhite, primaryGray } = colors

  return {
    toggleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginBottom: '2rem',
    },
    toggleHeading: {
      color: primaryText,
      fontSize: '1rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
    },
    toggleLabel: {
      display: 'inline-block',
      height: '24px',
      width: '48px',
      position: 'relative',
    },
    toggleInput: {
      display: 'none',
      '&:checked + .sova-settings-toggle-slider': {
        backgroundColor: primary,
      },
      '&:checked + .sova-settings-toggle-slider:before': {
        transform: 'translateX(24px)',
      },
    },
    toggleSlider: {
      backgroundColor: primaryGray,
      bottom: 0,
      cursor: 'pointer',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      transition: 'all ease-in-out 0.35s',
      borderRadius: '34px',
      '&:before': {
        backgroundColor: primaryWhite,
        bottom: '3px',
        content: '""',
        height: '18px',
        width: '18px',
        left: '3px',
        position: 'absolute',
        transition: 'all ease-in-out 0.35s',
        borderRadius: '50%',
      },
    },
  }
}

export default ToggleSlider
