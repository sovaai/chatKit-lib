import {
  setUpSender,
  setUpHeader,
  setUpBadge,
  setUpMessage,
  setUpDialog,
  blockSender,
  showMsgLoad,
  showRate,
  showNotification,
  setUpChatIt,
  setUpRate,
  setUpCommon,
  openChat,
  showSettings,
  toggleDisplayMessageTime,
  toggleSearchActiveStatus,
  changeSearchValue,
  changeFoundGroup,
  scrollToFoundMessage,
  reset,
  showDropZone,
} from './uiManagmentEvents/uiManagmentEvents'
export type uiManagmentEvents =
  | 'setUpSender'
  | 'setUpChatIt'
  | 'setUpHeader'
  | 'setUpBadge'
  | 'setUpMessage'
  | 'setUpRate'
  | 'setUpDialog'
  | 'setUpCommon'
  | 'blockSender'
  | 'dialogLoading'
  | 'showRate'
  | 'showNotification'
  | 'openChat'
  | 'showSettings'
  | 'toggleDisplayMessageTime'
  | 'toggleSearchActiveStatus'
  | 'changeSearchValue'
  | 'changeFoundGroup'
  | 'scrollToFoundMessage'
  | 'reset'
  | 'showDropZone'
const uiManagmentEvents: { [key: string]: (data: any, store?: any) => void } = {
  setUpSender: setUpSender,
  setUpChatIt: setUpChatIt,
  setUpRate: setUpRate,
  setUpHeader: setUpHeader,
  setUpBadge: setUpBadge,
  setUpMessage: setUpMessage,
  setUpDialog: setUpDialog,
  blockSender: blockSender,
  dialogLoading: showMsgLoad,
  showRate: showRate,
  showNotification: showNotification,
  setUpCommon: setUpCommon,
  openChat: openChat,
  showSettings: showSettings,
  toggleDisplayMessageTime: toggleDisplayMessageTime,
  toggleSearchActiveStatus: toggleSearchActiveStatus,
  changeSearchValue: changeSearchValue,
  changeFoundGroup: changeFoundGroup,
  scrollToFoundMessage: scrollToFoundMessage,
  reset: reset,
  showDropZone: showDropZone,
}
const uiManagmentApi = {
  uiManagment: (event: uiManagmentEvents, data?: any | null, store?: any) => {
    uiManagmentEvents[event](data, store)
  },
}

export default uiManagmentApi
