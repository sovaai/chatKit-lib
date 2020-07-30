import React from 'react'
import ChatIt from '../ChatIt'
import { store } from '../../../store'
import { StoreContext } from 'storeon/react'
import { object, withKnobs, select, boolean, files, text } from '@storybook/addon-knobs'
import uiManagmentApi from '../../../api/uiManagment/uiManagmentApi'
import stylesApi from '../../../api/styles/stylesApi'
import languagesApi from '../../../api/languages/languagesApi'
import settingsApi from '../../../api/settings/settingsApi'
import '../../../styles/storyBookContainer.css'
import { withInfo } from '@storybook/addon-info'
import info from './ChatItInfo.md'
import { iconsList } from '../../../configs/icons'
export default {
  title: 'ChatIt',
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
const groupJSON = 'JSON'
const components = {
  ChatIt: 'ChatIt',
  Rate: 'Rate',
  Dialog: 'Dialog',
  Message: 'Message',
  Header: 'Header',
  Sender: 'Sender',
  Badge: 'Badge',
}
const styleThemes = {
  darkTheme: 'darkTheme',
  lightTheme: 'lightTheme',
  sovaDark: 'sovaDark',
  sovaLight: 'sovaLight',
}
const languageDialogPacket = {
  loading: (language: string, title: string) => text(`${language}/Dialog/loading`, title, groupLanguages),
  rateButtonTitle: (language: string, title: string) =>
    text(`${language}/Dialog/rateButtonTitle`, title, groupLanguages),
  searchButtonTitle: (language: string, title: string) =>
    text(`${language}/Dialog/searchButtonTitle`, title, groupLanguages),
}
const languageHeaderPacket = {
  title: (language: string, title: string) => text(`${language}/Header/title`, title, groupLanguages),
  settingsButtonTitle: (language: string, title: string) =>
    text(`${language}/Header/settingsButtonTitle`, title, groupLanguages),
  resetButtonTitle: (language: string, title: string) =>
    text(`${language}/Header/resetButtonTitle`, title, groupLanguages),
}
const languageSenderPacket = {
  placeholder: (language: string, title: string) => text(`${language}/Sender/placeholder`, title, groupLanguages),
  sendButtonTitle: (language: string, title: string) =>
    text(`${language}/Sender/sendButtonTitle`, title, groupLanguages),
  fileButtonTitle: (language: string, title: string) =>
    text(`${language}/Sender/fileButtonTitle`, title, groupLanguages),
  stickerButtonTitle: (language: string, title: string) =>
    text(`${language}/Sender/stickerButtonTitle`, title, groupLanguages),
  shareButtonTitle: (language: string, title: string) =>
    text(`${language}/Sender/shareButtonTitle`, title, groupLanguages),
  voiceButtonTitle: (language: string, title: string) =>
    text(`${language}/Sender/voiceButtonTitle`, title, groupLanguages),
}
const languageBadgePacket = {
  title: (language: string, title: string) => text(`${language}/Badge/title`, title, groupLanguages),
}
const languageMessagePacket = {
  rateButtonTitle: (language: string, title: string) =>
    text(`${language}/Message/rateButtonTitle`, title, groupLanguages),
  audioMessageButtonTitle: (language: string, title: string) =>
    text(`${language}/Message/audioMessageButtonTitle`, title, groupLanguages),
}
const languageRatePacket = {
  title: (language: string, title: string) => text(`${language}/Rate/title`, title, groupLanguages),
  positive: (language: string, title: string) => text(`${language}/Rate/positive`, title, groupLanguages),
  negative: (language: string, title: string) => text(`${language}/Rate/negative`, title, groupLanguages),
  raitingOne: (language: string, title: string) => text(`${language}/Rate/raiting 1`, title, groupLanguages),
  raitingTwo: (language: string, title: string) => text(`${language}/Rate/raiting 2`, title, groupLanguages),
  raitingThree: (language: string, title: string) => text(`${language}/Rate/raiting 3`, title, groupLanguages),
}
const stylesDialogPacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/Dialog/mainContainer`, data, groupStyles),
  panel: (themeName: string, data: any) => object(`${themeName}/Dialog/panel`, data, groupStyles),
  rateButton: (themeName: string, data: any) => object(`${themeName}/Dialog/rateButton`, data, groupStyles),
  searchButton: (themeName: string, data: any) => object(`${themeName}/Dialog/searchButton`, data, groupStyles),
  messagesContainer: (themeName: string, data: any) =>
    object(`${themeName}/Dialog/messagesContainer`, data, groupStyles),
}
const stylesHeaderPacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/Header/mainContainer`, data, groupStyles),
  avatarContainer: (themeName: string, data: any) => object(`${themeName}/Header/avatarContainer`, data, groupStyles),
  image: (themeName: string, data: any) => object(`${themeName}/Header/image`, data, groupStyles),
  titleContainer: (themeName: string, data: any) => object(`${themeName}/Header/titleContainer`, data, groupStyles),
  buttonsContainer: (themeName: string, data: any) => object(`${themeName}/Header/buttonsContainer`, data, groupStyles),
  resetButton: (themeName: string, data: any) => object(`${themeName}/Header/resetButton`, data, groupStyles),
  settingsButton: (themeName: string, data: any) => object(`${themeName}/Header/settingsButton`, data, groupStyles),
}
const stylesSenderPacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/Sender/mainContainer`, data, groupStyles),
  form: (themeName: string, data: any) => object(`${themeName}/Sender/form`, data, groupStyles),
  shareButton: (themeName: string, data: any) => object(`${themeName}/Sender/shareButton`, data, groupStyles),
  stickersButton: (themeName: string, data: any) => object(`${themeName}/Sender/stickersButton`, data, groupStyles),
  voiceButton: (themeName: string, data: any) => object(`${themeName}/Sender/voiceButton`, data, groupStyles),
  addFileButton: (themeName: string, data: any) => object(`${themeName}/Sender/addFileButton`, data, groupStyles),
  textArea: (themeName: string, data: any) => object(`${themeName}/Sender/textArea`, data, groupStyles),
  sendMessageButton: (themeName: string, data: any) =>
    object(`${themeName}/Sender/sendMessageButton`, data, groupStyles),
}
const stylesBadgePacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/Badge/mainContainer`, data, groupStyles),
  avatarContainer: (themeName: string, data: any) => object(`${themeName}/Badge/avatarContainer`, data, groupStyles),
  image: (themeName: string, data: any) => object(`${themeName}/Badge/image`, data, groupStyles),
  titleContainer: (themeName: string, data: any) => object(`${themeName}/Badge/titleContainer`, data, groupStyles),
  svg: (themeName: string, data: any) => object(`${themeName}/Badge/svg`, data, groupStyles),
}
const stylesRatePacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/Rate/mainContainer`, data, groupStyles),
  titleContainer: (themeName: string, data: any) => object(`${themeName}/Rate/titleContainer`, data, groupStyles),
  positiveRateButton: (themeName: string, data: any) =>
    object(`${themeName}/Rate/positiveRateButton`, data, groupStyles),
  negativeRateButton: (themeName: string, data: any) =>
    object(`${themeName}/Rate/negativeRateButton`, data, groupStyles),
  ratingListContainer: (themeName: string, data: any) =>
    object(`${themeName}/Rate/ratingListContainer`, data, groupStyles),
  ratingElement: (themeName: string, data: any) => object(`${themeName}/Rate/ratingElement`, data, groupStyles),
}
const stylesMessagePacket = {
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
const styleChatItPacket = {
  mainContainer: (themeName: string, data: any) => object(`${themeName}/ChatIT/mainContainer`, data, groupStyles),
  chatContainer: (themeName: string, data: any) => object(`${themeName}/ChatIT/chatContainer`, data, groupStyles),
}
export const ChatItComponent = () => {
  //settings start
  const avatar = files('avatar', '.png', [], groupSettings)
  settingsApi.settings('changeAvatar', avatar[0])
  const addFileIcon = select('addFileIcon', iconsList, 'fas plus', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'addFileIcon', iconData: { icon: addFileIcon.split(' ') } })
  const addStickersIcon = select('addStickersIcon', iconsList, 'fas sticky-note', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'addStickersIcon', iconData: { icon: addStickersIcon.split(' ') } })
  const voiceIcon = select('voiceIcon', iconsList, 'fas microphone', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'voiceIcon', iconData: { icon: voiceIcon.split(' ') } })
  const sendIcon = select('sendIcon', iconsList, 'fas arrow-up', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'sendMessageIcon', iconData: { icon: sendIcon.split(' ') } })
  const shareIcon = select('shareIcon', iconsList, 'fas share-alt', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'shareIcon', iconData: { icon: shareIcon.split(' ') } })
  const negativeRateIcon = select('negativeRateIcon', iconsList, 'far thumbs-down', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'negativeRateIcon', iconData: { icon: negativeRateIcon.split(' ') } })
  const positiveRateIcon = select('positiveRateIcon', iconsList, 'fas thumbs-up', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'positiveRateIcon', iconData: { icon: positiveRateIcon.split(' ') } })
  const resetIcon = select('resetIcon', iconsList, 'fas redo-alt', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'resetIcon', iconData: { icon: resetIcon.split(' ') } })
  const settingsIcon = select('settingsIcon', iconsList, 'fas ellipsis-v', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'settingsIcon', iconData: { icon: settingsIcon.split(' ') } })
  const rateIcon = select('rateIcon', iconsList, 'fas thumbs-up', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'rateIcon', iconData: { icon: rateIcon.split(' ') } })
  const searchIcon = select('searchIcon', iconsList, 'fas search', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'searchIcon', iconData: { icon: searchIcon.split(' ') } })
  const audioMessageIcon = select('audioMessageIcon', iconsList, 'play', groupSettings)
  settingsApi.settings('changeIcon', { iconName: 'playMessageIcon', iconData: { icon: audioMessageIcon.split(' ') } })
  const closeSettingsIcon = select('closeSettingsIcon', iconsList, 'fas arrow-down', groupSettings)
  settingsApi.settings('changeIcon', {
    iconName: 'closeSettingsIcon',
    iconData: { icon: closeSettingsIcon.split(' ') },
  })
  // settings end
  //ui managment start
  const chatIsOpen = boolean('chatIsOpen', false, groupUIManagment)
  uiManagmentApi.uiManagment('openChat', chatIsOpen)
  const showMsgLoad = boolean('showMsgLoad', false, groupUIManagment)
  uiManagmentApi.uiManagment('dialogLoading', showMsgLoad)
  const showRate = boolean('showRate', false, groupUIManagment)
  uiManagmentApi.uiManagment('showRate', showRate)
  const UIManagmentComponent = select('Component', components, 'ChatIt', groupUIManagment)
  const isChatITManagment = UIManagmentComponent === 'ChatIt'
  const isDialogManagment = UIManagmentComponent === 'Dialog'
  const isHeaderManagment = UIManagmentComponent === 'Header'
  const isSenderManagment = UIManagmentComponent === 'Sender'
  const isBadgeManagment = UIManagmentComponent === 'Badge'
  const isMessageManagment = UIManagmentComponent === 'Message'
  const isRateManagment = UIManagmentComponent === 'Rate'
  const UIManagmentChatIt = store.get().managment.getIn(['components', 'ChatIt'])
  const SenderEnabled = isChatITManagment
    ? boolean('SenderEnabled', UIManagmentChatIt.SenderEnabled, groupUIManagment)
    : UIManagmentChatIt.SenderEnabled
  const CloseEnabled = isChatITManagment
    ? boolean('CloseEnabled', UIManagmentChatIt.CloseEnabled, groupUIManagment)
    : UIManagmentChatIt.CloseEnabled
  const DialogEnabled = isChatITManagment
    ? boolean('DialogEnabled', UIManagmentChatIt.DialogEnabled, groupUIManagment)
    : UIManagmentChatIt.DialogEnabled
  const BadgeEnabled = isChatITManagment
    ? boolean('BadgeEnabled', UIManagmentChatIt.BadgeEnabled, groupUIManagment)
    : UIManagmentChatIt.BadgeEnabled
  const HeaderEnabled = isChatITManagment
    ? boolean('HeaderEnabled', UIManagmentChatIt.HeaderEnabled, groupUIManagment)
    : UIManagmentChatIt.HeaderEnabled
  const SettingsEnabled = isChatITManagment
    ? boolean('SettingsEnabled', UIManagmentChatIt.SettingsEnabled, groupUIManagment)
    : UIManagmentChatIt.SettingsEnabled
  uiManagmentApi.uiManagment('setUpChatIt', {
    SenderEnabled,
    CloseEnabled,
    DialogEnabled,
    BadgeEnabled,
    HeaderEnabled,
    SettingsEnabled,
  })
  const UIManagmentDialog = store.get().managment.getIn(['components', 'Dialog'])
  const rateButton = isDialogManagment
    ? boolean('rateButton enabled', UIManagmentDialog.rate.enabled, groupUIManagment)
    : UIManagmentDialog.rate.enabled
  const titleRate = isDialogManagment
    ? boolean('show rateTitle', UIManagmentDialog.rate.withTitle, groupUIManagment)
    : UIManagmentDialog.rate.withTitle
  const iconRate = isDialogManagment
    ? boolean('show rateIcon', UIManagmentDialog.rate.withIcon, groupUIManagment)
    : UIManagmentDialog.rate.withIcon
  const searchButton = isDialogManagment
    ? boolean('searchButton enabled', UIManagmentDialog.search.enabled, groupUIManagment)
    : UIManagmentDialog.search.enabled
  const titleSearch = isDialogManagment
    ? boolean('show searchTitle', UIManagmentDialog.search.withTitle, groupUIManagment)
    : UIManagmentDialog.search.withTitle
  const iconSearch = isDialogManagment
    ? boolean('show searchIcon', UIManagmentDialog.search.withIcon, groupUIManagment)
    : UIManagmentDialog.search.withIcon
  uiManagmentApi.uiManagment('setUpDialog', {
    rate: { enabled: rateButton, withTitle: titleRate, withIcon: iconRate },
    search: { enabled: searchButton, withTitle: titleSearch, withIcon: iconSearch },
  })
  const UIManagmentHeader = store.get().managment.getIn(['components', 'Header'])
  const resetButton = isHeaderManagment
    ? boolean('resetButton enabled', UIManagmentHeader.reset.enabled, groupUIManagment)
    : UIManagmentHeader.reset.enabled
  const titleResetButton = isHeaderManagment
    ? boolean('show resetTitle', UIManagmentHeader.reset.withTitle, groupUIManagment)
    : UIManagmentHeader.reset.withTitle
  const iconResetButton = isHeaderManagment
    ? boolean('show resetIcon', UIManagmentHeader.reset.withIcon, groupUIManagment)
    : UIManagmentHeader.reset.withIcon
  const settingsButton = isHeaderManagment
    ? boolean('settingsButton enabled', UIManagmentHeader.settings.enabled, groupUIManagment)
    : UIManagmentHeader.settings.enabled
  const titleSettings = isHeaderManagment
    ? boolean('show settingsTitle', UIManagmentHeader.settings.withTitle, groupUIManagment)
    : UIManagmentHeader.settings.withTitle
  const iconSettings = isHeaderManagment
    ? boolean('show settingsIcon', UIManagmentHeader.settings.withIcon, groupUIManagment)
    : UIManagmentHeader.settings.withIcon
  const showAvatar = isHeaderManagment
    ? boolean('showAvatar', UIManagmentHeader.showAvatar, groupUIManagment)
    : UIManagmentHeader.showAvatar
  const showTitle = isHeaderManagment
    ? boolean('showTitle', UIManagmentHeader.showTitle, groupUIManagment)
    : UIManagmentHeader.showTitle
  uiManagmentApi.uiManagment('setUpHeader', {
    settings: { enabled: settingsButton, withTitle: titleSettings, withIcon: iconSettings },
    reset: { enabled: resetButton, withTitle: titleResetButton, withIcon: iconResetButton },
    showAvatar,
    showTitle,
  })
  const UIManagmentSender = store.get().managment.getIn(['components', 'Sender'])
  const addFileButton = isSenderManagment
    ? boolean('addFileButton enabled', UIManagmentSender.addFile.enabled, groupUIManagment)
    : UIManagmentSender.addFile.enabled
  const titleAddFile = isSenderManagment
    ? boolean('show addFileTitle', UIManagmentSender.addFile.withTitle, groupUIManagment)
    : UIManagmentSender.addFile.withTitle
  const iconAddFile = isSenderManagment
    ? boolean('show addFileIcon', UIManagmentSender.addFile.withIcon, groupUIManagment)
    : UIManagmentSender.addFile.withIcon
  const addStickersButton = isSenderManagment
    ? boolean('addStickersButton enabled', UIManagmentSender.addStickers.enabled, groupUIManagment)
    : UIManagmentSender.addStickers.enabled
  const titleAddStickers = isSenderManagment
    ? boolean('show addStickersTitle', UIManagmentSender.addStickers.withTitle, groupUIManagment)
    : UIManagmentSender.addStickers.withTitle
  const iconAddStickers = isSenderManagment
    ? boolean('show addStickersIcon', UIManagmentSender.addStickers.withIcon, groupUIManagment)
    : UIManagmentSender.addStickers.withIcon
  const audioMessageButton = isSenderManagment
    ? boolean('voiceButton enabled', UIManagmentSender.audioMessage.enabled, groupUIManagment)
    : UIManagmentSender.audioMessage.enabled
  const titleAudioMessage = isSenderManagment
    ? boolean('show voiceTitle', UIManagmentSender.audioMessage.withTitle, groupUIManagment)
    : UIManagmentSender.audioMessage.withTitle
  const iconAudioMessage = isSenderManagment
    ? boolean('show voiceIcon', UIManagmentSender.audioMessage.withIcon, groupUIManagment)
    : UIManagmentSender.audioMessage.withIcon
  const sendButton = isSenderManagment
    ? boolean('sendButton enabled', UIManagmentSender.send.enabled, groupUIManagment)
    : UIManagmentSender.send.enabled
  const titleSend = isSenderManagment
    ? boolean('show sendTitle', UIManagmentSender.send.withTitle, groupUIManagment)
    : UIManagmentSender.send.withTitle
  const iconSend = isSenderManagment
    ? boolean('show sendIcon', UIManagmentSender.send.withIcon, groupUIManagment)
    : UIManagmentSender.send.withIcon
  const shareButton = isSenderManagment
    ? boolean('shareButton enabled', UIManagmentSender.share.enabled, groupUIManagment)
    : UIManagmentSender.share.enabled
  const titleShare = isSenderManagment
    ? boolean('show shareTitle', UIManagmentSender.share.withTitle, groupUIManagment)
    : UIManagmentSender.share.withTitle
  const iconShare = isSenderManagment
    ? boolean('show shareIcon', UIManagmentSender.share.withIcon, groupUIManagment)
    : UIManagmentSender.share.withIcon
  const blockInput = isSenderManagment
    ? boolean('blockInput', UIManagmentSender.blockInput, groupUIManagment)
    : UIManagmentSender.blockInput
  const blockSubmit = isSenderManagment
    ? boolean('blockSubmit', UIManagmentSender.blockSubmit, groupUIManagment)
    : UIManagmentSender.blockSubmit
  uiManagmentApi.uiManagment('setUpSender', {
    share: { enabled: shareButton, withTitle: titleShare, withIcon: iconShare },
    send: { enabled: sendButton, withTitle: titleSend, withIcon: iconSend },
    audioMessage: { enabled: audioMessageButton, withTitle: titleAudioMessage, withIcon: iconAudioMessage },
    addStickers: { enabled: addStickersButton, withTitle: titleAddStickers, withIcon: iconAddStickers },
    addFile: { enabled: addFileButton, withTitle: titleAddFile, withIcon: iconAddFile },
    blockInput,
    blockSubmit,
  })
  const UIManagmentBadge = store.get().managment.getIn(['components', 'Badge'])
  const showBabdgeAvatar = isBadgeManagment
    ? boolean('showBadgeAvatar', UIManagmentBadge.showAvatar, groupUIManagment)
    : UIManagmentBadge.showAvatar
  const showBadgeTitle = isBadgeManagment
    ? boolean('showBadgeTitle', UIManagmentBadge.showTitle, groupUIManagment)
    : UIManagmentBadge.showTitle
  const showSVG = isBadgeManagment ? boolean('showSVG', UIManagmentBadge.showSVG) : UIManagmentBadge.showSVG
  uiManagmentApi.uiManagment('setUpBadge', {
    showAvatar: showBabdgeAvatar,
    showTitle: showBadgeTitle,
    showSVG: showSVG,
  })
  const UIManagmentMessage = store.get().managment.getIn(['components', 'Message'])
  const audioButton = isMessageManagment
    ? boolean('audioMessageButton enabled', UIManagmentMessage.audioMessage.enabled, groupUIManagment)
    : UIManagmentMessage.audioMessage.enabled
  const titleAudio = isMessageManagment
    ? boolean('show audioMessageTitle', UIManagmentMessage.audioMessage.withTitle, groupUIManagment)
    : UIManagmentMessage.audioMessage.withTitle
  const iconAudio = isMessageManagment
    ? boolean('show audioMessageIcon', UIManagmentMessage.audioMessage.withIcon, groupUIManagment)
    : UIManagmentMessage.audioMessage.withIcon
  const positiveRateMessageButton = isMessageManagment
    ? boolean('positiveRateMessage enabled', UIManagmentMessage.positiveRateMessage.enabled, groupUIManagment)
    : UIManagmentMessage.positiveRateMessage.enabled
  const titlePositiveRateMessage = isMessageManagment
    ? boolean('show positiveRateMessageTitle', UIManagmentMessage.positiveRateMessage.withTitle, groupUIManagment)
    : UIManagmentMessage.positiveRateMessage.withTitle
  const iconPositiveRateMessage = isMessageManagment
    ? boolean('show positiveRateMessageIcon', UIManagmentMessage.positiveRateMessage.withIcon, groupUIManagment)
    : UIManagmentMessage.positiveRateMessage.withIcon
  const negativeRateMessageButton = isMessageManagment
    ? boolean('negativeRateMessage enabled', UIManagmentMessage.negativeRateMessage.enabled, groupUIManagment)
    : UIManagmentMessage.negativeRateMessage.enabled
  const titleNegativeRateMessage = isMessageManagment
    ? boolean('show negativeRateMessageTitle', UIManagmentMessage.negativeRateMessage.withTitle, groupUIManagment)
    : UIManagmentMessage.negativeRateMessage.withTitle
  const iconNegativeRateMessage = isMessageManagment
    ? boolean('shownegativeRateMessageIcon', UIManagmentMessage.negativeRateMessage.withIcon, groupUIManagment)
    : UIManagmentMessage.negativeRateMessage.withIcon
  const showMessageAvatar = isMessageManagment
    ? boolean('showMessageAvatar', UIManagmentMessage.showAvatar, groupUIManagment)
    : UIManagmentMessage.showAvatar
  const showDate = isMessageManagment
    ? boolean('showDate', UIManagmentMessage.showDate, groupUIManagment)
    : UIManagmentMessage.showDate
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
    audioMessage: { enabled: audioButton, withTitle: titleAudio, withIcon: iconAudio },
    showAvatar: showMessageAvatar,
    showDate,
  })
  const UIManagmentRate = store.get().managment.getIn(['components', 'Rate'])
  const negativeRateButton = isRateManagment
    ? boolean('negativeRateButton enabled', UIManagmentRate.negativeRate.enabled, groupUIManagment)
    : UIManagmentRate.negativeRate.enabled
  const titleNegativeRate = isRateManagment
    ? boolean('show negativeRateTitle', UIManagmentRate.negativeRate.withTitle, groupUIManagment)
    : UIManagmentRate.negativeRate.withTitle
  const iconNegativeRate = isRateManagment
    ? boolean('show negativeRateIcon', UIManagmentRate.negativeRate.withIcon, groupUIManagment)
    : UIManagmentRate.negativeRate.withIcon
  const positiveRateButton = isRateManagment
    ? boolean('positiveRateButton enabled', UIManagmentRate.positiveRate.enabled, groupUIManagment)
    : UIManagmentRate.positiveRate.enabled
  const titlePositiveRateButton = isRateManagment
    ? boolean('show positiveRateButtonTitle', UIManagmentRate.positiveRate.withTitle, groupUIManagment)
    : UIManagmentRate.positiveRate.withTitle
  const iconPositiveRateButton = isRateManagment
    ? boolean('show positiveRateButtonIcon', UIManagmentRate.positiveRate.withIcon, groupUIManagment)
    : UIManagmentRate.positiveRate.withIcon
  uiManagmentApi.uiManagment('setUpRate', {
    positiveRate: { enabled: positiveRateButton, withTitle: titlePositiveRateButton, withIcon: iconPositiveRateButton },
    negativeRate: { enabled: negativeRateButton, withTitle: titleNegativeRate, withIcon: iconNegativeRate },
  })
  //ui managment end
  //languages start
  const language = select('language', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
  languagesApi.languages('changeLanguage', language)
  const languagesComponent = select('Component', components, 'ChatIt', groupLanguages)
  const isDialogLanguages = languagesComponent === 'Dialog'
  const isHeaderLanguages = languagesComponent === 'Header'
  const isSenderLanguages = languagesComponent === 'Sender'
  const isBadgeLanguages = languagesComponent === 'Badge'
  const isMessageLanguages = languagesComponent === 'Message'
  const isRateLanguages = languagesComponent === 'Rate'
  const languageDialog = store.get().languages.getIn(['stack', language, 'Dialog'])
  const searchButtonTitle = isDialogLanguages
    ? languageDialogPacket.searchButtonTitle(language, languageDialog.searchButtonTitle)
    : languageDialog.searchButtonTitle
  const rateButtonTitle = isDialogLanguages
    ? languageDialogPacket.rateButtonTitle(language, languageDialog.rateButtonTitle)
    : languageDialog.rateButtonTitle
  const loading = isDialogLanguages
    ? languageDialogPacket.loading(language, languageDialog.loading)
    : languageDialog.loading
  languagesApi.languages('changeDialog', { language: language, data: { searchButtonTitle, rateButtonTitle, loading } })

  const languageHeader = store.get().languages.getIn(['stack', language, 'Header'])
  const headerTitle = isHeaderLanguages
    ? languageHeaderPacket.title(language, languageHeader.title)
    : languageHeader.title
  const settingsButtonTitle = isHeaderLanguages
    ? languageHeaderPacket.settingsButtonTitle(language, languageHeader.settingsButtonTitle)
    : languageHeader.settingsButtonTitle
  const resetButtonTitle = isHeaderLanguages
    ? languageHeaderPacket.resetButtonTitle(language, languageHeader.resetButtonTitle)
    : languageHeader.resetButtonTitle
  languagesApi.languages('changeHeader', {
    language: language,
    data: { title: headerTitle, settingsButtonTitle, resetButtonTitle },
  })
  const languageSender = store.get().languages.getIn(['stack', language, 'Sender'])
  const fileButtonTitle = isSenderLanguages
    ? languageSenderPacket.fileButtonTitle(language, languageSender.fileButtonTitle)
    : languageSender.fileButtonTitle
  const placeholder = isSenderLanguages
    ? languageSenderPacket.placeholder(language, languageSender.placeholder)
    : languageSender.placeholder
  const sendButtonTitle = isSenderLanguages
    ? languageSenderPacket.sendButtonTitle(language, languageSender.sendButtonTitle)
    : languageSender.sendButtonTitle
  const shareButtonTitle = isSenderLanguages
    ? languageSenderPacket.shareButtonTitle(language, languageSender.shareButtonTitle)
    : languageSender.shareButtonTitle
  const stickerButtonTitle = isSenderLanguages
    ? languageSenderPacket.stickerButtonTitle(language, languageSender.stickerButtonTitle)
    : languageSender.stickerButtonTitle
  const voiceButtonTitle = isSenderLanguages
    ? languageSenderPacket.voiceButtonTitle(language, languageSender.voiceButtonTitle)
    : languageSender.voiceButtonTitle
  languagesApi.languages('changeSender', {
    language: language,
    data: { fileButtonTitle, placeholder, sendButtonTitle, shareButtonTitle, stickerButtonTitle, voiceButtonTitle },
  })
  const languageBadge = store.get().languages.getIn(['stack', language, 'Badge'])
  const badgeTitle = isBadgeLanguages ? languageBadgePacket.title(language, languageBadge.title) : languageBadge.title
  languagesApi.languages('changeBadge', { language: language, data: { title: badgeTitle } })
  const languageMessage = store.get().languages.getIn(['stack', language, 'Message'])
  const audioMessageButtonTitle = isMessageLanguages
    ? languageMessagePacket.audioMessageButtonTitle(language, languageMessage.audioMessageButtonTitle)
    : languageMessage.audioMessageButtonTitle
  const rateMessageButtonTitle = isMessageLanguages
    ? languageMessagePacket.rateButtonTitle(language, languageMessage.rateButtonTitle)
    : languageMessage.rateButtonTitle
  languagesApi.languages('changeMessage', {
    language: language,
    data: { audioMessageButtonTitle, rateButtonTitle: rateMessageButtonTitle },
  })
  const languageRate = store.get().languages.getIn(['stack', language, 'Rate'])
  const ratetTitle = isRateLanguages ? languageRatePacket.title(language, languageRate.title) : languageRate.title
  const negative = isRateLanguages
    ? languageRatePacket.negative(language, languageRate.negative)
    : languageRate.negative
  const positive = isRateLanguages
    ? languageRatePacket.positive(language, languageRate.positive)
    : languageRate.positive
  const raitingOne = isRateLanguages
    ? languageRatePacket.raitingOne(language, languageRate.ratingList[2])
    : languageRate.ratingList[2]
  const raitingTwo = isRateLanguages
    ? languageRatePacket.raitingTwo(language, languageRate.ratingList[1])
    : languageRate.ratingList[1]
  const raitingThree = isRateLanguages
    ? languageRatePacket.raitingThree(language, languageRate.ratingList[0])
    : languageRate.ratingList[0]
  languagesApi.languages('changeRate', {
    language: language,
    data: { title: ratetTitle, negative, positive, ratingList: [raitingThree, raitingTwo, raitingOne] },
  })
  // languages end
  // styles start
  const themeName = select(
    'theme',
    { sovaDark: 'sovaDark', sovaLight: 'sovaLight', sovaGray: 'sovaGray' },
    'sovaLight',
    groupStyles
  )
  stylesApi.styles('switchTheme', themeName)
  const styleComponent = select(
    'Component',
    {
      ChatIt: 'ChatIt',
      Rate: 'Rate',
      Dialog: 'Dialog',
      UserMessage: 'UserMessage',
      ResponseMessage: 'ResponseMessage',
      Header: 'Header',
      Sender: 'Sender',
      Badge: 'Badge',
    },
    'ChatIt',
    groupStyles
  )
  const dialogStyles = store.get().styles.getIn(['stack', themeName, 'Dialog'])
  const isDialogStyles = styleComponent === 'Dialog'
  const dialogMainContainer = isDialogStyles
    ? stylesDialogPacket.mainContainer(themeName, dialogStyles.mainContainer)
    : dialogStyles.mainContainer
  const panel = isDialogStyles ? stylesDialogPacket.panel(themeName, dialogStyles.panel) : dialogStyles.panel
  const rate = isDialogStyles
    ? stylesDialogPacket.rateButton(themeName, dialogStyles.rateButton)
    : dialogStyles.rateButton
  const search = isDialogStyles
    ? stylesDialogPacket.searchButton(themeName, dialogStyles.searchButton)
    : dialogStyles.searchButton
  const messagesContainer = isDialogStyles
    ? stylesDialogPacket.messagesContainer(themeName, dialogStyles.messagesContainer)
    : dialogStyles.messagesContainer
  stylesApi.styles('changeDialog', {
    themeName: themeName,
    data: { mainContainer: dialogMainContainer, panel, rateButton: rate, searchButton: search, messagesContainer },
  })
  const headerStyles = store.get().styles.getIn(['stack', themeName, 'Header'])
  const isHeaderStyles = styleComponent === 'Header'
  const headerMainContainer = isHeaderStyles
    ? stylesHeaderPacket.mainContainer(themeName, headerStyles.mainContainer)
    : headerStyles.mainContainer
  const headerAvatarContainer = isHeaderStyles
    ? stylesHeaderPacket.avatarContainer(themeName, headerStyles.avatarContainer)
    : headerStyles.avatarContainer
  const headerTitleContainer = isHeaderStyles
    ? stylesHeaderPacket.titleContainer(themeName, headerStyles.titleContainer)
    : headerStyles.titleContainer
  const buttonsContainer = isHeaderStyles
    ? stylesHeaderPacket.buttonsContainer(themeName, headerStyles.buttonsContainer)
    : headerStyles.buttonsContainer
  const reset = isHeaderStyles
    ? stylesHeaderPacket.resetButton(themeName, headerStyles.resetButton)
    : headerStyles.resetButton
  const settings = isHeaderStyles
    ? stylesHeaderPacket.settingsButton(themeName, headerStyles.settingsButton)
    : headerStyles.settingsButton
  const headerImage = isHeaderStyles ? stylesHeaderPacket.image(themeName, headerStyles.image) : headerStyles.image
  stylesApi.styles('changeHeader', {
    themeName: themeName,
    data: {
      mainContainer: headerMainContainer,
      avatarContainer: headerAvatarContainer,
      resetButton: reset,
      settingsButton: settings,
      titleContainer: headerTitleContainer,
      buttonsContainer,
      image: headerImage,
    },
  })
  const senderStyles = store.get().styles.getIn(['stack', themeName, 'Sender'])
  const isSenderStyles = styleComponent === 'Sender'
  const senderMainContainer = isSenderStyles
    ? stylesSenderPacket.mainContainer(themeName, senderStyles.mainContainer)
    : senderStyles.mainContainer
  const addFile = isSenderStyles
    ? stylesSenderPacket.addFileButton(themeName, senderStyles.addFileButton)
    : senderStyles.addFileButton
  const form = isSenderStyles ? stylesSenderPacket.form(themeName, senderStyles.form) : senderStyles.form
  const sendMessageButton = isSenderStyles
    ? stylesSenderPacket.sendMessageButton(themeName, senderStyles.sendMessageButton)
    : senderStyles.sendMessageButton
  const share = isSenderStyles
    ? stylesSenderPacket.shareButton(themeName, senderStyles.shareButton)
    : senderStyles.shareButton
  const stickersButton = isSenderStyles
    ? stylesSenderPacket.stickersButton(themeName, senderStyles.stickersButton)
    : senderStyles.stickersButton
  const textArea = isSenderStyles
    ? stylesSenderPacket.textArea(themeName, senderStyles.textArea)
    : senderStyles.textArea
  const voiceButton = isSenderStyles
    ? stylesSenderPacket.voiceButton(themeName, senderStyles.voiceButton)
    : senderStyles.voiceButton
  stylesApi.styles('changeSender', {
    themeName: themeName,
    data: {
      mainContainer: senderMainContainer,
      voiceButton,
      addFileButton: addFile,
      shareButton: share,
      textArea,
      stickersButton,
      form,
      sendMessageButton,
    },
  })
  const badgeStyles = store.get().styles.getIn(['stack', themeName, 'Badge'])
  const isBadgeStyles = styleComponent === 'Badge'
  const badgeMainContainer = isBadgeStyles
    ? stylesBadgePacket.mainContainer(themeName, badgeStyles.mainContainer)
    : badgeStyles.mainContainer
  const badgeAvatarContainer = isBadgeStyles
    ? stylesBadgePacket.avatarContainer(themeName, badgeStyles.avatarContainer)
    : badgeStyles.avatarContainer
  const badgeImage = isBadgeStyles ? stylesBadgePacket.image(themeName, badgeStyles.image) : badgeStyles.image
  const badgeTitleContainer = isBadgeStyles
    ? stylesBadgePacket.titleContainer(themeName, badgeStyles.titleContainer)
    : badgeStyles.titleContainer
  const svg = isBadgeStyles ? stylesBadgePacket.svg(themeName, badgeStyles.svg) : badgeStyles.svg
  stylesApi.styles('changeBadge', {
    themeName: themeName,
    data: {
      mainContainer: badgeMainContainer,
      avatarContainer: badgeAvatarContainer,
      image: badgeImage,
      titleContainer: badgeTitleContainer,
      svg,
    },
  })
  const rateStyles = store.get().styles.getIn(['stack', themeName, 'Rate'])
  const isRateStyles = styleComponent === 'Rate'
  const rateMainContainer = isRateStyles
    ? stylesRatePacket.mainContainer(themeName, rateStyles.mainContainer)
    : rateStyles.mainContainer
  const rateTitleContainer = isRateStyles
    ? stylesRatePacket.titleContainer(themeName, rateStyles.titleContainer)
    : rateStyles.titleContainer
  const negativeRate = isRateStyles
    ? stylesRatePacket.negativeRateButton(themeName, rateStyles.negativeRateButton)
    : rateStyles.negativeRateButton
  const positiveRate = isRateStyles
    ? stylesRatePacket.positiveRateButton(themeName, rateStyles.positiveRateButton)
    : rateStyles.positiveRateButton
  const ratingElement = isRateStyles
    ? stylesRatePacket.ratingElement(themeName, rateStyles.ratingElement)
    : rateStyles.ratingElement
  const ratingListContainer = isRateStyles
    ? stylesRatePacket.ratingListContainer(themeName, rateStyles.ratingListContainer)
    : rateStyles.ratingListContainer
  stylesApi.styles('changeRate', {
    themeName: themeName,
    data: {
      mainContainer: rateMainContainer,
      ratingElement,
      positiveRateButton: positiveRate,
      negativeRateButton: negativeRate,
      titleContainer: rateTitleContainer,
      ratingListContainer,
    },
  })
  const isResponseMessageStyles = styleComponent === 'ResponseMessage'
  const action = 'changeResponseMessage'
  const responseMessageStyles = store.get().styles.getIn(['stack', themeName, 'ResponseMessage'])
  const messageMainContainer = isResponseMessageStyles
    ? stylesMessagePacket.mainContainer(themeName, 'ResponseMessage', responseMessageStyles.mainContainer)
    : responseMessageStyles.mainContainer
  const positiveResponseMessageButton = isResponseMessageStyles
    ? stylesMessagePacket.positiveRateMessageButton(
        themeName,
        'ResponseMessage',
        responseMessageStyles.positiveRateMessageButton
      )
    : responseMessageStyles.positiveRateMessageButton
  const negativeRateResponseMessageButton = isResponseMessageStyles
    ? stylesMessagePacket.negativeRateMessageButton(
        themeName,
        'ResponseMessage',
        responseMessageStyles.negativeRateMessageButton
      )
    : responseMessageStyles.negativeRateMessageButton
  const avatarContainer = isResponseMessageStyles
    ? stylesMessagePacket.avatarContainer(themeName, 'ResponseMessage', responseMessageStyles.avatarContainer)
    : responseMessageStyles.avatarContainer
  const audioMessage = isResponseMessageStyles
    ? stylesMessagePacket.audioMessageButton(themeName, 'ResponseMessage', responseMessageStyles.audioMessageButton)
    : responseMessageStyles.audioMessageButton
  const image = isResponseMessageStyles
    ? stylesMessagePacket.image(themeName, 'ResponseMessage', responseMessageStyles.image)
    : responseMessageStyles.image
  const dataContainer = isResponseMessageStyles
    ? stylesMessagePacket.dataContainer(themeName, 'ResponseMessage', responseMessageStyles.dataContainer)
    : responseMessageStyles.dataContainer
  const textContainer = isResponseMessageStyles
    ? stylesMessagePacket.textContainer(themeName, 'ResponseMessage', responseMessageStyles.textContainer)
    : responseMessageStyles.textContainer
  const bubbleContainer = isResponseMessageStyles
    ? stylesMessagePacket.bubbleContainer(themeName, 'ResponseMessage', responseMessageStyles.bubbleContainer)
    : responseMessageStyles.bubbleContainer
  const messageButtonsContainer = isResponseMessageStyles
    ? stylesMessagePacket.buttonsContainer(themeName, 'ResponseMessage', responseMessageStyles.buttonsContainer)
    : responseMessageStyles.buttonsContainer
  stylesApi.styles(action, {
    themeName: themeName,
    data: {
      mainContainer: messageMainContainer,
      avatarContainer,
      negativeRateMessageButton: negativeRateResponseMessageButton,
      positiveRateMessageButton: positiveResponseMessageButton,
      audioMessageButton: audioMessage,
      image,
      dataContainer,
      textContainer,
      bubbleContainer,
      buttonsContainer: messageButtonsContainer,
    },
  })
  const isUserMessageStyles = styleComponent === 'UserMessage'
  const userMessageStyles = store.get().styles.getIn(['stack', themeName, 'UserMessage'])
  const userMessageMainContainer = isUserMessageStyles
    ? stylesMessagePacket.mainContainer(themeName, 'UserMessage', userMessageStyles.mainContainer)
    : userMessageStyles.mainContainer
  const positiveUserMessageButton = isResponseMessageStyles
    ? stylesMessagePacket.positiveRateMessageButton(
        themeName,
        'ResponseMessage',
        responseMessageStyles.positiveRateMessageButton
      )
    : responseMessageStyles.positiveRateMessageButton
  const negativeRateUserMessageButton = isResponseMessageStyles
    ? stylesMessagePacket.negativeRateMessageButton(
        themeName,
        'ResponseMessage',
        responseMessageStyles.negativeRateMessageButton
      )
    : responseMessageStyles.negativeRateMessageButton
  const userMessageAvatarContainer = isUserMessageStyles
    ? stylesMessagePacket.avatarContainer(themeName, 'UserMessage', userMessageStyles.avatarContainer)
    : userMessageStyles.avatarContainer
  const userMessageAudioMessage = isUserMessageStyles
    ? stylesMessagePacket.audioMessageButton(themeName, 'UserMessage', userMessageStyles.audioMessageButton)
    : userMessageStyles.audioMessageButton
  const userMessageImage = isUserMessageStyles
    ? stylesMessagePacket.image(themeName, 'UserMessage', userMessageStyles.image)
    : userMessageStyles.image
  const userMessageDataContainer = isUserMessageStyles
    ? stylesMessagePacket.dataContainer(themeName, 'UserMessage', userMessageStyles.dataContainer)
    : userMessageStyles.dataContainer
  const userMessageTextContainer = isUserMessageStyles
    ? stylesMessagePacket.textContainer(themeName, 'UserMessage', userMessageStyles.textContainer)
    : userMessageStyles.textContainer
  const userMessageBubbleContainer = isUserMessageStyles
    ? stylesMessagePacket.bubbleContainer(themeName, 'UserMessage', userMessageStyles.bubbleContainer)
    : userMessageStyles.bubbleContainer
  const userMessageMessageButtonsContainer = isUserMessageStyles
    ? stylesMessagePacket.buttonsContainer(themeName, 'UserMessage', userMessageStyles.buttonsContainer)
    : userMessageStyles.buttonsContainer
  stylesApi.styles('changeUserMessage', {
    themeName: themeName,
    data: {
      mainContainer: userMessageMainContainer,
      avatarContainer: userMessageAvatarContainer,
      negativeRateMessageButton: negativeRateUserMessageButton,
      positiveRateMessageButton: positiveUserMessageButton,
      audioMessageButton: userMessageAudioMessage,
      image: userMessageImage,
      dataContainer: userMessageDataContainer,
      textContainer: userMessageTextContainer,
      bubbleContainer: userMessageBubbleContainer,
      buttonsContainer: userMessageMessageButtonsContainer,
    },
  })
  const isChatItStyles = styleComponent === 'ChatIt'
  const chatItStyles = store.get().styles.getIn(['stack', themeName, 'ChatIt'])
  const chatItMainContainer = isChatItStyles
    ? styleChatItPacket.mainContainer(themeName, chatItStyles.mainContainer)
    : chatItStyles.mainContainer
  const chatContainer = isChatItStyles
    ? styleChatItPacket.chatContainer(themeName, chatItStyles.chatContainer)
    : chatItStyles.chatContainer
  stylesApi.styles('changeChatIt', {
    themeName: themeName,
    data: {
      chatContainer: chatContainer,
      mainContainer: chatItMainContainer,
    },
  })
  // styles end
  object('Settings', store.get().settings, groupJSON)
  object('UIManagment', store.get().managment, groupJSON)
  object('Languages', store.get().languages, groupJSON)
  object('Styles', store.get().styles, groupJSON)
  return (
    <StoreContext.Provider value={store}>
      <div className="sova-ck-main">
        <div className="sova-ck-chat">
          <ChatIt />
        </div>
      </div>
    </StoreContext.Provider>
  )
}
