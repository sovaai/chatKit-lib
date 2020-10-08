import {
  switchTheme,
  initTheme,
  changeStyles,
  changeDialog,
  changeBadge,
  changeSender,
  changeUserMessage,
  changeResponseMessage,
  changeHeader,
  changeRate,
  changeChatIt,
} from './stylesEvents/stylesEvents'

export type StylesEvents =
  | 'switchTheme'
  | 'initTheme'
  | 'changeStyles'
  | 'changeChatIt'
  | 'changeHeader'
  | 'changeDialog'
  | 'changeRate'
  | 'changeUserMessage'
  | 'changeResponseMessage'
  | 'changeSender'
  | 'changeBadge'
const stylesEvents: { [key: string]: (data: any, store?: any) => void } = {
  switchTheme: switchTheme,
  initTheme: initTheme,
  changeStyles: changeStyles,
  changeChatIt: changeChatIt,
  changeHeader: changeHeader,
  changeDialog: changeDialog,
  changeRate: changeRate,
  changeUserMessage: changeUserMessage,
  changeResponseMessage: changeResponseMessage,
  changeSender: changeSender,
  changeBadge: changeBadge,
}
const stylesApi = {
  styles: (event: StylesEvents, data: any, store?: any) => stylesEvents[event](data, store),
}

export default stylesApi
