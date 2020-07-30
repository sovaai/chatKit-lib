import { store } from '../../../store'

export const enabled = (status: boolean) => store.dispatch('isEnabled', status)
export const clicked = () => store.dispatch('clicked')
export const shown = () => store.dispatch('shown')
export const addMessages = (messages: any) => store.dispatch('addMessages', messages)
export const addSettings = (settings: any) => store.dispatch('addSettings', settings)
