import React from 'react'
import { store } from '../../../store'
import { StoreContext } from 'storeon/react'
import { object, withKnobs, select, boolean, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import uiManagmentApi from '../../../api/uiManagment/uiManagmentApi'
import stylesApi from '../../../api/styles/stylesApi'
// import { darkTheme, lightTheme } from '../../../configs/styles'
// import { ru, en } from '../../../configs/languages'
import languagesApi from '../../../api/languages/languagesApi'
// import { settings } from '../../../configs/settings'
import settingsApi from '../../../api/settings/settingsApi'
import Sender from '../Sender'
import info from './SenderInfo.md'
import { iconsList } from '../../../configs/icons'
import '../../../styles/storyBookContainer.css'
export default {
  title: 'Sender',
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
//     backgroundColor: '#373737',
//     padding: '8px',
//     borderRadius: '10px',
//     justifyContent: 'space-between',
//     width: '100%',
//     height: '10%',
//     alignItems: 'center',
//   },
//   addFileButton: {
//     border: 'none',
//     display: 'flex',
//     width: '13%',
//     backgroundColor: '#373737',
//     outline: 'none',
//     color: 'white',
//     fontSize: '12px',
//   },
//   form: {
//     backgroundColor: '#575757',
//     display: 'flex',
//     justifyContent: 'space-around',
//     width: '50%',
//     height: '70%',
//     borderRadius: '10px',
//   },
//   sendMessageButton: {
//     backgroundColor: '#575757',
//     border: 'none',
//     display: 'flex',
//     flexDirection: 'row-reverse',
//     width: '13%',
//     justifyContent: 'space-around',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   shareButton: {
//     border: 'none',
//     display: 'flex',
//     width: '15%',
//     justifyContent: 'space-between',
//     backgroundColor: '#373737',
//     outline: 'none',
//     color: 'white',
//     fontSize: '12px',
//   },
//   stickersButton: {
//     border: 'none',
//     width: '13%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     backgroundColor: '#373737',
//     outline: 'none',
//     color: 'white',
//     fontSize: '12px',
//   },
//   textArea: {
//     resize: 'none',
//     border: 'none',
//     outline: 'none',
//     paddingTop: '5px',
//     fontSize: '12px',
//     width: '40%',
//     backgroundColor: '#575757',
//     color: 'white',
//   },
//   voiceButton: {
//     border: 'none',
//     width: '13%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     backgroundColor: '#373737',
//     outline: 'none',
//     color: 'white',
//     fontSize: '12px',
//   },
// }
// const storyLightStyles = {
//   mainContainer: {
//     display: 'flex',
//     backgroundColor: '#4a76a8',
//     padding: '8px',
//     borderRadius: '10px',
//     justifyContent: 'space-between',
//     width: '100%',
//     height: '10%',
//     alignItems: 'center',
//   },
//   addFileButton: {
//     border: 'none',
//     display: 'flex',
//     width: '13%',
//     backgroundColor: '#4a76a8',
//     outline: 'none',
//     color: 'white',
//     fontSize: '12px',
//   },
//   form: {
//     backgroundColor: 'white',
//     display: 'flex',
//     justifyContent: 'space-around',
//     width: '50%',
//     height: '70%',
//     borderRadius: '10px',
//   },
//   sendMessageButton: {
//     backgroundColor: 'white',
//     border: 'none',
//     display: 'flex',
//     flexDirection: 'row-reverse',
//     width: '13%',
//     justifyContent: 'space-around',
//     outline: 'none',
//     color: '#4a76a8',
//     fontSize: '12px',
//   },
//   shareButton: {
//     border: 'none',
//     display: 'flex',
//     width: '15%',
//     justifyContent: 'space-between',
//     backgroundColor: '#4a76a8',
//     outline: 'none',
//     color: 'white',
//     fontSize: '12px',
//   },
//   stickersButton: {
//     border: 'none',
//     width: '13%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     backgroundColor: '#4a76a8',
//     outline: 'none',
//     color: 'white',
//     fontSize: '12px',
//   },
//   textArea: {
//     resize: 'none',
//     border: 'none',
//     outline: 'none',
//     paddingTop: '5px',
//     fontSize: '12px',
//     width: '40%',
//     backgroundColor: 'white',
//     color: '#373737',
//   },
//   voiceButton: {
//     border: 'none',
//     width: '13%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     backgroundColor: '#4a76a8',
//     outline: 'none',
//     color: 'white',
//     fontSize: '12px',
//   },
// }
// stylesApi.styles('changeSender', { themeName: 'darkTheme', data: storyDarkStyles })
// stylesApi.styles('changeSender', { themeName: 'lightTheme', data: storyLightStyles })
// export const SenderComponent = () => {
//   const addFileIcon = object('addFileIcon', settings.media.icons.addFileIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'addFileIcon', iconData: addFileIcon })
//   const addStickersIcon = object('addStickersIcon', settings.media.icons.addStickersIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'addStickersIcon', iconData: addStickersIcon })
//   const audioMessageIcon = object('audioMessageIcon', settings.media.icons.voiceIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'voiceIcon', iconData: audioMessageIcon })
//   const sendIcon = object('sendIcon', settings.media.icons.sendMessageIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'sendMessageIcon', iconData: sendIcon })
//   const shareIcon = object('shareIcon', settings.media.icons.shareIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'shareIcon', iconData: shareIcon })
//   const addFileButton = object('addFilerButton', uiManagmentSender.addFile, groupUIManagment)
//   const addStickersButton = object('addStickersButton', uiManagmentSender.addStickers, groupUIManagment)
//   const audioMessageButton = object('audioMessageButton', uiManagmentSender.audioMessage, groupUIManagment)
//   const sendButton = object('sendButton', uiManagmentSender.send, groupUIManagment)
//   const shareButton = object('shareButton', uiManagmentSender.share, groupUIManagment)
//   const blockInput = boolean('blockInput', uiManagmentSender.blockInput, groupUIManagment)
//   const blockSubmit = boolean('blockSubmit', uiManagmentSender.blockSubmit, groupUIManagment)
//   uiManagmentApi.uiManagment('setUpSender', {
//     addFile: addFileButton,
//     addStickers: addStickersButton,
//     audioMessage: audioMessageButton,
//     send: sendButton,
//     share: shareButton,
//     blockInput: blockInput,
//     blockSubmit: blockSubmit,
//   })
//   const activeLanguage = select('active', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
//   languagesApi.languages('changeLanguage', activeLanguage)
//   const russian = object('Russian', ru.packet.Sender, groupLanguages)
//   languagesApi.languages('changeDialog', { language: 'ru', data: russian })
//   const english = object('English', en.packet.Sender, groupLanguages)
//   languagesApi.languages('changeSender', { language: 'en', data: english })
//   const activeTheme = select('active', { darkTheme: 'darkTheme', lightTheme: 'lightTheme' }, 'darkTheme', groupStyles)
//   stylesApi.styles('switchTheme', activeTheme)
//   const stylesDarkTheme = object('darkTheme', darkTheme.data.Sender, groupStyles)
//   stylesApi.styles('changeSender', { themeName: 'darkTheme', data: stylesDarkTheme })
//   const stylesLightTheme = object('lightTheme', lightTheme.data.Sender, groupStyles)
//   stylesApi.styles('changeSender', { themeName: 'lightTheme', data: stylesLightTheme })
//   return (
//     <StoreContext.Provider value={store}>
//       <Sender />
//     </StoreContext.Provider>
//   )
// }

const languagePacket = {
  placeholder: (language: string, title: string) => text(`${language}/placeholder`, title, groupLanguages),
  sendButtonTitle: (language: string, title: string) => text(`${language}/sendButtonTitle`, title, groupLanguages),
  fileButtonTitle: (language: string, title: string) => text(`${language}/fileButtonTitle`, title, groupLanguages),
  stickerButtonTitle: (language: string, title: string) =>
    text(`${language}/stickerButtonTitle`, title, groupLanguages),
  shareButtonTitle: (language: string, title: string) => text(`${language}/shareButtonTitle`, title, groupLanguages),
  voiceButtonTitle: (language: string, title: string) => text(`${language}/voiceButtonTitle`, title, groupLanguages),
}
const stylesPacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/mainContainer`, data, groupStyles),
  form: (themeName: string, data: any) => object(`${themeName}/form`, data, groupStyles),
  shareButton: (themeName: string, data: any) => object(`${themeName}/shareButton`, data, groupStyles),
  stickersButton: (themeName: string, data: any) => object(`${themeName}/stickersButton`, data, groupStyles),
  voiceButton: (themeName: string, data: any) => object(`${themeName}/voiceButton`, data, groupStyles),
  addFileButton: (themeName: string, data: any) => object(`${themeName}/addFileButton`, data, groupStyles),
  textArea: (themeName: string, data: any) => object(`${themeName}/textArea`, data, groupStyles),
  sendMessageButton: (themeName: string, data: any) => object(`${themeName}/sendMessageButton`, data, groupStyles),
}
export const SenderComponent = () => {
  //settings start
  const addFileIcon = select('addFileIcon', iconsList, 'fas plus', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'addFileIcon', iconData: { icon: addFileIcon.split(' ') } })
  const addStickersIcon = select('addStickersIcon', iconsList, 'fas sticky-note', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'addStickersIcon', iconData: { icon: addStickersIcon.split(' ') } })
  const audioMessageIcon = select('audioMessageIcon', iconsList, 'fas microphone', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'voiceIcon', iconData: { icon: audioMessageIcon.split(' ') } })
  const sendIcon = select('sendIcon', iconsList, 'fas arrow-up', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'sendMessageIcon', iconData: { icon: sendIcon.split(' ') } })
  const shareIcon = select('shareIcon', iconsList, 'fas share-alt', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'shareIcon', iconData: { icon: shareIcon.split(' ') } })
  // settings end
  //ui managment start
  const uiManagmentSender = store.get().managment.getIn(['components', 'Sender'])
  const addFileButton = boolean('addFileButton enabled', uiManagmentSender.addFile.enabled, groupUIManagment)
  const titleAddFile = boolean('show addFileTitle', uiManagmentSender.addFile.withTitle, groupUIManagment)
  const iconAddFile = boolean('show addFileIcon', uiManagmentSender.addFile.withIcon, groupUIManagment)
  const addStickersButton = boolean(
    'addStickersButton enabled',
    uiManagmentSender.addStickers.enabled,
    groupUIManagment
  )
  const titleAddStickers = boolean('show addStickersTitle', uiManagmentSender.addStickers.withTitle, groupUIManagment)
  const iconAddStickers = boolean('show addStickersIcon', uiManagmentSender.addStickers.withIcon, groupUIManagment)
  const audioMessageButton = boolean(
    'audioMessageButton enabled',
    uiManagmentSender.audioMessage.enabled,
    groupUIManagment
  )
  const titleAudioMessage = boolean(
    'show audioMessageTitle',
    uiManagmentSender.audioMessage.withTitle,
    groupUIManagment
  )
  const iconAudioMessage = boolean('show audioMessageIcon', uiManagmentSender.audioMessage.withIcon, groupUIManagment)
  const sendButton = boolean('sendButton enabled', uiManagmentSender.send.enabled, groupUIManagment)
  const titleSend = boolean('show sendTitle', uiManagmentSender.send.withTitle, groupUIManagment)
  const iconSend = boolean('show sendIcon', uiManagmentSender.send.withIcon, groupUIManagment)
  const shareButton = boolean('shareButton enabled', uiManagmentSender.share.enabled, groupUIManagment)
  const titleShare = boolean('show shareTitle', uiManagmentSender.share.withTitle, groupUIManagment)
  const iconShare = boolean('show shareIcon', uiManagmentSender.share.withIcon, groupUIManagment)
  const blockInput = boolean('blockInput', uiManagmentSender.blockInput, groupUIManagment)
  const blockSubmit = boolean('blockSubmit', uiManagmentSender.blockSubmit, groupUIManagment)
  uiManagmentApi.uiManagment('setUpSender', {
    share: { enabled: shareButton, withTitle: titleShare, withIcon: iconShare },
    send: { enabled: sendButton, withTitle: titleSend, withIcon: iconSend },
    audioMessage: { enabled: audioMessageButton, withTitle: titleAudioMessage, withIcon: iconAudioMessage },
    addStickers: { enabled: addStickersButton, withTitle: titleAddStickers, withIcon: iconAddStickers },
    addFile: { enabled: addFileButton, withTitle: titleAddFile, withIcon: iconAddFile },
    blockInput,
    blockSubmit,
  })
  // ui managment end
  // languages start
  const language = select('language', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
  languagesApi.languages('changeLanguage', language)
  const activeLanguagePacket = store.get().languages.getIn(['stack', language, 'Sender'])
  const fileButtonTitle = languagePacket.fileButtonTitle(language, activeLanguagePacket.fileButtonTitle)
  const placeholder = languagePacket.placeholder(language, activeLanguagePacket.placeholder)
  const sendButtonTitle = languagePacket.sendButtonTitle(language, activeLanguagePacket.sendButtonTitle)
  const shareButtonTitle = languagePacket.shareButtonTitle(language, activeLanguagePacket.shareButtonTitle)
  const stickerButtonTitle = languagePacket.stickerButtonTitle(language, activeLanguagePacket.stickerButtonTitle)
  const voiceButtonTitle = languagePacket.voiceButtonTitle(language, activeLanguagePacket.voiceButtonTitle)
  languagesApi.languages('changeSender', {
    language: language,
    data: { fileButtonTitle, placeholder, sendButtonTitle, shareButtonTitle, stickerButtonTitle, voiceButtonTitle },
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
  const activeThemePacket = store.get().styles.getIn(['stack', themeName, 'Sender'])
  const mainContainer = stylesPacket.mainContainer(themeName, activeThemePacket.mainContainer)
  const addFile = stylesPacket.addFileButton(themeName, activeThemePacket.addFileButton)
  const form = stylesPacket.form(themeName, activeThemePacket.form)
  const sendMessageButton = stylesPacket.sendMessageButton(themeName, activeThemePacket.sendMessageButton)
  const share = stylesPacket.shareButton(themeName, activeThemePacket.shareButton)
  const stickersButton = stylesPacket.stickersButton(themeName, activeThemePacket.stickersButton)
  const textArea = stylesPacket.textArea(themeName, activeThemePacket.textArea)
  const voiceButton = stylesPacket.voiceButton(themeName, activeThemePacket.voiceButton)
  stylesApi.styles('changeSender', {
    themeName: themeName,
    data: {
      mainContainer,
      voiceButton,
      addFileButton: addFile,
      shareButton: share,
      textArea,
      stickersButton,
      form,
      sendMessageButton,
    },
  })
  //styles end
  return (
    <StoreContext.Provider value={store}>
      <div className="sova-ck-main">
        <div className="sova-ck-chat">
          <Sender />
        </div>
      </div>
    </StoreContext.Provider>
  )
}
