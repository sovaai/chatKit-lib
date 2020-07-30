import { StoreonModule } from 'storeon'
import { SettingsState, SettingsEvents } from '../@types/storeonModules'
import { defaultSettingsState } from '../states/defaultStates'

export const settings: StoreonModule<SettingsState, SettingsEvents> = store => {
  store.on('@init', () => ({
    settings: defaultSettingsState,
  }))
  store.on('changeIcon', ({ settings }, { iconName, iconData }) => ({
    settings: settings.updateIn(['media', 'icons', iconName], value => ({ ...value, ...iconData })),
  }))
  store.on('changeAvatar', ({ settings }, avatar) => ({
    settings: settings.updateIn(['media', 'avatar'], () => avatar),
  }))
}
