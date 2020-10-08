import { Map } from 'immutable'

export interface SettingsProps {
  styles: Map<string, any>
  languages: Map<string, any>
  managment: Map<string, any>
  store?: any 
}
