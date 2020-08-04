# styleAPI
## Description
Edit the widget theme or individual component

## Usage
To make any changes you need: 
* Call a method `ckAPIMethods.style`;  
* Enter the *event name*;  
* Transfer *data* with changing.  

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

## Description of events and data  
### 1) Event **switchTheme**  
<details>
 <summary>read description</summary>  
 
**Description:**  
переключение темы на указанную в дате тему   
**Params:**  
| Params        | Type    | Requires | Description   |  
|---------------|---------|----------|---------------|  
| themeName     | string  | +        | Theme name    |  

**For example:**  
```
import { ckAPIMethods } from "sova-chatkit"
ckAPIMethods.styles('switchTheme', 'darkSova')
```
</details>

### 2) Event **initTheme**  
**Description:**   
инициализация новой темы  
**Params:**  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| themeName     | string  | +        |   1             |  
| data          | any     | +        |   1             |  

[Текст ссылки](#abcd)

Описание data:  
Sender:  
 mainContainer -   
 mainContainerSearch -   
 searchCountContainer -   
 searchButtonContainer -   
 addFileButton -   
 sendMessageButton -   
 shareButton -   
 stickersButton -   
 textArea -   
 voiceButton -   

ChatIt:  
 mainContainer -   
 chatContainer -   

Dialog:  
 mainContainer -   
 panel -   
 rateButton -   
 searchButton -   
 messagesContainer -   
 
UserMessage:  
 mainContainer -   
 groupTypeMessagesNext -   
 groupTypeMessagesPrev -   
 groupTypeMessagesInter -   
 textContainer -   
 avatarContainer -   
 image -   
 positiveRateMessageButton -   
 negativeRateMessageButton -   
 audioMessageButton -   
 dataContainer -   
 bubbleContainer -   
 buttonsContainer -   

ResponseMessage:  
 mainContainer -   
 groupTypeMessagesNext -   
 groupTypeMessagesPrev -   
 groupTypeMessagesInter -   
 textContainer -   
 avatarContainer -   
 image -   
 positiveRateMessageButton -   
 negativeRateMessageButton -   
 audioMessageButton -   
 dataContainer -   
 bubbleContainer -   
 buttonsContainer -   

MessageLoader -  
 mainContainer-   
 elementOne -   
 elementTwo -  
 elementThree -  

Divider -  
 dividerMainContainer -  
 
Header -  
 mainContainer -  
 avatarContainer -  
 image: {},
 titleContainer: {},
 resetButton: {},
 closeButton: {},
 settingsButton: {},
 headerSearchContainer: {},
 headerSearchInput: {},
 searchButton: {},
},
Badge: {
 mainContainer: {},
 avatarContainer: {},
 image: {},
 titleContainer: {},
 svg: {},
},
Rate: {
 mainContainer: {},
 titleContainer: {},
 negativeRateButton: {},
 positiveRateButton: {},
 ratingElement: {},
 ratingListContainer: {},
},
Close: {
 mainContainer: {},
},
Settings: {
 mainContainer: {},
 header: {},
 titleContainer: {},
 closeSettingsButton: {},
 fieldcontainer: {},
 heading: {},
 languages: {},
 themes: {},
 languagesCheckboxContainer: {},
 themesCheckboxContainer: {},
 boxTitle: {},
 checkbox: {},
 switcher: {},
},
ToggleSlider: {
 toggleContainer: {},
 toggleHeading: {},
 toggleLabel: {},
 toggleInput: {},
 toggleSlider: {},
}

