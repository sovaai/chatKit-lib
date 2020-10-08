import { setUpComponent } from '../utils/setUpComponent'
import ckStore from '../../../store'
import modulesApi from '../../modules/modulesApi'

export const setUpSender = (data: any, store?: any) => setUpComponent('Sender', data, store)
export const setUpHeader = (data: any, store?: any) => setUpComponent('Header', data, store)
export const setUpDialog = (data: any, store?: any) => setUpComponent('Dialog', data, store)
export const setUpBadge = (data: any, store?: any) => setUpComponent('Badge', data, store)
export const setUpMessage = (data: any, store?: any) => setUpComponent('Message', data, store)
export const setUpChatIt = (data: any, store?: any) => setUpComponent('ChatIt', data, store)
export const setUpRate = (data: any, store?: any) => setUpComponent('Rate', data, store)
export const setUpCommon = (data: any, store?: any) =>
  store ? store.dispatch('setUpCommon', data) : ckStore.dispatch('setUpCommon', data)
export const blockSender = (data: boolean, store?: any) =>
  store ? store.dispatch('blockSender', data) : ckStore.dispatch('blockSender', data)
export const showMsgLoad = (data: boolean, store?: any) =>
  store ? store.dispatch('showMsgLoad', data) : ckStore.dispatch('showMsgLoad', data)
export const showRate = (data: boolean, store?: any) =>
  store ? store.dispatch('showRate', data) : ckStore.dispatch('showRate', data)
export const showNotification = (data: boolean, store?: any) =>
  store ? store.dispatch('showNotification', data) : ckStore.dispatch('showNotification', data)
export const openChat = (data: boolean, store?: any) => {
  const st = store ? store : ckStore
  const activeModule = st.get().modules.get('active')
  const messages = st.get().messages.get('history')
  console.log(messages[activeModule].size)
  data && !messages[activeModule].size && modulesApi.modules('sendChatInit', activeModule, store)
  store ? store.dispatch('openChat', data) : ckStore.dispatch('openChat', data)
}
export const showSettings = (status: boolean, store?: any) =>
  store ? store.dispatch('showSettings') : ckStore.dispatch('showSettings')
export const toggleDisplayMessageTime = (store?: any) =>
  store ? store.dispatch('toggleDisplayMessageTime') : ckStore.dispatch('toggleDisplayMessageTime')
export const toggleSearchActiveStatus = (status?: boolean, store?: any) =>
  store ? store.dispatch('toggleSearchActiveStatus', status) : ckStore.dispatch('toggleSearchActiveStatus', status)
export const changeSearchValue = (searchValue: string, store?: any) =>
  store ? store.dispatch('changeSearchValue', searchValue) : ckStore.dispatch('changeSearchValue', searchValue)
export const changeFoundGroup = (messageInfo: any, store?: any) =>
  store ? store.dispatch('changeFoundGroup', messageInfo) : ckStore.dispatch('changeFoundGroup', messageInfo)
export const scrollToFoundMessage = (messageNumber: number, store?: any) =>
  store
    ? store.dispatch('scrollToFoundMessage', messageNumber)
    : ckStore.dispatch('scrollToFoundMessage', messageNumber)
export const showDropZone = (status: boolean, store?: any) =>
  store ? store.dispatch('showDropZone', status) : ckStore.dispatch('showDropZone', status)
export const reset = async (store?: any) => {
  const st = store ? store : ckStore
  const activeModule = st.get().modules.get('active')
  const module = st.get().modules.getIn(['stack', activeModule])
  const clientConfig = st.get().clientConfig.get('info')
  const notificationsEnabled = st.get().notifications.get('enabled')
  st.dispatch('resetMessages', activeModule)
  await module.moduleDispatcher('reset', { clientConfig: clientConfig })
  notificationsEnabled && (await module.moduleDispatcher('notificationRequest'))
}
