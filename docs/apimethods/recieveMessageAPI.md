# recieveMessageAPI
## Description
Add a text messages to STORE в ключе messages

## Usage
 Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.recieveMessage` 
* Передать data с необходимыми ключами.  

## Data:
| Params   | Type    | Requires | Description                            |
|----------|---------|----------|----------------------------------------|
| text     | string  | +        | Текст сообщения                        |
| sender   | string  | +        | Роль отправителя                       |
| showRate | boolean | +        | Отображение в бабле сообщения оценки   |

## Пример использования:
```
import { ckAPIMethods } from "sova-chatkit"
ckAPIMethods.recieveMessage({text: 'Hi, dude', sender: 'user', showRate: false})
```
