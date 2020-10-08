import ckStore from '../../../store'

export const changeIcon = (data: any, store?: any) =>
  store ? store.dispatch('changeIcon', data) : ckStore.dispatch('changeIcon', data)
export const changeAvatar = (avatar: string, store?: any) =>
  store ? store.dispatch('changeAvatar', avatar) : ckStore.dispatch('changeAvatar', avatar)
