import colors from '../dark/colors'
import { ThemeColors } from '../@types/colors'

const Example = (colors: ThemeColors) => {
  const { primaryExampleBackground, primary, primaryBrightResponse } = colors

  return {
    width: '5.5rem',
    height: '6.813rem',
    background: primaryExampleBackground,
    boxSizing: 'border-box',
    borderTop: `0.7rem solid ${primaryBrightResponse}`,
    borderRadius: '7px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '7px',
    '::before': {
      content: '""',
      width: '3.2rem',
      height: '1.5rem',
      borderRadius: '3px',
      alignSelf: 'flex-start',
      background: primaryBrightResponse,
    },
    '::after': {
      content: '""',
      alignSelf: 'flex-end',
      width: '3rem',
      height: '1.5rem',
      borderRadius: '3px',
      background: primary,
    },
  }
}
export default Example
