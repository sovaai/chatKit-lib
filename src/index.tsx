import ckAPIMethods from './api'
import { store } from './store'
import { ChatIt, Dialog, Sender, Header, Badge } from './components'
import { resizeListener } from './utils/resizeListener'
resizeListener()
const CkComponents = {
  ChatIt,
  Dialog,
  Sender,
  Header,
  Badge,
}
export { store as ckStore }
export { ckAPIMethods }
export { CkComponents }
