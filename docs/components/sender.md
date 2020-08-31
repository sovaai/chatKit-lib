
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
Component expects configuration info from storage. `Header` touch 4 global keys from STORE:  

| Key                               |                                            |
|-----------------------------------|--------------------------------------------|
| [managment](#conf_managment)      | information to control UI                  |
| [settings](#conf_settings)        | information to control media info          |
| [styles](#conf_styles)            | information to control styles packets      |
| [languages](#conf_languages)      | information to control Languages packets   |



### Managment <a name="conf_managment"></a>
Props from `managment`:  
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
Props from `settings`:  
```javascript
{
  addFileIcon: {  // choice of image which will be shown as add file icon from https://fontawesome.com/
    icon: ['fas', 'plus'],
    className: '',
    props: {}
  },
  addStickersIcon: {  // choice of image which will be shown as add stickers icon from https://fontawesome.com/
    icon: ['fas', 'sticky-note'],
    className: '',
    props: {}
  },
  audioMessageIcon: {  // choice of image which will be shown as audio message icon from https://fontawesome.com/
    icon: ['fas', 'microphone'],
    className: '',
    props: {}
  },
  sendIcon: {  // choice of image which will be shown as send icon from https://fontawesome.com/
    icon: ['fas', 'arrow-up'],
    className: '',
    props: {}
  },
  shareIcon: {  // choice of image which will be shown as share icon from https://fontawesome.com/
    icon: ['fas', 'share-alt'],
    className: '',
    props: {}
  }
}
```
You can change these values using [APImethod](#custom_settings "description of method").



### Styles <a name="conf_styles"></a>
Props from `styles`:  
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
Props from `languages:`  
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
To call the [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "description of method") with event `setUpSender`, that allows you to choose and overwrite the values related to [Managment](#conf_managment), on which component `Sender` is based.
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
    <td align=center><b>Required</b></td>
    <td align=center><b>Description</b></td>
  </tr>
  <tr>
    <td colspan="2">addFileButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying add file button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">addStickersButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying add stickers button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">audioMessageButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying audio message button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">sendButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying send button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">shareButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying share button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">blockInput</td>
    <td>boolean</td>
    <td>+</td>
    <td>block input or not </td>
  </tr>
  <tr>
    <td colspan="2">blockSubmit</td>
    <td>boolean</td>
    <td>+</td>
    <td>block submit or not </td>
  </tr>
</table>



### Settings <a name="custom_settings"></a>
To call the [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") with event `changeIcon`, that allows you to overwrite path to chosen icons in [Settings](#conf_settings). 
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('changeIcon', {
  iconName: 'searchIcon',
  iconData: { 
    props: { 
      size: 2 
    }, 
    icon: ['fas', 'play'], 
  } 
}) 
```
Options data: 

<table>
  <tr>
    <td colspan="2" align=center><b>Key</b></td>
    <td align=center><b>Type</b></td>
    <td align=center><b>Required</b></td>
    <td align=center><b>Description</b></td>
  </tr>
  <tr>
    <td colspan="2">iconName</td>
    <td>string</td>
    <td>+</td>
    <td>name of icon, you want to change</td>
  </tr>
  <tr>
    <td colspan="2">iconData</td>
    <td>object</td>
    <td></td>
    <td>settings of changes</td>
  </tr>
  <tr>
    <td></td>
    <td>props</td>
    <td>object</td>
    <td>+</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>icon</td>
    <td>string</td>
    <td>+</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>className</td>
    <td>string</td>
    <td>+</td>
    <td></td>
  </tr>
</table>

To see info about `iconData`, visit https://github.com/FortAwesome/react-fontawesome



### Styles <a name="custom_styles"></a>
To call the [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "description of method") with event `changeSender`, it's allows you to choose and overwrite style values in chosen theme and chosen container in [Styles](#conf_styles), on which component `Sender` is based. 
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeSender", {
  themeName: "sovaDark", data: {
    mainContainer: {
      display: 'flex',
      bottom: '0',
      position: 'absolute',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      background: primarySenderBG,
      borderRadius: '0px 0px 17px 17px',
      padding: '5px 20px 5px 20px',
      borderTop: `0.5px solid ${primaryDivider}`,
      minHeight: '53px',
      '@media screen and (max-width: 800px)': {
        minHeight: '6%',
        borderRadius: '0',
      },
    },
    mainContainerSearch: {
      justifyContent: 'space-between',
      color: primaryText,
    },
    searchCountContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    searchButtonContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '59.6px',
      justifyContent: 'space-between',
    },
    switchingActiveButton: {
      border: 'none',
      fontSize: '1.125rem',
      background: primarySenderBG,
      height: '34px',
      outline: 'none',
      padding: '0',
      color: secondaryButton,
      transition: 'color ease-in-out 0.1s',
      cursor: 'pointer',
      '&:hover': {
        color: '#878fa3',
      },
      '&:active': {
        color: primary,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.25rem',
      },
    },
    switchingDisableButton: {
      opacity: '0.2',
      cursor: 'auto',
      '&:hover': {},
      '&:active': {},
    },
    addFileButton: {
      border: 'none',
      fontSize: '1.125rem',
      background: primarySenderBG,
      height: '34px',
      outline: 'none',
      padding: '0',
      color: primaryAccent,
      transition: 'transform ease-in-out 0.3s, color ease-in-out 0.3s',
      cursor: 'pointer',
      '&:hover': {
        color: primary,
      },
      '&:active': {
        opacity: '0.75',
        color: primary,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.25rem',
      },
    },
    sendMessageButton: {
      border: 'none',
      fontSize: '1.125rem',
      background: primarySenderBG,
      outline: 'none',
      height: '34px',
      padding: '3px',
      color: primary,
      cursor: 'pointer',
      transition: 'transform ease-in-out 0.3s, color ease-in-out 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        color: primaryAccent,
      },
      '&:active': {
        opacity: '0.75',
        color: primaryAccent,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.25rem',
      },
    },
    shareButton: {},
    stickersButton: {},
    textArea: {
      minWidth: '270px',
      resize: 'none',
      border: 'none',
      outline: 'none',
      minHeight: '27px',
      color: primaryText,
      background: 'none',
      overflowY: 'auto',
      wordWrap: 'break-word',
      flex: 1,
      margin: '0 1rem',
      padding: 0,
      marginTop: '10px',
      ...fonts,
      '@media screen and (max-width: 800px)': {
        borderRadius: '15px',
        border: `1px solid ${primaryDivider}`,
        padding: '6px',
        fontSize: '1rem',
        minWidth: '260px',
      },
      '@media screen and (max-width: 480px)': {
        minWidth: '74%',
      },
      '::-webkit-input-placeholder': {
        color: primaryPlaceholder,
        opacity: '0.2',
      },
      '::-moz-placeholder': {
        color: primaryPlaceholder,
        opacity: '0.2',
      },
      '-ms-input-placeholder': {
        color: primaryPlaceholder,
        opacity: '0.2',
      },
    },
    voiceButton: {},
    filesContainer: {
      width: '100%',
      overflowX: 'scroll',
      display: 'flex',
      padding: '8px 0 8px 0',
      animation: 'show 0.3s 1',
      '::-webkit-scrollbar': { width: '0' },
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    fileContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60px',
      minWidth: '60px',
      maxWidth: '60px',
      borderRadius: '5px',
      background: primaryFileBackground,
      marginRight: '8px',
      '& .ckProgressLoader': {
        position: 'absolute',
        display: 'flex',
      },
      animation: 'show 0.3s 1',
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    fileImage: {
      height: '100%',
      minWidth: '100%',
      maxWidth: '100%',
      borderRadius: '5px',
    },
    deleteFileButton: {
      position: 'absolute',
      left: '36px',
      top: '0px',
      cursor: 'pointer',
      '&:hover': {
        opacity: '0.5',
      },
      '&:active': {
        opacity: '1',
      },
    },
  }
})
```

Options data:

| Key                        |   Type          | Required  |  Description                                              |
|----------------------------|-----------------|-----------|-----------------------------------------------------------|
| themeName                  | string          |     +     | theme name, in which styles you want to change anything   |
| mainContainer              | object styles   |     +     | styles for main container                                 |
| mainContainerSearch        | object styles   |     +     | styles for main container search                          |
| searchCountContainer       | object styles   |     +     | styles for search count container                         |
| searchButtonContainer      | object styles   |     +     | styles for search button container                        |
| switchingActiveButton      | object styles   |     +     | styles for switching active button                        |
| switchingDisableButton     | object styles   |     +     | styles for switching disable button                       |
| addFileButton              | object styles   |     +     | styles for add file button                                |
| sendMessageButton          | object styles   |     +     | styles for send message button                            |
| shareButton                | object styles   |     +     | styles for share button                                   |
| stickersButton             | object styles   |     +     | styles for stickers button                                |
| textArea                   | object styles   |     +     | styles for text area                                      |
| voiceButton                | object styles   |     +     | styles for voice button                                   |
| filesContainer             | object styles   |     +     | styles for files container                                |
| fileContainer              | object styles   |     +     | styles for file container                                 |
| fileImage                  | object styles   |     +     | styles for file image                                     |
| deleteFileButton           | object styles   |     +     | styles for  delete file button                            |

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.


### Languages <a name="custom_languages"></a>
To call the [langugeAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI.md "description of method") with event `changeSender` it's allows you to choose and overwrite values in chosen language packet and chosen key in [Languages](#conf_languages), on which component `Sender` is based. 

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeSender', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    fileButtonTitle: 'File',
    placeholder: 'Write message',
    sendButtonTitle: 'Send',
    shareButtonTitle: 'Share',
    stickerButtonTitle: 'Sticker',
    voiceButtonTitle: 'Voice'
  }
})
```

Options data:    

| Key                  |   Type          | Required  |  Description                    |
|----------------------|-----------------|-----------|---------------------------------|
| fileButtonTitle      | string          |     +     | text in file button title       |
| placeholder          | string          |     +     | text in placeholder             |
| sendButtonTitle      | string          |     +     | text in send button title       |
| shareButtonTitle     | string          |     +     | text in share button title      |
| stickerButtonTitle   | string          |     +     | text in sticker button title    |
| voiceButtonTitle     | string          |     +     | text in voice button title      |
