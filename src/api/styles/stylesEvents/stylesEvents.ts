import ckStore from '../../../store'
import { changeComponent } from '../utils/changeComponent'

export const switchTheme = (themeName: string, store?: any) =>
  store ? store.dispatch('switchTheme', themeName) : ckStore.dispatch('switchTheme', themeName)
export const changeStyles = (data: { themeName: string; data: any }, store?: any) =>
  store ? store.dispatch('changeStyles', data) : ckStore.dispatch('changeStyles', data)
export const initTheme = (data: { themeName: string; data: any }, store?: any) =>
  store ? store.dispatch('initTheme', data) : ckStore.dispatch('initTheme', data)
export const changeBadge = (data: any, store?: any) => changeComponent('Badge', data, store)
export const changeChatIt = (data: any, store?: any) => changeComponent('ChatIt', data, store)
export const changeSender = (data: any, store?: any) => changeComponent('Sender', data, store)
export const changeDialog = (data: any, store?: any) => changeComponent('Dialog', data, store)
export const changeUserMessage = (data: any, store?: any) => changeComponent('UserMessage', data, store)
export const changeResponseMessage = (data: any, store?: any) => changeComponent('ResponseMessage', data, store)
export const changeHeader = (data: any, store?: any) => changeComponent('Header', data, store)
export const changeRate = (data: any, store?: any) => changeComponent('Rate', data, store)
