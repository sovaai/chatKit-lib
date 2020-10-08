import ckStore from '../../../store'

export const enabled = (status: boolean, store?: any) =>
  store ? store.dispatch('isEnabled', status) : ckStore.dispatch('isEnabled', status)
export const clicked = (store?: any) => (store ? store.dispatch('clicked') : ckStore.dispatch('clicked'))
export const shown = (store?: any) => (store ? store.dispatch('shown') : ckStore.dispatch('shown'))
export const addMessages = (messages: any, store?: any) =>
  store ? store.dispatch('addMessages', messages) : ckStore.dispatch('addMessages', messages)
export const addSettings = (settings: any, store?: any) =>
  store ? store.dispatch('addSettings', settings) : ckStore.dispatch('addSettings', settings)
