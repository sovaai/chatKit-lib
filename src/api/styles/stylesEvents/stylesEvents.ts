import { store } from '../../../store'
import { changeComponent } from '../utils/changeComponent'

export const switchTheme = (themeName: string) => store.dispatch('switchTheme', themeName)
export const changeStyles = (data: { themeName: string; data: any }) => store.dispatch('changeStyles', data)
export const initTheme = (data: { themeName: string; data: any }) => store.dispatch('initTheme', data)
export const changeBadge = (data: any) => changeComponent('Badge', data)
export const changeChatIt = (data: any) => changeComponent('ChatIt', data)
export const changeSender = (data: any) => changeComponent('Sender', data)
export const changeDialog = (data: any) => changeComponent('Dialog', data)
export const changeUserMessage = (data: any) => changeComponent('UserMessage', data)
export const changeResponseMessage = (data: any) => changeComponent('ResponseMessage', data)
export const changeHeader = (data: any) => changeComponent('Header', data)
export const changeRate = (data: any) => changeComponent('Rate', data)
