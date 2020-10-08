import React from 'react'
import { store } from '../../../store'
import { StoreContext } from 'storeon/react'
import { object, withKnobs, select, boolean, text, files } from '@storybook/addon-knobs'
import uiManagmentApi from '../../../api/uiManagment/uiManagmentApi'
import stylesApi from '../../../api/styles/stylesApi'
// import { darkTheme, lightTheme } from '../../../configs/styles'
// import { ru, en } from '../../../configs/languages'
import languagesApi from '../../../api/languages/languagesApi'
// import { settings } from '../../../configs/settings'
import settingsApi from '../../../api/settings/settingsApi'
import Header from '../Header'
import { withInfo } from '@storybook/addon-info'
import info from './HeaderInfo.md'
import { iconsList } from '../../../configs/icons'
import '../../../styles/storyBookContainer.css'
// import Logo from '../../../assets/Logo.png'
export default {
  title: 'Header',
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
//     width: '100%',
//     alignItems: 'center',
//     color: 'white',
//     justifyContent: 'space-between',
//     fontSize: '30px',
//     backgroundColor: '#373737',
//     padding: '8px',
//     borderRadius: '15px',
//   },
//   avatarContainer: {},
//   titleContainer: {},
//   buttonsContainer: {
//     display: 'flex',
//     flexDirection: 'row-reverse',
//     alignItems: 'center',
//     width: '30%',
//     marginRight: '8%',
//     marginLeft: '16%',
//   },
//   resetButton: {
//     backgroundColor: '#373737',
//     border: 'none',
//     display: 'flex',
//     justifyContent: 'space-around',
//     width: '50%',
//     outline: 'none',
//     color: 'white',
//     fontSize: '12px',
//   },
//   settingsButton: {
//     backgroundColor: '#373737',
//     border: 'none',
//     display: 'flex',
//     justifyContent: 'space-around',
//     outline: 'none',
//     width: '50%',
//     color: 'white',
//     fontSize: '12px',
//   },
//   image: {
//     width: '50px',
//     height: '50px',
//   },
// }

// const storyLightStyles = {
//   mainContainer: {
//     display: 'flex',
//     width: '100%',
//     alignItems: 'center',
//     color: 'white',
//     justifyContent: 'space-between',
//     fontSize: '30px',
//     backgroundColor: '#4a76a8',
//     padding: '8px',
//     borderRadius: '15px',
//   },
//   avatarContainer: {},
//   titleContainer: {},
//   buttonsContainer: {
//     display: 'flex',
//     flexDirection: 'row-reverse',
//     alignItems: 'center',
//     width: '30%',
//     marginRight: '8%',
//     marginLeft: '16%',
//   },
//   resetButton: {
//     backgroundColor: '#4a76a8',
//     border: 'none',
//     display: 'flex',
//     justifyContent: 'space-around',
//     width: '50%',
//     outline: 'none',
//     color: 'white',
//     fontSize: '12px',
//   },
//   settingsButton: {
//     backgroundColor: '#4a76a8',
//     border: 'none',
//     display: 'flex',
//     justifyContent: 'space-around',
//     outline: 'none',
//     width: '50%',
//     color: 'white',
//     fontSize: '12px',
//   },
//   image: {
//     width: '50px',
//     height: '50px',
//   },
// }
// stylesApi.styles('changeHeader', { themeName: 'darkTheme', data: storyDarkStyles })
// stylesApi.styles('changeHeader', { themeName: 'lightTheme', data: storyLightStyles })
// export const HeaderComponent = () => {
//   const r = optionsKnob(
//     label,
//     valuesObj,
//     defaultValue,
//     {
//       display: 'select',
//     },
//     groupId
//   )
//   console.log(r)
//   const resetIcon = object('resetIcon', settings.media.icons.resetIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'resetIcon', iconData: resetIcon })
//   const settingsIcon = object('settingsIcon', settings.media.icons.settingsIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'settingsIcon', iconData: settingsIcon })
//   const resetButton = object('resetButton',uiManagmentHeader.reset, groupUIManagment)
//   const settingsButton = object('settingsButton',uiManagmentHeader.settings, groupUIManagment)
//   const showAvatar = boolean('showAvatar',uiManagmentHeader.showAvatar, groupUIManagment)
//   const showTitle = boolean('showTitle',uiManagmentHeader.showTitle, groupUIManagment)
//   uiManagmentApi.uiManagment('setUpHeader', {
//     reset: resetButton,
//     settings: settingsButton,
//     showTitle: showTitle,
//     showAvatar: showAvatar,
//   })
//   const activeLanguage = select('active', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
//   languagesApi.languages('changeLanguage', activeLanguage)
//   const russian = object('Russian', ru.packet.Header, groupLanguages)
//   languagesApi.languages('changeHeader', { language: 'ru', data: russian })
//   const english = object('English', en.packet.Header, groupLanguages)
//   languagesApi.languages('changeHeader', { language: 'en', data: english })
//   const activeTheme = select('active', { darkTheme: 'darkTheme', lightTheme: 'lightTheme' }, 'darkTheme', groupStyles)
//   stylesApi.styles('switchTheme', activeTheme)
//   const stylesDarkTheme = object('darkTheme', darkTheme.data.Header, groupStyles)
//   stylesApi.styles('changeHeader', { themeName: 'darkTheme', data: stylesDarkTheme })
//   const stylesLightTheme = object('lightTheme', lightTheme.data.Header, groupStyles)
//   stylesApi.styles('changeHeader', { themeName: 'lightTheme', data: stylesLightTheme })
//   return (
//     <StoreContext.Provider value={store}>
//       <Header />
//     </StoreContext.Provider>
//   )
// }
const languagePacket = {
  title: (language: string, title: string) => text(`${language}/title`, title, groupLanguages),
  settingsButtonTitle: (language: string, title: string) =>
    text(`${language}/settingsButtonTitle`, title, groupLanguages),
  resetButtonTitle: (language: string, title: string) => text(`${language}/resetButtonTitle`, title, groupLanguages),
}
const stylesPacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/mainContainer`, data, groupStyles),
  avatarContainer: (themeName: string, data: any) => object(`${themeName}/avatarContainer`, data, groupStyles),
  image: (themeName: string, data: any) => object(`${themeName}/image`, data, groupStyles),
  titleContainer: (themeName: string, data: any) => object(`${themeName}/titleContainer`, data, groupStyles),
  buttonsContainer: (themeName: string, data: any) => object(`${themeName}/buttonsContainer`, data, groupStyles),
  resetButton: (themeName: string, data: any) => object(`${themeName}/resetButton`, data, groupStyles),
  settingsButton: (themeName: string, data: any) => object(`${themeName}/settingsButton`, data, groupStyles),
}
export const HeaderComponent = () => {
  //settings start
  const avatar = files('avatar', '.png', [], groupSettings)
  settingsApi.settings('changeAvatar', avatar[0])
  const resetIcon = select('resetIcon', iconsList, 'fas redo-alt', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'resetIcon', iconData: { icon: resetIcon.split(' ') } })
  const settingsIcon = select('settingsIcon', iconsList, 'fas ellipsis-v', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'settingsIcon', iconData: { icon: settingsIcon.split(' ') } })
  const closeSettingsIcon = select('closeSettingsIcon', iconsList, 'fas arrow-down', groupSettings)
  settingsApi.settings('changeIcon', {
    iconName: 'closeSettingsIcon',
    iconData: { icon: closeSettingsIcon.split(' ') },
  })
  // settings end
  //ui managment start
  const uiManagmentHeader = store.get().managment.getIn(['components', 'Header'])
  const resetButton = boolean('resetButton enabled', uiManagmentHeader.reset.enabled, groupUIManagment)
  const titleResetButton = boolean('show resetTitle', uiManagmentHeader.reset.withTitle, groupUIManagment)
  const iconResetButton = boolean('show resetIcon', uiManagmentHeader.reset.withIcon, groupUIManagment)
  const settingsButton = boolean('settingsButton enabled', uiManagmentHeader.settings.enabled, groupUIManagment)
  const titleSettings = boolean('show settingsTitle', uiManagmentHeader.settings.withTitle, groupUIManagment)
  const iconSettings = boolean('show settingsIcon', uiManagmentHeader.settings.withIcon, groupUIManagment)
  const showAvatar = boolean('showAvatar', uiManagmentHeader.showAvatar, groupUIManagment)
  const showTitle = boolean('showTitle', uiManagmentHeader.showTitle, groupUIManagment)
  uiManagmentApi.uiManagment('setUpHeader', {
    settings: { enabled: settingsButton, withTitle: titleSettings, withIcon: iconSettings },
    reset: { enabled: resetButton, withTitle: titleResetButton, withIcon: iconResetButton },
    showAvatar,
    showTitle,
  })
  // ui managment end
  // languages start
  const language = select('language', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
  languagesApi.languages('changeLanguage', language)
  const activeLanguagePacket = store.get().languages.getIn(['stack', language, 'Header'])
  const title = languagePacket.title(language, activeLanguagePacket.title)
  const settingsButtonTitle = languagePacket.settingsButtonTitle(language, activeLanguagePacket.settingsButtonTitle)
  const resetButtonTitle = languagePacket.resetButtonTitle(language, activeLanguagePacket.resetButtonTitle)
  languagesApi.languages('changeHeader', { language: language, data: { title, settingsButtonTitle, resetButtonTitle } })
  // languages end
  //styles start
  const themeName = select(
    'theme',
    { sovaDark: 'sovaDark', sovaLight: 'sovaLight', sovaGray: 'sovaGray' },
    'sovaLight',
    groupStyles
  )
  stylesApi.styles('switchTheme', themeName)
  const activeThemePacket = store.get().styles.getIn(['stack', themeName, 'Header'])
  const mainContainer = stylesPacket.mainContainer(themeName, activeThemePacket.mainContainer)
  const avatarContainer = stylesPacket.avatarContainer(themeName, activeThemePacket.avatarContainer)
  const titleContainer = stylesPacket.titleContainer(themeName, activeThemePacket.titleContainer)
  const buttonsContainer = stylesPacket.buttonsContainer(themeName, activeThemePacket.buttonsContainer)
  const reset = stylesPacket.resetButton(themeName, activeThemePacket.resetButton)
  const settings = stylesPacket.settingsButton(themeName, activeThemePacket.settingsButton)
  const image = stylesPacket.image(themeName, activeThemePacket.image)
  stylesApi.styles('changeHeader', {
    themeName: themeName,
    data: {
      mainContainer,
      avatarContainer,
      resetButton: reset,
      settingsButton: settings,
      titleContainer,
      buttonsContainer,
      image,
    },
  })
  //styles end
  return (
    <StoreContext.Provider value={store}>
      <div className="sova-ck-main">
        <div className="sova-ck-chat">
          <Header />
        </div>
      </div>
    </StoreContext.Provider>
  )
}
