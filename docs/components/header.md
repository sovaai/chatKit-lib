text

# Description
text

# Install
`$ npm i --save Sova-Chat-Kit`

# Quick start
In your App.js file:  
`$ npm i --save Sova-Chat-Kit`

# Quick start
In your App.js file:  
```
import {CkComponents} from 'Sova-Chat-Kit'
...
<CkComponents.Header />
...
```

# COMPONENT PROPS
```
{
  /**
  * Should component use ckStore as storage
  @default true
  * /
  ckStore?: boolean
}
```

# CONFIGURATION
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
  @default true
  * /
  "showAvatar": boolean,
  /**
  * Should component show settings
  * /
  "settings": {
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
  * Should component show reset
  * /
  "reset": {
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
  * Should component show search
  * /
  "search": {
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
Props from Settings  
```
{
  /**
  * Path to the image which will be shown as avatar
  @default ''
  * /
  "avatar": string,
  /**
  * Choice of image which will be shown as reset icon
  @default fas redo-alt
  * /
  "resetIcon": string,
  /**
  * Choice of image which will be shown as settings icon
  @default fas ellipsis-v
  * /
  "settingsIcon": string,
  /**
  * Choice of image which will be shown as close settings icon
  @default fas arrow-down
  * /
  "closeSettingsIcon": string
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
  * Styles for title container
  @default  {
    "textAlign": "left",
    "width": "50%",
    "fontSize": "18px",
    "lineHeight": "24px",
    "marginLeft": "15px",
    "fontFamily": "Roboto"
  }
  * /
  "titleContainer": object,
  /**
  * Styles for avatar container container
  "buttonsContainer": {
    /**
    * Styles for reset Button
    @default  {}
    * /
    "resetButton": object,
    /**
    * Styles forsettings Button
    @default  {}
    * /
    "settingsButton": object
  },
  /**
  * Styles for image
  @default  {
    "width": "24px",
    "height": "24px"
  }
  * /
  "image": object
}
```
Writing css properties in kebab-case like regular css, you write them in camelCase  

## Languages
Props from Languages:  
```
{
  /**
  * Text in title
  @default SOVA Chat Kit
  * /
  "title": string,
  /**
  * Text in settings button title
  @default Settings
  * /
  "settingsButtonTitle": string,
  /**
  * Text in reset button title
  @default Reset
  * /
  "resetButtonTitle": string
}
```

# CUSTOMIZATION
To custom Badge component, you should use ckAPIMethods, which will allow you to change values in ckStore

## UIManagment
```
ckAPIMethods.uiManagment('setUpHeader', {
  resetButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  settingsButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
showAvatar?: boolean,
showTitle?: boolean,
})
```

## Settings
интеграция происходит через библиотеку [fontawesome](https://github.com/FortAwesome/react-fontawesome "fontawesome")  
```
ckAPIMethods.settings('changeAvatar', [path])
ckAPIMethods.settings('resetIcon', [data])
ckAPIMethods.settings('settingsIcon', [data])
ckAPIMethods.settings('closeSettingsIcon', [data])
```

## Styles
```
ckAPIMethods.styles('changeHeader', {
  themeName: [theme name, wich styles you want to change],
  data: {
    [mainContainer styles],
    [avatarContainer styles],
    [titleContainer styles],
    [buttonsContainer styles],
    [resetButton styles],
    [settingsButton styles],
    [image styles]
  },
})
```

## Languages
```
ckAPIMethods.languages('changeHeader', {
  language: [language name, wich packet you want to change],
  data: {
    [text title]
  }
})
```
