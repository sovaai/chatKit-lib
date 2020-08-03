# Description of rate
# Install
`$ npm i --save Sova-Chat-Kit`

# Quick start
In your App.js file:
```
import {CkComponents} from 'Sova-Chat-Kit'
...
<CkComponents.Rate />
...
```

# COMPONENT PROPS
Component get configuration info from storage. Rate touch 4 global keys from store:
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
  * Should component improve rate
  * /
  "positiveRate": {
    /**
    * Should component display on widget
    @default true
    * /
    "enabled": boolean,
    /**
    * Should component show title
    @default true
    * /
    "withTitle": boolean,
    /**
    * Should component show icon
    @default false
    * /
    "withIcon": boolean
  },
  /**
  * Should component lower rate
  * /
  "negativeRate": {
    /**
    * Should component display on widget
    @default true
    * /
    "enabled": boolean,
    /**
    * Should component show title
    @default true
    * /
    "withTitle": boolean,
    /**
    * Should component show icon
    @default false
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
   * Path to the image which will be shown as negative rate icon
  @default far thumbs-down
  * /
  "negativeRateIcon": string,
  /**
  * Choice of image which will be shown as positive rate icon
  @default far thumbs-up
  * /
  "positiveRateIcon": string
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
  * Styles for title container
  @default {
    "width": "100%",
    "textAlign": "center",
    "color": "#0F1F48",
    "marginBottom": "16px"
  }
  * /
  "titleContainer": object,
  /**
  * Styles for negative rate button
  @default {}
  * /
  "negativeRateButton": object,
  /**
  * Styles for positive rate button
  @default {}
  * /
  "positiveRateButton": object,
  /**
  * Styles for rating element
  @default {
    "marginTop": "5px",
    "width": "60%",
    "color": "#0F1F48",
    "listStyleType": "none",
    "cursor": "pointer",
    "transition": "color ease-in-out 0.3s",
    "&:hover": {
      "color": "#FC2D81"
    }
  }
  * /
  "ratingElement": object,
  /**
  * Styles for rating list container
  @default {
    "display": "flex",
    "marginTop": "20px",
    "marginBottom": "20px",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "width": "100%",
    "marginLeft": "1rem"
  }
  * /
  "rating list container": object
}
```
Writing css properties in kebab-case like regular css, you write them in camelCase

## Languages
Props from Languages:
```
{
  /**
  * Text in title
  @default Is it helpfull?
  * /
  "title": string,
  /**
  * Text in title of negative
  @default No
  * /
  "negative": string,
  /**
  * Text in title of positive
  @default Yes
  * /
  "positive": string,
  /**
  * Text in comment to rate
  * /
  "ratingList": [{
    /**
    * Text in "3"
    @default  {
      "rating": 3,
      "text": "I had other question"
    },
    * /
    /**
    * Text in "2"
    @default  {
      "rating": 2,
      "text": "Not understand the answer"
    },
    * /
    /**
    * Text in "1"
    @default  {
      "rating": 1,
      "text": "Not resolve my problem"
    }
    * /
    }]
}
```

# CUSTOMIZATION
To custom Badge component, you should use ckAPIMethods, which will allow you to change values in ckStore

## UIManagment
```
ckAPIMethods.uiManagment('setUpRate', {
  negativeRateButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  },
  positiveRateButton?: {
    enabled?: boolean,
    show withTitle?: boolean,
    show withIcon?: boolean
  }
})
```

## Settings
интеграция происходит через библиотеку [fontawesome](https://github.com/FortAwesome/react-fontawesome "fontawesome")  
```
ckAPIMethods.settings('negativeRateIcon', [data])
ckAPIMethods.settings('positiveRateIcon', [data])
```

## Styles
```
ckAPIMethods.styles('changeRate', {
themeName: [theme name, wich styles you want to change],
data: {
    [mainContainer styles],
    [titleContainer styles],
    [negativeRateButton styles],
    [positiveRateButton styles],
    [ratingElement styles],
    [ratingListContainer styles]
  },
})
```

## Languages
```
ckAPIMethods.languages('changeRate', {
  language: [language name, wich packet you want to change],
  data: {
    [text title]
  },
})
```
