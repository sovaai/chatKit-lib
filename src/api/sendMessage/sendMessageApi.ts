import ckStore from '../../store'
import uiManagmentApi from '../uiManagment/uiManagmentApi'
import recieveMessageApi from '../recieveMessage/recieveMessageApi'

const sendMessageApi = {
  sendMessage: async (text: string, store?: any) => {
    uiManagmentApi.uiManagment('blockSender', true, store)
    const { modules } = store ? store.get() : ckStore.get()
    const data = {
      text: text,
    }
    const activeModule = modules.get('active')
    const module = modules.getIn(['stack', activeModule])
    module.moduleDispatcher('chatRequest', data)
    uiManagmentApi.uiManagment('dialogLoading', true, store)
  },
  sendRate: async (rating: number, store?: any) => {
    uiManagmentApi.uiManagment('blockSender', true, store)
    const { modules } = store ? store.get() : ckStore.get()
    const data = {
      rating: rating,
    }
    const activeModule = modules.get('active')
    const moduleDispatcher = modules.getIn(['stack', activeModule, 'moduleDispatcher'])
    moduleDispatcher
      ? moduleDispatcher('chatRate', data)
      : recieveMessageApi.recieveMessage(
          { text: 'no active module', type: 'text', sender: 'request', showRate: false },
          store
        )
    uiManagmentApi.uiManagment('dialogLoading', true, store)
    uiManagmentApi.uiManagment('showRate', false, store)
  },
  sendEvent: async (eventName: string, store?: any) => {
    uiManagmentApi.uiManagment('blockSender', true, store)
    const { modules } = store ? store.get() : ckStore.get()
    const data = {
      eventName,
    }
    const activeModule = modules.get('active')
    const moduleDispatcher = modules.getIn(['stack', activeModule, 'moduleDispatcher'])
    moduleDispatcher
      ? moduleDispatcher('chatEvent', data)
      : recieveMessageApi.recieveMessage(
          { text: 'no active module', type: 'text', sender: 'request', showRate: false },
          store
        )
    uiManagmentApi.uiManagment('dialogLoading', true, store)
    uiManagmentApi.uiManagment('showRate', false, store)
  },
}

export default sendMessageApi
