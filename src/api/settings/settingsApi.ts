import { changeIcon, changeAvatar } from './settingsEvents/settingsEvents'

export type SettingsEvents = 'changeIcon' | 'changeAvatar'

const settingsEvents: { [key: string]: (data: any, store?: any) => void } = {
  changeIcon: changeIcon,
  changeAvatar: changeAvatar,
}
const settingsApi = {
  settings: (event: SettingsEvents, data: any, store?: any) => {
    settingsEvents[event](data, store)
  },
}

export default settingsApi
