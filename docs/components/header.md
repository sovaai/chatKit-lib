# Header
Widget title



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
  <CkComponents.Header ckStore={true} />
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
Props from `managment`:  
```javascript
{
  showTitle: true,  // should component show title
  showAvatar: true,  // should component show avatar
  settings: {
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  },
  close: { 
    enabled: true, // should component show close button 
    withTitle: false,  // should component show close button title 
    withIcon: true,  // should component show close button icon 
  }, 
  search: {     
    enabled: true,  // should component show search button 
    withTitle: false,  // should component show search button title 
    withIcon: true,  // should component show search button icon 
  }, 
  reset: { 
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  }
}
```
You can change these values using [APImethod](#custom_managment "description of method").



### Settings <a name="conf_settings"></a>
Props from `settings`:  
```javascript
{
  avatar: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4',  // path to the image which will be shown as avatar
  resetIcon: {  // choice of image which will be shown as reset icon from https://fontawesome.com/
    icon: ['fas', 'redo-alt'],
    className: '',
    props: {}
  },
  settingsIcon: {  // choice of image which will be shown as settings icon from https://fontawesome.com/
    icon: ['fas', 'ellipsis-v'],
    className: '',
    props: {}
  },
  closeSettingsIcon: {  // choice of image which will be shown as close settings icon from https://fontawesome.com/
    icon: ['fas', 'arrow-down'],
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
  avatarContainer: { // styles for avatar container
    maxWidth: "200px",
  },
  titleContainer: { // styles for title container
    textAlign: "4px",
  },
  buttonsContainer: { // styles for buttons
    resetButton: {},  // styles for reset Button
    settingsButton: {} // styles for settings Button
  },
  image: { // styles for tag <img/>
    maxWidth: "200px",
  },
}
```
You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.  
You can change these values using [APImethod](#custom_styles "description of method").



### Languages <a name="conf_languages"></a>
Props from `languages`:  
```javascript
{
  title: 'SOVA Chat Kit'  // text in Title 
  settingsButtonTitle: 'settings'  // text in settings button title
  resetButtonTitle: 'reset'  // text in reset button title
}
```
You can change these values using [APImethod](#custom_languages "description of method").



## Customization <a name="customization"></a>
To custom `Header` component, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.  
Customization includes:  
* [UIManagment](#custom_managment)
* [Settings](#custom_settings)
* [Styles](#custom_styles)
* [Languages](#custom_languages)



### UIManagment <a name="custom_managment"></a>
To call the [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "description of method") with event `setUpHeader`, that allows you to choose and overwrite the values related to [Managment](#conf_managment), on which component `Header` is based.
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpHeader', {
  showTitle: true,
  showAvatar: true,
  settings: {
    enabled: true,
    withTitle: false,
    withIcon: true,
  },
  close: { 
    enabled: true,
    withTitle: false,
    withIcon: true,
  }, 
  search: {
    enabled: true,   
    withTitle: false,  
    withIcon: true,
  }, 
  reset: {
    enabled: true,
    withTitle: false,
    withIcon: true,
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
      <td colspan="2">showTitle</td>
      <td>boolean</td>
      <td>should component show title</td>
  </tr>
  <tr>
      <td colspan="2">showAvatar</td>
      <td>boolean</td>
      <td>should component show avatar</td>
  </tr>
  <tr>
      <td colspan="2">settings</td>
      <td>object</td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td>enabled</td>
      <td>boolean</td>
      <td>should component display on widget </td>
  </tr>
  <tr>
      <td></td>
      <td>withTitle</td>
      <td>boolean</td>
      <td>should component show title </td>
  </tr>
  <tr>
      <td></td>
      <td>withIcon</td>
      <td>boolean</td>
      <td>should component show icon</td>
  </tr>
  <tr>
      <td colspan="2">close</td>
      <td>object</td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td>enabled</td>
      <td>boolean</td>
      <td>should component show close button </td>
  </tr>
  <tr>
      <td></td>
      <td>withTitle</td>
      <td>boolean</td>
      <td>should component show close button title</td>
  </tr>
  <tr>
      <td></td>
      <td>withIcon</td>
      <td>boolean</td>
      <td>should component show close button icon</td>
  </tr>
  <tr>
      <td colspan="2">search</td>
      <td>object</td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td>enabled</td>
      <td>boolean</td>
      <td>should component show search button</td>
  </tr>
  <tr>
      <td></td>
      <td>withTitle</td>
      <td>boolean</td>
      <td>should component show search button title</td>
  </tr>
  <tr>
      <td></td>
      <td>show withIcon</td>
      <td>boolean</td>
      <td>should component show search button icon</td>
  </tr>
  <tr>
      <td colspan="2">reset</td>
      <td>object</td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td>enabled</td>
      <td>boolean</td>
      <td>should component display on widget</td>
  </tr>
  <tr>
      <td></td>
      <td>withTitle</td>
      <td>boolean</td>
      <td>should component show title </td>
  </tr>
  <tr>
      <td></td>
      <td>show withIcon</td>
      <td>boolean</td>
      <td>should component show icon</td>
  </tr>
</table>



### Settings <a name="custom_settings"></a>
On call [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") you must enter event name. Depending on the event name something will be changed.

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

| Key             |   Type     |  Description       |
|-----------------|------------|--------------------|
| `path`          | string     | path to picture    |


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
To call the [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "description of method") with event `changeHeader`, it's allows you to choose and overwrite style values in chosen theme and chosen container in [Styles](#conf_styles), on which component `Header` is based. 
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeHeader", {
  themeName: "sovaDark",  // theme name, in which styles you want to change anything
  data: {
    mainContainer: {},
    avatarContainer: {},
    titleContainer: {},
    buttonsContainer: {  
      resetButton: {},
      settingsButton: {}
   },
    image: {},
  },
})
```

Options data:

| Key                |   Type          |  Description                  |
|--------------------|-----------------|-------------------------------|
| mainContainer      | object styles   | styles for main container     |
| avatarContainer    | object styles   | styles for avatar container   |
| titleContainer     | object styles   | styles for title container    |
| buttonsContainer   | object styles   | list of styles for buttons    |
| resetButton        | object styles   | styles for reset button       |
| settingsButton     | object styles   | styles for settings button    |
| image              | object styles   | styles for tag `img`         |

 

### Languages <a name="custom_languages"></a>
To call the [langugeAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI.md "description of method") with event `changeHeader` it's allows you to choose and overwrite values in chosen language packet and chosen key in [Languages](#conf_languages), on which component `Header` is based. 

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeHeader', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    title: 'Help?',
    settingsButtonTitle: 'settings',
    resetButtonTitle: 'reset'
  }
})
```

Options data:    

| Key                  |   Type          |  Description                    |
|----------------------|-----------------|---------------------------------|
| title                | string          | text in title                   |
| settingsButtonTitle  | string          | text in settings button title   |
| resetButtonTitle     | string          | text in reset button title      |

