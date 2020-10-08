import { saveLanguage, changeComponent } from '../utils/saveLanguage'
import ckStore from '../../../store'

export const initLanguage = (data: any, store?: any) => saveLanguage(data, store)
export const changeLanguage = (data: string, store?: any) => store ? store.dispatch('changeLanguage', data) : ckStore.dispatch('changeLanguage', data)
export const changeLanguagePacket = (data: any, store?: any) => store ? store.dispatch('changeLanguagePacket', data) : ckStore.dispatch('changeLanguagePacket', data)
export const changeBadge = (data: any, store?: any) => changeComponent('Badge', data, store)
export const changeChatIt = (data: any, store?: any) => changeComponent('ChatIT', data, store)
export const changeSender = (data: any, store?: any) => changeComponent('Sender', data, store)
export const changeDialog = (data: any, store?: any) => changeComponent('Dialog', data, store)
export const changeMessage = (data: any, store?: any) => changeComponent('Message', data, store)
export const changeHeader = (data: any, store?: any) => changeComponent('Header', data, store)
export const changeRate = (data: any, store?: any) => changeComponent('Rate', data, store)
