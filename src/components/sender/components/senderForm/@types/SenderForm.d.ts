import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'
import { Map } from 'immutable'
export interface SenderFormState {
  text: string
  textAreaCSS: any
}
export interface SenderFormProps {
  focusInf: () => void
  sendButton: {
    enabled: boolean
    withTitle: boolean
    withIcon: boolean
    title: string
    icon: {
      icon: [IconPrefix, IconName]
      props: object
      className: string
    }
  }
  blockInput: boolean
  blockSubmit: boolean
  inputPlaceHolder: string
  sendMessage: (text: string) => void
  style: any
  styles: Map<string, any>
}
