<table>
    <tr>
        <td colspan="2">component</td>
    </tr>
    <tr>
        <td></td>
        <td>border</td>
    </tr>
    <tr>
        <td></td>
        <td>color</td>
    </tr>
</table>



# Badge
Widget expand button

## Table of content
* [Usage](#Usage) 
* [Component props](#Component_props)   
* [Configuration](#Configuration)   
* [Customization](#Customization)   

## Usage <a name="Usage"></a>
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

## Component props <a name="Component_props"></a>
| Prop       | Type    |  Description                                                                                      |
|------------|---------|---------------------------------------------------------------------------------------------------|
| `ckStore`  | boolean | should cling information from the base [ckStore](https://github.com/sovaai/chatKit-lib#3) or not  |


## Configuration <a name="Configuration"></a>
Component expects configuration info from storage. Badge touch 4 global keys from STORE:  
| Key                        |                                            |
|----------------------------|--------------------------------------------|
| [Managment](#Managment)    | information to control UI                  |
| [Settings](#Settings)      | information to control media info          |
| [Styles](#Styles)          | information to control styles packets      |
| [Languages](#Languages)    | information to control Languages packets   |





### Managment <a name="Managment"></a>
Props from Managment:  
```javascript
{
 showTitle: false, //is responsible for displaying title or not
 showAvatar: false, //is responsible for displaying avatar or not
 showSVG: true, // is responsible for displaying SVF file or not
}
```



### Settings <a name="Settings"></a>
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

### Styles <a name="Styles"></a>
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

### Languages <a name="Languages"></a>
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



## Customization <a name="Customization"></a>
To custom Badge component, you should use ckAPIMethods, which will allow you to change values in ckStore


### UIManagment
```
ckAPIMethods.uiManagment('setUpBadge', {
  showAvatar: [value],
  showTitle: [value]
})
```

### Settings
интеграция происходит через библиотеку [fontawesome](https://github.com/FortAwesome/react-fontawesome "fontawesome")  
`
ckAPIMethods.settings('changeAvatar', [path])
`

### Styles
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

### Languages
```
ckAPIMethods.languages('changeBadge', {
  language: [language name, wich packet you want to change],
  data: {
    [text title]
  }
})
```
