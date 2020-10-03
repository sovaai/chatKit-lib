# Dialog
Displaying a set of text messages



## Table of content
* [Usage](#usage) 
* [Component props](#component-props)   
* [Configuration](#configuration)   
* [Customization](#customization)   



## Usage
```javascript
import React from "react"
import { CkComponents } from "sova-chatkit"
 
function App() {
  return (
  <div className="App">
    <CkComponents.Dialog ckStore={true} />
  </div>
  )
}
 
export default App
```



## Component props

| Prop       | Type    |  Description                                                                                      |
|------------|---------|---------------------------------------------------------------------------------------------------|
| `ckStore`  | boolean | should cling information from the base [ckStore](https://github.com/sovaai/chatKit-lib#3) or not  |



## Configuration
Component expects configuration info from storage. Dialog touch 4 global keys from STORE: 

| Key                               |                                            |
|-----------------------------------|--------------------------------------------|
| [managment](#managment)      | information to control UI                  |
| [settings](#settings)        | information to control media info          |
| [styles](#styles)            | information to control styles packets      |
| [languages](#languages)      | information to control languages packets   |



### Managment
Props from `managment`:  
```javascript
{
  rate: {
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  },
  search: { 
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  },
  loader: {  
    enabled: true,  // should component show messageLoader 
    withTitle: false,  // should component show messageLoader title 
    withIcon: true,  // should component show messageLoader icon 
  }, 
  dividerEnabled: true,  // should component show divider
}
```
You can change these values using [APImethod](#uimanagment "description of method").



### Settings
Props from `settings`:  
```javascript
{
  rateIcon: {  // choice of image which will be shown as rate icon from https://fontawesome.com/
    icon: ['fas', 'thumbs-up'],
    className: '',
    props: {}
  },
  searchIcon: {  // choice of image which will be shown as search icon from https://fontawesome.com/
    icon: ['fas', 'search'],
    className: '',
    props: {}
  }
}
```
You can change these values using [APImethod](#settings-1 "description of method").



### Styles
Props from `styles`:  
```javascript
{
  mainContainer: {  // styles for main container
    margin: "1px",
  },
 panel: {  // styles for panel
    maxWidth: "300px",
  },
 rateButton: {  // styles for rate button
    maxWidth: "10px",
  },
 searchButton: {  // styles for search button
    maxWidth: "4px",
  },
 messagesContainer: { },  // styles for messages container
}
```
You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.  
You can change these values using [APImethod](#styles-1 "description of method").



### Languages
Props from `languages`:  
```javascript
{
  searchButtonTitle: 'Search'  // text in search button title
  rateButtonTitle: 'Rate'  // text in rate button title
  loading: 'typing...'  // text in loading
}
```
You can change these values using [APImethod](#languages-1 "description of method").



## Customization
To custom component `Dialog`, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.  
Customization includes:  

* [UIManagment](#uimanagment)
* [Settings](#settings-1)
* [Styles](#styles-1)
* [Languages](#languages-1)



### UIManagment
To call the [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "description of method") with event `setUpDialog`, that allows you to choose and overwrite the values related to [Managment](#managment), on which component `Dialog` is based.
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpDialog', {
  rateButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  searchButton: {
    enabled: true,
    withTitle: false,
    withIcon: true
  },
  loader: {  
    enabled: true,
    withTitle: false, 
    withIcon: true,
  }, 
showMsgLoad: true
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
    <td colspan="2">rateButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying rate button or not </td>
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
    <td colspan="2">searchButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying search button or not</td>
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
  <td colspan="2">loader</td>
  <td>object</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td>enabled</td>
  <td>boolean</td>
  <td>+</td>
  <td>is responsible for displaying loader or not </td>
</tr>
<tr>
  <td></td>
  <td>withTitle</td>
  <td>boolean</td>
  <td>+</td>
  <td>is responsible for displaying loader with title or not </td>
</tr>
<tr>
  <td></td>
  <td>withIcon</td>
  <td>boolean</td>
  <td>+</td>
  <td>is responsible for displaying loader with icon or not</td>
</tr>
  <tr>
    <td colspan="2">showMsgLoad</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying message loading </td>
  </tr>
</table>



### Settings
To call the [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") with event `changeIcon`, that allows you to overwrite path to chosen icons in [Settings](#settings). 
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
    <td>+</td>
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


### Styles
To call the [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "description of method") with event `changeDialog`, it's allows you to choose and overwrite style values in chosen theme and chosen container in [Styles](#styles), on which component `Dialog` is based. 
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeDialog", {
  themeName: "sovaDark",  // theme name, in which styles you want to change anything 
  data: {
    mainContainer: {
      height: '496px',
      minHeight: '496px',
      background: primaryBackground,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      boxSizing: 'border-box',
      animation: 'show 0.3s 1',
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      '@media screen and (max-width: 800px)': {
        height: '100vh',
        paddingTop: '60px',
      },
    },
    panel: {},
    rateButton: {},
    searchButton: {},
    messagesContainer: {
      maxHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      '@media screen and (max-width: 800px)': {
        // paddingBottom: '50px',
      },
    },
  }
```

Options data:

| Key                |   Type          |  Required |  Description                  |
|--------------------|-----------------|-----------|-------------------------------|
| mainContainer      | object styles   |     +     | styles for main container     |
| panel              | object styles   |     +     | styles for panel              |
| rateButton         | object styles   |     +     | styles for rate button        |
| search button      | object styles   |     +     | styles for search button      |
| messagesContainer  | object styles   |     +     | styles for messages container |

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.
 

### Languages
To call the [langugeAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI.md "description of method") with event `changeDialog` it's allows you to choose and overwrite values in chosen language packet and chosen key in [Languages](#languages), on which component `Dialog` is based. 

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeDialog', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    searchButtonTitle: 'Search',
    rateButtonTitle: 'Rate',
    loading: 'typing...'
  }
})
```

Options data:    

| Key                |   Type          |  Required |  Description                  |
|--------------------|-----------------|-----------|-------------------------------|
| searchButtonTitle  | string          |     +     | text in search button title   |
| rateButtonTitle    | string          |     +     | text in rate button title     |
| loading            | string          |     +     | text in loading               |
