import {
  initLanguage,
  changeLanguage,
  changeLanguagePacket,
  changeDialog,
  changeBadge,
  changeSender,
  changeMessage,
  changeHeader,
  changeRate,
  changeChatIt,
} from './languagesEvents/languagesEvents'

export type LanguagesEvents =
  | 'initLanguage'
  | 'changeLanguage'
  | 'changeLanguagePacket'
  | 'changeChatIt'
  | 'changeHeader'
  | 'changeDialog'
  | 'changeRate'
  | 'changeMessage'
  | 'changeSender'
  | 'changeBadge'

const languagesEvents: { [key: string]: (data: any, store?: any) => void } = {
  initLanguage: initLanguage,
  changeLanguage: changeLanguage,
  changeLanguagePacket: changeLanguagePacket,
  changeChatIt: changeChatIt,
  changeHeader: changeHeader,
  changeDialog: changeDialog,
  changeRate: changeRate,
  changeMessage: changeMessage,
  changeSender: changeSender,
  changeBadge: changeBadge,
}
const languagesApi = {
  languages: (event: LanguagesEvents, data: any, store?: any) => {
    languagesEvents[event](data, store)
  },
}

export default languagesApi
