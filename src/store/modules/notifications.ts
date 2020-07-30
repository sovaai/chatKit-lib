import { StoreonModule } from 'storeon'

import { defaultNotificationsState } from '../states/defaultStates'
import { NotificationsState, NotificationsEvents } from '../@types/storeonModules'
import { List } from 'immutable'

export const notifications: StoreonModule<NotificationsState, NotificationsEvents> = store => {
  store.on('@init', () => ({
    notifications: defaultNotificationsState,
  }))
  store.on('isEnabled', ({ notifications }, status) => ({
    notifications: notifications.update('enabled', () => status),
  }))
  store.on('clicked', ({ notifications }) => ({
    notifications: notifications.update('clicked', value => ++value),
  }))
  store.on('shown', ({ notifications }) => ({
    notifications: notifications.update('shown', value => ++value),
  }))
  store.on('addMessages', ({ notifications }, messages) => ({
    notifications: notifications.update('messages', () => List(messages)),
  }))
  store.on('addSettings', ({ notifications }, settings) => ({
    notifications: notifications.update('settings', () => settings),
  }))
}
