export interface Message {
  text?: string
  sender: string
  date: Date
  type: string
  showRate: boolean
  module: string
  file?: {
    name: string
    url: string
    size: string
    type: string
    id: number
  }
}
