
# CKDropAndDown
This component allows user to drag and drop files for future use in [sender](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/sender.md "read about sender")






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
    <CkComponents.CKDropAndDown ckStore={true} />
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
Component expects configuration info from storage. `CKDropAndDown` touch 4 global keys from STORE:  

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
  chooseFile: {
    enabled: true,  // is responsible for displaying choose file or not
    withTitle: true,  // is responsible for displaying choose file with title or not
    withIcon: false,  // is responsible for displaying choose file with icon or not
}
```
You can change these values using relevant [APImethod](#custom_managment "description of method").



### Settings <a name="conf_settings"></a>
Props from `settings`:  
```javascript
{
  svg: {
    SVGName: 'dropZone',  //  SVG name
    SVG: YourSvgComponent  // SVG component to be used
  }
}
```
You can change these values using relevant [APImethod](#custom_settings "description of method").



### Styles <a name="conf_styles"></a>
Props from `styles`:  
```javascript
{
  mainContainer: {  // styles for main container
    margin: "1px"
  },
  titleContainer: {  // styles for title container
    margin: "1px"
  },
  chooseFileButton: {  // styles for choose file button
    margin: "1px"
  },
  dividerContainer: {  // styles for divider container
    margin: "1px"
  },
  svgContainer: {  // styles for svg container
    margin: "1px"
  },
  commentContainer: {  // styles for comment container
    margin: "1px"
  }
}

```
You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.  
You can change these values using relevant [APImethod](#custom_styles "description of method").



### Languages <a name="conf_languages"></a>
Props from `languages`:  
```javascript
{
  title: 'Drag and drop the file',  // text in title
  comment: 'Pdf, txt, xls, doc no more than 25Mb',  // text in comment 
  errorComment: 'Message that the allowed file size and format were exceeded, as well as the number of files',  // text in error comment
  divider: 'or',  // text in devider
  chooseFileButtonTitle: 'Choose file',  // text in choose file button title
}
```
You can change these values using relevant [APImethod](#custom_languages "description of method").



## Customization <a name="customization"></a>
To custom `CKDropAndDown` component, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.  
Customization includes:  

* [UIManagment](#custom_managment)
* [Settings](#custom_settings)
* [Styles](#custom_styles)
* [Languages](#custom_languages)



### UIManagment <a name="custom_managment"></a>
To call the [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "description of method") with event `setUpCKDropAndDown`, that allows you to choose and overwrite the values related to [Managment](#conf_managment), on which component `CKDropAndDown` is based.
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpCKDropAndDown', {
  chooseFile: {
    enabled: true,
    withTitle: true,
    withIcon: false,
})
```


Options data:   

| Key             |   Type     | Required  |  Description                                                   |
|-----------------|------------|-----------|----------------------------------------------------------------|
| `chooseFile`    | object     |           |                                                                |
| `enabled`       | boolean    |     +     | is responsible for displaying choose file or not               |
| `withTitle`     | boolean    |     +     | is responsible for displaying choose file with title or not    |
| `withIcon`      | boolean    |     +     | is responsible for displaying choose file with icon or not     |



### Settings <a name="custom_settings"></a> 
To call the [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") with event `changeSVG`, it's allows you to overwrite chosen SVG in [Settings](#conf_settings). 

```
ckAPIMethods.uiManagment('changeSVG', {
  SVGName: 'dropZone',
  SVG: YourSvgComponent
}) 
```

Options data: 

| Key             |   Type           | Required  |  Description              |
|-----------------|------------------|-----------|---------------------------|
| SVGName         | string           |     +     | SVG name                  |
| SVG             | React.component  |     +     | SVG component to be used  |



### Styles <a name="custom_styles"></a>
To call the [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "description of method") with event `changeCKDropAndDown`, it's allows you to choose and overwrite style values in chosen theme and chosen container in [Styles](#conf_styles), on which component `CKDropAndDown` is based. 
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeCKDropAndDown", {
  themeName: "sovaDark",  // theme name, in which styles you want to change anything
  data: {
    mainContainer: {
      margin: '16px',
      height: '464px',
      background: primaryBackground,
      display: 'flex',
      alignItems: 'center',
      padding: '98px 0px 56px 0px',
      flexDirection: 'column',
      boxSizing: 'border-box',
      outline: 'none',
      border: `2px dashed ${primaryDashed}`,
      animation: 'show 0.3s 1',
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    svgContainer: {},
    dropAndDownContainer: {
      marginBottom: '21.92px',
      outline: 'none',
    },
    chooseFileButton: {
      padding: '4px 20px',
      width: '149px',
      height: '41px',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '40px',
      textAlign: 'center',
      color: primaryWhite,
      background: primary,
      borderRadius: '49px',
      border: 'none',
      outline: 'none',
      marginBottom: '24px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryChooseFileButtonHover,
      },
      '&:active': {
        opacity: '0.6',
      },
    },
    titleContainer: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '22px',
      lineHeight: '32px',
      color: primaryText,
      marginBottom: '13px',
    },
    commentContainer: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
      textAlign: 'center',
      color: primaryText,
      opacity: '0.5',
    },
    dividerContainer: {
      fontFamily: 'Helvetica',
      marginBottom: '13px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '30px',
      color: primaryText,
      opacity: '0.3',
      width: '137px',
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      '::before': {
        content: '""',
        width: '47px',
        height: '1px',
        opacity: '0.3',
        background: primaryText,
      },
      '::after': {
        content: '""',
        width: '47px',
        height: '1px',
        opacity: '0.3',
        background: primaryText,
      }
    }
})
```

Options data:

| Key                      |   Type          |  Required |  Description                           |
|--------------------------|-----------------|-----------|----------------------------------------|
| mainContainer            | object styles   |     +     | styles for main container              |
| titleContainer           | object styles   |     +     | styles for title container             |
| chooseFileButton         | object styles   |     +     | styles for choose file button          |
| dividerContainer         | object styles   |     +     | styles for divider container           |
| svgContainer             | object styles   |     +     | styles for svg container               |
| commentContainer         | object styles   |     +     | styles for comment container           | 

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.



### Languages <a name="custom_languages"></a>
To call the [langugeAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI.md "description of method") with event `changeCKDropAndDown` it's allows you to choose and overwrite values in chosen language packet and chosen key in [Languages](#conf_languages), on which component `CKDropAndDown` is based. 

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeCKDropAndDown', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    title: 'Drag and drop the file',  // text in title
    comment: 'Pdf, txt, xls, doc no more than 25Mb',  // text in comment 
    errorComment: 'Message that the allowed file size and format were exceeded, as well as the number of files',  // text in error comment
    divider: 'or',  // text in devider
    chooseFileButtonTitle: 'Choose file',  // text in choose file button title
  }
})
```


Options data:    

| Key                     |   Type          |  Required |  Description                       |
|-------------------------|-----------------|-----------|------------------------------------|
| title                   | string          |     +     | text in title                      |
| comment                 | string          |     +     | text in comment                    |
| errorComment            | string          |     +     | text in error comment              |
| divider                 | string          |     +     | text in divider                    |
| chooseFileButtonTitle   | string          |     +     | text in choose file button title   |




