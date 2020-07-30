import { Map } from 'immutable'
export interface SenderState {
  text: string
}
export interface SenderProps {
  settings: Map<string, any>
  managment: Map<string, any>
  languages: Map<string, any>
  styles: Map<string, any>
}
