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
  avatar: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4', // path to the image which will be shown as avatar  
  positiveRateIcon: {  // choice of icon which will be shown as positive rate icon from https://fontawesome.com/
    icon: ['fas', 'thumbs-up'],
    className: '',
    props: {},
  },
  negativeRateIcon: {  // choice of icon which will be shown as negative rate icon from https://fontawesome.com/
    icon: ['far', 'thumbs-down'],
    className: '',
    props: {},
  },
  playMessageIcon: { // choice of icon which will be shown as audio message icon from https://fontawesome.com/
    icon: ['fas', 'play'],
    className: '',
    props: {},
  }
}
```
To see information about icons, visit https://www.npmjs.com/package/@fortawesome/react-fontawesome.  
You can change these values using [APImethod](#custom_settings "description of method").


### Styles <a name="conf_styles"></a>
Props from styles:  
For user message:
  
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

For response message:
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
To call the [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "description of method") with event `setUpMessage`, that allows you to choose and overwrite the values related to [Managment](#conf_managment), on which component `Message` is based.
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
On call [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") you must enter event name. Depending on the event name something will be changed.

List of event names:  
* `changeAvatar`  
* `changeIcon`  


To call the [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") with event `changeAvatar`, that allows you to overwrite path to chosen avatar in [Settings](#conf_settings). 

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

For icons:  
To call the [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") with event `changeIcon`, it's allows you to overwrite path to chosen icons in [Settings](#conf_settings). 


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
| `iconName`      | string     |  ??                |
 
 

### Styles <a name="custom_styles"></a>
To call the [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "description of method") with event `changeUserMessage` (for user messages) or `changeResponseMessage` (for response messages), it's allows you to choose and overwrite style values in chosen theme and chosen container in [Styles](#conf_styles), on which component `Message` (user or response) is based. 

For user message:

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles('changeUserMessage', {
  themeName: "sovaDark",  // theme name, in which styles you want to change anything,
  data: {
    mainContainer {},
    positiveRateMessageButton {},
    negativeRateMessageButton {},
    avatarContainer {},
    audioMessageButton {},
    image styles] {},
    dataContainer {},
    textContainer {},
    bubbleContainer {},
    buttonsContainer {}
  }
})
```
Options data:
| Key                          |   Type          |  Description                              |
|------------------------------|-----------------|-------------------------------------------|
| mainContainer                | object styles   | styles for main container                 |
| positiveRateMessageButton    | object styles   | styles for positive rate message button   |
| negativeRateMessageButton    | object styles   | styles for negative rate message button   |
| avatarContainer              | object styles   | styles for avatar container               |
| audioMessageButton           | object styles   | styles for audio message button           |
| image styles                 | object styles   | styles for tag `img`                      |
| dataContainer                | object styles   | styles for data container                 |
| textContainer                | object styles   | styles for text container                 |
| bubbleContainer              | object styles   | styles for bubble container               | 
| buttonsContainer             | object styles   | styles for buttons container              |

For response message: 
 ```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles('changeResponseMessage', {
  themeName: "sovaDark",  // theme name, in which styles you want to change anything,
  data: {
    mainContainer {},
    positiveRateMessageButton {},
    negativeRateMessageButton {},
    avatarContainer {},
    audioMessageButton {},
    image styles] {},
    dataContainer {},
    textContainer {},
    bubbleContainer {},
    buttonsContainer {}
  }
})
```

Options data:
| Key                          |   Type          |  Description                              |
|------------------------------|-----------------|-------------------------------------------|
| mainContainer                | object styles   | styles for main container                 |
| positiveRateMessageButton    | object styles   | styles for positive rate message button   |
| negativeRateMessageButton    | object styles   | styles for negative rate message button   |
| avatarContainer              | object styles   | styles for avatar container               |
| audioMessageButton           | object styles   | styles for audio message button           |
| image styles                 | object styles   | styles for tag `img`                      |
| dataContainer                | object styles   | styles for data container                 |
| textContainer                | object styles   | styles for text container                 |
| bubbleContainer              | object styles   | styles for bubble container               | 
| buttonsContainer             | object styles   | styles for buttons container              |



### Languages <a name="custom_languages"></a>
To call the [langugeAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI.md "description of method") with event `changeMessage` it's allows you to choose and overwrite values in chosen language packet and chosen key in [Languages](#conf_languages), on which component `Message` is based. 

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeMessage', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    rateButtonTitle: 'Rate',
    audioMessageButtonTitle: 'Audio message'
  }
})
```

Options data:    
| Key                        |   Type          |  Description                        |
|----------------------------|-----------------|-------------------------------------|
| rateButtonTitle            | string          | text in rate button title           |
| audioMessageButtonTitle    | string          | text in audio message button title  |
