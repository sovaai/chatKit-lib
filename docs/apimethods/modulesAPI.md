# modulesAPI 
(подключение модулей)

 # Usage
To make any changes you need:  
* call method `ckAPIMethods.modulesAPI` 
* enter name of event  
* send data with the required keys  

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
