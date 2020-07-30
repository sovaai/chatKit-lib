import { List } from 'immutable'

export const notifications = {
  enabled: true,
  shown: 0,
  clicked: 0,
  settings: {
    revision: '',
    timer1: 15,
    timer2: 15,
    disablePeriod: 2592000,
  },
  messages: List([]),
}
