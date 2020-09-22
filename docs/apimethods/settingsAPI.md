# settingsAPI
This method changes pictures (avatar, icons and SVG images) in the widget
 

## Usage
To make any changes you need:  

* call method `ckAPIMethods.settingsAPI`  
* enter name of event and send data with the required keys  


## Arguments
| Value          |                                 |
|----------------|---------------------------------|
| eventName      | event name                      |
| data           | data depends on the event       |

Description of events and its data read read below.


## List of events
| Event name                     |                          |
|--------------------------------|--------------------------|
| [changeIcon](#changeicon--)      | changing a specific icon |
| [changeAvatar](#changeavatar--)  | changing the avatar      |
| [changeSVG](#changesvg--)        | changing SVG image       |



### changeIcon
Changing a specific icon 

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('changeIcon', {
  iconName: 'searchIcon',
  iconData: { 
    props: { 
      size: 2 
    }, 
    icon: ['fas', 'play'], 
  } 
})

```

**Data**:  

<table>
  <tr>
    <td colspan="2" align=center><b>Key</b></td>
    <td align=center><b>Type</b></td>
    <td align=center><b>Required</b></td>
    <td align=center><b>Description</b></td>
  </tr>
  <tr>
    <td colspan="2">iconName</td>
    <td>string</td>
    <td>+</td>
    <td>name of icon, you want to change</td>
  </tr>
  <tr>
    <td colspan="2">iconData</td>
    <td>object</td>
    <td></td>
    <td>settings of changes</td>
  </tr>
  <tr>
    <td></td>
    <td>props</td>
    <td>object</td>
    <td>+</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>icon</td>
    <td>string</td>
    <td>+</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>className</td>
    <td>string</td>
    <td>+</td>
    <td></td>
  </tr>
</table>

To see info about `iconData`, visit https://github.com/FortAwesome/react-fontawesome



### changeAvatar
Changing the avatar 
  
**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.settings('changeAvatar', {
  path: 'https://avatars2.githubusercontent.com/u/59205514?s=200&v=4',
```

**Data**:  

| Key             |   Type     | Required  |  Description       |
|-----------------|------------|-----------|--------------------|
| `path`          | string     |     +     | path to picture    |



### changeSVG
changing SVG image

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('changeSVG', {
  SVGName: 'dropZone',
  SVG: YourSvgComponent
}) 
```

**Data**:

| Key             |   Type           | Required  |  Description              |
|-----------------|------------------|-----------|---------------------------|
| SVGName         | string           |     +     | SVG name                  |
| SVG             | React.component  |     +     | SVG component to be used  |
