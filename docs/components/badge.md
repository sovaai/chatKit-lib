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
| [managment](#Managment)    | information to control UI                  |
| [settings](#Settings)      | information to control media info          |
| [styles](#Styles)          | information to control styles packets      |
| [languages](#Languages)    | information to control Languages packets   |


### Managment <a name="Managment"></a>
Props from managment:  
```javascript
{
 showTitle: false, //is responsible for displaying title or not
 showAvatar: false, //is responsible for displaying avatar or not
 showSVG: true, // is responsible for displaying SVF file or not
}
```
You can change these values using APImethod (ссылка на UIManagment которая находится в кастомизации)


### Settings <a name="Settings"></a>
Props from settings:  
```javascript
{
 avatar: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4' //Path to the image which will be shown as avatar 
}
```
Writing css properties in kebab-case like regular css, you write them in camelCase  


### Styles <a name="Styles"></a>
Props from styles:  
```javascript
{
 mainContainer: { // Styles for main container
   margin: "1px",
 },
 avatarContainer: { // Styles for avatar container
   maxWidth: "200px",
 },
 image: { // Styles for tag <img/>
   maxWidth: "200px",
 },
 titleContainer: { // Styles for title container
   textAlign: "4px",
 },
 svg: { // Styles for SVG file
   color: "green",
 },
}

```
You must write css properties in camelCase, using objects style syntax.  
Reed more: https://emotion.sh/docs/object-styles 


### Languages <a name="Languages"></a>
Props from languages:  
```javascript
{
 title: 'Chat Kit' // Text in Title 
}
```







## Customization <a name="Customization"></a>
To custom `Badge` component, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.


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
