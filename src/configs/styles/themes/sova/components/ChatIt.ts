import { ComponentArguments } from '../@types/components'
// import smoothCorners from '../utils/smoothCorners'
const squircle = (radius: any) => (theta: any) => ({
  x: Math.pow(Math.abs(Math.cos(theta)), 2 / radius) * 50 * Math.sign(Math.cos(theta)) + 50,
  y: Math.pow(Math.abs(Math.sin(theta)), 2 / radius) * 50 * Math.sign(Math.sin(theta)) + 50,
})
const smoothCorners = new Array(360)
  .fill(0)
  .map((x, i) => i)
  .map((deg) => (deg * Math.PI) / 180) // Defined as deg => deg * Math.PI / 180 elsewhere
  .map(squircle(20)) // We'll use a border-radius of 4
  .map(({ x, y }) => ({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 })) // Round to the ones place
  .map(({ x, y }) => `${x}% ${y}%`)
  .join(', ')

const ChatIt = ({ colors, fonts }: ComponentArguments) => {
  const { primaryBackground } = colors

  return {
    mainContainer: {
      display: 'flex',
      overflow: 'hidden',
      width: 'fit-content',
      margin: 'auto',
      padding: '100px',
      '@media screen and (max-width: 800px)': {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: '0',
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
      ...fonts,
    },
    chatContainer: {
      width: '380px',
      display: 'flex',
      flexDirection: 'column',
      background: primaryBackground,
      position: 'relative',
      borderRadius: '17px',
      height: '600px',
      boxShadow: '0px 20px 50px rgba(5, 0, 56, 0.15)',
      overflow: 'hidden',
      '@media screen and (max-width: 800px)': {
        width: '100%',
        height: '100%',
        borderRadius: '0',
      },
    },
  }
}

export default ChatIt
