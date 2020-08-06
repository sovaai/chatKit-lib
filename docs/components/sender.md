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
  },
  shareButton: { },  // styles for share button
  stickersButton: { },  // styles for stickers button
  textArea: { },  // styles for text area
  voiceButton: { }  // styles for voice button
}
```
You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.  
You can change these values using [APImethod](#custom_styles "description of method").



### Languages <a name="conf_languages"></a>
Props from languages:  
```javascript
{
  fileButtonTitle: 'File'  // text in file button title
  placeholder: 'Write message'  // text in placeholder
  sendButtonTitle: 'Send'  // text in send button title
  shareButtonTitle: 'Share'  // text in share button title
  stickerButtonTitle: 'Sticker'  // text in sticker button title
  voiceButtonTitle: 'Voice'  // text in voice button title
}
```
You can change these values using [APImethod](#custom_languages "description of method").



## Customization <a name="customization"></a>
To custom `Sender` component, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.  
Customization includes:  
* [UIManagment](#custom_managment)
* [Settings](#custom_settings)
* [Styles](#custom_styles)
* [Languages](#custom_languages)








### UIManagment <a name="custom_managment"></a>
To call the [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "description of method") with event `setUpSender`, it's allows you to choose and overwrite the values related to [Managment](#conf_managment), on which component `Sender` is based.
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpSender', {
  addFileButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  addStickersButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  audioMessageButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  sendButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  shareButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  blockInput: true,
  blockSubmit: true
})
```

Options data:   
<table>
  <tr>
    <td colspan="2" align=center><b>Key</b></td>
    <td align=center><b>Type</b></td>
    <td align=center><b>Description</b></td>
  </tr>
 
  <tr>
    <td colspan="2">addFileButton</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying add file button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withTitle</td>
    <td>boolean</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withIcon</td>
    <td>boolean</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">addStickersButton</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying add stickers button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withTitle</td>
    <td>boolean</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withIcon</td>
    <td>boolean</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">audioMessageButton</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying audio message button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withTitle</td>
    <td>boolean</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withIcon</td>
    <td>boolean</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">sendButton</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying send button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withTitle</td>
    <td>boolean</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withIcon</td>
    <td>boolean</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">shareButton</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying share button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withTitle</td>
    <td>boolean</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withIcon</td>
    <td>boolean</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">blockInput</td>
    <td>boolean</td>
    <td>block input or not </td>
  </tr>
  <tr>
    <td colspan="2">blockSubmit</td>
    <td>boolean</td>
    <td>block submit or not </td>
  </tr>
</table>







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
