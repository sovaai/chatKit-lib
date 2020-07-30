# modulesAPI 
(подключение модулей)

# Quick start
Чтобы внести какие-либо изменения, необходимо импортировать метод **modulesAPI**:  
Для этого in your App.js file:
```
import {ckAPIMethods} from 'Sova-Chat-Kit'
 ...
 <ckAPIMethods.modulesAPI />
 ...
 ```
 
 # Usage
 Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.modulesAPI` 
* Указать имя ивента (cм. Description oof method)  
* Передать data с необходимыми изменениями.  

# Description of method
1 Event: **initModule**  
Description: инициализация модуля  
Params:  
| Params   | Type | Requires |
|----------|------|----------|
| module   | any  | +        |  

2 Event: **switchModule**  
Description: смена модуля  
Params:  
| Params     | Type    | Requires |
|------------|---------|----------|
| moduleName | string  | +        |  

3 Event: **updateModule**  
Description: обновление модуля  
Params:  
| Params     | Type    | Requires |
|------------|---------|----------|
| moduleName | string  | +        |  
| config     | any     | +        |  

4 Event: **getModuleConfig**  
Description: получение информации из модуля  
Params:  
| Params       | Type    | Requires |
|--------------|---------|----------|
| moduleName	 | string  | +        |  
