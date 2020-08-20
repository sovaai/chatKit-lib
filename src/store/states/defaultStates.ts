import { Map, List } from 'immutable'
import { en, ru } from '../../configs/languages'
import { clientConfig } from '../../configs/clientConfig'
import { sovaDark, sovaLight, sovaGray } from '../../configs/styles'
import { uiManagment } from '../../configs/uiManagment'
import { notifications } from '../../configs/notifications'
import { settings } from '../../configs/settings'
import { defaultModule } from '../../configs/modules'

export const defaultModulesState = Map({
  active: defaultModule.name,
  stack: {
    default: defaultModule,
  },
})

export const defaultMessagesState = Map({
  history: {
    default: List([])
  },
  announcements: List([]),
  lastResponseMessage: Map({}),
  lastUserMessage: Map({}),
})

export const defaultNotificationsState = Map(notifications)
export const defaultManagmentState = Map(uiManagment)
export const defaultSettingsState = Map(settings)
export const defaultLanguagesState = Map({
  active: 'en',
  stack: {
    en: { ...en.packet },
    ru: { ...ru.packet },
  },
})
export const defaultStylesState = Map({
  active: sovaLight.themeName,
  stack: {
    sovaDark: sovaDark.data,
    sovaLight: sovaLight.data,
    sovaGray: sovaGray.data,
  },
})
export const defaultClientConfigState = Map({
  info: clientConfig,
})
