import React from 'react'
import { store } from '../../../store'
import { StoreContext } from 'storeon/react'
import { object, withKnobs, select, boolean, text } from '@storybook/addon-knobs'
import uiManagmentApi from '../../../api/uiManagment/uiManagmentApi'
import stylesApi from '../../../api/styles/stylesApi'
// import { darkTheme, lightTheme } from '../../../configs/styles'
// import { ru, en } from '../../../configs/languages'
import languagesApi from '../../../api/languages/languagesApi'
// import { settings } from '../../../configs/settings'
import settingsApi from '../../../api/settings/settingsApi'
import Rate from '../Rate'
import { withInfo } from '@storybook/addon-info'
import info from './RateInfo.md'
import '../../../styles/storyBookContainer.css'
import { iconsList } from '../../../configs/icons'
export default {
  title: 'Rate',
  decorators: [withKnobs, withInfo],
  parameters: {
    info: {
      text: info,
      source: false,
      propTables: false,
    },
  },
}
const groupUIManagment = 'UIManagment'
const groupStyles = 'Styles'
const groupLanguages = 'Languages'
const groupSettings = 'Settings'
// const storyDarkStyles = {
//   mainContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     backgroundColor: '#373737',
//     padding: '8px',
//     borderRadius: '10px',
//   },
//   titleContainer: {
//     width: '100%',
//     textAlign: 'center',
//     color: 'white',
//   },
//   negativeRateButton: {
//     fontSize: '16px',
//     width: '50%',
//     marginTop: '10px',
//     marginBottom: '10px',
//     border: 'none',
//     backgroundColor: 'transparent',
//     outline: 'none',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     color: '#fa4caa',
//   },
//   positiveRateButton: {
//     fontSize: '16px',
//     width: '50%',
//     marginTop: '10px',
//     marginBottom: '10px',
//     border: 'none',
//     backgroundColor: 'transparent',
//     outline: 'none',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     color: '#fa4caa',
//   },
//   ratingElement: {
//     marginTop: '5px',
//     width: '60%',
//     color: '#5271fe',
//     listStyleType: 'none',
//   },
//   ratingListContainer: {
//     display: 'flex',
//     marginTop: '20px',
//     marginBottom: '20px',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   },
// }
// const storyLightStyles = {
//   mainContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     backgroundColor: '#edf0f5',
//     padding: '8px',
//     borderRadius: '10px',
//   },
//   titleContainer: {
//     width: '100%',
//     textAlign: 'center',
//     color: '#575757',
//   },
//   negativeRateButton: {
//     fontSize: '16px',
//     width: '50%',
//     marginTop: '10px',
//     marginBottom: '10px',
//     border: 'none',
//     backgroundColor: 'transparent',
//     outline: 'none',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     color: '#fa4caa',
//   },
//   positiveRateButton: {
//     fontSize: '16px',
//     width: '50%',
//     marginTop: '10px',
//     marginBottom: '10px',
//     border: 'none',
//     backgroundColor: 'transparent',
//     outline: 'none',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     color: '#fa4caa',
//   },
//   ratingElement: {
//     marginTop: '5px',
//     width: '60%',
//     color: '#5271fe',
//     listStyleType: 'none',
//   },
//   ratingListContainer: {
//     display: 'flex',
//     marginTop: '20px',
//     marginBottom: '20px',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   },
// }
// stylesApi.styles('changeRate', { themeName: 'darkTheme', data: storyDarkStyles })
// stylesApi.styles('changeRate', { themeName: 'lightTheme', data: storyLightStyles })
// export const RateComponent = () => {
//   const negativeRateIcon = object('negativeRateIcon', settings.media.icons.negativeRateIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'negativeRateIcon', iconData: negativeRateIcon })
//   const positiveRateIcon = object('positiveRateIcon', settings.media.icons.positiveRateIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'positiveRateIcon', iconData: positiveRateIcon })
//   const negativeRateButton = object('negativeRateButton', uiManagmentRate.negativeRate, groupUIManagment)
//   const positiveRateButton = object('settingsButton', uiManagmentRate.positiveRate, groupUIManagment)
//   uiManagmentApi.uiManagment('setUpRate', { negativeRate: negativeRateButton, positiveRate: positiveRateButton })
//   const activeLanguage = select('active', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
//   languagesApi.languages('changeLanguage', activeLanguage)
//   const russian = object('Russian', ru.packet.Rate, groupLanguages)
//   languagesApi.languages('changeRate', { language: 'ru', data: russian })
//   const english = object('English', en.packet.Rate, groupLanguages)
//   languagesApi.languages('changeRate', { language: 'en', data: english })
//   const activeTheme = select('active', { darkTheme: 'darkTheme', lightTheme: 'lightTheme' }, 'darkTheme', groupStyles)
//   stylesApi.styles('switchTheme', activeTheme)
//   const stylesDarkTheme = object('darkTheme', darkTheme.data.Rate, groupStyles)
//   stylesApi.styles('changeRate', { themeName: 'darkTheme', data: stylesDarkTheme })
//   const stylesLightTheme = object('lightTheme', lightTheme.data.Rate, groupStyles)
//   stylesApi.styles('changeRate', { themeName: 'lightTheme', data: stylesLightTheme })
//   return (
//     <StoreContext.Provider value={store}>
//       <Rate />
//     </StoreContext.Provider>
//   )
// }
const languagePacket = {
  title: (language: string, title: string) => text(`${language}/title`, title, groupLanguages),
  positive: (language: string, title: string) => text(`${language}/positive`, title, groupLanguages),
  negative: (language: string, title: string) => text(`${language}/negative`, title, groupLanguages),
  raitingOne: (language: string, title: string) => text(`${language}/raiting 1`, title, groupLanguages),
  raitingTwo: (language: string, title: string) => text(`${language}/raiting 2`, title, groupLanguages),
  raitingThree: (language: string, title: string) => text(`${language}/raiting 3`, title, groupLanguages),
}
const stylesPacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/mainContainer`, data, groupStyles),
  titleContainer: (themeName: string, data: any) => object(`${themeName}/titleContainer`, data, groupStyles),
  positiveRateButton: (themeName: string, data: any) => object(`${themeName}/positiveRateButton`, data, groupStyles),
  negativeRateButton: (themeName: string, data: any) => object(`${themeName}/negativeRateButton`, data, groupStyles),
  ratingListContainer: (themeName: string, data: any) => object(`${themeName}/ratingListContainer`, data, groupStyles),
  ratingElement: (themeName: string, data: any) => object(`${themeName}/ratingElement`, data, groupStyles),
}
export const RateComponent = () => {
  //settings start
  const negativeRateIcon = select('negativeRateIcon', iconsList, 'far thumbs-down', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'negativeRateIcon', iconData: { icon: negativeRateIcon.split(' ') } })
  const positiveRateIcon = select('positiveRateIcon', iconsList, 'fas thumbs-up', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'positiveRateIcon', iconData: { icon: positiveRateIcon.split(' ') } })
  // settings end
  //ui managment start
  const uiManagmentRate = store.get().managment.getIn(['components', 'Rate'])
  const negativeRateButton = boolean(
    'negativeRateButton enabled',
    uiManagmentRate.negativeRate.enabled,
    groupUIManagment
  )
  const titleNegativeRate = boolean('show negativeRateTitle', uiManagmentRate.negativeRate.withTitle, groupUIManagment)
  const iconNegativeRate = boolean('show negativeRateIcon', uiManagmentRate.negativeRate.withIcon, groupUIManagment)
  const positiveRateButton = boolean(
    'positiveRateButton enabled',
    uiManagmentRate.positiveRate.enabled,
    groupUIManagment
  )
  const titlePositiveRateButton = boolean(
    'show positiveRateButtonTitle',
    uiManagmentRate.positiveRate.withTitle,
    groupUIManagment
  )
  const iconPositiveRateButton = boolean(
    'show positiveRateButtonIcon',
    uiManagmentRate.positiveRate.withIcon,
    groupUIManagment
  )
  uiManagmentApi.uiManagment('setUpRate', {
    positiveRate: { enabled: positiveRateButton, withTitle: titlePositiveRateButton, withIcon: iconPositiveRateButton },
    negativeRate: { enabled: negativeRateButton, withTitle: titleNegativeRate, withIcon: iconNegativeRate },
  })
  // ui managment end
  // languages start
  const language = select('language', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
  languagesApi.languages('changeLanguage', language)
  const activeLanguagePacket = store.get().languages.getIn(['stack', language, 'Rate'])
  const title = languagePacket.title(language, activeLanguagePacket.title)
  const negative = languagePacket.negative(language, activeLanguagePacket.negative)
  const positive = languagePacket.positive(language, activeLanguagePacket.positive)
  const raitingOne = languagePacket.raitingOne(language, activeLanguagePacket.ratingList[2])
  const raitingTwo = languagePacket.raitingTwo(language, activeLanguagePacket.ratingList[1])
  const raitingThree = languagePacket.raitingThree(language, activeLanguagePacket.ratingList[0])
  languagesApi.languages('changeRate', {
    language: language,
    data: { title, negative, positive, ratingList: [raitingThree, raitingTwo, raitingOne] },
  })
  // languages end
  //styles start
  const themeName = select(
    'theme',
    { sovaDark: 'sovaDark', sovaLight: 'sovaLight', sovaGray: 'sovaGray' },
    'sovaLight',
    groupStyles
  )
  stylesApi.styles('switchTheme', themeName)
  const activeThemePacket = store.get().styles.getIn(['stack', themeName, 'Rate'])
  const mainContainer = stylesPacket.mainContainer(themeName, activeThemePacket.mainContainer)
  const titleContainer = stylesPacket.titleContainer(themeName, activeThemePacket.titleContainer)
  const negativeRate = stylesPacket.negativeRateButton(themeName, activeThemePacket.negativeRateButton)
  const positiveRate = stylesPacket.positiveRateButton(themeName, activeThemePacket.positiveRateButton)
  const ratingElement = stylesPacket.ratingElement(themeName, activeThemePacket.ratingElement)
  const ratingListContainer = stylesPacket.ratingListContainer(themeName, activeThemePacket.ratingListContainer)
  stylesApi.styles('changeRate', {
    themeName: themeName,
    data: {
      mainContainer,
      ratingElement,
      positiveRateButton: positiveRate,
      negativeRateButton: negativeRate,
      titleContainer,
      ratingListContainer,
    },
  })
  //styles end
  return (
    <StoreContext.Provider value={store}>
      <div className="sova-ck-main">
        <div className="sova-ck-chat">
          <Rate />
        </div>
      </div>
    </StoreContext.Provider>
  )
}
