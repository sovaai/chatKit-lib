import { store } from '../../../store'

export const changeComponent = (componentName: string, data: { themeName: string; data: any }) =>
  store.dispatch('changeComponentsStyles', { componentName, ...data })
