import { createStoreon } from 'storeon'
import { storeonDevtools } from 'storeon/devtools'
import { messages } from './modules/messages'
import { modules } from './modules/modules'
import { settings } from './modules/settings'
import { styles } from './modules/styles'
import { notifications } from './modules/notifications'
import { managment } from './modules/managment'
import { languages } from './modules/languages'
import { clientConfig } from './modules/clientConfig'
import {
  ModulesState,
  MessagesState,
  ModulesEvents,
  MessagesEvents,
  SettingsState,
  SettingsEvents,
  StylesEvents,
  StylesState,
  NotificationsState,
  LanguagesState,
  ManagmentState,
  NotificationsEvents,
  LanguagesEvents,
  Managmentevents,
  ClientConfigState,
  ClientConfigEvents,
} from './@types/storeonModules'
 const store = createStoreon<
  ModulesState &
    MessagesState &
    SettingsState &
    StylesState &
    NotificationsState &
    LanguagesState &
    ManagmentState &
    ClientConfigState,
  ModulesEvents &
    MessagesEvents &
    SettingsEvents &
    StylesEvents &
    NotificationsEvents &
    LanguagesEvents &
    Managmentevents &
    ClientConfigEvents
>([
  messages,
  modules,
  settings,
  styles,
  notifications,
  managment,
  languages,
  clientConfig,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
])
export default store