import ckAPIMethods from './api'
import  store  from './store'
import { ChatIt, Dialog, Sender, Header, Badge, CKScrollBar } from './components'
// import { resizeListener } from './utils/resizeListener'
import { messages } from './store/modules/messages'
import { modules } from './store/modules/modules'
import { settings } from './store/modules/settings'
import { styles } from './store/modules/styles'
import { notifications } from './store/modules/notifications'
import { managment } from './store/modules/managment'
import { languages } from './store/modules/languages'
import { clientConfig } from './store/modules/clientConfig'
const CkComponents = {
  ChatIt,
  Dialog,
  Sender,
  Header,
  Badge,
  CKScrollBar,
}
const ckStoreModules = {
  messages,
  modules,
  settings,
  styles,
  notifications,
  managment,
  languages,
  clientConfig,
}
export { store as ckStore }
export { ckStoreModules }
export { ckAPIMethods }
export { CkComponents }
