# recieveMessageAPI
## Description
Add a text messages to STORE в ключе messages

## Usage
To make any changes you need:
* call method `ckAPIMethods.recieveMessage` 
* send data with the required keys  

## Data:
| Params   | Type    | Requires | Description                            |
|----------|---------|----------|----------------------------------------|
| text     | string  | +        | Message text                           |
| sender   | string  | +        | Sender role                            |
| showRate | boolean | +        | Display raiting in message bubble      |

## Use case:
```
import { ckAPIMethods } from "sova-chatkit"
ckAPIMethods.recieveMessage({text: 'Hi, dude', sender: 'user', showRate: false})
```
