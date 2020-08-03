# :rainbow: Why?
Library of react components that allows you to quickly deploy a dialog interface that interacts with a third-party service that provides the ability to interact with chat.

# :space_invader: Install
For install library you need enter next comand:
```
npm i sova-chatkit
```

# :rocket: Quick start
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

# :crown: Table of contents
The library consists of the next components:  
:wrench: **[ckAPIMethods](#1)** - methods that affect behavior of UI or interaction with UI;  
:unicorn: **[CkComponents](#2)** - UI components of widget (react-components);  
:blue_book: **[ckStore](#3)** - management of content.  

Detailed description of the library is given below.
 
 
 
# :memo: Library Description
## ckAPIMethods <a name="1"></a>
#### Import 
`import { ckAPIMethods } from "sova-chatkit"`

| API method                                                                                                                            |                     | 
|---------------------------------------------------------------------------------------------------------------------------------------|---------------------| 
| [recieveMessageAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/recieveMessageAPI.md "Read about this method")  | add a text messages to STORE  |
| [sendMessageAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/sendMessageAPI.md "Read about this method")        | send messages to the module to call request     | 
| [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "Read about this method")                    | edit the widget theme or individual component     | 
| [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "Read about this method")        | change settings of components in STORE     |
| [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "Read about this method")              | change pictures in widget     | 
| [modulesAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/modulesAPI.md "Read about this method")                | connection of dialog modules   |
| [languageAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI%20.md "Read about this method")           | settings language packs    |

All methods affect information stored `ckStore` and can change widget behavior and display.

 
 
## CkComponents <a name="2"></a>
#### Import
`import { CkComponents } from "sova-chatkit"`  

Widget uses next react components:  
| Component                                                                                                   |                                                     | 
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------| 
| [Badge](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/badge.md "Read about badge")      | widget expand button                                |
| [Message](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/message.md "Read about message")| bubble of text message with information about it    | 
| [Dialog](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/dialog.md "Read about dialog")   | displaying a set of text messages                   |
| [Header](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/header.md "Read about header")   | widget title                                        | 
| [Rate](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/rate.md "Read about rate")         | component of rate the message                       | 
| [Sender](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/sender.md "Read about sender")   | message input and sending component                 | 

Each component accepts props from `ckStore` with value `true` or `false` denoting whether the component should cling information from the base `ckStore` or not.


## ckStore<a name="3"></a>
#### Import
`import { ckStore } from "sova-chatkit"`  
`ckStore` stores content information with global keys:  

| Key                                                                                                |                                                                        | 
|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------| 
| [message](https://github.com/sovaai/chatKit-lib/blob/master/docs/ckStore/message.md "Read more")   | key for storage user message history and incoming answers              |
| [modules](https://github.com/sovaai/chatKit-lib/blob/master/docs/ckStore/modules.md "Read more")   | key for storage of information of dialog modules                       | 
| [settings](https://github.com/sovaai/chatKit-lib/blob/master/docs/ckStore/settings.md "Read more") | key for storage dialog settings and its states                         |
| [language](https://github.com/sovaai/chatKit-lib/blob/master/docs/ckStore/language.md "Read more") | settings language packs                                                | 
| [styles](https://github.com/sovaai/chatKit-lib/blob/master/docs/ckStore/styles.md "Read more")     | key for storage style settings of the dialog and individual components | 
| [clientConfig](https://github.com/sovaai/chatKit-lib/blob/master/docs/ckStore/clientConfig.md "Read more") |  key for storing top-level widget settings                     | 
| [managment](https://github.com/sovaai/chatKit-lib/blob/master/docs/ckStore/managment.md "Read more")       |  key for storing widget settings                               | 
