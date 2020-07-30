import { ThemeColors } from '../@types/colors'

const Badge = (colors: ThemeColors) => {
  const { primaryBadge } = colors

  return {
    mainContainer: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      cursor: 'pointer',
    },
    avatarContainer: {
      borderRadius: '50px',
      border: '4px solid #386FFE',
      width: '75px',
      height: '75px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    image: {
      width: '55px',
      height: '55px',
    },
    titleContainer: {},
    svg: {
      groupPath: {
        fill: primaryBadge,
      },
      path: {
        animation: 'dash 15s ease-in-out infinite',
      },
      '@keyframes dash': {
        '0%, 100%': {
          strokeDashoffset: 250,
        },
        '50%': {
          strokeDashoffset: 10,
        },
      },
    },
  }
}

export default Badge
