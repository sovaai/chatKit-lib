# styleAPI
## Description
Edit the widget theme or individual component

## Usage
Чтобы внести какие-либо изменения необходимо:  
* Вызвать метод `ckAPIMethods.style` 
* Указать имя ивента (см. List of events)
* Передать *data* с необходимыми изменениями.  

## List of events
1) **switchTheme** (переключение темы);  
2) **initTheme** (инициализация, добвление новой темы);  
3) **hangeStyles** (изменение полного пакета существующей темы);  
4) **changeChatIt** (изменение стилевого пакета компонента ChatIt в выбранной теме);  
5) **changeHeader** (изменение стилевого пакета компонента Header в выбранной теме);  
6) **changeDialog** (изменение стилевого пакета компонента Dialog в выбранной теме);  
7) **changeRate** (изменение стилевого пакета компонента Rate в выбранной теме);  
8) **changeUserMessage** (изменение стилевого пакета компонента UserMessage в выбранной теме);  
9) **changeResponseMessage** (изменение стилевого пакета компонента ResponseMessage в выбранной теме);
10) **changeSender** (изменение стилевого пакета компонента Sender в выбранной теме);  
11) **changeBadge** (изменение стилевого пакета компонента Badge в выбранной теме).  


### Description of events and data  
#### 1) Event **switchTheme**  
Description: переключение темы на указанную в дате тему   
Params:  
| Params        | Type    | Requires | Description   |  
|---------------|---------|----------|---------------|  
| themeName     | string  | +        | Название темы |  

For example:  
```
import { ckAPIMethods } from "sova-chatkit"
ckAPIMethods.styles('switchTheme', 'darkSova')
```

#### 2) Event **initTheme**  
Description: инициализация новой темы   
Params:  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| themeName     | string  | +        |  1              |  
| data          | any     | +        |   1             |  

For example:  
```
import { ckAPIMethods } from "sova-chatkit"

```

#### 3) Event **changeStyles**  
Description: изменения стилевых настроек в теме   
Params:  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| themeName     | string  | +        |  1              |  
| data          | any     | +        |  1              |  

For example:  
```
import { ckAPIMethods } from "sova-chatkit"

```

#### 4) Event **changeChatIt** 
Description: изменение стилевых настроек компонента ChatIt в определенной теме   
Params:  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              |  

For example: 
```
import { ckAPIMethods } from "sova-chatkit"

```

#### 5) Event **changeHeader**  
Description: изменение стилевых настроек компонента Header в определенной теме   
Params:  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              | 

For example: 
```
import { ckAPIMethods } from "sova-chatkit"

```

#### 6) Event **changeDialog**  
Description: изменение стилевых настроек компонента Dialog в определенной теме   
Params:  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              | 

For example: 
```
import { ckAPIMethods } from "sova-chatkit"

```

#### 7) Event **changeRate**  
Description: изменение стилевых настроек компонента Rate в определенной теме   
Params:  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |   1             |  

For example: 
```
import { ckAPIMethods } from "sova-chatkit"

```

#### 8) Event **changeUserMessage**  
Description: изменение стилевых настроек компонента (user) Message в определенной теме   
Params:  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              | 

For example: 
```
import { ckAPIMethods } from "sova-chatkit"

```

#### 9) Event **changeResponseMessage**  
Description: изменение стилевых настроек компонента (response) Message в определенной теме   
Params:  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              |  

For example: 
```
import { ckAPIMethods } from "sova-chatkit"

```

#### 10) Event **changeSender**  
Description: изменение стилевых настроек компонента Sender в определенной теме   
Params:  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              | 

For example: 
```
import { ckAPIMethods } from "sova-chatkit"

```

#### 11) Event **changeBadge**  
Description: изменение стилевых настроек компонента Badge в определенной теме   
Params:  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              |  

For example: 
```
import { ckAPIMethods } from "sova-chatkit"

```