**For example:**  
```
import { ckAPIMethods } from "sova-chatkit";
const data = {
 themeName: 'Your awesome theme',
 data: {
 example: {}, 
 Sender: {
 mainContainer: {},
 mainContainerSearch: {},
 searchCountContainer: {},
 searchButtonContainer: {},
 addFileButton: {},
 sendMessageButton: {},
 shareButton: {},
 stickersButton: {},
 textArea: {},
 voiceButton: {},
 },
 ChatIt: {
 mainContainer: {},
 chatContainer: {}, 
 },
 Dialog: {
 mainContainer: {},
 panel: {},
 rateButton: {},
 searchButton: {},
 messagesContainer: {},
 },
 UserMessage: {
 mainContainer: {},
 groupTypeMessagesNext: {},
 groupTypeMessagesPrev: {},
 groupTypeMessagesInter: {},
 textContainer: {},
 avatarContainer: {},
 image: {},
 positiveRateMessageButton: {},
 negativeRateMessageButton: {},
 audioMessageButton: {},
 dataContainer: {},
 bubbleContainer: {},
 buttonsContainer: {},
 },
 ResponseMessage: {
 mainContainer: {},
 groupTypeMessagesNext: {},
 groupTypeMessagesPrev: {},
 groupTypeMessagesInter: {},
 textContainer: {},
 avatarContainer: {},
 image: {},
 positiveRateMessageButton: {},
 negativeRateMessageButton: {},
 audioMessageButton: {},
 dataContainer: {},
 bubbleContainer: {},
 buttonsContainer: {},
 },
 MessageLoader: {
 mainContainer: {},
 elementOne: {},
 elementTwo: {},
 elementThree: {},
 },
 Divider: {
 dividerMainContainer: {},
 },
 Header: {
 mainContainer: {},
 avatarContainer: {},
 image: {},
 titleContainer: {},
 resetButton: {},
 closeButton: {},
 settingsButton: {},
 headerSearchContainer: {},
 headerSearchInput: {},
 searchButton: {},
 },
 Badge: {
 mainContainer: {},
 avatarContainer: {},
 image: {},
 titleContainer: {},
 svg: {},
 },
 Rate: {
 mainContainer: {},
 titleContainer: {},
 negativeRateButton: {},
 positiveRateButton: {},
 ratingElement: {},
 ratingListContainer: {},
 },
 Close: {
 mainContainer: {},
 },
 Settings: {
 mainContainer: {},
 header: {},
 titleContainer: {},
 closeSettingsButton: {},
 fieldcontainer: {},
 heading: {},
 languages: {},
 themes: {},
 languagesCheckboxContainer: {},
 themesCheckboxContainer: {},
 boxTitle: {},
 checkbox: {},
 switcher: {},
 },
 ToggleSlider: {
 toggleContainer: {},
 toggleHeading: {},
 toggleLabel: {},
 toggleInput: {},
 toggleSlider: {},
 },
 },
};
ckAPIMethods.styles('initTheme', data)
```

### 3) Event **changeStyles**  
**Description:**  
изменение полного пакета существующей темы  
**Params:**  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| themeName     | string  | +        |  1              |  
| data          | any     | +        |  1              |  

**For example:**  
```
import { ckAPIMethods } from "sova-chatkit"

```

### 4) Event **changeChatIt** 
**Description:**  
изменение стилевого пакета компонента ChatIt в выбранной теме   
**Params:**  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              |  

**For example:** 
```
import { ckAPIMethods } from "sova-chatkit"

```

### 5) Event **changeHeader**  
**Description:**  
изменение стилевого пакета компонента Header в выбранной теме  
**Params:**   
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              | 

**For example:** 
```
import { ckAPIMethods } from "sova-chatkit"

```

### 6) Event **changeDialog**  
**Description:**  
изменение стилевого пакета компонента Dialog в выбранной теме   
**Params:**  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              | 

**For example:** 
```
import { ckAPIMethods } from "sova-chatkit"

```

### 7) Event **changeRate**  
**Description:**  
изменение стилевого пакета компонента Rate в выбранной теме    
**Params:**  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |   1             |  

**For example:** 
```
import { ckAPIMethods } from "sova-chatkit"

```

### 8) Event **changeUserMessage**  
**Description:**  
изменение стилевого пакета компонента UserMessage в выбранной теме   
**Params:**  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              | 

**For example:** 
```
import { ckAPIMethods } from "sova-chatkit"

```

### 9) Event **changeResponseMessage**  
**Description:**  
изменение стилевого пакета компонента ResponseMessage в выбранной теме   
**Params:**  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              |  

**For example:** 
```
import { ckAPIMethods } from "sova-chatkit"

```

### 10) Event **changeSender**  
**Description:**  
изменение стилевого пакета компонента Sender в выбранной теме 
**Params:**  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              | 

**For example:** 
```
import { ckAPIMethods } from "sova-chatkit"

```

### 11) Event **changeBadge**  
**Description:**  
изменение стилевого пакета компонента Badge в выбранной теме   
**Params:**  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| data          | any     | +        |  1              |  

**For example:** 
```
import { ckAPIMethods } from "sova-chatkit"

```
