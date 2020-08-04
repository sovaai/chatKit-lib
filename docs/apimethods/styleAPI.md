<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>



# styleAPI
This method edit the widget theme or individual component

## Usage
To make any changes you need: 
* call method `ckAPIMethods.style`  
* enter name of event  
* send data with the required keys  

## List of events
| Event name                  |                                                                              |
|-----------------------------|------------------------------------------------------------------------------|
| [switchTheme](#1)           | switching between themes                                                     |
| [initTheme](#2)             | initialization, addition a new theme                                         |
| [changeStylesn](#3)         | modifying a complete package of existing theme                               |
| [changeChatIt](#4)          | changing the style package of component `ChatIt` in selected theme           |
| [changeHeader](#5)          | changing the style package of component `Header` in selected theme           |
| [changeDialog](#6)          | changing the style package of component `Dialog` in selected theme           |
| [changeRate](#7)            | changing the style package of component `Rate` in selected theme             |
| [changeUserMessage](#8)     | changing the style package of component `UserMessage` in selected theme      |
| [changeResponseMessage](#9) | changing the style package of component `ResponseMessage` in selected theme  |
| [changeSender](#10)         | changing the style package of component `Sender` in selected theme           |
| [changeBadge](#11)          | changing the style package of component `Badge` in selected theme            |

## Description of events and data  
### 1) Event **switchTheme**  <a name="1"></a>
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
ckAPIMethods.styles('switchTheme', 'sovaDark')
```
</details>

### 2) Event **initTheme**  <a name="2"></a>
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

### 3) Event **changeStyles**  <a name="3"></a>
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

### 4) Event **changeChatIt** <a name="4"></a>
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

### 5) Event **changeHeader**  <a name="5"></a>
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

### 6) Event **changeDialog** <a name="6"></a>
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

### 7) Event **changeRate**  <a name="7"></a>
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

### 8) Event **changeUserMessage**  <a name="8"></a>
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

### 9) Event **changeResponseMessage** <a name="9"></a>
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

### 10) Event **changeSender**  <a name="10"></a>
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

### 11) Event **changeBadge**  <a name="11"></a>
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
