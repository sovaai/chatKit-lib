import { initModule, switchModule, updateModule, getModuleConfig, sendChatInit } from './modulesEvents/modulesEvents'

export type ModulesEvents = 'initModule' | 'switchModule' | 'updateModule' | 'getModuleConfig'  | 'sendChatInit'

const modulesEvents: { [key: string]: (data: any, store?: any) => void } = {
  initModule: initModule,
  switchModule: switchModule,
  updateModule: updateModule,
  getModuleConfig: getModuleConfig,
  sendChatInit: sendChatInit
}
const modulesApi = {
  modules: (event: ModulesEvents, data: any, store?: any) => {
    modulesEvents[event](data, store)
  },
}

export default modulesApi
