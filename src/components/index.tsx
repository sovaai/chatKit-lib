import Export from './common/export/Export'
import ChatIt from './chatIt/ChatIt'
import Header from './header/Header'
import Dialog from './dialog/Dialog'
import Sender from './sender/Sender'
import Badge from './badge/Badge'
import CKScrollBar from './ckScrollbar/CKScrollbar'

const ExportChatIt = Export(ChatIt)
const ExportCKScrollbar = Export(CKScrollBar)
const ExportHeader = Export(Header)
const ExportDialog = Export(Dialog)
const ExportSender = Export(Sender)
const ExportBadge = Export(Badge)
export { ExportChatIt as ChatIt }
export { ExportCKScrollbar as CKScrollBar }
export { ExportHeader as Header }
export { ExportDialog as Dialog }
export { ExportSender as Sender }
export { ExportBadge as Badge }
