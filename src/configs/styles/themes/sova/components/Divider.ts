import { ThemeColors } from '../@types/colors'

const Divider = (colors: ThemeColors) => {
  const { primaryText } = colors

  return {
    dividerMainContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '22px 0',
      userSelect: 'none',
      color: primaryText,
    },
  }
}

export default Divider
