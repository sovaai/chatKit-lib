# recieveMessageAPI
(Add a text messages to STORE)

# Quick start
Чтобы внести какие-либо изменения, необходимо импортировать метод **recieveMessageAPI**:  
Для этого in your App.js file:
```
import {ckAPIMethods} from 'Sova-Chat-Kit'
 ...
 <ckAPIMethods.recieveMessageAPI />
 ...
 ```
 
 # Usage
 Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.recieveMessageAPI` 
* Указать имя ивента (cм. Description oof method)  
* Передать data с необходимыми изменениями.  

# Description of method
Event: **addMessage**  
Description: Сохранение сообщения в Store в ключе messages  
Params:
| Params   | Type    | Requires |
|----------|---------|----------|
| text     | string  | +        |
| sender   | string  | +        |
| showRate | boolean | +        |
