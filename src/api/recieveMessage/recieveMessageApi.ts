import { Message } from '../../@types/common'
import { store } from '../../store'
import uiManagmentApi from '../uiManagment/uiManagmentApi'

const recieveMessageApi = {
  recieveMessage: (data: { text: string; sender: 'request' | 'user'; showRate: boolean }) => {
    const { text, sender, showRate } = data
    const message: Message = {
      text: text,
      sender: sender,
      date: new Date(),
      showRate: showRate,
    }
    store.dispatch('addMessage', message)
    uiManagmentApi.uiManagment('dialogLoading', false)
    uiManagmentApi.uiManagment('blockSender', false)
  },
}

export default recieveMessageApi
