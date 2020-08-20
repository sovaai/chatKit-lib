import recieveMessageApi from '../api/recieveMessage/recieveMessageApi'

export const defaultModule = {
  name: 'default',
  moduleDispatcher: (event: string, data: any) =>
    recieveMessageApi.recieveMessage({ text: 'no active Module', type: 'text', sender: 'request', showRate: false }),
}
