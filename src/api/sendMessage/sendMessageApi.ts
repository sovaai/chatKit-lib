import { store } from '../../store'
import uiManagmentApi from '../uiManagment/uiManagmentApi'
import recieveMessageApi from '../recieveMessage/recieveMessageApi'

const sendMessageApi = {
  sendMessage: async (text: string) => {
    uiManagmentApi.uiManagment('blockSender', true)
    const { modules } = store.get()
    const data = {
      text: text,
    }
    const activeModule = modules.get('active')
    const module = modules.getIn(['stack', activeModule])
    module.moduleDispatcher('chatRequest', data)
    uiManagmentApi.uiManagment('dialogLoading', true)
  },
  sendRate: async (rating: number) => {
    uiManagmentApi.uiManagment('blockSender', true)
    const { modules } = store.get()
    const data = {
      rating: rating,
    }
    const activeModule = modules.get('active')
    const moduleDispatcher = modules.getIn(['stack', activeModule, 'moduleDispatcher'])
    moduleDispatcher
      ? moduleDispatcher('chatRate', data)
      : recieveMessageApi.recieveMessage({ text: 'no active module', sender: 'request', showRate: false })
    uiManagmentApi.uiManagment('dialogLoading', true)
    uiManagmentApi.uiManagment('showRate', false)
  },
}

export default sendMessageApi
