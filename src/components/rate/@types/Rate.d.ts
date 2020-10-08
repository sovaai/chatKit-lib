import { Map } from 'immutable'
export interface RateState {
  showRatingList: boolean
  transform: string
}
export interface RateProps {
  settings: Map<string, any>
  managment: Map<string, any>
  languages: Map<string, any>
  styles: Map<string, any>
  scrollbar?: any
  store?: any
}
