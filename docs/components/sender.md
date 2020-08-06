# Sender
Message input and sending component



## Table of content
* [Usage](#usage) 
* [Component props](#component_props)   
* [Configuration](#configuration)   
* [Customization](#customization)   



## Usage <a name="usage"></a>
```javascript
import React from "react"
import { CkComponents } from "sova-chatkit"
 
function App() {
  return (
  <div className="App">
  <CkComponents.Sender ckStore={true} />
  </div>
  )
}
 
export default App
```



## Component props <a name="component_props"></a>
| Prop       | Type    |  Description                                                                                      |
|------------|---------|---------------------------------------------------------------------------------------------------|
| `ckStore`  | boolean | should cling information from the base [ckStore](https://github.com/sovaai/chatKit-lib#3) or not  |



## Configuration <a name="configuration"></a>
Component expects configuration info from storage. Header touch 4 global keys from STORE:  
| Key                               |                                            |
|-----------------------------------|--------------------------------------------|
| [managment](#conf_managment)      | information to control UI                  |
| [settings](#conf_settings)        | information to control media info          |
| [styles](#conf_styles)            | information to control styles packets      |
| [languages](#conf_languages)      | information to control Languages packets   |



### Managment <a name="conf_managment"></a>
Props from managment:  
```javascript
{
  inFocus: false,  // should component show title
  blockInput: false,  // should component block input
  blockSubmit: false,  // should component block submit
  audioMessage: {  // should component show audio message
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  },
  addStickers: {  // should component add stickers
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  },
  share: {  // should component share
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  },
  addFile: {  // should component add files
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  },
  send: {  // should component send
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  },
}
```
You can change these values using [APImethod](#custom_managment "description of method").



### Settings <a name="conf_settings"></a>
Props from settings:  
```javascript
{
  addFileIcon: 'fas plus'  // choice of image which will be shown as add file icon
  addStickersIcon: 'fas sticky-note'  // choice of image which will be shown as add stickers icon
  audioMessageIcon: 'fas microphone'  // choice of image which will be shown as audio message icon
  sendIcon": 'fas arrow-up'  // choice of image which will be shown as send icon
  shareIcon": 'fas share-alt'  // choice of image which will be shown as share icon
}
```
You can change these values using [APImethod](#custom_settings "description of method").



### Styles <a name="conf_styles"></a>
Props from styles:  
```javascript
{
  mainContainer: { // styles for main container
    margin: "1px",
  },
  addFileButton: { // styles for add file button
    border: "none",
    fontSize: "18px",
    background: "#FFFFFF",
    outline: "none",
    padding: "0",
    color: "#FC2D81",
    transition: "transform ease-in-out 0.3s, color ease-in-out 0.3s",   
    cursor: "pointer",
    &:hover: {
      color: "#386FFE"
    },
    &:active: {
      opacity: "0.75",
      color: "#386FFE"
    }
  },
  form: { },  // styles for form
  sendMessageButton: { // for send message button
    border: "none",
    fontSize: "18px",
    background: "#FFFFFF",
    outline: "none",
    padding: "3px",
    color: "#386FFE",
    cursor: "pointer",
    transition: "transform ease-in-out 0.3s, color ease-in-out 0.3s",
    &:hover: {
      transform: "translateY(-5px)",
      color: "#FC2D81"
    },
    &:active: {
      opacity: "0.75",
      color: "#FC2D81"
    }
  }
  shareButton: { },  // styles for share button
  stickersButton: { },  // styles for stickers button
  textArea: { },  // styles for text area
  voiceButton: { }  // styles for voice button
}
```
You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.  
You can change these values using [APImethod](#custom_styles "description of method").












## Languages
Props from Languages:
```
{
  /**
  * Text in file button title
  @default File
  * /
  "fileButtonTitle": string,
  /**
  * Text in placeholder
  @default Write message
  * /
  "placeholder": string,
  /**
  * Text in send button title
  @default Send
  * /
  "sendButtonTitle": string,
  /**
  * Text in share button title
  @default Share
  * /
  "shareButtonTitle": string,
  /**
  * Text in sticker button title
  @default Sticker
  * /
  "stickerButtonTitle": string,
  /**
  * Text in voice button title
  @default Voice
  * /
  "voiceButtonTitle": string
}
```

# CUSTOMIZATION
To custom Badge component, you should use ckAPIMethods, which will allow you to change values in ckStore

## UIManagment
```
ckAPIMethods.uiManagment('setUpSender', {
  addFileButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  addStickersButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  audioMessageButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  sendButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  shareButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  blockInput?: boolean,
  blockSubmit?: boolean
})
```

## Settings
интеграция происходит через библиотеку [fontawesome](https://github.com/FortAwesome/react-fontawesome "fontawesome")
```
ckAPIMethods.settings('addFileIcon', [data])
ckAPIMethods.settings('addStickersIcon', [data])
ckAPIMethods.settings('audioMessageIcon', [data])
ckAPIMethods.settings('sendIcon', [data])
ckAPIMethods.settings('shareIcon', [data])
```

## Styles
```
ckAPIMethods.styles('changeSender', {
  themeName: [theme name, wich styles you want to change],
  data: {
    [mainContainer styles],
    [addFileButton styles],
    [form styles],
    [sendMessageButton styles],
    [shareButton styles],
    [stickersButton styles],
    [textArea styles],
    [voiceButton styles]
  }
})
```

## Languages
```
ckAPIMethods.languages('changeSender', {
  language: [language name, wich packet you want to change],
  data: {
    [text title]
  }
})
```
