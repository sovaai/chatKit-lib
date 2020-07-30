import React from 'react'
import { store } from '../../../store'
import { StoreContext } from 'storeon/react'
import { object, withKnobs, select, boolean, text } from '@storybook/addon-knobs'
import uiManagmentApi from '../../../api/uiManagment/uiManagmentApi'
import stylesApi from '../../../api/styles/stylesApi'
import languagesApi from '../../../api/languages/languagesApi'
import Dialog from '../Dialog'
import { withInfo } from '@storybook/addon-info'
import info from './DialogInfo.md'
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
