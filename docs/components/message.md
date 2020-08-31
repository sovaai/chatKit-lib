
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
Component expects configuration info from storage. `Message` touch 4 global keys from STORE:  

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
You can change these values using relevant [APImethod](#custom_managment "description of method").




### Settings <a name="conf_settings"></a>
Props from `settings`:  
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
To see information about icons, visit [react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome "react-fontawesome").
You can change these values using relevant [APImethod](#custom_settings "description of method").




### Styles <a name="conf_styles"></a>
Props from `styles`:  
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
You can change these values using relevant [APImethod](#custom_styles "description of method").




### Languages <a name="conf_languages"></a>
Props from `languages`:  
```javascript
{
  rateButtonTitle: 'Rate'  // text in rate button title,
  audioMessageButtonTitle: 'Audio message'  // text in audio message button title 
}
```
You can change these values using relevant [APImethod](#custom_languages "description of method").




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
    <td align=center><b>Required</b></td>
    <td align=center><b>Description</b></td>
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
    <td>is responsible for displaying audio message or not </td>
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
    <td colspan="2">positiveRateMessage</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying positive rate message button or not</td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not</td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">negativeRateMessage</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying negative rate message button or not </td>
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
    <td colspan="2">showAvatar</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying avatar or not </td>
  </tr>
  <tr>
    <td colspan="2">showTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying title or not </td>
  </tr>
</table>




## Settings <a name="custom_settings"></a> 
On call [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") you must enter event name.  

List of event names:  

* `changeAvatar`  
* `changeIcon`  

For `changeAvatar`:  
To call the [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") with event `changeAvatar`, that allows you to overwrite path to chosen avatar in [Settings](#conf_settings). 

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.settings('changeAvatar', {
  path: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4',
```
Options data: 

| Key             |   Type     |  Required |  Description       |
|-----------------|------------|-----------|--------------------|
| `path`          | string     |     +     | path to picture    |


For `changeIcons`:  
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
On call [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "description of method") you must enter event name.  

List of event names:  

* `changeUserMessage`  
* `changeResponseMessage`  

For `changeUserMessage`:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles('changeUserMessage', {
  themeName: "sovaDark",  // theme name, in which styles you want to change anything,
  data: {
    mainContainer: {
      display: 'flex',
      flexDirection: 'colomn',
      width: 'fit-content',
      maxWidth: '275px',
      marginLeft: 'auto',
      marginRight: '24px',
      marginBottom: '16px',
      color: primaryWhite,
      background: primary,
      borderRadius: '17px 17px 0 17px',
    },
    groupTypeMessagesNext: {
      marginBottom: '4px',
    },
    groupTypeMessagesPrev: {
      borderRadius: '17px 0 17px 17px',
    },
    groupTypeMessagesInter: {
      borderRadius: '17px 0 0 17px',
    },
    textContainer: {
      textAlign: 'left',
      maxWidth: '100%',
      minWidth: '5%',
      wordBreak: 'break-all',
      '& mark': {
        background: '#FFDF00',
        color: primaryDark,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1rem',
      },
    },
    avatarContainer: {},
    image: {},
    positiveRateMessageButton: {
      display: 'none',
    },
    negativeRateMessageButton: {
      display: 'none',
    },
    audioMessageButton: {},
    dataContainer: {
      width: '100%',
      textAlign: 'left',
      fontSize: '0.75rem',
      marginTop: '8px',
      color: primaryWhite,
      opacity: '0.4',
    },
    bubbleContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '16px',
    },
    buttonsContainer: {},
    imageFile: {
      maxWidth: '190px',
      maxHeight: '222px',
      display: 'flex',
      borderRadius: '17px 17px 0 17px',
    },
    fileContainer: {
      display: 'flex',
      width: '100%',
      marginBottom: '10px',
    },
    svgContainer: {
      marginRight: '16px',
      display: 'flex',
    },
    sizeTittle: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      color: primaryWhite,
      opacity: '0.5',
    },
    fileNameTittle: {
      textAlign: 'left',
      width: '100%',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      color: primaryWhite,
      marginBottom: '4px',
      cursor: 'pointer',
      transition: 'color ease-in-out 0.3s',
      textDecoration: 'none',
      '&:hover': {
        opacity: '0.5',
      },
      '&:active': {
        opacity: '1',
      },
    },
    metaContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    }
})
```

Options data:

| Key                          |   Type          |  Required |  Description                              |
|------------------------------|-----------------|-----------|-------------------------------------------|
| mainContainer                | object styles   |     +     | styles for main container                 |
| groupTypeMessagesNext        | object styles   |     +     | styles for group type messages next       |
| groupTypeMessagesPrev        | object styles   |     +     | styles for group type messages prev       |
| groupTypeMessagesInter       | object styles   |     +     | styles for group type messages inter      |
| textContainer                | object styles   |     +     | styles for text container                 |
| avatarContainer              | object styles   |     +     | styles for avatar container               |
| image                        | object styles   |     +     | styles for tag `img`                      |
| positiveRateMessageButton    | object styles   |     +     | styles for positive rate message button   |
| negativeRateMessageButton    | object styles   |     +     | styles for negative rate message button   |
| audioMessageButton           | object styles   |     +     | styles for audio message button           |
| dataContainer                | object styles   |     +     | styles for data container                 |
| bubbleContainer              | object styles   |     +     | styles for bubble container               | 
| buttonsContainer             | object styles   |     +     | styles for buttons container              |
| imageFile                    | object styles   |     +     | styles for image file                     |
| fileContainer                | object styles   |     +     | styles for file container                 |
| svgContainer                 | object styles   |     +     | styles for svg container                  |
| sizeTittle                   | object styles   |     +     | styles for tittle                         |
| fileNameTittle               | object styles   |     +     | styles for file name tittle               |
| metaContainer                | object styles   |     +     | styles for meta container                 |

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.


For `changeResponseMessage`:
 ```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles('changeResponseMessage', {
  themeName: "sovaDark",  // theme name, in which styles you want to change anything,
  data: {
    mainContainer: {
      display: 'flex',
      flexDirection: 'colomn',
      width: 'fit-content',
      maxWidth: '275px',
      marginLeft: '24px',
      marginRight: 'auto',
      marginBottom: '16px',
      color: primaryText,
      background: primaryResponse,
      borderRadius: '17px 17px 17px 0',
    },
    groupTypeMessagesNext: {
      marginBottom: '4px',
    },
    groupTypeMessagesPrev: {
      borderRadius: '0 17px 17px 17px',
    },
    groupTypeMessagesInter: {
      borderRadius: '0 17px 17px 0',
    },
    textContainer: {
      color: primaryText,
      boxSizing: 'border-box',
      background: primaryResponse,
      maxWidth: '100%',
      minWidth: '5%',
      textAlign: 'left',
      '@media screen and (max-width: 800px)': {
        fontSize: '1rem',
      },
      '& mark': {
        background: '#FFDF00',
        color: primaryDark,
      },
      '& a': {
        color: primaryLinks,
        textDecoration: 'none',
        transition: 'color ease-in-out 0.3s',
      },
      '& ul': {
        margin: '0',
        display: 'flex',
        padding: '0',
        paddingLeft: '8px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
      },
      '& li': {
        marginTop: '10px',
        width: '100%',
        listStyleType: 'none',
      },
      '& a:hover': {
        color: primaryAccent,
      },
      '& a:active': {
        color: primaryAccent,
      },
    },
    avatarContainer: {},
    image: {},
    positiveRateMessageButton: {
      padding: 0,
      alignSelf: 'flex-end',
      marginLeft: '4%',
      display: 'flex',
      alignItems: 'flex-end',
      border: 'none',
      outline: 'none',
      color: primaryText,
      background: 'none',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
      },
    },
    negativeRateMessageButton: {
      padding: 0,
      alignSelf: 'flex-end',
      marginLeft: '4%',
      display: 'flex',
      border: 'none',
      outline: 'none',
      color: primaryText,
      background: 'none',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
      },
    },
    audioMessageButton: {},
    dataContainer: {
      width: '100%',
      textAlign: 'right',
      fontSize: '0.75rem',
      marginTop: '8px',
      color: primaryText,
      opacity: '0.4',
    },
    bubbleContainer: {
      display: 'flex',
      padding: '16px',
      flexDirection: 'column',
      width: '100%',
    },
    buttonsContainer: {},
  })
```

Options data:

| Key                          |   Type          |  Required |  Description                                              |
|------------------------------|-----------------|-----------|-----------------------------------------------------------|
| mainContainer                | object styles   |     +     | styles for main container                                 |
| groupTypeMessagesNext        | object styles   |     +     | styles for group type messages next                       |
| groupTypeMessagesPrev        | object styles   |     +     | styles for group type messages prev                       |
| groupTypeMessagesInter       | object styles   |     +     | styles for group type messages inter                      |
| textContainer                | object styles   |     +     | styles for text container                                 |
| avatarContainer              | object styles   |     +     | styles for avatar container                               |
| image                        | object styles   |     +     | styles for tag `img`                                      |
| positiveRateMessageButton    | object styles   |     +     | styles for positive rate message button                   |
| negativeRateMessageButton    | object styles   |     +     | styles for negative rate message button                   |
| audioMessageButton           | object styles   |     +     | styles for audio message button                           |
| dataContainer                | object styles   |     +     | styles for data container                                 |
| bubbleContainer              | object styles   |     +     | styles for bubble container                               | 
| buttonsContainer             | object styles   |     +     | styles for buttons container                              |
You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.



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

| Key                        |   Type          |  Required |  Description                        |
|----------------------------|-----------------|-----------|-------------------------------------|
| rateButtonTitle            | string          |     +     | text in rate button title           |
| audioMessageButtonTitle    | string          |     +     | text in audio message button title  |




