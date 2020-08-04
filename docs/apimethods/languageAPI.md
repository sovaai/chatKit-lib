# languageAPI 
This method changes language pack settings

 # Usage
 To make any changes you need: 
* call method `ckAPIMethods.languageAPI` 
* enter name of event
* send data with the required keys

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
