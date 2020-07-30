import recieveMessageApi from '../api/recieveMessage/recieveMessageApi'

export const defaultModule = {
  name: 'default',
  moduleDispatcher: (event: string, data: any) =>
    recieveMessageApi.recieveMessage({ text: 'no active Module', sender: 'request', showRate: false }),
}
