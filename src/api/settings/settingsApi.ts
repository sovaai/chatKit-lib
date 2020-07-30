import { changeIcon, changeAvatar } from './settingsEvents/settingsEvents'

export type SettingsEvents = 'changeIcon' | 'changeAvatar'

const settingsEvents: { [key: string]: (data: any) => void } = {
  changeIcon: changeIcon,
  changeAvatar: changeAvatar,
}
const settingsApi = {
  settings: (event: SettingsEvents, data: any) => {
    settingsEvents[event](data)
  },
}

export default settingsApi
