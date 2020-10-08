import { ComponentsNames } from '../../../@types/settings'
import ckStore from '../../../store'

export const setUpComponent = (componentName: ComponentsNames, data: any, store?: any) =>
  store
    ? store.dispatch('setUpComponent', { componentName: componentName, data: data })
    : ckStore.dispatch('setUpComponent', { componentName: componentName, data: data })
