import { Map } from 'immutable'
export type DialogLanguageEventsNames =
  | 'Ready'
  | 'Inactive'
  | 'Rate'
  | 'Notification'
  | 'Context'
  | 'Click'
  | 'Mouse'
  | 'CardReady'
  | 'OperatorStatus'
  | 'ChatState'
  | 'GeolocationTimeout'
  | 'GeolocationDenied'
export interface DialogLanguageEvents {
  Ready?: '00b2fcbe-f27f-437b-a0d5-91072d840ed3'
  Inactive?: '29e75851-6cae-44f4-8a9c-f6489c4dca88'
  Rate?: '11d10788-4789-11e3-9b0b-080027ab4d7b'
  Notification?: 'bffaa961-9ad3-4ecd-9254-f9e2fc06f28c'
  Context?: '7330d8fc-4c64-11e3-af49-080027ab4d7b'
  Click?: 'd825476d-bc08-4038-9ecf-e6b2b267c7b8'
  Mouse?: '6819087d-a7d0-4c67-acd4-47d40b233cc9'
  CardReady?: '2bbff8e2-3c75-4f4b-bd61-c29017257c00'
  OperatorStatus?: '4e729f9a-0aa2-4d37-87d2-bed2b2b39c00'
  ChatState?: 'c189c2f1-43b6-424b-866b-03e562ba9d33'
  GeolocationTimeout?: '409b58e1-595b-4c02-81be-3f31dfe4639d'
  GeolocationDenied?: 'b92e3bcc-44b5-4019-9594-54b69afdaf77'
  [key: string]: string
}

export interface RandomContext {
  [key: string]: any
}
export interface ChatRequestData {
  text: string
  context: RandomContext
}
export interface ChatInitData {
  clientConfig: RandomContext
}
export interface SetInfoData {
  cuid: string
  events: string[]
}
export interface ChatEventData {
  eventName: DialogLanguageEventsNames
  context: RandomContext
}
export type ModuleEventsNames = 'chatInit' | 'chatRequest' | 'setInfo' | 'chatEvent'
export type ModuleEventsData = ChatRequestData | ChatEventData | ChatInitData | SetInfoData
export interface DLInfo {
  uuid: string
  cuid: string
  events: DialogLanguageEvents
}
export interface Module {
  name: string
  moduleDispatcher: (event: ModuleEventsNames, data: ModuleEventsData) => void
  info: any
  api: any
}
export interface ModulesStack {
  dialogLanguage: Map<Module>
}
