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
Props from `managment`:  
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
Props from `settings`:  
```javascript
{
  negativeRateIcon: 'far thumbs-down',  // choice of image which will be shown as negative rate icon
  positiveRateIcon: 'far thumbs-up'  // choice of image which will be shown as positive rate icon
}
```
You can change these values using [APImethod](#custom_settings "description of method").



### Styles <a name="conf_styles"></a>
Props from `styles`:  
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
Props from `languages`:  
```javascript
{
  title: 'Is it helpfull?',  // text in title
  negative: 'No',  // text in title of negative
  positive: 'Yes',  // text in title of positive
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
To custom component `Rate`, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.  
Customization includes:  
* [UIManagment](#custom_managment)
* [Settings](#custom_settings)
* [Styles](#custom_styles)
* [Languages](#custom_languages)



### UIManagment <a name="custom_managment"></a>
To call the [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "description of method") with event `setUpRate`, that allows you to choose and overwrite the values related to [Managment](#conf_managment), on which component `Rate` is based.
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpRate', {
  negativeRateButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  positiveRateButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
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
    <td colspan="2">negativeRateButton</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying negative rate button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withTitle</td>
    <td>boolean</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>show withIcon</td>
    <td>boolean</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">positiveRateButton</td>
    <td>object</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>is responsible for displaying positive rate button or not</td>
  </tr>
  <tr>
    <td></td>
    <td>show withTitle</td>
    <td>boolean</td>
    <td>is responsible for displaying button with title or not</td>
  </tr>
  <tr>
    <td></td>
    <td>show withIcon</td>
    <td>boolean</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
</table>



## Settings
To call the [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") with event `changeIcon`, it's allows you to overwrite path to chosen avatar in [Settings](#conf_settings). 
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('changeIcon', {
  iconName: ??,
  iconData: ??
})
```
Options data: 

| Key             |   Type     |  Description       |
|-----------------|------------|--------------------|
| `iconName`      | string     |  ??                |
| `iconData`      |  ??        |  ??                |





### Styles <a name="custom_styles"></a>
To call the [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "description of method") with event `changeRate`, it's allows you to choose and overwrite style values in chosen theme and chosen container in [Styles](#conf_styles), on which component `Rate` is based. 
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles('changeRate', {
  themeName: [theme name, wich styles you want to change],
  data: {
    mainContainer styles: {},
    titleContainer styles: {},
    negativeRateButton styles: {},
    positiveRateButton styles: {},
    ratingElement styles: {},
    ratingListContainer styles: {}
  }
})
```

Options data:

| Key                  |   Type          |  Description                  |
|----------------------|-----------------|-------------------------------|
| mainContainer        | object styles   | styles for main container     |
|  titleContainer      | object styles   | styles for panel              |
|  negativeRateButton  | object styles   | styles for rate button        |
|  positiveRateButton  | object styles   | styles for search button      |
|  ratingElement       | object styles   | styles for messages container |
|  ratingListContainer | object styles   | styles for messages container |



### Languages <a name="custom_languages"></a>
To call the [langugeAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI.md "description of method") with event `changeRate` it's allows you to choose and overwrite values in chosen language packet and chosen key in [Languages](#conf_languages), on which component `Rate` is based. 

```javascript
{
  title: 'Is it helpfull?',  // text in title
  negative: 'No',  // text in title of negative
  positive: 'Yes',  // text in title of positive
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

Options data:    
<table>
  <tr>
    <td colspan="2" align=center><b>Key</b></td>
    <td align=center><b>Type</b></td>
    <td align=center><b>Description</b></td>
  </tr>
  <tr>
    <td colspan="2">title</td>
    <td>string</td>
    <td>text in title</td>
  </tr>
  <tr>
    <td colspan="2">negative</td>
    <td>string</td>
    <td>text in title of negative</td>
  </tr>
  <tr>
    <td colspan="2">positive</td>
    <td>string</td>
    <td>text in title of positive</td>
  </tr>
  <tr>
  <td colspan="2">ratingList</td>
  <td>object</td>
  <td></td>
</tr>
  <tr>
    <td></td>
    <td>rating</td>
    <td>string</td>
    <td>number of rate</td>
  </tr>
  
  <tr>
    <td></td>
    <td>text</td>
    <td>string</td>
    <td>text in comment to rate</td>
  </tr>
</table>
