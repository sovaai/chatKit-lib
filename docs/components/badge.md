# Badge
widget expand button

## Usage
```javascript
import React from "react"
import { CkComponents } from "sova-chatkit"
 
function App() {
 return (
 <div className="App">
   <CkComponents.Badge ckStore={true} />
 </div>
 )
}
 
export default App
```

## Component props
| Prop       | Type    |  Description                                            |
|------------|---------|---------------------------------------------------------|
| `ckStore`  | boolean |should cling information from the base `ckStore` or not  |






## CONFIGURATION
Component get configuration info from storage. Badge touch 4 global keys from store:  
* **UIManagment** - control UI;  
* **Settings** - control media info;  
* **Styles** - control styles packets;  
* **Languages** - controls Languages packets.  

## UIManagment
Props from UIManagment:  
```
{
  /**
  * Should component show title
  @default true
  * /
  "showTitle": boolean,
  /**
  * Should component show avatar
  @default false
  * /
  "showAvatar": boolean
}
```

## Settings
Props from Settings:  
```
{
  /**
  * Path to the image which will be shown as avatar
  @default ''
  * /
  "avatar": string
}
```
Writing css properties in kebab-case like regular css, you write them in camelCase  

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
  * Styles for avatar container container
  @default {}
  * /
  "avatarContainer": object,
  /**
  * Styles for tag <img/>
  @default  {
    "width": "70px",
    "height": "70px"
  }
  * /
  "image": object,
  /**
  * Styles for title container
  @default {
    "padding": "10px",
    "width": "100px",
    "borderRadius": "10px",
    "fontSize": "24px",
    "backgroundColor": "#4a76a8",
    "color": "white",
    "textAlign": "center"
  }
  * /
  "titleContainer": object
}
```
Writing css properties in kebab-case like regular css, you write them in camelCase

## Languages
Props from Languages:  
```
{
  /**
  * Text in Title
  @default Chat Kit
  * /
  "title": string
}
```

# CUSTOMIZATION
To custom Badge component, you should use ckAPIMethods, which will allow you to change values in ckStore

## UIManagment
```
ckAPIMethods.uiManagment('setUpBadge', {
  showAvatar: [value],
  showTitle: [value]
})
```

## Settings
интеграция происходит через библиотеку [fontawesome](https://github.com/FortAwesome/react-fontawesome "fontawesome")  
`
ckAPIMethods.settings('changeAvatar', [path])
`

## Styles
```
ckAPIMethods.styles('changeBadge', {
  themeName: [theme name, wich styles you want to change],
  data: {
    [mainContainer styles],
    [avatarContainer styles],
    [image styles],
    [titleContainer styles]
  },
})
```

## Languages
```
ckAPIMethods.languages('changeBadge', {
  language: [language name, wich packet you want to change],
  data: {
    [text title]
  }
})
```
