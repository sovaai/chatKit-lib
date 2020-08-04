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
You can change these values using APImethod (ссылка на сеттинг которая находится в кастомизации)


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
You can change these values using APImethod (ссылка на стайлз которая находится в кастомизации)



### Languages <a name="Languages"></a>
Props from languages:  
```javascript
{
 title: 'Chat Kit' // Text in Title 
}
```
You can change these values using APImethod (ссылка на лангуаге которая находится в кастомизации)


## Customization <a name="Customization"></a>
To custom `Badge` component, you should use `ckAPIMethods`, which will allow you to change values in `ckStore`.


### UIManagment
To call the uiManagmentAPI (ссылка) with event `setUpBadge`, it's allows you to choose and overwrite the values related to managment (якорь наверх), on which component `Badge` is based.
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpBadge', {
 showAvatar: true,
 showSVG: false,
})
```

Options data:   
| Key             |   Type     |  Description                                   |
|-----------------|------------|------------------------------------------------|
| `showAvatar`    | boolean    | is responsible for displaying avatar or not    |
| `showSVG`       | boolean    | is responsible for displaying SVF file or no   |
| `showTitle`     | boleean    | is responsible for displaying title or not     |



### Settings
To call the settingsAPI (ссылка) with event `changeAvatar`, it's allows you to overwrite path to choosen avatar in settings (якорь на верхний сеттингс).

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('changeAvatar', {
 path: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4',
})
```
Options data: 
| Key             |   Type     |  Description       |
|-----------------|------------|--------------------|
| `path`          | string     | path to picture    |




### Styles
To call the stylesAPI (ссылка) with event `changeBadge`, it's allows you to choose and overwrite style values in choosen theme and choosen container in Styles (якорь на верхний стайл), on which component `Badge` is based. 
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeBadge", {
 themeName: "sovaDark",
 data: {
   mainContainer: {
     width: "100%",
   },
 },
})
```

Optional theme name - name of choosen theme with syles you want to change.   
Options data:
| Key                |   Type          |  Description                  |
|--------------------|-----------------|-------------------------------|
| mainContainer      | object styles   | styles for main container     |
| avatarContainer    | object styles   | styles for avatar container   |
| image              | object styles   | styles for tag <img/>         |
| titleContainer     | object styles   | styles for title container    |
| svg                | object styles   | styles for SVG file           |

 

### Languages
To call the langeagesAPI (ссылка) with event `changeBadge` it's allows yo to shoose and overwrite values in choosen language packet and choosen key in languages (якорь на верхний лангуаге), on which component `Badge` is based. 

```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeBadge', {
 language: 'English',
 data: {
   title: 'Help?'
 }
})
```
Optional language:    
name of choosen language packet which values you want to change.    
Optinal data:    
| Key                |   Type          |  Description                  |
|--------------------|-----------------|-------------------------------|
| title      | string   | text in title     |
