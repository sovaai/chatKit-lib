# styleAPI
## Description
Edit the widget theme or individual component

## Usage
To make any changes you need: 
* Call a method `ckAPIMethods.style`;  
* Enter the *event name*;  
* Transfer *data* with changing.  

## List of events
| Event name            |                                                                              |
|-----------------------|------------------------------------------------------------------------------|
| switchTheme           | switching between themes                                                     |
| initTheme             | initialization, addition a new theme                                         |
| changeStyles          | modifying a complete package of existing theme                               |
| changeChatIt          | changing the style package of component `ChatIt` in selected theme           |
| changeHeader          | changing the style package of component `Header` in selected theme           |
| changeDialog          | changing the style package of component `Dialog` in selected theme           |
| changeRate            | changing the style package of component `Rate` in selected theme             |
| changeUserMessage     | changing the style package of component `UserMessage` in selected theme      |
| changeResponseMessage | changing the style package of component `ResponseMessage` in selected theme  |
| changeSender          | changing the style package of component `Sender` in selected theme           |
| changeBadge           | changing the style package of component `Badge` in selected theme            |

## Description of events and data  
### 1) Event **switchTheme**  
<details>
 <summary>read about event</summary>  
 
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
<details>
 <summary>read about event</summary>  
 
**Description:**   
инициализация новой темы  
**Params:**  
| Params        | Type    | Requires | Description     |  
|---------------|---------|----------|-----------------|  
| themeName     | string  | +        |   1             |  
| data          | any     | +        |   1             |  

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
 image -  
 titleContainer -  
 resetButton -  
 closeButton -  
 settingsButton -  
 headerSearchContainer -  
 headerSearchInput -  
 searchButton -  

Badge -  
 mainContainer -  
 avatarContainer -  
 image -  
 titleContainer -  
 svg -  

Rate -  
 mainContainer -  
 titleContainer -  
 negativeRateButton -  
 positiveRateButton -  
 ratingElement -  
 ratingListContainer -  

Close -  
 mainContainer -  
 
Settings -  
 mainContainer -  
 header -  
 titleContainer -  
 closeSettingsButton -  
 fieldcontainer -  
 heading -  
 languages -  
 themes -  
 languagesCheckboxContainer -  
 themesCheckboxContainer -  
 boxTitle -  
 checkbox -  
 switcher -  

ToggleSlider -  
 toggleContainer -  
 toggleHeading -  
 toggleLabel -  
 toggleInput -  
 toggleSlider -   

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
</details>

### 3) Event **changeStyles**  
<details>
 <summary>read about event</summary>  
 
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
</details>

### 4) Event **changeChatIt** 
<details>
 <summary>read about event</summary>  
 
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
</details>

### 5) Event **changeHeader**  
<details>
 <summary>read about event</summary>  
 
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
</details>

### 6) Event **changeDialog** 
<details>
 <summary>read about event</summary>  
 
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
</details>

### 7) Event **changeRate**  
<details>
 <summary>read about event</summary>  
 
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
</details>

### 8) Event **changeUserMessage**  
<details>
 <summary>read about event</summary>  
 
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
</details>

### 9) Event **changeResponseMessage** 
<details>
 <summary>read about event</summary>  
 
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
</details>

### 10) Event **changeSender**  
<details>
 <summary>read about event</summary>  
 
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
</details>

### 11) Event **changeBadge**  
<details>
 <summary>read about event</summary>  
 
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
</details>
