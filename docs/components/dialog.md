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





## Styles
Props from Styles:  
```
{
  /**
  * The chosen theme
  @default sovaLight
  * /
  "theme": string,
  /**
  * Styles for main container
  @default {}
  * /
  "mainContainer": object,
  /**
  * Styles for panel
  @default {}
  * /
  "panel": object,
  /**
  * Styles for rate button
  @default {}
  * /
  "rateButton": object,
  /**
  * Styles for search button
  @default {}
  * /
  "searchButton": object,
  /**
  * Styles for messages container
  @default {
    "maxHeight": "100%",
    "display": "flex",
    "flexDirection": "column"
  }
  * /
  "messagesContainer": object
}
```
Writing css properties in kebab-case like regular css, you write them in camelCase

## Languages
Props from Languages
```
{
  /**
  * Text in search button title
  @default Search
  * /
  "searchButtonTitle": string,
  /**
  * Text in rate button title
  @default Rate
  * /
  "rateButtonTitle": string,
  /**
  * Text in loading
  @default typing...
  * /
  "loading": string
}
```

# CUSTOMIZATION
To custom Badge component, you should use ckAPIMethods, which will allow you to change values in ckStore

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
