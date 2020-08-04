# Dialog
Displaying a set of text messages


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
  * Should component show rate
  * /
  "rate": {
    /**
    * Should component display on widget
    @default false
    * /
    "enabled": boolean,
    /**
    * Should component show title
    @default true
    * /
    "withTitle": boolean,
    /**
    * Should component show icon
    @default true
    * /
    "withIcon": boolean
  },
  /**
  * Should component show search
  * /
  "search": {
    /**
    * Should component display on widget
    @default false
    * /
    "enabled": boolean,
    /**
    * Should component show title
    @default true
    * /
    "withTitle": boolean,
    /**
    * Should component show icon
    @default true
    * /
    "withIcon": boolean
  },
  /**
  * Should component show divider
  @default true
  * /
  "dividerEnabled": boolean
}
```

## Settings
Props from Settings:  
```
{
  /**
  * Choice of image which will be shown as rate icon
  @default fas thumbs-up
  * /
  "rateIcon": string,
  /**
  * Choice of image which will be shown as search icon
  @default far search
  * /
  "searchIcon": string
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
