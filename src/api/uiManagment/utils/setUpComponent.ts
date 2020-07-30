import { ComponentsNames } from '../../../@types/settings'
import { store } from '../../../store'

export const setUpComponent = (componentName: ComponentsNames, data: any) => {
  store.dispatch('setUpComponent', { componentName: componentName, data: data })
}
