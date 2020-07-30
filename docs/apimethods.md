text

# Quick start
Чтобы внести какие-либо изменения, необходимо импортировать отдельно взятый метод:  
Для этого:  
In your App.js file:
```

import {ckAPIMethods} from 'Sova-Chat-Kit'
 ...
 <ckAPIMethods.NAME />
 ...
 ```
где вместо *NAME* необходимо подставить конкретный метод, например:
`<ckAPIMethods.recieveMessageAPI />`

# Usage
API methods меняют сеттинги компонентов в STORE.

Чтобы внести какие-либо изменения необходимо:
* Вызвать метод ckAPIMethods.<method_name> (cм. Description oof methods)
* Указать имя ивента (cм. Description oof methods)
* Передать data с необходимыми изменениями.

# List of API methods
* [recieveMessageAPI](#1) (Add a text messages to STORE)
* [sendMessageAPI](#2) (Send messages to the module to call request)
* [notificationsAPI](#3) (Меняет сеттинги компонентов в STORE)
* [styleAPI](#4) (Edit the widget theme or individual component)
* uiManagment API (меняет сеттинги компонентов в STORE)
* settingsAPI (меняет картинки в виджете)
* modulesAPI (подключение модулей)
* languageAPI (настройки языковых пакетов)

# Descriptions of methods
## recieveMessageAPI <a name="1"></a>
Event: **addMessage**  
Description: Сохранение сообщения в Store в ключе messages  
Params:
| Params   | Type    | Requires |
|----------|---------|----------|
| text     | string  | +        |
| sender   | string  | +        |
| showRate | boolean | +        |

## sendMessageAPI <a name="2"></a>  
Event: **request**  
Description: Отправка текстовых сообщений
Params:
| Params   | Type    | Requires |
|----------|---------|----------|
| text     | string  | +        |

## notificationsAPI <a name="3"></a>  
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

## styleAPI <a name="4"></a> 
1 Event: **switchTheme**  
Description: смена темы   
Params:  

2 Event: **initTheme**  
Description: создание новой темы   
Params:  

3 Event: **changeStyles**  
Description: изменения стилевых настроек в теме   
Params:  

4 Event: **changeChatIt**  
Description: изменение стилевых настроек компонента ChatIt в определенной теме   
Params:  

5 Event: **changeHeader**  
Description: изменение стилевых настроек компонента Header в определенной теме   
Params:  

6 Event: **changeDialog**  
Description: изменение стилевых настроек компонента Dialog в определенной теме   
Params:  

7 Event: **changeRate**  
Description: изменение стилевых настроек компонента Rate в определенной теме   
Params:  

8 Event: **changeUserMessage**  
Description: изменение стилевых настроек компонента (user) Message в определенной теме   
Params:  

9 Event: **changeResponseMessage**  
Description: изменение стилевых настроек компонента (response) Message в определенной теме   
Params:  

10 Event: **changeSender**  
Description: изменение стилевых настроек компонента Sender в определенной теме   
Params:  

11 Event: **changeBadge**  
Description: изменение стилевых настроек компонента Badge в определенной теме   
Params:  

12 Event: **changeSettings**  
Description: изменение стилевых настроек компонента Settings в определенной теме   
Params:  
