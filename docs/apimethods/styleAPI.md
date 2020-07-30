# styleAPI
(Edit the widget theme or individual component)

# Quick start
Чтобы внести какие-либо изменения, необходимо импортировать метод **styleAPI**:  
Для этого in your App.js file:
```
import {ckAPIMethods} from 'Sova-Chat-Kit'
 ...
 <ckAPIMethods.styleAPI />
 ...
 ```
 
 # Usage
 Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.styleAPI` 
* Указать имя ивента (cм. Description oof method)  
* Передать data с необходимыми изменениями.  

# Description of method
1 Event: **switchTheme**  
Description: смена темы   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| themeName     | string  | +        |

2 Event: **initTheme**  
Description: создание новой темы   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| themeName     | string  | +        |
| data          | any     | +        |

3 Event: **changeStyles**  
Description: изменения стилевых настроек в теме   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| themeName     | string  | +        |
| data          | any     | +        |

4 Event: **changeChatIt**  
Description: изменение стилевых настроек компонента ChatIt в определенной теме   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

5 Event: **changeHeader**  
Description: изменение стилевых настроек компонента Header в определенной теме   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

6 Event: **changeDialog**  
Description: изменение стилевых настроек компонента Dialog в определенной теме   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

7 Event: **changeRate**  
Description: изменение стилевых настроек компонента Rate в определенной теме   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

8 Event: **changeUserMessage**  
Description: изменение стилевых настроек компонента (user) Message в определенной теме   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

9 Event: **changeResponseMessage**  
Description: изменение стилевых настроек компонента (response) Message в определенной теме   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

10 Event: **changeSender**  
Description: изменение стилевых настроек компонента Sender в определенной теме   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

11 Event: **changeBadge**  
Description: изменение стилевых настроек компонента Badge в определенной теме   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

12 Event: **changeSettings**  
Description: изменение стилевых настроек компонента Settings в определенной теме   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |
