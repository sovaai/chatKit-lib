# settingsAPI
This method changes pictures (avatar, icons, etc.) in the widget
 
## Usage
To make any changes you need:  
* call method `ckAPIMethods.settingsAPI`  
* enter name of event  
* send data with the required keys  

## List of events
| Event name            |                          |
|-----------------------|--------------------------|
| [changeIcon](#1)      | changing a specific icon |
| [changeAvatar](#2)    | changing the avatar      |

## Use case
```
import { ckAPIMethods } from "sova-chatkit"

```

## Description of events
### Event: **changeIcon**  <a name="1"></a>
Description: changing a specific icon   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| iconName      | string  | +        |
| iconData      | any     | +        |

### Event: **changeAvatar**  <a name="2"></a>
Description: changing the avatar   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| avatar        | string  | +        |
