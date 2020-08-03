# sendMessageAPI
## Description
Send messages to the module to call request

# Usage
To make any changes you need:  
* call method `ckAPIMethods.sendMessage` 
* send data with the required keys  

# Data
| Params   | Type    | Requires | Description     |
|----------|---------|----------|-----------------|
| text     | string  | +        | Message text    |

## Use case
```
import { ckAPIMethods } from "sova-chatkit"
ckAPIMethods.sendMessage('Hi, dude!')
```
