# settingsAPI
(меняет картинки в виджете)

# Quick start
Чтобы внести какие-либо изменения, необходимо импортировать метод **settingsAPI**:  
Для этого in your App.js file:
```
import {ckAPIMethods} from 'Sova-Chat-Kit'
 ...
 <ckAPIMethods.settingsAPI />
 ...
 ```
 
 # Usage
 Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.settingsAPI` 
* Указать имя ивента (cм. Description oof method)  
* Передать data с необходимыми изменениями.  

# Description of method
1 Event: **changeIcon**  
Description: смена определенной иконки   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| iconName      | string  | +        |
| iconData      | any     | +        |

2 Event: **changeAvatar**  
Description: изменение аватара   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| avatar        | string  | +        |
