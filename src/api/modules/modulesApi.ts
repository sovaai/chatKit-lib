import { initModule, switchModule, updateModule, getModuleConfig } from './modulesEvents/modulesEvents'

export type ModulesEvents = 'initModule' | 'switchModule' | 'updateModule' | 'getModuleConfig'

const modulesEvents: { [key: string]: (data: any) => void } = {
  initModule: initModule,
  switchModule: switchModule,
  updateModule: updateModule,
  getModuleConfig: getModuleConfig,
}
const modulesApi = {
  modules: (event: ModulesEvents, data: any) => {
    modulesEvents[event](data)
  },
}

export default modulesApi
