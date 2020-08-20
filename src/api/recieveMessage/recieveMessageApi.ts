import { Message } from '../../@types/common'
import { store } from '../../store'
import uiManagmentApi from '../uiManagment/uiManagmentApi'

const recieveMessageApi = {
  recieveMessage: (data: { text?: string; file?: any; type: string, sender: 'request' | 'user'; showRate: boolean }) => {
    const { text, sender, showRate } = data
    const activeModule = store.get().modules.get('active')
    const message: Message = {
      text: text,
      sender: sender,
      date: new Date(),
      showRate: showRate,
      module: activeModule,
      file: data.file,
      type: data.type
    }
    store.dispatch('addMessage', { message, moduleName: activeModule })
    uiManagmentApi.uiManagment('dialogLoading', false)
    uiManagmentApi.uiManagment('blockSender', false)
  },
}

export default recieveMessageApi
