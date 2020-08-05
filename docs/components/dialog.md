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
| [languages](#conf_languages)      | information to control Languages packets   |



### Managment <a name="conf_managment"></a>
Props from managment:  
```javascript
{
  rate: {
      enabled: true,  // should component display on widge
      withTitle: false,  // should component show title
      withIcon: true,  // should component show icon
      },
  search: { 
      enabled: true,  // should component display on widget
      withTitle: false,  // should component show title
      withIcon: true,  // should component show icon
      },
  dividerEnabled: true,  // should component show divider
},
```
You can change these values using [APImethod](#custom_managment "description of method").



### Settings <a name="conf_settings"></a>
Props from settings:  
```javascript
{
  rateIcon: 'fas thumbs-up'  // choice of image which will be shown as rate icon
  searchIcon: 'far search'  // choice of image which will be shown as search icon
}
```
You can change these values using [APImethod](#custom_settings "description of method").



### Styles <a name="conf_styles"></a>
Props from styles:  
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
Props from languages:  
```javascript
{
  searchButtonTitle: 'Search'  // text in search button title
  rateButtonTitle: 'Rate'  // text in rate button title
  loading: 'typing...'  // text in loading
}
```
You can change these values using [APImethod](#custom_languages "description of method").



## Customization <a name="customization"></a>
To custom `Dialog` component, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.  
Customization includes:  
* [UIManagment](#custom_managment)
* [Settings](#custom_settings)
* [Styles](#custom_styles)
* [Languages](#custom_languages)






## UIManagment
```
ckAPIMethods.uiManagment('setUpDialog', {
  rateButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  searchButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
showMsgLoad?: boolean
})
```

## Settings
интеграция происходит через библиотеку [fontawesome](https://github.com/FortAwesome/react-fontawesome "fontawesome")  
```
ckAPIMethods.settings('rateIcon', [data])
ckAPIMethods.settings('searchIcon', [data])
```

## Styles
```
ckAPIMethods.styles('changeDialog', {
  themeName: [theme name, wich styles you want to change],
  data: {
    [mainContainer styles],
    [panel styles],
    [rateButton styles],
    [searchButton styles],
    [messagesContainer styles]
  },
})
```

## Languages
```
ckAPIMethods.languages('changeDialog', {
  language: [language name, wich packet you want to change],
  data: {
    [text title]
  }
})
```
