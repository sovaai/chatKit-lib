import { Message } from '../../@types/common'
import ckStore from '../../store'
import uiManagmentApi from '../uiManagment/uiManagmentApi'

const recieveMessageApi = {
  recieveMessage: (
    data: {
      text?: string
      file?: any
      type: string
      sender: 'request' | 'user'
      showRate: boolean
      module?: string
      elements?: any
    },
    store?: any
  ) => {
    const { text, sender, showRate, module, elements } = data
    const activeModule = store ? store.get().modules.get('active') : ckStore.get().modules.get('active')
    const message: Message = {
      text: text,
      sender: sender,
      date: new Date(),
      showRate: showRate,
      module: activeModule !== module && module ? module : activeModule,
      file: data.file,
      type: data.type,
      elements: elements
    }
    store
      ? store.dispatch('addMessage', { message, moduleName: activeModule !== module && module ? module : activeModule })
      : ckStore.dispatch('addMessage', {
          message,
          moduleName: activeModule !== module && module ? module : activeModule,
        })
    uiManagmentApi.uiManagment('dialogLoading', false, store)
    uiManagmentApi.uiManagment('blockSender', false, store)
  },
}

export default recieveMessageApi
