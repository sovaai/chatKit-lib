# notificationsAPI
(Меняет сеттинги компонентов в STORE)

# Quick start
Чтобы внести какие-либо изменения, необходимо импортировать метод **notificationsAPI**:  
Для этого in your App.js file:
```
import {ckAPIMethods} from 'Sova-Chat-Kit'
 ...
 <ckAPIMethods.notificationsAPI />
 ...
 ```
 
 # Usage
 Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.notificationsAPI` 
* Указать имя ивента (cм. Description oof method)  
* Передать data с необходимыми изменениями.  

# Description of method
1 Event: **addMessages**  
Description: добавить нотификационные сообщения  
Params:  
| Params   | Type | Requires |
|----------|------|----------|
| messages | any  | +        |  

2 Event: **addSettings**  
Description: добавить нотификационные настройки  
Params:  
| Params   | Type | Requires |
|----------|------|----------|
| settings | any  | +        |  

3 Event: **shown**  
Description: показ нотификаций  
Params:  
| Params   | Type | Requires |
|----------|------|----------|
| null     | null | +        |  

4 Event: **clicked**  
Description: нажали на нотификацию  
Params:  
| Params   | Type | Requires |
|----------|------|----------|
| null     | null | +        |  

5 Event: **anabled**  
Description: поддержка нотификаций виджетом   
Params:  
| Params   | Type    | Requires |
|----------|---------|----------|
| status   | boolean | +        | 
