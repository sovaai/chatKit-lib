import React from 'react'
import { store } from '../../../../../store'
import { StoreContext } from 'storeon/react'
import { object, withKnobs, select, boolean, files, text } from '@storybook/addon-knobs'
import uiManagmentApi from '../../../../../api/uiManagment/uiManagmentApi'
import stylesApi from '../../../../../api/styles/stylesApi'

import languagesApi from '../../../../../api/languages/languagesApi'
import settingsApi from '../../../../../api/settings/settingsApi'
import Message from '../Message'
import { iconsList } from '../../../../../configs/icons'
import '../../../../../styles/storyBookContainer.css'
import { withInfo } from '@storybook/addon-info'
import info from './MessageInfo.md'
export default {
  title: 'Message',
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
const userMessage = {
  text: 'Hello',
  sender: 'user',
  date: new Date(),
}
const responseMessage = {
  text: 'Hello, how can I help you ?:)',
  sender: 'response',
  date: new Date(),
  showRate: true,
}

const languagePacket = {
  rateButtonTitle: (language: string, title: string) => text(`${language}/rateButtonTitle`, title, groupLanguages),
  audioMessageButtonTitle: (language: string, title: string) =>
    text(`${language}/audioMessageButtonTitle`, title, groupLanguages),
}
const stylesPacket = {
  mainContainer: (themeName: string, sender: string, data: any) =>
    object(`${themeName}/${sender}/mainContainer`, data, groupStyles),
  textContainer: (themeName: string, sender: string, data: any) =>
    object(`${themeName}/${sender}/textContainer`, data, groupStyles),
  avatarContainer: (themeName: string, sender: string, data: any) =>
    object(`${themeName}/${sender}/avatarContainer`, data, groupStyles),
  image: (themeName: string, sender: string, data: any) => object(`${themeName}/${sender}/image`, data, groupStyles),
  negativeRateMessageButton: (themeName: string, sender: string, data: any) =>
    object(`${themeName}/${sender}/negativeRateMessageButton`, data, groupStyles),
  positiveRateMessageButton: (themeName: string, sender: string, data: any) =>
    object(`${themeName}/${sender}/positiveRateMessageButton`, data, groupStyles),
  audioMessageButton: (themeName: string, sender: string, data: any) =>
    object(`${themeName}/${sender}/audioMessageButton`, data, groupStyles),
  dataContainer: (themeName: string, sender: string, data: any) =>
    object(`${themeName}/${sender}/dataContainer`, data, groupStyles),
  bubbleContainer: (themeName: string, sender: string, data: any) =>
    object(`${themeName}/${sender}/bubbleContainer`, data, groupStyles),
  buttonsContainer: (themeName: string, sender: string, data: any) =>
    object(`${themeName}/${sender}/buttonsContainer`, data, groupStyles),
}
export const MessageComponent = () => {
  //settings start
  const avatar = files('avatar', '.png', [], groupSettings)
  settingsApi.settings('changeAvatar', avatar[0])
  const positiveRateIcon = select('positiveRateIcon', iconsList, 'fas thumbs-up', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'positiveRateIcon', iconData: { icon: positiveRateIcon.split(' ') } })
  const negativeRateIcon = select('negativeRateIcon', iconsList, 'far thumbs-down', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'negativeRateIcon', iconData: { icon: negativeRateIcon.split(' ') } })
  const audioMessageIcon = select('audioMessageIcon', iconsList, 'play', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'playMessageIcon', iconData: { icon: audioMessageIcon.split(' ') } })
  // settings end
  //ui managment start
  const uiManagmentMessage = store.get().managment.getIn(['components', 'Message'])
  const audioMessageButton = boolean(
    'audioMessageButton enabled',
    uiManagmentMessage.audioMessage.enabled,
    groupUIManagment
  )
  const titleAudioMessage = boolean(
    'show audioMessageTitle',
    uiManagmentMessage.audioMessage.withTitle,
    groupUIManagment
  )
  const iconAudioMessage = boolean('show audioMessageIcon', uiManagmentMessage.audioMessage.withIcon, groupUIManagment)
  const positiveRateMessageButton = boolean(
    'positiveRateMessage enabled',
    uiManagmentMessage.positiveRateMessage.enabled,
    groupUIManagment
  )
  const titlePositiveRateMessage = boolean(
    'show positiveRateMessageTitle',
    uiManagmentMessage.positiveRateMessage.withTitle,
    groupUIManagment
  )
  const iconPositiveRateMessage = boolean(
    'show positiveRateMessageIcon',
    uiManagmentMessage.positiveRateMessage.withIcon,
    groupUIManagment
  )
  const negativeRateMessageButton = boolean(
    'negativeRateMessage enabled',
    uiManagmentMessage.negativeRateMessage.enabled,
    groupUIManagment
  )
  const titleNegativeRateMessage = boolean(
    'show negativeRateMessageTitle',
    uiManagmentMessage.negativeRateMessage.withTitle,
    groupUIManagment
  )
  const iconNegativeRateMessage = boolean(
    'shownegativeRateMessageIcon',
    uiManagmentMessage.negativeRateMessage.withIcon,
    groupUIManagment
  )
  const showAvatar = boolean('showAvatar', uiManagmentMessage.showAvatar, groupUIManagment)
  const showDate = boolean('showDate', uiManagmentMessage.showDate, groupUIManagment)
  uiManagmentApi.uiManagment('setUpMessage', {
    positiveRateMessage: {
      enabled: positiveRateMessageButton,
      withTitle: titlePositiveRateMessage,
      withIcon: iconPositiveRateMessage,
    },
    negativeRateMessage: {
      enabled: negativeRateMessageButton,
      withTitle: titleNegativeRateMessage,
      withIcon: iconNegativeRateMessage,
    },
    audioMessage: { enabled: audioMessageButton, withTitle: titleAudioMessage, withIcon: iconAudioMessage },
    showAvatar,
    showDate,
  })
  // ui managment end
  // languages start
  const language = select('language', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
  languagesApi.languages('changeLanguage', language)
  const activeLanguagePacket = store.get().languages.getIn(['stack', language, 'Message'])
  const audioMessageButtonTitle = languagePacket.audioMessageButtonTitle(
    language,
    activeLanguagePacket.audioMessageButtonTitle
  )
  const rateButtonTitle = languagePacket.rateButtonTitle(language, activeLanguagePacket.rateButtonTitle)
  languagesApi.languages('changeMessage', { language: language, data: { audioMessageButtonTitle, rateButtonTitle } })
  // languages end
  //styles start
  const themeName = select(
    'theme',
    { sovaDark: 'sovaDark', sovaLight: 'sovaLight', sovaGray: 'sovaGray' },
    'sovaLight',
    groupStyles
  )
  stylesApi.styles('switchTheme', themeName)
  const sender = select('sender', { user: 'User', response: 'Response' }, 'User', groupStyles)
  const action = sender === 'User' ? 'changeUserMessage' : 'changeResponseMessage'
  const activeThemePacket = store.get().styles.getIn(['stack', themeName, `${sender}Message`])
  const mainContainer = stylesPacket.mainContainer(themeName, sender, activeThemePacket.mainContainer)
  const positiveRate = stylesPacket.positiveRateMessageButton(
    themeName,
    sender,
    activeThemePacket.positiveRateMessageButton
  )
  const negativeRate = stylesPacket.negativeRateMessageButton(
    themeName,
    sender,
    activeThemePacket.negativeRateMessageButton
  )
  const avatarContainer = stylesPacket.avatarContainer(themeName, sender, activeThemePacket.avatarContainer)
  const audioMessage = stylesPacket.audioMessageButton(themeName, sender, activeThemePacket.audioMessageButton)
  const image = stylesPacket.image(themeName, sender, activeThemePacket.image)
  const dataContainer = stylesPacket.dataContainer(themeName, sender, activeThemePacket.dataContainer)
  const textContainer = stylesPacket.textContainer(themeName, sender, activeThemePacket.textContainer)
  const bubbleContainer = stylesPacket.bubbleContainer(themeName, sender, activeThemePacket.bubbleContainer)
  const buttonsContainer = stylesPacket.buttonsContainer(themeName, sender, activeThemePacket.buttonsContainer)
  stylesApi.styles(action, {
    themeName: themeName,
    data: {
      mainContainer,
      avatarContainer,
      positiveRateMessageButton: positiveRate,
      negativeRateMessageButton: negativeRate,
      audioMessageButton: audioMessage,
      image,
      dataContainer,
      textContainer,
      bubbleContainer,
      buttonsContainer,
    },
  })
  //styles end
  return (
    <StoreContext.Provider value={store}>
      <div className="sova-ck-main">
        <div className="sova-ck-chat">
          <Message message={userMessage} />
          <Message message={responseMessage} />
        </div>
      </div>
    </StoreContext.Provider>
  )
}
