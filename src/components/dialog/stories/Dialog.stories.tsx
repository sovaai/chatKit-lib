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
// import settingsApi from '../../../api/settings/settingsApi'
import Dialog from '../Dialog'
import { withInfo } from '@storybook/addon-info'
import info from './DialogInfo.md'
// import { settings } from '../../../configs/settings'
import settingsApi from '../../../api/settings/settingsApi'
import { iconsList } from '../../../configs/icons'
import '../../../styles/storyBookContainer.css'
export default {
  title: 'Dialog',
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
// const storyDark = {
//   mainContainer: {
//     width: '100%',
//     height: '70%',
//     padding: '10px',
//     paddingBottom: '0',
//     background: '#373737',
//     borderRadius: '20px',
//   },
//   panel: {
//     display: 'flex',
//     flexDirection: 'row-reverse',
//     padding: '5px',
//   },
//   rateButton: {
//     border: 'none',
//     backgroundColor: '#373737',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   searchButton: {
//     border: 'none',
//     backgroundColor: '#373737',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   messagesContainer: {
//     width: '100%',
//     height: '90%',
//   },
// }
// const storyLight = {
//   mainContainer: {
//     width: '100%',
//     height: '70%',
//     padding: '10px',
//     paddingBottom: '0',
//     background: 'white',
//     borderRadius: '20px',
//   },
//   panel: {
//     display: 'flex',
//     flexDirection: 'row-reverse',
//     padding: '5px',
//   },
//   rateButton: {
//     border: 'none',
//     backgroundColor: 'white',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   searchButton: {
//     border: 'none',
//     backgroundColor: 'white',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   messagesContainer: {
//     width: '100%',
//     height: '90%',
//   },
// }
// stylesApi.styles('changeDialog', { themeName: 'darkTheme', data: storyDark })
// stylesApi.styles('changeDialog', { themeName: 'lightTheme', data: storyLight })
// export const DialogComponent = () => {
//   const rateIcon = object('rateIcon', settings.media.icons.rateIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'rateIcon', iconData: rateIcon })
//   const searchIcon = object('searchIcon', settings.media.icons.searchIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'searchIcon', iconData: searchIcon })
//   const rateButton = object('rateButton',uiManagmentDialog.rate, groupUIManagment)
//   const searchButton = object('searchButton',uiManagmentDialog.search, groupUIManagment)
//   uiManagmentApi.uiManagment('setUpDialog', { rate: rateButton, search: searchButton })
//   const showMsgLoad = boolean('showMsgLoad', false, groupUIManagment)
//   uiManagmentApi.uiManagment('dialogLoading', showMsgLoad)
//   const activeLanguage = select('active', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
//   languagesApi.languages('changeLanguage', activeLanguage)
//   const russian = object('Russian', ru.packet.Dialog, groupLanguages)
//   languagesApi.languages('changeDialog', { language: 'ru', data: russian })
//   const english = object('English', en.packet.Dialog, groupLanguages)
//   languagesApi.languages('changeDialog', { language: 'en', data: english })
//   const activeTheme = select('active', { darkTheme: 'darkTheme', lightTheme: 'lightTheme' }, 'darkTheme', groupStyles)
//   stylesApi.styles('switchTheme', activeTheme)
//   const stylesDarkTheme = object('darkTheme', darkTheme.data.Dialog, groupStyles)
//   stylesApi.styles('changeDialog', { themeName: 'darkTheme', data: stylesDarkTheme })
//   const stylesLightTheme = object('lightTheme', lightTheme.data.Dialog, groupStyles)
//   stylesApi.styles('changeDialog', { themeName: 'lightTheme', data: stylesLightTheme })
//   return (
//     <StoreContext.Provider value={store}>
//       <Dialog />
//     </StoreContext.Provider>
//   )
// }
const languagePacket = {
  loading: (language: string, title: string) => text(`${language}/loading`, title, groupLanguages),
  rateButtonTitle: (language: string, title: string) => text(`${language}/rateButtonTitle`, title, groupLanguages),
  searchButtonTitle: (language: string, title: string) => text(`${language}/searchButtonTitle`, title, groupLanguages),
}
const stylesPacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/mainContainer`, data, groupStyles),
  panel: (themeName: string, data: any) => object(`${themeName}/panel`, data, groupStyles),
  rateButton: (themeName: string, data: any) => object(`${themeName}/rateButton`, data, groupStyles),
  searchButton: (themeName: string, data: any) => object(`${themeName}/searchButton`, data, groupStyles),
  messagesContainer: (themeName: string, data: any) => object(`${themeName}/messagesContainer`, data, groupStyles),
}
export const DialogComponent = () => {
  //settings start
  const rateIcon = select('rateIcon', iconsList, 'fas thumbs-up', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'rateIcon', iconData: { icon: rateIcon.split(' ') } })
  const searchIcon = select('searchIcon', iconsList, 'fas search', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'searchIcon', iconData: { icon: searchIcon.split(' ') } })
  // settings end
  //ui managment start
  const uiManagmentDialog = store.get().managment.getIn(['components', 'Dialog'])
  const rateButton = boolean('rateButton enabled', uiManagmentDialog.rate.enabled, groupUIManagment)
  const titleRate = boolean('show rateTitle', uiManagmentDialog.rate.withTitle, groupUIManagment)
  const iconRate = boolean('show rateIcon', uiManagmentDialog.rate.withIcon, groupUIManagment)
  const searchButton = boolean('searchButton enabled', uiManagmentDialog.search.enabled, groupUIManagment)
  const titleSearch = boolean('show searchTitle', uiManagmentDialog.search.withTitle, groupUIManagment)
  const iconSearch = boolean('show searchIcon', uiManagmentDialog.search.withIcon, groupUIManagment)
  uiManagmentApi.uiManagment('setUpDialog', {
    rate: { enabled: rateButton, withTitle: titleRate, withIcon: iconRate },
    search: { enabled: searchButton, withTitle: titleSearch, withIcon: iconSearch },
  })
  const showMsgLoad = boolean('showMsgLoad', false, groupUIManagment)
  uiManagmentApi.uiManagment('dialogLoading', showMsgLoad)
  // ui managment end
  // languages start
  const language = select('language', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
  languagesApi.languages('changeLanguage', language)
  const activeLanguagePacket = store.get().languages.getIn(['stack', language, 'Dialog'])
  const searchButtonTitle = languagePacket.searchButtonTitle(language, activeLanguagePacket.searchButtonTitle)
  const rateButtonTitle = languagePacket.rateButtonTitle(language, activeLanguagePacket.rateButtonTitle)
  const loading = languagePacket.loading(language, activeLanguagePacket.loading)
  languagesApi.languages('changeDialog', { language: language, data: { searchButtonTitle, rateButtonTitle, loading } })
  // languages end
  //styles start
  const themeName = select(
    'theme',
    { sovaDark: 'sovaDark', sovaLight: 'sovaLight', sovaGray: 'sovaGray' },
    'sovaLight',
    groupStyles
  )
  stylesApi.styles('switchTheme', themeName)
  const activeThemePacket = store.get().styles.getIn(['stack', themeName, 'Dialog'])
  const mainContainer = stylesPacket.mainContainer(themeName, activeThemePacket.mainContainer)
  const panel = stylesPacket.panel(themeName, activeThemePacket.panel)
  const rate = stylesPacket.rateButton(themeName, activeThemePacket.rateButton)
  const search = stylesPacket.searchButton(themeName, activeThemePacket.searchButton)
  const messagesContainer = stylesPacket.messagesContainer(themeName, activeThemePacket.messagesContainer)
  stylesApi.styles('changeDialog', {
    themeName: themeName,
    data: { mainContainer, panel, rateButton: rate, searchButton: search, messagesContainer },
  })
  //styles end
  return (
    <StoreContext.Provider value={store}>
      <div className="sova-ck-main">
        <div className="sova-ck-chat">
          <Dialog />
        </div>
      </div>
    </StoreContext.Provider>
  )
}
