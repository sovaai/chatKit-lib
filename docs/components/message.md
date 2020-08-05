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
      withIcon: true,  // should component show icon
  },
  negativeRateMessage: {  // should component show negative rate for message
      enabled: false,  // should component display on widget
      withTitle: false,  // should component show title
      withIcon: true,  // should component show icon
  },
  audioMessage: {  // should component show audio message
      enabled: false,  // should component display on widget
      withTitle: false,  // should component show title
      withIcon: true,  // should component show icon
  },
},

```
You can change these values using [APImethod](#custom_managment "description of method").



### Settings <a name="conf_settings"></a>
Props from settings:  
```javascript
{
  avatar: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4' // path to the image which will be shown as avatar ,
  positiveRateIcon: 'fas thumbs-up'  // choice of image which will be shown as positive rate icon,
  negativeRateIcon 'fas thumbs-down'  // choice of image which will be shown as negative rate icon,
  audioMessageIcon: 'fas play' // choice of image which will be shown as audio message icon
}
```
You can change these values using [APImethod](#custom_settings "description of method").





## Styles
### For user message
Props from Styles:  
```
{
  /**
  * The chosen theme
  @default sovaLight
  * /
  "theme": string,
  /**
  * Styles for user message
  @default user
  * /
  "sender": user,
  {
    /**
    * Styles for main container
    @default {}
    * /
    "mainContainer": object,
    /**
    * Styles for positive rate message button
    @default {
      "display": "none"
    }
    * /
    "positiveRateMessageButton": object,
    /**
    * Styles for negative rate message button
    @default {
      "display": "none"
    }
    * /
    "negativeRateMessageButton": object,
    /**
    * Styles for avatar container container
    @default {}
    * /
     "avatarContainer": object,
    /**
    * Styles for audio message button
    @default {}
    * /
    "audioMessageButton": object,
    /**
    * Styles for image
    @default {}
    * /
    "image": object,
    /**
    * Styles for data container
    @default {
    "width": "100%",
    "textAlign": "right",
    "fontFamily": "Roboto",
    "fontSize": "12px",
    "marginTop": "2px",
    "color": "#0F1F48"
    }
    * /
    "dataContainer": object,
    /**
    * Styles for text Container
    @default {
      "padding": "16px",
      "fontSize": "14px",
      "color": "#FFFFFF",
      "background": "#386FFE",
      "textAlign": "left",
      "width": "100%",
      "fontFamily": "Helvetica",
      "borderRadius": "17px 17px 0 17px",
      "wordBreak": "break-all",
      "lineHeight": "18px"
    }
    * /
    "textContainer": object,
    /**
    * Styles for bubble container
    @default {
      "display": "flex",
      "flexWrap": "wrap"
    }
    * /
    "bubbleContainer": object,
    /**
    * Styles for buttons container
    @default {}
    * /
    "buttonsContainer": object
}
```
Writing css properties in kebab-case like regular css, you write them in camelCase
### For response message
Props from Styles:  
```
{
  /**
  * The chosen theme
  @default sovaLight
  * /
  "theme": string,
  /**
  * Styles for response message
  @default user
  * /
  "sender": response,
  {
    /**
    * Styles for main container
    @default {}
    * /
    "mainContainer": object,
    /**
    * Styles for positive rate message button
    @default {
     "padding": 0,
     "alignSelf": "flex-end",
     "marginLeft": "4%",
     "fontSize": "14px",
     "display": "flex",
     "alignItems": "flex-end",
     "border": "none",
     "outline": "none",
     "color": "#0F1F48",
     "background": "none",
     "cursor": "pointer",
     "& :hover": {
       "opacity": "0.75"
     },
     "& :active": {
     "opacity": "1"
     }
  }
  * /
  "positiveRateMessageButton": object,
  /**
  * Styles for negative rate message button
  @default {
    "padding": 0,
    "alignSelf": "flex-end",
    "marginLeft": "4%",
    "fontSize": "14px",
    "display": "flex",
    "border": "none",
    "outline": "none",
    "color": "#0F1F48",
    "background": "none",
    "cursor": "pointer",
    "& :hover": {
      "opacity": "0.75"
    },
    "& :active": {
      "opacity": "1"
    }
  }
  * /
  "negativeRateMessageButton": object,
  /**
  * Styles for avatar container container
  @default {}
  * /
  "avatarContainer": object,
  /**
  * Styles for audio message button
  @default {}
  * /
  "audioMessageButton": object,
  /**
  * Styles for image
  @default {}
  * /
  "image": object,
  /**
  * Styles for data container
  @default {
    "width": "100%",
    "textAlign": "left",
    "fontFamily": "Roboto",
    "fontSize": "12px",
    "marginTop": "2px",
    "color": "#0F1F48"
  }
  * /
  "dataContainer": object,
  /**
  * Styles for text Container
  @default {
    "padding": "16px",
    "fontSize": "14px",
    "color": "#0F1F48",
    "background": "#F3F3F3",
    "width": "100%",
    "textAlign": "left",
    "fontFamily": "Helvetica",
    "lineHeight": "18px",
    "borderRadius": "17px 17px 17px 0",
    "& a": {
      "color": "#386FFE",
      "transition": "color ease-in-out 0.3s"
    },
    "& a:hover": {
      "color": "#FC2D81"
    },
    "& a:active": {
      "color": "#FC2D81"
    }
  }
  * /
  "textContainer": object,
  /**
  * Styles for bubble container
  @default {
    "display": "flex",
    "flexWrap": "wrap"
  }
  * /
  "bubbleContainer": object,
  /**
  * Styles for buttons container
  @default {}
  * /
  "buttonsContainer": object
}
```
Writing css properties in kebab-case like regular css, you write them in camelCase

## Languages
Props from Languages:
```
{
  /**
  * Text in rate button title
  @default Rate
  * /
  "rateButtonTitle": string,
  /**
  * Text in audio message button title
  @default AudioMessage
  * /
  "audioMessageButtonTitle": string
}
```

# CUSTOMIZATION
To custom Badge component, you should use ckAPIMethods, which will allow you to change values in ckStore

## UIManagment
```
ckAPIMethods.uiManagment('setUpMessage', {
  audioMessageButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  positiveRateMessage?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  negativeRateRateMessage?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
showAvatar?: boolean,
showTitle?: boolean
})
```

## Settings
интеграция происходит через библиотеку [fontawesome](https://github.com/FortAwesome/react-fontawesome "fontawesome")  
```
ckAPIMethods.settings('changeAvatar', [path])
ckAPIMethods.settings('positiveRateIcon', [data])
ckAPIMethods.settings('negativeRateIcon', [data])
ckAPIMethods.settings('audioMessageIcon', [data])
```

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

