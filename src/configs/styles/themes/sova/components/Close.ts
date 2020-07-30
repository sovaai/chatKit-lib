import { ThemeColors } from '../@types/colors'

const Close = (colors: ThemeColors) => {
  const { primaryDark } = colors

  return {
    mainContainer: {
      color: primaryDark,
      cursor: 'pointer',
      opacity: '75%',
      transition: 'opacity ease-in-out 0.3s',
      '&:hover': {
        opacity: '100%',
      },
    },
  }
}

export default Close
