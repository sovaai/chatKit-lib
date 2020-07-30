import { StoreonModule } from 'storeon'

import { defaultManagmentState } from '../states/defaultStates'

import { ManagmentState, Managmentevents } from '../@types/storeonModules'

export const managment: StoreonModule<ManagmentState, Managmentevents> = (store) => {
  store.on('@init', () => ({
    managment: defaultManagmentState,
  }))
  store.on('openChat', ({ managment }, status) => ({
    managment: managment.updateIn(['common', 'chatIsOpen'], () => status),
  }))
  store.on('showMsgLoad', ({ managment }, status) => ({
    managment: managment.updateIn(['common', 'showMsgLoad'], () => status),
  }))
  store.on('showNotification', ({ managment }, status) => ({
    managment: managment.updateIn(['common', 'showNotification'], () => status),
  }))
  store.on('setUpCommon', ({ managment }, data) => ({
    managment: managment.update('common', (value) => ({ ...value, data })),
  }))
  store.on('showRate', ({ managment }, status) => ({
    managment: managment.updateIn(['common', 'showRate'], () => status),
  }))
  store.on('blockSender', ({ managment }, status) => ({
    managment: managment.updateIn(['components', 'Sender', 'blockInput'], () => status),
  }))
  store.on('setUpComponent', ({ managment }, { componentName, data }) => ({
    managment: managment.updateIn(['components', componentName], (value) => ({ ...value, ...data })),
  }))
  store.on('changeSenderFocusInf', ({ managment }) => ({
    managment: managment.updateIn(['components', 'Sender', 'inFocus'], (value) => !value),
  }))
  store.on('showSettings', ({ managment }) => ({
    managment: managment.updateIn(['common', 'showSettings'], (value) => !value),
  }))
  store.on('toggleDisplayMessageTime', ({ managment }) => ({
    managment: managment.updateIn(['components', 'Message', 'showDate'], (value) => !value),
  }))
  store.on('toggleSearchActiveStatus', ({ managment }, status) => ({
    managment: managment.updateIn(['components', 'Header', 'search', 'active'], (value: boolean) =>
      status ? status : !value
    ),
  }))
  store.on('changeSearchValue', ({ managment }, searchValue) => ({
    managment: managment.updateIn(['components', 'Header', 'search', 'searchValue'], () => searchValue),
  }))
  store.on('changeFoundGroup', ({ managment }, { messageId, action }) => ({
    managment: managment.updateIn(['components', 'Header', 'search', 'found'], (foundMessages) => {
      if (action === 'clear') return foundMessages.clear()
      return foundMessages[action](messageId)
    }),
  }))
  store.on('scrollToFoundMessage', ({ managment }, messageNumber) => ({
    managment: managment.updateIn(['components', 'Header', 'search', 'foundMessage'], () => messageNumber),
  }))
}
