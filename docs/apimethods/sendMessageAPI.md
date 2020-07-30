# sendMessageAPI
(Send messages to the module to call request)

# Quick start
Чтобы внести какие-либо изменения, необходимо импортировать метод **sendMessageAPI**:  
Для этого in your App.js file:
```
import {ckAPIMethods} from 'Sova-Chat-Kit'
 ...
 <ckAPIMethods.sendMessageAPI />
 ...
 ```
 
 # Usage
 Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.sendMessageAPI` 
* Указать имя ивента (cм. Description oof method)  
* Передать data с необходимыми изменениями.  

# Description of method
Event: **request**  
Description: Отправка текстовых сообщений  
Params:  
| Params   | Type    | Requires |
|----------|---------|----------|
| text     | string  | +        |
