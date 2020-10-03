# Badge
Widget expand button


## Table of content
* [Usage](#usage) 
* [Component props](#component-props)   
* [Configuration](#configuration)   
* [Customization](#customization)   


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
| Prop       | Type    |  Description                                                                                      |
|------------|---------|---------------------------------------------------------------------------------------------------|
| `ckStore`  | boolean | should cling information from the base [ckStore](https://github.com/sovaai/chatKit-lib#3) or not  |



## Configuration
Component expects configuration info from storage. Badge touch 4 global keys from STORE:  

| Key                               |                                            |
|-----------------------------------|--------------------------------------------|
| [managment](#managment)      | information to control UI                  |
| [settings](#settings)        | information to control media info          |
| [styles](#styles)            | information to control styles packets      |
| [languages](#languages)      | information to control languages packets   |



### Managment
Props from `managment`:  
```javascript
{
  showTitle: false,  // is responsible for displaying title or not
  showAvatar: false,  // is responsible for displaying avatar or not
  showSVG: true,  // is responsible for displaying SVG file or not
}
```
You can change these values using relevant [APImethod](#uimanagment "description of method").



### Settings
Props from `settings`:  
```javascript
{
  avatar: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4' // path to the image which will be shown as avatar 
}
```
You can change these values using relevant [APImethod](#settings-1 "description of method").



### Styles
Props from `styles`:  
```javascript
{
  mainContainer: {  // styles for main container
    margin: "1px",
  },
  avatarContainer: {  // styles for avatar container
    maxWidth: "200px",
  },
  image: {  // styles for tag <img/>
    maxWidth: "200px",
  },
  titleContainer: {  // styles for title container
    textAlign: "4px",
  },
  svg: {  // styles for SVG file
    color: "green",
  },
}

```
You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.  
You can change these values using relevant [APImethod](#styles-1 "description of method").



### Languages 

Props from `languages`:  
```javascript
{
  title: 'Chat Kit'  // text in Title 
}
```
You can change these values using relevant [APImethod](#languages-1 "description of method").



## Customization
To custom `Badge` component, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.  
Customization includes:  

* [UIManagment](#uimanagment)
* [Settings](#settings-1)
* [Styles](#styles-1)
* [Languages](#languages-1)



### UIManagment
To call the [uiManagmentAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/uiManagmentAPI.md "description of method") with event `setUpBadge`, that allows you to choose and overwrite the values related to [Managment](#managment), on which component `Badge` is based.
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpBadge', {
  showAvatar: true,
  showSVG: false,
  showTitle: true
})
```

Options data:   

| Key             |   Type     | Required  |  Description                                   |
|-----------------|------------|-----------|------------------------------------------------|
| `showAvatar`    | boolean    |     +     | is responsible for displaying avatar or not    |
| `showSVG`       | boolean    |     +     | is responsible for displaying SVF file or no   |
| `showTitle`     | boleean    |     +     | is responsible for displaying title or not     |



### Settings
To call the [settingsAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/settingsAPI.md "description of method") with event `changeAvatar`, it's allows you to overwrite path to chosen avatar in [Settings](#settings). 

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.settings('changeAvatar', {
  path: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4',
})
```
Options data: 

| Key             |   Type     | Required  |  Description       |
|-----------------|------------|-----------|--------------------|
| `path`          | string     |     +     | path to picture    |



### Styles
To call the [styleAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/styleAPI.md "description of method") with event `changeBadge`, it's allows you to choose and overwrite style values in chosen theme and chosen container in [Styles](#styles), on which component `Badge` is based. 
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeBadge", {
  themeName: "sovaDark",  // theme name, in which styles you want to change anything
  data: {
    mainContainer: {
      width: "100%",
    },
  },
})
```

Options data:

| Key                |   Type          | Required  |  Description                  |
|--------------------|-----------------|-----------|-------------------------------|
| mainContainer      | object styles   |     +     | styles for main container     |
| avatarContainer    | object styles   |     +     | styles for avatar container   |
| image              | object styles   |     +     | styles for tag <img/>         |
| titleContainer     | object styles   |     +     | styles for title container    |
| svg                | object styles   |     +     | styles for SVG file           |

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.
 

### Languages
To call the [langugeAPI](https://github.com/sovaai/chatKit-lib/blob/master/docs/apimethods/languageAPI.md "description of method") with event `changeBadge` it's allows you to choose and overwrite values in chosen language packet and chosen key in [Languages](#languages), on which component `Badge` is based. 

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeBadge', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    title: 'Help?'
  }
})
```

Options data:    

| Key                |   Type          | Required  |  Description                  |
|--------------------|-----------------|-----------|-------------------------------|
| title              | string          |     +     | text in title                 |
