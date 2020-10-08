import { Map } from 'immutable'
export interface HeaderProps {
  settings: Map<string, any>
  managment: Map<string, any>
  languages: Map<string, any>
  styles: Map<string, any>
  store?: any
}
export interface HeaderState {
  showSettings: boolean
}
