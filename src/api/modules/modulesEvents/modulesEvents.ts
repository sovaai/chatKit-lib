import { store } from '../../../store'

export const getModuleConfig = (moduleName: string) => store.get().modules.getIn(['stack', moduleName, 'config'])
export const initModule = async (module: any) => {
  const clientConfig = store.get().clientConfig.get('info')
  const moduleInfo = getModuleConfig(module.name)?.info
  store.dispatch('initModuleHistory', module.name)
  const notificationsEnabled = store.get().notifications.get('enabled')
  await module.moduleDispatcher('chatInit', { moduleInfo: moduleInfo, clientConfig: clientConfig })
  notificationsEnabled && (await module.moduleDispatcher('notificationRequest'))
  return store.dispatch('initModule', module)
}
export const switchModule = (moduleName: string) => store.dispatch('switchModule', moduleName)
export const updateModule = (updateInfo: { moduleName: string; config: any }) =>
  store.dispatch('updateModuleConfig', updateInfo)
