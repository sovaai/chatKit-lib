import ckStore from '../../../store'

export const changeComponent = (componentName: string, data: { themeName: string; data: any }, store?: any) =>
  store
    ? store.dispatch('changeComponentsStyles', { componentName, ...data })
    : ckStore.dispatch('changeComponentsStyles', { componentName, ...data })
