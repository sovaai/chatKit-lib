# uiManagmentAPI
(меняет сеттинги компонентов в STORE)

## Quick start
Чтобы внести какие-либо изменения, необходимо импортировать метод **uiManagmentAPI**:  
Для этого in your App.js file:
```
import {ckAPIMethods} from 'Sova-Chat-Kit'
 ...
 <ckAPIMethods.uiManagmentAPI />
 ...
 ```
 
## Usage
 Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.uiManagmentAPI` 
* Указать имя ивента (cм. Description oof method)  
* Передать data с необходимыми изменениями.  

## List of events
| Event name                  |                                          |
|-----------------------------|------------------------------------------|
| [setUpSender](#1)           | setting the component `Sender`           |
| [setUpHeader](#2)           | setting the component `Header`           |
| [setUpBadge](#3)            | setting the component `Badge`            |
| [setUpMessage](#4)          | setting the component `Message`          |
| [setUpDialog](#5)           | setting the component `Dialog`           |
| [blockSender](#6)           | block sending messages                   |
| [dialogLoading](#7)         | spinner display                          |
| [setUpChatIt](#8)           | setting the component `ChatIt`           |
| [setUpRate](#9)             | setting the component `Rate`             |
| [setUpCommon](#10)          | general settings                         |
| [showRate](#11)             | show the component `Rate`                |
| [showNotification](#12)     | show the component `Notification`        |
| [openChat](#13)             | open the chat                            |
| [showSettings](#14)         | show the component `Settings`            |
| [reset](#15)                | reset session                            |

## Description of method
### **setUpSender**<a name="1"></a>   
Description: setting the component `Sender`   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

### **setUpHeader**<a name="2"></a>   
Description: setting the component `Header`   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

### **setUpBadge**<a name="3"></a>   
Description: setting the component `Badge`   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

### **setUpMessage**<a name="4"></a>   
Description: setting the component `Message`   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

### **setUpDialog**<a name="5"></a>   
Description: setting the component `Dialog`   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

### **blockSender**<a name="6"></a>   
Description: block sending messages   
Params:   
| Params        | Type    | Requires |
|---------------|---------|----------|
| status        | boolean | +        |

### **dialogLoading**<a name="7"></a>   
Description: spinner display   
Params:   
| Params        | Type    | Requires |
|---------------|---------|----------|
| status        | boolean | +        |

### **setUpChatIt**<a name="8"></a>   
Description: setting the component `ChatIt`	  
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

### **setUpRate**<a name="9"></a>   
Description: setting the component `Rate`   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

### **setUpCommon**<a name="10"></a>   
Description: general settings  
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

### **showRate**<a name="11"></a>   
Description: show the component `Rate`   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| status        | boolean | +        |

### **showNotification**<a name="12"></a>   
Description: show the component `Notification`   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| status        | boolean | +        |

### **openChat**<a name="13"></a>   
Description: open the chat   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| status        | boolean | +        |

### **showSettings**<a name="14"></a>   
Description: show the component `Settings`   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| null          | null    | +        |

### **reset**<a name="15"></a>   
Description: reset session   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| null          | null    | +        |
