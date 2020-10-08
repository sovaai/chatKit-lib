import ckStore from '../../../store'

export const getModuleConfig = (moduleName: string, store?: any) =>
  store
    ? store.get().modules.getIn(['stack', moduleName, 'config'])
    : ckStore.get().modules.getIn(['stack', moduleName, 'config'])
export const initModule = async (modules: any, store?: any) => {
  const st = store ? store : ckStore
  const { sendInitOnOpen } = st.get().managment.get('common')
  const clientConfig = st.get().clientConfig.get('info')
  for (let index = 0; index < modules.length; index++) {
    const module = modules[index]
    const moduleInfo = getModuleConfig(module.name)?.info
    const moduleHistory = st.get().messages.getIn(['history', module.name])
    !moduleHistory && st.dispatch('initModuleHistory', module.name)
    const notificationsEnabled = st.get().notifications.get('enabled')
    st.dispatch('initModule', module)
    !sendInitOnOpen &&
      (await module.moduleDispatcher('chatInit', { moduleInfo: moduleInfo, clientConfig: clientConfig }))
    !sendInitOnOpen && notificationsEnabled && (await module.moduleDispatcher('notificationRequest'))
  }
}
export const sendChatInit = async (moduleName: string, store?: any) => {
  const st = store ? store : ckStore
  const clientConfig = st.get().clientConfig.get('info')
  const module = st.get().modules.getIn(['stack', moduleName])
  const moduleInfo = getModuleConfig(module.name)?.info
  await module.moduleDispatcher('chatInit', { moduleInfo: moduleInfo, clientConfig: clientConfig })
}
export const switchModule = (moduleName: string, store?: any) =>
  store ? store.dispatch('switchModule', moduleName) : ckStore.dispatch('switchModule', moduleName)
export const updateModule = (updateInfo: { moduleName: string; config: any }, store?: any) =>
  store ? store.dispatch('updateModuleConfig', updateInfo) : ckStore.dispatch('updateModuleConfig', updateInfo)
