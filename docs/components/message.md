# Message
Bubble of text message with information about it



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
    <CkComponents.Message ckStore={true} />
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
Component expects configuration info from storage. Message touch 4 global keys from STORE:  
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
  showDate: false,  // should component show date
  showAvatar: false,  // should component show avatar
  positiveRateMessage: {  // should component show positive rate for message
      enabled: false,  // should component display on widget
      withTitle: false,  // should component show title
      withIcon: true  // should component show icon
  },
  negativeRateMessage: {  // should component show negative rate for message
      enabled: false,  // should component display on widget
      withTitle: false,  // should component show title
      withIcon: true  // should component show icon
  },
  audioMessage: {  // should component show audio message
      enabled: false,  // should component display on widget
      withTitle: false,  // should component show title
      withIcon: true  // should component show icon
  }
}

```
You can change these values using [APImethod](#custom_managment "description of method").



### Settings <a name="conf_settings"></a>
Props from settings:  
```javascript
{
  avatar: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4', // path to the image which will be shown as avatar ,
  positiveRateIcon: 'fas thumbs-up',  // choice of image which will be shown as positive rate icon,
  negativeRateIcon 'fas thumbs-down',  // choice of image which will be shown as negative rate icon,
  audioMessageIcon: 'fas play' // choice of image which will be shown as audio message icon
}
```
You can change these values using [APImethod](#custom_settings "description of method").


### Styles <a name="conf_styles"></a>
Props from styles: 
<details>
 <summary>For user message</summary>
 
 
 ```javascript
{
  mainContainer: {  // styles for main container
  margin: "1px"
  },
  positiveRateMessageButton: {  // styles for positive rate message button
  display": "none
  },
  negativeRateMessageButton: {  // styles for negative rate message button
  display": "none
  },
  avatarContainer: {  // styles for avatar container
  margin: "1px"
  },
  audioMessageButton: {  // styles for audio message button
    margin: "1px"
  },
  image: {  // styles for tag ‘img’
    maxWidth: "200px"
  },
  dataContainer: {  // styles for data container
    width: "100%",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: "12px",
    marginTop: "2px",
    color: "#0F1F48"
  },
  textContainer: {  // styles for text container
    padding: "16px",
    fontSize: "14px",
    color: "#FFFFFF",
    background: "#386FFE",
    textAlign: "left",
    width: "100%",
    fontFamily: "Helvetica",
    borderRadius: "17px 17px 0 17px",
    wordBreak: "break-all",
    lineHeight: "18px"
  },
  bubbleContainer: {  // styles for bubble container
    display: "flex",
    flexWrap: "wrap"
  },
  buttonsContainer: {  // styles for buttons container
  }
}
```

</details>
 
<details>
<summary>For response message</summary>
 
```javascript
{
 mainContainer: {  // styles for main container
 margin: "1px"
 },
 positiveRateMessageButton: {  // styles for positive rate message button
 padding: 0,
 alignSelf: "flex-end",
 marginLeft: "4%"
 },
 negativeRateMessageButton: {  // styles for negative rate message button
 padding: 0,
 alignSelf: "flex-end",
 marginLeft: "4%"
 },
 avatarContainer: {  // styles for avatar container
 margin: "1px"
 },
 audioMessageButton: {  // styles for audio message button
   margin: "1px"
 },
 image: {  // styles for tag ‘img’
   maxWidth: "200px"
 },
 dataContainer: {  // styles for data container
   textAlign: "left",
   fontFamily: "Roboto",
   fontSize: "12px",
   marginTop: "2px",
   color: "#0F1F48"
 },
 textContainer: {  // styles for text container
   padding: "16px",
   fontSize: "14px",
   color: "#0F1F48",
   background: "#F3F3F3",
   width: "100%",
   textAlign: "left",
   fontFamily: "Helvetica",
   lineHeight: "18px",
   borderRadius: "17px 17px 17px 0",
   & a: {
     color: "#386FFE",
     transition: "color ease-in-out 0.3s"
   },
   & a:hover: {
     color: "#FC2D81"
   },
   & a:active: {
     color: "#FC2D81"
    }
 },
 bubbleContainer: {  // styles for bubble container
   display: "flex",
   flexWrap: "wrap"
 },
 buttonsContainer: {  // styles for buttons container
 }
}
```
 
</details>
 
You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.  
You can change these values using [APImethod](#custom_styles "description of method").



### Languages <a name="conf_languages"></a>
Props from languages:  
```javascript
{
  rateButtonTitle: 'Rate'  // text in rate button title,
  audioMessageButtonTitle: 'Audio message'  // text in audio message button title 
}
```
You can change these values using [APImethod](#custom_languages "description of method").



## Customization <a name="customization"></a>
To custom `Message` component, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.  
Customization includes:  
* [UIManagment](#custom_managment)
* [Settings](#custom_settings)
* [Styles](#custom_styles)
* [Languages](#custom_languages)



### UIManagment <a name="custom_managment"></a>
To call the [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "description of method") with event `setUpMessage`, it's allows you to choose and overwrite the values related to [Managment](#conf_managment), on which component `Message` is based.
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpMessage', {
  audioMessageButton: {
    enabled: true,
    withTitle: false,
    withIcon: true
  },
  positiveRateMessage: {
    enabled: true,
    withTitle: false,
    withIcon: true
  },
  negativeRateRateMessage: {
    enabled: true,
    withTitle: false,
    withIcon: true
  },
showAvatar: false,
showTitle: true
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
    <td colspan="2">audioMessageButtonn</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying reset button or not </td>
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
    <td colspan="2">positiveRateMessage</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying settings button or not</td>
  </tr>
  <tr>
    <td></td>
    <td>show withTitle</td>
    <td>boolean</td>
    <td>is responsible for displaying button with title or not</td>
  </tr>
  <tr>
    <td></td>
    <td>show withIcon</td>
    <td>boolean</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">negativeRateRateMessage</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying reset button or not </td>
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
    <td colspan="2">showAvatar</td>
    <td>boolean</td>
    <td>is responsible for displaying avatar or not </td>
  </tr>
  <tr>
    <td colspan="2">showTitle</td>
    <td>boolean</td>
    <td>is responsible for displaying title or not </td>
  </tr>
</table>



## Settings
To call the [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") with event `changeAvatar`/ `changeIcon`, it's allows you to overwrite path to chosen avatar / ?? in [Settings](#conf_settings). 

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('changeAvatar', {
  path: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4',

ckAPIMethods.uiManagment('changeIcon', {
  iconName: ??,
  iconData: ??
})
```
Options data: 
| Key             |   Type     |  Description       |
|-----------------|------------|--------------------|
| `path`          | string     | path to picture    |
| `iconName`      | string     |  ??                |









## Styles
### For user message
```
ckAPIMethods.styles('changeUserMessage', {
  themeName: [theme name, wich styles you want to change],
  data: {
    [mainContainer styles],
    [positiveRateMessageButton styles],
    [negativeRateMessageButton styles],
    [avatarContainer styles],
    [audioMessageButton styles],
    [image styles],
    [dataContainer styles],
    [textContainer styles],
    [bubbleContainer styles],
    [buttonsContainer styles]
  },
})
```
### For response message
```
ckAPIMethods.styles('changeResponseMessage', {
  themeName: [theme name, wich styles you want to change],
  data: {
    [mainContainer styles],
    [positiveRateMessageButton styles],
    [negativeRateMessageButton styles],
    [avatarContainer styles],
    [audioMessageButton styles],
    [image styles],
    [dataContainer styles],
    [textContainer styles],
    [bubbleContainer styles],
    [buttonsContainer styles]
  },
})
```

## Languages
```
ckAPIMethods.languages('changeMessage', {
  language: [language name, wich packet you want to change],
  data: {
    [text title]
  }
})
```

