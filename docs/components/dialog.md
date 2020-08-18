# Dialog
Displaying a set of text messages



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
    <CkComponents.Dialog ckStore={true} />
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
Component expects configuration info from storage. Dialog touch 4 global keys from STORE: 

| Key                               |                                            |
|-----------------------------------|--------------------------------------------|
| [managment](#conf_managment)      | information to control UI                  |
| [settings](#conf_settings)        | information to control media info          |
| [styles](#conf_styles)            | information to control styles packets      |
| [languages](#conf_languages)      | information to control languages packets   |



### Managment <a name="conf_managment"></a>
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
  dividerEnabled: true,  // should component show divider
}
```
You can change these values using [APImethod](#custom_managment "description of method").



### Settings <a name="conf_settings"></a>
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
You can change these values using [APImethod](#custom_settings "description of method").



### Styles <a name="conf_styles"></a>
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
You can change these values using [APImethod](#custom_styles "description of method").



### Languages <a name="conf_languages"></a>
Props from `languages`:  
```javascript
{
  searchButtonTitle: 'Search'  // text in search button title
  rateButtonTitle: 'Rate'  // text in rate button title
  loading: 'typing...'  // text in loading
}
```
You can change these values using [APImethod](#custom_languages "description of method").



## Customization <a name="customization"></a>
To custom component `Dialog`, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.  
Customization includes:  
* [UIManagment](#custom_managment)
* [Settings](#custom_settings)
* [Styles](#custom_styles)
* [Languages](#custom_languages)



### UIManagment <a name="custom_managment"></a>
To call the [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "description of method") with event `setUpDialog`, that allows you to choose and overwrite the values related to [Managment](#conf_managment), on which component `Dialog` is based.
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
showMsgLoad: true
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
    <td colspan="2">rateButton</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying rate button or not </td>
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
    <td colspan="2">searchButton</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying search button or not</td>
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
    <td colspan="2">showMsgLoad</td>
    <td>boolean</td>
      <td>is responsible for displaying message loading </td>
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
    <td align=center><b>Description</b></td>
  </tr>
  <tr>
    <td colspan="2">iconName</td>
    <td>string</td>
    <td>name of icon, you want to change</td>
  </tr>
  <tr>
    <td colspan="2">iconData</td>
    <td>object</td>
    <td>settings of changes</td>
  </tr>
  <tr>
    <td></td>
    <td>props</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>icon</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>className</td>
    <td>string</td>
    <td></td>
  </tr>
</table>
To see info about `iconData`, visit https://github.com/FortAwesome/react-fontawesome


### Styles <a name="custom_styles"></a>
To call the [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "description of method") with event `changeDialog`, it's allows you to choose and overwrite style values in chosen theme and chosen container in [Styles](#conf_styles), on which component `Dialog` is based. 
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeDialog", {
  themeName: "sovaDark",  // theme name, in which styles you want to change anything 
  data: {
    mainContainer: {},
    panel: {},
    rateButton: {},
    searchButton: {},
    messagesContainer: {}
  },
})
```

Options data:

| Key                |   Type          |  Description                  |
|--------------------|-----------------|-------------------------------|
| mainContainer      | object styles   | styles for main container     |
| panel              | object styles   | styles for panel              |
| rateButton         | object styles   | styles for rate button        |
| search button      | object styles   | styles for search button      |
| messagesContainer  | object styles   | styles for messages container |

 

### Languages <a name="custom_languages"></a>
To call the [langugeAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI.md "description of method") with event `changeDialog` it's allows you to choose and overwrite values in chosen language packet and chosen key in [Languages](#conf_languages), on which component `Dialog` is based. 

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

| Key                |   Type          |  Description                  |
|--------------------|-----------------|-------------------------------|
| searchButtonTitle  | string          | text in search button title   |
| rateButtonTitle    | string          | text in rate button title     |
| loading            | string          | text in loading               |
