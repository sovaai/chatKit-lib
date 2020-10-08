import { Message } from '../../../@types/common'
import { Map } from 'immutable'
export interface MessageProps {
  id: number
  message: Message
  scrollbar: any
  nextSenderType: string
  prevSenderType: string
  store?: any
}
