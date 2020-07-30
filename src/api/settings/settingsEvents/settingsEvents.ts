import { store } from '../../../store'

export const changeIcon = (data: any) => store.dispatch('changeIcon', data)
export const changeAvatar = (avatar: string) => store.dispatch('changeAvatar', avatar)
