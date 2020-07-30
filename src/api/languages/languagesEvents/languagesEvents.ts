import { saveLanguage, changeComponent } from '../utils/saveLanguage'
import { store } from '../../../store'

export const initLanguage = (data: any) => saveLanguage(data)
export const changeLanguage = (data: string) => store.dispatch('changeLanguage', data)
export const changeLanguagePacket = (data: any) => store.dispatch('changeLanguagePacket', data)
export const changeBadge = (data: any) => changeComponent('Badge', data)
export const changeChatIt = (data: any) => changeComponent('ChatIT', data)
export const changeSender = (data: any) => changeComponent('Sender', data)
export const changeDialog = (data: any) => changeComponent('Dialog', data)
export const changeMessage = (data: any) => changeComponent('Message', data)
export const changeHeader = (data: any) => changeComponent('Header', data)
export const changeRate = (data: any) => changeComponent('Rate', data)
