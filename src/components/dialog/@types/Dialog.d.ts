import { List, Map } from 'immutable'
import { Message } from '../../../@types/common'

export interface DialogProps {
  messages: Map<string, List<Message> | Map<Message>>
  settings: Map<string, any>
  managment: Map<string, any>
  languages: Map<string, any>
  styles: Map<string, any>
}
