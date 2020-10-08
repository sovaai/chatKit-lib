import { ThemeColors } from '../@types/colors'

const Divider = (colors: ThemeColors) => {
  const { primaryDateDivider } = colors

  return {
    dividerMainContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '22px 0',
      userSelect: 'none',
      color: primaryDateDivider,
      opacity: '0.3',
    },
  }
}

export default Divider
