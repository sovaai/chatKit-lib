import { Map } from 'immutable'

export interface MessageLoaderProps {
  loaderTitle: string
  showTitle: boolean
  showAnimation: boolean
  styles: Map<string, any>
  store?: any
}
export interface MessageLoaderState {
  show: boolean
}
