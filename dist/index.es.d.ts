/// <reference types="react" />
import { ModulesState, MessagesState, MessagesEvents, SettingsState, StylesState, NotificationsState, LanguagesState, ManagmentState, Managmentevents, ClientConfigState, ClientConfigEvents } from "./@types/storeonModules";
import { ModulesEvents as ModulesEvents$0 } from "./@types/storeonModules";
import { SettingsEvents as SettingsEvents$0 } from "./@types/storeonModules";
import { StylesEvents as StylesEvents$0 } from "./@types/storeonModules";
import { NotificationsEvents as NotificationsEvents$0 } from "./@types/storeonModules";
import { LanguagesEvents as LanguagesEvents$0 } from "./@types/storeonModules";
type StylesEvents = "switchTheme" | "initTheme" | "changeStyles" | "changeChatIt" | "changeHeader" | "changeDialog" | "changeRate" | "changeUserMessage" | "changeResponseMessage" | "changeSender" | "changeBadge";
type ModulesEvents = "initModule" | "switchModule" | "updateModule" | "getModuleConfig";
type NotificationsEvents = "addMessages" | "addSettings" | "shown" | "clicked" | "enabled";
type LanguagesEvents = "initLanguage" | "changeLanguage" | "changeLanguagePacket" | "changeChatIt" | "changeHeader" | "changeDialog" | "changeRate" | "changeMessage" | "changeSender" | "changeBadge";
type SettingsEvents = "changeIcon" | "changeAvatar";
type uiManagmentEvents = "setUpSender" | "setUpChatIt" | "setUpHeader" | "setUpBadge" | "setUpMessage" | "setUpRate" | "setUpDialog" | "setUpCommon" | "blockSender" | "dialogLoading" | "showRate" | "showNotification" | "openChat" | "showSettings" | "toggleDisplayMessageTime" | "toggleSearchActiveStatus" | "changeSearchValue" | "changeFoundGroup" | "scrollToFoundMessage" | "reset" | "showDropZone";
declare const uiManagmentEvents: {
    [key: string]: (data: any) => void;
};
declare const ckAPIMethods: {
    styles: (event: StylesEvents, data: any) => void;
    modules: (event: ModulesEvents, data: any) => void;
    notifications: (event: NotificationsEvents, data?: any) => void;
    languages: (event: LanguagesEvents, data: any) => void;
    settings: (event: SettingsEvents, data: any) => void;
    uiManagment: (event: uiManagmentEvents, data?: any) => void;
    recieveMessage: (data: {
        text?: string | undefined;
        file?: any;
        type: string;
        sender: "request" | "user";
        showRate: boolean;
    }) => void;
    sendMessage: (text: string) => Promise<void>;
    sendRate: (rating: number) => Promise<void>;
};
declare const store: import("storeon").StoreonStore<ModulesState & MessagesState & SettingsState & StylesState & NotificationsState & LanguagesState & ManagmentState & ClientConfigState, ModulesEvents$0 & MessagesEvents & SettingsEvents$0 & StylesEvents$0 & NotificationsEvents$0 & LanguagesEvents$0 & Managmentevents & ClientConfigEvents>;
declare const CkComponents: {
    ChatIt: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
    Dialog: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
    Sender: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
    Header: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
    Badge: import("react").FC<import("components/common/export/@types/Export").ExportComponentProps>;
};
export { store as ckStore, ckAPIMethods, CkComponents };
