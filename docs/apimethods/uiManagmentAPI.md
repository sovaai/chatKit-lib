# uiManagmentAPI
(меняет сеттинги компонентов в STORE)

# Quick start
Чтобы внести какие-либо изменения, необходимо импортировать метод **uiManagmentAPI**:  
Для этого in your App.js file:
```
import {ckAPIMethods} from 'Sova-Chat-Kit'
 ...
 <ckAPIMethods.uiManagmentAPI />
 ...
 ```
 
 # Usage
 Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.uiManagmentAPI` 
* Указать имя ивента (cм. Description oof method)  
* Передать data с необходимыми изменениями.  

# Description of method
1 Event: **setUpSender**   
Description: настройка сендера   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

2 Event: **setUpHeader**   
Description: настройка хэдера   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

3 Event: **setUpBadge**   
Description: настройка бейджа   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

4 Event: **setUpMessage**   
Description: настройка сообщения   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

5 Event: **setUpDialog**   
Description: настройка диалога   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

6 Event: **blockSender**   
Description: заблокировать отправку сообщений   
Params:   
| Params        | Type    | Requires |
|---------------|---------|----------|
| status        | boolean | +        |

7 Event: **dialogLoading**   
Description: спиннер   
Params:   
| Params        | Type    | Requires |
|---------------|---------|----------|
| status        | boolean | +        |

8 Event: **setUpChatIt**   
Description: настройка компонента ChatIt	  
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

9 Event: **setUpRate**   
Description: настройка компонента Rate   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

10 Event: **setUpCommon**   
Description: общие настройки   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| data          | any     | +        |

11 Event: **showRate**   
Description: показать компонент Rate   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| status        | boolean | +        |

12 Event: **showNotification**   
Description: показать компонент Notification   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| status        | boolean | +        |

13 Event: **openChat**   
Description: раскрыть чат полностью   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| status        | boolean | +        |

14 Event: **showSettings**   
Description: показать компонент Settings   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| null          | null    | +        |

15 Event: **reset**   
Description: сбросить сессию   
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| null          | null    | +        |
