import { StoreonModule } from 'storeon'
import { defaultModulesState } from '../states/defaultStates'
import { ModulesState, ModulesEvents } from '../@types/storeonModules'

export const modules: StoreonModule<ModulesState, ModulesEvents> = store => {
  store.on('@init', () => ({
    modules: defaultModulesState,
  }))
  store.on('initModule', ({ modules }, module) => ({
    modules: modules
      .updateIn(['stack', module.name], () => ({
        name: module.name,
        config: { info: module.info, api: module.api },
        moduleDispatcher: module.moduleDispatcher,
      }))
      .update('active', () => module.name),
  }))
  store.on('switchModule', ({ modules }, module) => ({
    modules: modules.update('active', () => module),
  }))
  store.on('updateModuleConfig', ({ modules }, { moduleName, config }) => ({
    modules: modules.updateIn(['stack', moduleName, 'config'], () => config),
  }))
}
