import Sender from '../components/Sender'
import ChatIt from '../components/ChatIt'
import Dialog from '../components/Dialog'
import UserMesssage from '../components/UserMessage'
import ResponseMessage from '../components/ResponseMessage'
import MessageLoader from '../components/MessageLoader'
import Divider from '../components/Divider'
import Header from '../components/Header'
import Badge from '../components/Badge'
import Rate from '../components/Rate'
import Close from '../components/Close'
import Example from '../components/Example'
import Settings from '../components/Settings'
import ToggleSlider from '../components/ToggleSlider'
import colors from './colors'
import fonts from './font'
import CKDropAndDown from '../components/CKDropAndDown'
import CKContents from '../components/CKContents'

const sovaGray = {
  themeName: 'sovaGray',
  data: {
    example: Example(colors),
    Sender: Sender({ colors, fonts }),
    ChatIt: ChatIt({ colors, fonts }),
    Dialog: Dialog(colors),
    CKContents: CKContents(colors),
    UserMessage: UserMesssage(colors),
    ResponseMessage: ResponseMessage(colors),
    MessageLoader: MessageLoader(colors),
    Divider: Divider(colors),
    Header: Header(colors),
    Badge: Badge(colors),
    Rate: Rate(colors),
    Close: Close(colors),
    Settings: Settings(colors),
    ToggleSlider: ToggleSlider(colors),
    CKDropAndDown: CKDropAndDown(colors),

  },
}

export default sovaGray
