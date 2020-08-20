import { List, Map } from 'immutable'
import { Message } from '../../@types/common'
import { Module, ModulesStack } from '../../@types/ckModules'

export interface MessagesState {
  messages: Map<string, any>
}
export interface MessagesEvents {
  addMessage: {
    message: Message
    moduleName: string
  }
  resetMessages: void
  initModuleHistory: string
}

export interface ModulesState {
  modules: Map<string, Map<Module | ModulesStack>>
}

export interface ModulesEvents {
  initModule: Module
  switchModule: string
  updateModuleConfig: {
    moduleName: string
    config: any
  }
}

export interface ChatKitInterfaceState {
  chatKitInterface: Map<string, boolean>
}
export interface ChatKitInterfaceEvents {
  changeFocusInf: void
  openChatKit: boolean
}
export interface NotificationsState {
  notifications: Map<string, any>
}
export interface NotificationsEvents {
  addSettings: any
  addMessages: any
  isEnabled: boolean
  clicked: void
  shown: void
}
export interface ManagmentState {
  managment: Map<string, any>
}
export interface Managmentevents {
  openChat: boolean
  showRate: boolean
  showDropZone: boolean
  showNotification: boolean
  showMsgLoad: boolean
  blockSender: boolean
  setUpComponent: {
    componentName: string
    data: any
  }
  showSettings: void
  changeSenderFocusInf: void
  setUpCommon: any
  toggleDisplayMessageTime: void
  toggleSearchActiveStatus: boolean | void
  changeSearchValue: string
  changeFoundGroup: { messageId: number; action: 'add' | 'delete' | 'clear' }
  scrollToFoundMessage: number
}
export interface LanguagesState {
  languages: Map<string, any>
}
export interface LanguagesEvents {
  initLanguage: {
    [key: string]: any
  }
  changeComponentsTitles: {
    language: string
    componentName: string
    data: any
  }
  changeLanguage: string
  changeLanguagePacket: {
    language: string
    packet: any
  }
}
export interface SettingsState {
  settings: Map<string, any>
}
export interface SettingsEvents {
  changeIcon: {
    iconName: string
    iconData: any
  }
  changeAvatar: string
  initLanguage: {
    [key: string]: any
  }
}

export interface StylesState {
  styles: Map<string, any>
}
export interface StylesEvents {
  switchTheme: string
  initTheme: {
    themeName: string
    data: any
  }
  changeStyles: {
    themeName: string
    data: any
  }
  changeComponentsStyles: {
    themeName: string
    componentName: string
    data: any
  }
}
export interface ClientConfigState {
  clientConfig: Map<string, any>
}
export interface ClientConfigEvents {
  changeClientConfig: any
}
