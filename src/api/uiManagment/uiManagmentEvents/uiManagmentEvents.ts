import { setUpComponent } from '../utils/setUpComponent'
import { store } from '../../../store'

export const setUpSender = (data: any) => setUpComponent('Sender', data)
export const setUpHeader = (data: any) => setUpComponent('Header', data)
export const setUpDialog = (data: any) => setUpComponent('Dialog', data)
export const setUpBadge = (data: any) => setUpComponent('Badge', data)
export const setUpMessage = (data: any) => setUpComponent('Message', data)
export const setUpChatIt = (data: any) => setUpComponent('ChatIt', data)
export const setUpRate = (data: any) => setUpComponent('Rate', data)
export const setUpCommon = (data: any) => store.dispatch('setUpCommon', data)
export const blockSender = (data: boolean) => store.dispatch('blockSender', data)
export const showMsgLoad = (data: boolean) => store.dispatch('showMsgLoad', data)
export const showRate = (data: boolean) => store.dispatch('showRate', data)
export const showNotification = (data: boolean) => store.dispatch('showNotification', data)
export const openChat = (data: boolean) => store.dispatch('openChat', data)
export const showSettings = () => store.dispatch('showSettings')
export const toggleDisplayMessageTime = () => store.dispatch('toggleDisplayMessageTime')
export const toggleSearchActiveStatus = (status?: boolean) => store.dispatch('toggleSearchActiveStatus', status)
export const changeSearchValue = (searchValue: string) => store.dispatch('changeSearchValue', searchValue)
export const changeFoundGroup = (messageInfo: any) => store.dispatch('changeFoundGroup', messageInfo)
export const scrollToFoundMessage = (messageNumber: number) => store.dispatch('scrollToFoundMessage', messageNumber)
export const showDropZone = (status: boolean) => store.dispatch('showDropZone', status)
changeSearchValue
export const reset = async () => {
  store.dispatch('resetMessages')
  const modules = store.get().modules.get('stack')
  const clientConfig = store.get().clientConfig.get('info')
  const notificationsEnabled = store.get().notifications.get('enabled')
  for (const key in modules) {
    if (key === 'default') continue
    store.dispatch('initModuleHistory', modules[key].name)
    await modules[key].moduleDispatcher('reset', { clientConfig: clientConfig })
    notificationsEnabled && (await modules[key].moduleDispatcher('notificationRequest'))
  }
}
