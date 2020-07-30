export interface Settings {
  components: {}
  media: {}
  language: {}
}
export interface ComponentsSettings {
  Badge: {}
  Message: {}
  Sender: {}
  Dialog: {}
  Header: {}
}
export interface MediaSettings {
  avatar: string
  icons: {}
  steackers: {}
}
export interface LanguageSettings {
  active: {}
  stack: {}
}
export type ComponentsNames = 'Badge' | 'Header' | 'Dialog' | 'Sender' | 'Message' | 'ChatIt' | 'Rate'
