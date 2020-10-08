/// <reference types="react" />
import { ModulesState, MessagesState, MessagesEvents, SettingsState, StylesState, NotificationsState, LanguagesState, ManagmentState, Managmentevents, ClientConfigState, ClientConfigEvents } from "./@types/storeonModules";
import { ModulesEvents as ModulesEvents$0 } from "./@types/storeonModules";
import { SettingsEvents as SettingsEvents$0 } from "./@types/storeonModules";
import { StylesEvents as StylesEvents$0 } from "./@types/storeonModules";
import { NotificationsEvents as NotificationsEvents$0 } from "./@types/storeonModules";
import { LanguagesEvents as LanguagesEvents$0 } from "./@types/storeonModules";
type StylesEvents = "switchTheme" | "initTheme" | "changeStyles" | "changeChatIt" | "changeHeader" | "changeDialog" | "changeRate" | "changeUserMessage" | "changeResponseMessage" | "changeSender" | "changeBadge";
type ModulesEvents = "initModule" | "switchModule" | "updateModule" | "getModuleConfig" | "sendChatInit";
type NotificationsEvents = "addMessages" | "addSettings" | "shown" | "clicked" | "enabled";
type LanguagesEvents = "initLanguage" | "changeLanguage" | "changeLanguagePacket" | "changeChatIt" | "changeHeader" | "changeDialog" | "changeRate" | "changeMessage" | "changeSender" | "changeBadge";
type SettingsEvents = "changeIcon" | "changeAvatar";
type uiManagmentEvents = "setUpSender" | "setUpChatIt" | "setUpHeader" | "setUpBadge" | "setUpMessage" | "setUpRate" | "setUpDialog" | "setUpCommon" | "blockSender" | "dialogLoading" | "showRate" | "showNotification" | "openChat" | "showSettings" | "toggleDisplayMessageTime" | "toggleSearchActiveStatus" | "changeSearchValue" | "changeFoundGroup" | "scrollToFoundMessage" | "reset" | "showDropZone";
declare const uiManagmentEvents: {
    [key: string]: (data: any, store?: any) => void;
};
declare const ckAPIMethods: {
    styles: (event: StylesEvents, data: any, store?: any) => void;
    modules: (event: ModulesEvents, data: any, store?: any) => void;
    notifications: (event: NotificationsEvents, data?: any, store?: any) => void;
    languages: (event: LanguagesEvents, data: any, store?: any) => void;
    settings: (event: SettingsEvents, data: any, store?: any) => void;
    uiManagment: (event: uiManagmentEvents, data?: any, store?: any) => void;
    recieveMessage: (data: {
        text?: string | undefined;
        file?: any;
        type: string;
        sender: "request" | "user";
        showRate: boolean;
        module?: string | undefined;
        elements?: any;
    }, store?: any) => void;
    sendMessage: (text: string, store?: any) => Promise<void>;
    sendRate: (rating: number, store?: any) => Promise<void>;
    sendEvent: (eventName: string, store?: any) => Promise<void>;
};
declare const store: import("storeon").StoreonStore<ModulesState & MessagesState & SettingsState & StylesState & NotificationsState & LanguagesState & ManagmentState & ClientConfigState, ModulesEvents$0 & MessagesEvents & SettingsEvents$0 & StylesEvents$0 & NotificationsEvents$0 & LanguagesEvents$0 & Managmentevents & ClientConfigEvents>;
declare const CkComponents: {
    ChatIt: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
    Dialog: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
    Sender: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
    Header: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
    Badge: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
    CKScrollBar: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
};
declare const ckStoreModules: {
    messages: import("storeon").StoreonModule<import("store/@types/storeonModules").MessagesState, import("store/@types/storeonModules").MessagesEvents>;
    modules: import("storeon").StoreonModule<import("store/@types/storeonModules").ModulesState, import("store/@types/storeonModules").ModulesEvents>;
    settings: import("storeon").StoreonModule<import("store/@types/storeonModules").SettingsState, import("store/@types/storeonModules").SettingsEvents>;
    styles: import("storeon").StoreonModule<import("store/@types/storeonModules").StylesState, import("store/@types/storeonModules").StylesEvents>;
    notifications: import("storeon").StoreonModule<import("store/@types/storeonModules").NotificationsState, import("store/@types/storeonModules").NotificationsEvents>;
    managment: import("storeon").StoreonModule<import("store/@types/storeonModules").ManagmentState, import("store/@types/storeonModules").Managmentevents>;
    languages: import("storeon").StoreonModule<import("store/@types/storeonModules").LanguagesState, import("store/@types/storeonModules").LanguagesEvents>;
    clientConfig: import("storeon").StoreonModule<import("store/@types/storeonModules").ClientConfigState, import("store/@types/storeonModules").ClientConfigEvents>;
};
export { store as ckStore, ckStoreModules, ckAPIMethods, CkComponents };
