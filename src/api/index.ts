import sendMessageApi from './sendMessage/sendMessageApi'
import recieveMessageApi from './recieveMessage/recieveMessageApi'

import uiManagmentApi from './uiManagment/uiManagmentApi'
import settingsApi from './settings/settingsApi'
import languagesApi from './languages/languagesApi'
import notificationsApi from './notifications/notificationsApi'
import modulesApi from './modules/modulesApi'
import stylesApi from './styles/stylesApi'
const ckAPIMethods = {
  ...sendMessageApi,
  ...recieveMessageApi,
  ...uiManagmentApi,
  ...settingsApi,
  ...languagesApi,
  ...notificationsApi,
  ...modulesApi,
  ...stylesApi,
}

export default ckAPIMethods
