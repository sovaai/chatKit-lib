import React from 'react'
import { store } from '../../../../../store'
import { StoreContext } from 'storeon/react'
import { object, withKnobs, select, boolean, files, text } from '@storybook/addon-knobs'
import uiManagmentApi from '../../../../../api/uiManagment/uiManagmentApi'
import stylesApi from '../../../../../api/styles/stylesApi'
// import { darkTheme, lightTheme } from '../../../../../configs/styles'
// import { ru, en } from '../../../../../configs/languages'
import languagesApi from '../../../../../api/languages/languagesApi'
// import { settings } from '../../../../../configs/settings'
import settingsApi from '../../../../../api/settings/settingsApi'
import Message from '../Message'
import { iconsList } from '../../../../../configs/icons'
import '../../../../../styles/storyBookContainer.css'
import { withInfo } from '@storybook/addon-info'
// import info from '../stories/MessageInfo.md'
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
// const userDark = {
//   mainContainer: {
//     width: '50%',
//     padding: '10px',
//     marginLeft: '40%',
//     marginTop: '5%',
//     marginBottom: '5%',
//   },
//   rateMessageButton: {
//     border: 'none',
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '30%',
//     borderRadius: '10px',
//     backgroundColor: '#575757',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   avatarContainer: {},
//   audioMessageButton: {
//     border: 'none',
//     display: 'flex',
//     borderRadius: '10px',
//     width: '60%',
//     justifyContent: 'space-around',
//     backgroundColor: '#575757',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   image: {
//     display: 'none',
//   },
//   dataContainer: {
//     fontSize: '12px',
//     color: '#9b9b9b',
//     textAlign: 'right',
//   },
//   textContainer: {
//     minHeight: '40px',
//     padding: '5px',
//     '& a': {
//       color: '#5271fe',
//     },
//   },
//   bubbleContainer: {
//     width: '100%',
//     backgroundColor: '#575757',
//     borderRadius: '10px',
//     color: 'white',
//     padding: '10px',
//     textAlign: 'left',
//   },
//   buttonsContainer: {
//     display: 'flex',
//     borderRadius: '10px',
//     width: '100%',
//     marginBottom: '10px',
//   },
// }
// const responseDark = {
//   mainContainer: {
//     width: '70%',
//     padding: '10px',
//     marginRight: '40%',
//     marginTop: '5%',
//     marginBottom: '5%',
//     display: 'flex',
//   },
//   rateMessageButton: {
//     border: 'none',
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '30%',
//     borderRadius: '10px',
//     backgroundColor: '#575757',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   avatarContainer: {
//     width: '50px',
//     height: '50px',
//     borderRadius: '50px',
//     backgroundColor: '#575757',
//     border: '3px solid #575757',
//     marginRight: '4px',
//   },
//   audioMessageButton: {
//     border: 'none',
//     display: 'flex',
//     borderRadius: '10px',
//     width: '60%',
//     justifyContent: 'space-around',
//     backgroundColor: '#575757',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   image: {
//     width: '50px',
//     height: '50px',
//   },
//   dataContainer: {
//     fontSize: '12px',
//     color: '#9b9b9b',
//     textAlign: 'right',
//   },
//   textContainer: {
//     minHeight: '40px',
//     padding: '5px',
//     '& a': {
//       color: '#5271fe',
//     },
//   },
//   bubbleContainer: {
//     width: '100%',
//     backgroundColor: '#575757',
//     borderRadius: '10px',
//     color: 'white',
//     padding: '10px',
//     textAlign: 'left',
//   },
//   buttonsContainer: {
//     display: 'flex',
//     borderRadius: '10px',
//     width: '100%',
//     marginBottom: '10px',
//   },
// }
// const userLight = {
//   mainContainer: {
//     width: '50%',
//     padding: '10px',
//     marginLeft: '40%',
//     marginTop: '5%',
//     marginBottom: '5%',
//   },
//   rateMessageButton: {
//     border: 'none',
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '30%',
//     borderRadius: '10px',
//     backgroundColor: '#edf0f5',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   avatarContainer: {},
//   audioMessageButton: {
//     border: 'none',
//     display: 'flex',
//     borderRadius: '10px',
//     width: '60%',
//     justifyContent: 'space-around',
//     backgroundColor: '#edf0f5',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   image: {
//     display: 'none',
//   },
//   dataContainer: {
//     fontSize: '12px',
//     color: '#9b9b9b',
//     textAlign: 'right',
//   },
//   textContainer: {
//     minHeight: '40px',
//     padding: '5px',
//     '& a': {
//       color: '#5271fe',
//     },
//   },
//   bubbleContainer: {
//     width: '100%',
//     backgroundColor: '#edf0f5',
//     borderRadius: '10px',
//     color: '#373737',
//     padding: '10px',
//     textAlign: 'left',
//   },
//   buttonsContainer: {
//     display: 'flex',
//     borderRadius: '10px',
//     width: '100%',
//     marginBottom: '10px',
//   },
// }
// const responseLight = {
//   mainContainer: {
//     width: '70%',
//     padding: '10px',
//     marginRight: '40%',
//     marginTop: '5%',
//     marginBottom: '5%',
//     display: 'flex',
//   },
//   rateMessageButton: {
//     border: 'none',
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '30%',
//     borderRadius: '10px',
//     backgroundColor: '#edf0f5',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   avatarContainer: {
//     width: '50px',
//     height: '50px',
//     borderRadius: '50px',
//     backgroundColor: '#edf0f5',
//     border: '3px solid #edf0f5',
//     marginRight: '4px',
//   },
//   audioMessageButton: {
//     border: 'none',
//     display: 'flex',
//     borderRadius: '10px',
//     width: '60%',
//     justifyContent: 'space-around',
//     backgroundColor: '#edf0f5',
//     outline: 'none',
//     color: '#9b9b9b',
//     fontSize: '12px',
//   },
//   image: {
//     width: '50px',
//     height: '50px',
//   },
//   dataContainer: {
//     fontSize: '12px',
//     color: '#9b9b9b',
//     textAlign: 'right',
//   },
//   textContainer: {
//     minHeight: '40px',
//     padding: '5px',
//     '& a': {
//       color: '#5271fe',
//     },
//   },
//   bubbleContainer: {
//     width: '100%',
//     backgroundColor: '#edf0f5',
//     borderRadius: '10px',
//     color: '#373737',
//     padding: '10px',
//     textAlign: 'left',
//   },
//   buttonsContainer: {
//     display: 'flex',
//     borderRadius: '10px',
//     width: '100%',
//     marginBottom: '10px',
//   },
// }
// stylesApi.styles('changeUserMessage', { themeName: 'lightTheme', data: userLight })
// stylesApi.styles('changeUserMessage', { themeName: 'darkTheme', data: userDark })
// stylesApi.styles('changeResponseMessage', { themeName: 'lightTheme', data: responseLight })
// stylesApi.styles('changeResponseMessage', { themeName: 'darkTheme', data: responseDark })
// export const MessageComponent = () => {
//   const avatar = files('avatar', '.png', [], groupSettings)
//   settingsApi.settings('changeAvatar', avatar[0])
//   const audioMessageButton = object('audioMessageButton', uiManagmentMessage.audioMessage, groupUIManagment)
//   const rateMessageButton = object('rateMessageButton', uiManagmentMessage.rateMessage, groupUIManagment)
//   const rateMessageIcon = object('rateMessageIcon', settings.media.icons.rateIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'rateIcon', iconData: rateMessageIcon })
//   const audioMessageIcon = object('audioMessageIcon', settings.media.icons.playMessageIcon, groupSettings)
//   settingsApi.settings('changeIcon', { iconName: 'playMessageIcon', iconData: audioMessageIcon })
//   const showAvatar = boolean('showAvatar', uiManagmentMessage.showAvatar, groupUIManagment)
//   const showDate = boolean('showDate', uiManagmentMessage.showDate, groupUIManagment)
//   uiManagmentApi.uiManagment('setUpMessage', {
//     showAvatar: showAvatar,
//     showDate: showDate,
//     audioMessage: audioMessageButton,
//     rateMessage: rateMessageButton,
//   })
//   const activeLanguage = select('active', { en: 'en', ru: 'ru' }, 'en', groupLanguages)
//   languagesApi.languages('changeLanguage', activeLanguage)
//   const russian = object('Russian', ru.packet.Message, groupLanguages)
//   languagesApi.languages('changeMessage', { language: 'ru', data: russian })
//   const english = object('English', en.packet.Message, groupLanguages)
//   languagesApi.languages('changeMessage', { language: 'en', data: english })
//   const activeTheme = select('active', { darkTheme: 'darkTheme', lightTheme: 'lightTheme' }, 'darkTheme', groupStyles)
//   stylesApi.styles('switchTheme', activeTheme)
//   const stylesDarkTheme = object(
//     'darkTheme',
//     { ResponseMessage: darkTheme.data.ResponseMessage, UserMessage: darkTheme.data.UserMessage },
//     groupStyles
//   )
//   stylesApi.styles('changeResponseMessage', { themeName: 'darkTheme', data: stylesDarkTheme.ResponseMessage })
//   stylesApi.styles('changeUserMessage', { themeName: 'darkTheme', data: stylesDarkTheme.UserMessage })
//   const stylesLightTheme = object(
//     'lightTheme',
//     { ResponseMessage: lightTheme.data.ResponseMessage, UserMessage: lightTheme.data.UserMessage },
//     groupStyles
//   )
//   stylesApi.styles('changeUserMessage', { themeName: 'lightTheme', data: stylesLightTheme.UserMessage })
//   stylesApi.styles('changeResponseMessage', { themeName: 'lightTheme', data: stylesLightTheme.ResponseMessage })
//   return (
//     <StoreContext.Provider value={store}>
//       <Message message={userMessage} />
//       <Message message={responseMessage} />
//     </StoreContext.Provider>
//   )
// }
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
