import React from 'react'
import { store } from '../../../store'
import { StoreContext } from 'storeon/react'
import { object, withKnobs, select, boolean, files, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import uiManagmentApi from '../../../api/uiManagment/uiManagmentApi'
import stylesApi from '../../../api/styles/stylesApi'
// import { uiManagment } from '../../../configs/uiManagment'
// import { darkTheme, lightTheme } from '../../../configs/styles'
// import { ru, en } from '../../../configs/languages'
import languagesApi from '../../../api/languages/languagesApi'
import settingsApi from '../../../api/settings/settingsApi'
import '../../../styles/storyBookContainer.css'
import info from './BadgeInfo.md'
import Badge from '../Badge'
export default {
  title: 'Badge',
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
//     width: '200px',
//     height: '150px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     width: '90px',
//     height: '90px',
//     borderRadius: '50px',
//     backgroundColor: '#373737',
//     border: '3px solid #373737',
//   },
//   image: {
//     width: '90px',
//     height: '90px',
//   },
//   titleContainer: {
//     padding: '5px',
//     width: '90px',
//     borderRadius: '10px',
//     fontSize: '24px',
//     backgroundColor: '#373737',
//     color: 'white',
//     textAlign: 'center',
//   },
// }
// const storyLightStyles = {
//   mainContainer: {
//     width: '200px',
//     height: '150px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     width: '90px',
//     height: '90px',
//     borderRadius: '50px',
//     backgroundColor: '#4a76a8',
//     border: '3px solid #4a76a8',
//   },
//   image: {
//     width: '90px',
//     height: '90px',
//   },
//   titleContainer: {
//     padding: '5px',
//     width: '90px',
//     borderRadius: '10px',
//     fontSize: '24px',
//     backgroundColor: '#4a76a8',
//     color: 'white',
//     textAlign: 'center',
//   },
// }
// stylesApi.styles('changeBadge', { themeName: 'darkTheme', data: storyDarkStyles })
// stylesApi.styles('changeBadge', { themeName: 'lightTheme', data: storyLightStyles })
// export const BadgeComponent = () => {
//   const avatar = files('avatar', '.png', [], groupSettings)
//   settingsApi.settings('changeAvatar', avatar[0])
//   const showAvatar = boolean('showAvatar', uiManagment.components.Badge.showAvatar, groupUIManagment)
//   const showTitle = boolean('showTitle', uiManagment.components.Badge.showTitle, groupUIManagment)
//   uiManagmentApi.uiManagment('setUpBadge', { showAvatar: showAvatar, showTitle: showTitle })
//   const activeLanguage = select('active', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
//   languagesApi.languages('changeLanguage', activeLanguage)
//   const russian = object('Russian', ru.packet.Badge, groupLanguages)
//   languagesApi.languages('changeBadge', { language: 'ru', data: russian })
//   const english = object('English', en.packet.Badge, groupLanguages)
//   languagesApi.languages('changeBadge', { language: 'en', data: english })
//   const activeTheme = select('active', { darkTheme: 'darkTheme', lightTheme: 'lightTheme' }, 'darkTheme', groupStyles)
//   stylesApi.styles('switchTheme', activeTheme)
//   const stylesDarkTheme = object('darkTheme', darkTheme.data.Badge, groupStyles)
//   stylesApi.styles('changeBadge', { themeName: 'darkTheme', data: stylesDarkTheme })
//   const stylesLightTheme = object('lightTheme', lightTheme.data.Badge, groupStyles)
//   stylesApi.styles('changeBadge', { themeName: 'lightTheme', data: stylesLightTheme })
//   return (
//     <StoreContext.Provider value={store}>
//       <Badge />
//     </StoreContext.Provider>
//   )
// }
const languagePacket = {
  title: (language: string, title: string) => text(`${language}/title`, title, groupLanguages),
}
const stylesPacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/mainContainer`, data, groupStyles),
  avatarContainer: (themeName: string, data: any) => object(`${themeName}/avatarContainer`, data, groupStyles),
  image: (themeName: string, data: any) => object(`${themeName}/image`, data, groupStyles),
  titleContainer: (themeName: string, data: any) => object(`${themeName}/titleContainer`, data, groupStyles),
  svg: (themeName: string, data: any) => object(`${themeName}/svg`, data, groupStyles),
}
export const ComponentBadge = () => {
  //languages start
  const language = select('language', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
  languagesApi.languages('changeLanguage', language)
  const activeLanguagePacket = store.get().languages.getIn(['stack', language, 'Badge'])
  const title = languagePacket.title(language, activeLanguagePacket.title)
  languagesApi.languages('changeBadge', { language: language, data: { title } })
  // languages end
  // settings start
  const avatar = files('avatar', '.png', [], groupSettings)
  settingsApi.settings('changeAvatar', avatar[0])
  // settings end
  // uiManagment Start
  const BadgeUIManagmet = store.get().managment.getIn(['components', 'Badge'])
  const showAvatar = boolean('showAvatar', BadgeUIManagmet.showAvatar, groupUIManagment)
  const showTitle = boolean('showTitle', BadgeUIManagmet.showTitle, groupUIManagment)
  const showSVG = boolean('showSVG', BadgeUIManagmet.showSVG, groupUIManagment)
  uiManagmentApi.uiManagment('setUpBadge', { showAvatar: showAvatar, showTitle: showTitle, showSVG: showSVG })
  // uiManagment end
  // styles Start
  const themeName = select(
    'theme',
    { sovaDark: 'sovaDark', sovaLight: 'sovaLight', sovaGray: 'sovaGray' },
    'sovaLight',
    groupStyles
  )
  stylesApi.styles('switchTheme', themeName)
  const activeThemePacket = store.get().styles.getIn(['stack', themeName, 'Badge'])
  const mainContainer = stylesPacket.mainContainer(themeName, activeThemePacket.mainContainer)
  const avatarContainer = stylesPacket.avatarContainer(themeName, activeThemePacket.avatarContainer)
  const image = stylesPacket.image(themeName, activeThemePacket.image)
  const titleContainer = stylesPacket.titleContainer(themeName, activeThemePacket.titleContainer)
  const svg = stylesPacket.svg(themeName, activeThemePacket.svg)
  stylesApi.styles('changeBadge', {
    themeName: themeName,
    data: { mainContainer, avatarContainer, image, titleContainer, svg },
  })
  return (
    <StoreContext.Provider value={store}>
      <div className="sova-ck-main">
        <div className="sova-ck-chat">
          <Badge />
        </div>
      </div>
    </StoreContext.Provider>
  )
}
