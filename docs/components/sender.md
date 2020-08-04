# Sender
Message input and sending component


## Usage
```javascript
import React from "react"
import { CkComponents } from "sova-chatkit"
 
function App() {
 return (
 <div className="App">
   <CkComponents.Sender ckStore={true} />
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
  * Should component stay in focus
  @default false
  * /
  "inFocus": boolean,
  /**
  * Should component block input
  @default false
  * /
  "blockInput": boolean,
  /**
  * Should component block submit
  @default false
  * /
  "blockSubmit": boolean,
  /**
  * Should component show audio message
  * /
  "audioMessage": {
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
  * Should component add stickers
  * /
  "addStickers": {
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
  * Should component share
  * /
  "share": {
    /**
    * Should component display on widget
    @default false
    * /
    "enabled": boolean,
    /**
    * Should component show title
    @default false
    * /
    "withTitle": boolean,
    /**
    * Should component show icon
    @default true
    * /
    "withIcon": boolean
  },
  /**
  * Should component add files
  * /
  "addFile": {
    /**
    * Should component display on widget
    @default true
    * /
    "enabled": boolean,
    /**
    * Should component show title
    @default false
    * /
    "withTitle": boolean,
    /**
    * Should component show icon
    @default true
    * /
    "withIcon": boolean
  },
  /**
  * Should component send
  * /
  "send": {
    /**
    * Should component display on widget
    @default true
    * /
    "enabled": boolean,
    /**
    * Should component show title
    @default false
    * /
    "withTitle": boolean,
    /**
    * Should component show icon
    @default true
    * /
    "withIcon": boolean
  }
}
```

## Settings
Props from Settings:
```
{
  /**
  * Choice of image which will be shown as add file icon
  @default fas plus
  * /
  "addFileIcon": string,
  /**
  * Choice of image which will be shown as add stickers icon
  @default fas sticky-note
  * /
  "addStickersIcon": string,
  /**
  * Choice of image which will be shown as audio message icon
  @default fas microphone
  * /
  "audioMessageIcon": string,
  /**
  * Choice of image which will be shown as send icon
  @default fas arrow-up
  * /
  "sendIcon": string,
  /**
  * Choice of image which will be shown as share icon
  @default fas share-alt
  * /
  "shareIcon": string
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
  * Styles for add file button
  @default {
    "border": "none",
    "fontSize": "18px",
    "background": "#FFFFFF",
    "outline": "none",
    "padding": "0",
    "color": "#FC2D81",
    "transition": "transform ease-in-out 0.3s, color ease-in-out 0.3s",   
    "cursor": "pointer",
    "&:hover": {
      "color": "#386FFE"
    },
    "&:active": {
      "opacity": "0.75",
      "color": "#386FFE"
    }
  }
  * /
  "addFileButton": object,
  /**
  * Styles for form
  @default {}
  * /
  "form": object,
  /**
  * Styles for send message button
  @default {
    "border": "none",
    "fontSize": "18px",
    "background": "#FFFFFF",
    "outline": "none",
    "padding": "3px",
    "color": "#386FFE",
    "cursor": "pointer",
    "transition": "transform ease-in-out 0.3s, color ease-in-out 0.3s",
    "&:hover": {
      "transform": "translateY(-5px)",
      "color": "#FC2D81"
    },
    "&:active": {
      "opacity": "0.75",
      "color": "#FC2D81"
    }
  }
  * /
  "sendMessageButton": object,
  /**
  * Styles for share button
  @default {}
  * /
  "shareButton": object,
  /**
  * Styles for stickers button
  @default {}
  * /
  "stickersButton": object,
  /**
  * Styles for text area
  @default {}
  * /
  "textArea": object,
  /**
  * Styles for voice button
  @default {}
  * /
  "voiceButton": object
}
```
Writing css properties in kebab-case like regular css, you write them in camelCase

## Languages
Props from Languages:
```
{
  /**
  * Text in file button title
  @default File
  * /
  "fileButtonTitle": string,
  /**
  * Text in placeholder
  @default Write message
  * /
  "placeholder": string,
  /**
  * Text in send button title
  @default Send
  * /
  "sendButtonTitle": string,
  /**
  * Text in share button title
  @default Share
  * /
  "shareButtonTitle": string,
  /**
  * Text in sticker button title
  @default Sticker
  * /
  "stickerButtonTitle": string,
  /**
  * Text in voice button title
  @default Voice
  * /
  "voiceButtonTitle": string
}
```

# CUSTOMIZATION
To custom Badge component, you should use ckAPIMethods, which will allow you to change values in ckStore

## UIManagment
```
ckAPIMethods.uiManagment('setUpSender', {
  addFileButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  addStickersButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  audioMessageButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  sendButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  shareButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  blockInput?: boolean,
  blockSubmit?: boolean
})
```

## Settings
интеграция происходит через библиотеку [fontawesome](https://github.com/FortAwesome/react-fontawesome "fontawesome")
```
ckAPIMethods.settings('addFileIcon', [data])
ckAPIMethods.settings('addStickersIcon', [data])
ckAPIMethods.settings('audioMessageIcon', [data])
ckAPIMethods.settings('sendIcon', [data])
ckAPIMethods.settings('shareIcon', [data])
```

## Styles
```
ckAPIMethods.styles('changeSender', {
  themeName: [theme name, wich styles you want to change],
  data: {
    [mainContainer styles],
    [addFileButton styles],
    [form styles],
    [sendMessageButton styles],
    [shareButton styles],
    [stickersButton styles],
    [textArea styles],
    [voiceButton styles]
  }
})
```

## Languages
```
ckAPIMethods.languages('changeSender', {
  language: [language name, wich packet you want to change],
  data: {
    [text title]
  }
})
```
