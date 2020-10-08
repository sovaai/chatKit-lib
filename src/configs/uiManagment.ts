import { Set } from 'immutable'

export const uiManagment = {
  common: {
    chatIsOpen: false,
    sendInitOnOpen: true,
    showNotification: false,
    showMsgLoad: false,
    showRate: false,
    mobileEnabled: true,
    showSettings: false,
  },
  components: {
    ChatIt: {
      SenderEnabled: true,
      CloseEnabled: false,
      NotificationsEnabled: true,
      DialogEnabled: true,
      RateEnabled: false,
      BadgeEnabled: true,
      HeaderEnabled: true,
      SettingsEnabled: true,
    },
    Sender: {
      inFocus: false,
      blockInput: false,
      blockSubmit: false,
      showDropZone: false,
      audioMessage: {
        enabled: false,
        withTitle: true,
        withIcon: true,
      },
      addStickers: {
        enabled: false,
        withTitle: true,
        withIcon: true,
      },
      share: {
        enabled: false,
        withTitle: false,
        withIcon: true,
      },
      addFile: {
        enabled: true,
        withTitle: false,
        withIcon: true,
      },
      send: {
        enabled: true,
        withTitle: false,
        withIcon: true,
      },
    },
    Message: {
      showDate: false,
      showAvatar: false,
      RateEnabled: true,
      positiveRateMessage: {
        enabled: false,
        withTitle: false,
        withIcon: true,
      },
      negativeRateMessage: {
        enabled: false,
        withTitle: false,
        withIcon: true,
      },
      audioMessage: {
        enabled: false,
        withTitle: true,
        withIcon: true,
      },
    },
    Header: {
      showTitle: true,
      showAvatar: true,
      settings: {
        enabled: true,
        withTitle: false,
        withIcon: true,
      },
      reset: {
        enabled: true,
        withTitle: false,
        withIcon: true,
      },
      search: {
        active: false,
        searchValue: '',
        found: Set(),
        foundMessage: -1,
        enabled: true,
        withTitle: false,
        withIcon: true,
      },
      close: {
        enabled: true,
        withTitle: false,
        withIcon: true,
      },
    },
    Dialog: {
      rate: {
        enabled: false,
        withTitle: true,
        withIcon: true,
      },
      search: {
        enabled: false,
        withTitle: true,
        withIcon: true,
      },
      dividerEnabled: true,
      loader: {
        enabled: true,
        showTitle: false,
        showAnimation: true,
      },
    },
    Rate: {
      positiveRate: {
        enabled: true,
        withTitle: true,
        withIcon: false,
      },
      negativeRate: {
        enabled: true,
        withTitle: true,
        withIcon: false,
      },
    },
    Badge: {
      showTitle: false,
      showAvatar: false,
      showSVG: true,
    },
    Settings: {
      closeSettings: {
        enabled: true,
        withTitle: false,
        withIcon: true,
      },
    },
    CKDropAndDown: {
      chooseFile: {
        enabled: true,
        withTitle: true,
        withIcon: false,
      },
    },
  },
}
