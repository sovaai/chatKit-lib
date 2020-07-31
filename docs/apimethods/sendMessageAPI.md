# sendMessageAPI
## Description
Send messages to the module to call request

# Usage
Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.sendMessage` 
* Передать data с необходимыми ключами.  

# Data
| Params   | Type    | Requires | Description     |
|----------|---------|----------|-----------------|
| text     | string  | +        | Текст сообщения |

## Пример использования
```
import { ckAPIMethods } from "sova-chatkit"
ckAPIMethods.sendMessage('Hi, dude!')
```
