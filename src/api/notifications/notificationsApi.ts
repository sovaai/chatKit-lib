import { addMessages, addSettings, enabled, clicked, shown } from './notificationsEvents/notofocationsEvents'

export type NotificationsEvents = 'addMessages' | 'addSettings' | 'shown' | 'clicked' | 'enabled'
const notificationsEvents: { [key: string]: (data: any) => void } = {
  addMessages: addMessages,
  addSettings: addSettings,
  enabled: enabled,
  clicked: clicked,
  shown: shown,
}
const notificationsApi = {
  notifications: (event: NotificationsEvents, data?: any) => {
    notificationsEvents[event](data)
  },
}
export default notificationsApi
