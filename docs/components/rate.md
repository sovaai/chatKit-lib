# Rate
Component of rate the message



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
    <CkComponents.Rate ckStore={true} />
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
Component expects configuration info from storage. Rate touch 4 global keys from STORE:  
| Key                               |                                            |
|-----------------------------------|--------------------------------------------|
| [managment](#conf_managment)      | information to control UI                  |
| [settings](#conf_settings)        | information to control media info          |
| [styles](#conf_styles)            | information to control styles packets      |
| [languages](#conf_languages)      | information to control languages packets   |



### Managment <a name="conf_managment"></a>
Props from managment:  
```javascript
{
  positiveRate: {  // should component improve rate
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  },
  negativeRate: {  // should component lower rate
    enabled: true,  // should component display on widget
    withTitle: false,  // should component show title
    withIcon: true,  // should component show icon
  }
}
```
You can change these values using [APImethod](#custom_managment "description of method").



### Settings <a name="conf_settings"></a>
Props from settings:  
```javascript
{
  negativeRateIcon: 'far thumbs-down',  // choice of image which will be shown as negative rate icon
  positiveRateIcon: 'far thumbs-up'  // choice of image which will be shown as positive rate icon
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
  titleContainer: {  // styles for title container
    width: "100%",
    textAlign: "center",
    color: "#0F1F48",
    marginBottom: "16px"
  },
 negativeRateButton: { },  // styles for negative rate button
 positiveRateButton: { },  // styles for positive rate button
 ratingElement: {  // styles for rating element
   marginTop: "5px",
   width: "60%",
   color: "#0F1F48",
   listStyleType: "none",
   cursor: "pointer",
   transition: "color ease-in-out 0.3s",
   &:hover: {
     color: "#FC2D81"
   }
 },
 ratingListContainer: {  // styles for rating list container
   display: "flex",
   marginTop: "20px",
   marginBottom: "20px",
   flexDirection: "column",
   alignItems: "flex-start",
   width: "100%",
   marginLeft: "1rem"
 }
}
```
You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.  
You can change these values using [APImethod](#custom_styles "description of method").



### Languages <a name="conf_languages"></a>
Props from languages:  
```javascript
{
  title: 'Is it helpfull?',  // text in title
  negative: 'No',  // text in title of negative
  positive: 'typing...',  // text in title of positive
  ratingList: {  // text in comment to rate
    {
      rating: 3,  // text in "3"
      text: "I had other question"
    },
    {
      rating: 2,  // text in "2"
      text: "Not understand the answer"
    },
    {
      rating: 1,  // text in "1"
      text: "Not resolve my problem"
    }
  }
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
