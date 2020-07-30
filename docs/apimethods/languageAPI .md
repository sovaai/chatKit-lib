# languageAPI 
(настройки языковых пакетов)

# Quick start
Чтобы внести какие-либо изменения, необходимо импортировать метод **languageAPI**:  
Для этого in your App.js file:
```
import {ckAPIMethods} from 'Sova-Chat-Kit'
 ...
 <ckAPIMethods.languageAPI />
 ...
 ```
 
 # Usage
 Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.languageAPI` 
* Указать имя ивента (cм. Description oof method)  
* Передать data с необходимыми изменениями.  

# Description of method
1 Event: **initLanguage**  
Description: добавление нового языкового пакета  
Params:  
| Params | Type | Requires |
|--------|------|----------|
| data   | any  | +        |  

2 Event: **changeLanguage**  
Description: смена языка  
Params:  
| Params        | Type    | Requires |
|---------------|---------|----------|
| languageName  | string  | +        |  

3 Event: **changeLanguagePacket**  
Description: смена значения в определенном языковом пакете  
Params:  
| Params | Type | Requires |
|--------|------|----------|
| data   | any  | +        |  

4 Event: **changeChatIt**  
Description: смена значения в компоненте ChatIt в определенном языковом пакете  
Params:  
| Params | Type | Requires |
|--------|------|----------|
| data   | any  | +        | 

5 Event: **changeHeader**  
Description: смена значения в компоненте Header в определенном языковом пакете  
Params:  
| Params | Type | Requires |
|--------|------|----------|
| data   | any  | +        | 

6 Event: **changeDialog**  
Description: смена значения в компоненте Dialog в определенном языковом пакете  
Params:  
| Params | Type | Requires |
|--------|------|----------|
| data   | any  | +        |  

7 Event: **changeRate**  
Description: смена значения в компоненте Rate в определенном языковом пакете  
Params:  
| Params | Type | Requires |
|--------|------|----------|
| data   | any  | +        | 

8 Event: **changeMessage**  
Description: смена значения в компоненте Message в определенном языковом пакете  
Params:  
| Params | Type | Requires |
|--------|------|----------|
| data   | any  | +        | 

9 Event: **changeSender**  
Description: смена значения в компоненте Sender в определенном языковом пакете   
Params:  
| Params | Type | Requires |
|--------|------|----------|
| data   | any  | +        | 

10 Event: **changeBadge**  
Description: смена значения в компоненте Badge в определенном языковом пакете  
Params:  
| Params | Type | Requires |
|--------|------|----------|
| data   | any  | +        | 

11 Event: **changeSettings**  
Description: смена значения в компоненте Settings в определенном языковом пакете   
Params:  
| Params | Type | Requires |
|--------|------|----------|
| data   | any  | +        |   
