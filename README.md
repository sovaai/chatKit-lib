# Why?
Library of react components that allows you to quickly deploy a dialog interface that interacts with a third-party service that provides the ability to interact with chat.

# Install
For install library you need enter next comand:
```
npm i sova-chatkit
```

# Quick start
For quick start and make changes to a library component, enter in your **App.jsx** file next comand: 
```
import React from "react"
import { CkComponents } from "sova-chatkit"
 
function App() {
 return (
 <div className="App">
 <CkComponents.ChatIt ckStore={true} />
 </div>
 )
}
 
export default App
```

# Table of contents
The library consists of the next components:  
:hankey: **[ckAPIMethods](#1)** - methods that affect behavior of UI or interaction with UI;  
:hankey: **[CkComponents](#2)** - UI components of widget (react-components);  
:hankey: **[ckStore](#3)** - management of content.  

Detailed description of the library is given below.
 
 
# Library Description
## ckAPIMethods <a name="1"></a>
| API method                                                                                                                            |                     | 
|---------------------------------------------------------------------------------------------------------------------------------------|---------------------| 
| [recieveMessageAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/recieveMessageAPI.md "Read about this method")  | add a text messages to STORE  |
| [sendMessageAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/sendMessageAPI.md "Read about this method")        | send messages to the module to call request     | 
| [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "Read about this method")                    | edit the widget theme or individual component     | 
| [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "Read about this method")        | change settings of components in STORE     |
| [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "Read about this method")              | change pictures in widget     | 
| [modulesAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/modulesAPI.md "Read about this method")                | connection of dialog modules   |
| [languageAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI%20.md "Read about this method")           | settings language packs    |
 
 
## CkComponents <a name="2"></a>
Widget uses next react components:
| Component                                                                                                   |                                                     | 
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------| 
| [Badge](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/badge.md "Read about badge")      | widget expand button                                |
| [Message](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/message.md "Read about message")| bubble of text message with information about it    | 
| [Dialog](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/dialog.md "Read about dialog")   | displaying a set of text messages                   |
| [Header](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/header.md "Read about header")   | widget title                                        | 
| [Rate](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/rate.md "Read about rate")         | component of rate the message                       | 
| [Sender](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/sender.md "Read about sender")   | message input and sending component                 | 


## ckStore<a name="3"></a>
### **messages**  
messages - key for storage user message history and incoming answers. It includes:  
* **history** - all messages that appear in dialog;  
* **announcements** - available announcements;  
* **lastResponseMessage** - last message from back;  
* **lastUserMessage** - last message from user.  


### **modules**  
modules - key for storage of information of dialog modules. It includes:  
* **active** - dialog module that is currently in use;  
* **stack** - storage of all registered dialog modules.  

### **settings** 
settings - key for storage dialog settings and its states. It includes:  
* **media:**
   * **avatar** - path to picture;  
   * **icons** - icons settings.  
   
### **language** 
language - settings language packs. It includes:  
* **active** - active language pack;  
* **stack** - storage of all registered language packs.  

### **styles** 
styles - key for storage style settings of the dialog and individual components. It includes:  
* **active** - active theme;  
* **stack** - storage of all topics available for use.  

### **clientConfig** 
clientConfig - key for storing top-level widget settings. It includes:  
* **info** - information about client user.  

### **managment** 
managment - key for storing widget settings. It includes:  
* **common** - general settings;  
* **chatIsOpen** - widget state (open or contract to badge);  
* **showNotification** - show notification or not;  
* **showMsLoad** - show or not show slider of message loading;  
* **showRate** - show message raiting or not;  
* **components** - list of all components.  
