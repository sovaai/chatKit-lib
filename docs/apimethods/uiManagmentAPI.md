# uiManagmentAPI
This method changes settings of components in STORE


## Usage
To make any changes with settings of components you need:

* call method `ckAPIMethods.uiManagmentAPI` 
* enter name of event and send data with the required keys


## Arguments
| Value          |                                 |
|----------------|---------------------------------|
| eventName      | event name                      |
| data           | data depends on the event       |

Description of events and its data read read below.


## List of events
| Event name                                      |                                                                                                                                  |
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| [setUpSender](#setUpSender)                     | setting the component [Sender](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/sender.md "Read about sender")  |
| [setUpHeader](#setUpHeader)                     | setting the component [Header](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/header.md "Read about header")  |
| [setUpBadge](#setUpBadge)                       | setting the component [Badge](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/badge.md "Read about badge")     |
| [setUpMessage](#setUpMessage)                   | setting the component [Message](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/message.md "Read about message")|
| [setUpDialog](#setUpDialog)                     | setting the component [Dialog](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/dialog.md "Read about dialog")     |
| [blockSender](#blockSender)                     | block sending messages                                                                                                              |
| [dialogLoading](#dialogLoading)                 | spinner display                                                                                                                     |
| [setUpChatIt](#setUpChatIt)                     | setting the component `ChatIt`                                                                                                      |
| [setUpRate](#setUpRate)                         | setting the component [Rate](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/rate.md "Read about rate")           |
| [setUpCommon](#setUpCommon)                     | general settings                                                                                                                    |
| [showRate](#showRate)                           | show the component [Rate](https://github.com/sovaai/chatKit-lib/blob/master/docs/components/rate.md "Read about rate")              |
| [showNotification](#showNotification)           | show the component `Notification`                                                                                                   |
| [openChat](#openChat)                           | open the chat                                                                                                                       |
| [showSettings](#showSettings)                   | show the component `Settings`                                                                                                       |
| [reset](#reset)                                 | reset session                                                                                                                       |
| [toggleDisplayMessageTime](#toggleDisplayMessageTime) | toggle display message time                                                                                                   |
| [toggleSearchActiveStatus](#toggleSearchActiveStatus) | toggle search active status                                                                                                   |
| [changeSearchValue](#changeSearchValue)         | change search value                                                                                                                 |
| [changeFoundGroup](#changeFoundGroup)           | change found group                                                                                                                  |
| [scrollToFoundMessage](#scrollToFoundMessage)   | scroll to found message                                                                                                             |
| [showDropZone](#showDropZone)                   | show drop zone in chat                                                                                                              |



### setUpSender  

Setting the component `Sender`  

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpSender', {
  addFileButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  addStickersButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  audioMessageButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  sendButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  shareButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  blockInput: true,
  blockSubmit: true
})
```

**Data**: 
 
<table>
  <tr>
    <td colspan="2" align=center><b>Key</b></td>
    <td align=center><b>Type</b></td>
    <td align=center><b>Required</b></td>
    <td align=center><b>Description</b></td>
  </tr>
  <tr>
    <td colspan="2">addFileButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying add file button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">addStickersButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying add stickers button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">audioMessageButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying audio message button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">sendButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying send button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
    <tr>
    <td colspan="2">shareButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying share button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">blockInput</td>
    <td>boolean</td>
    <td>+</td>
    <td>block input or not </td>
  </tr>
  <tr>
    <td colspan="2">blockSubmit</td>
    <td>boolean</td>
    <td>+</td>
    <td>block submit or not </td>
  </tr>
</table>




### setUpHeader  

Setting the component `Header`   

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpHeader', {
  showTitle: true,
  showAvatar: true,
  settings: {
    enabled: true,
    withTitle: false,
    withIcon: true,
  },
  close: { 
    enabled: true,
    withTitle: false,
    withIcon: true,
  }, 
  search: {
    enabled: true,   
    withTitle: false,  
    withIcon: true,
  }, 
  reset: {
    enabled: true,
    withTitle: false,
    withIcon: true,
  }
})
```

**Data**:  

 <table>
  <tr>
      <td colspan="2" align=center><b>Key</b></td>
      <td align=center><b>Type</b></td>
      <td align=center><b>Required</b></td>
      <td align=center><b>Description</b></td>
  </tr>
  <tr>
      <td colspan="2">showTitle</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show title</td>
  </tr>
  <tr>
      <td colspan="2">showAvatar</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show avatar</td>
  </tr>
  <tr>
      <td colspan="2">settings</td>
      <td>object</td>
      <td></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td>enabled</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component display on widget </td>
  </tr>
  <tr>
      <td></td>
      <td>withTitle</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show title </td>
  </tr>
  <tr>
      <td></td>
      <td>withIcon</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show icon</td>
  </tr>
  <tr>
      <td colspan="2">close</td>
      <td>object</td>
      <td></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td>enabled</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show close button </td>
  </tr>
  <tr>
      <td></td>
      <td>withTitle</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show close button title</td>
  </tr>
  <tr>
      <td></td>
      <td>withIcon</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show close button icon</td>
  </tr>
  <tr>
      <td colspan="2">search</td>
      <td>object</td>
      <td></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td>enabled</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show search button</td>
  </tr>
  <tr>
      <td></td>
      <td>withTitle</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show search button title</td>
  </tr>
  <tr>
      <td></td>
      <td>withIcon</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show search button icon</td>
  </tr>
  <tr>
      <td colspan="2">reset</td>
      <td>object</td>
      <td></td>
      <td></td>
  </tr>
  <tr>
      <td></td>
      <td>enabled</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component display on widget</td>
  </tr>
  <tr>
      <td></td>
      <td>withTitle</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show title </td>
  </tr>
  <tr>
      <td></td>
      <td>withIcon</td>
      <td>boolean</td>
      <td>+</td>
      <td>should component show icon</td>
  </tr>
</table>



### setUpBadge

Setting the component `Badge`  
 
**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpBadge', {
  showAvatar: true,
  showSVG: false,
  showTitle: true
})
```

**Data**: 
  
| Key             |   Type     | Required  |  Description                                   |
|-----------------|------------|-----------|------------------------------------------------|
| `showAvatar`    | boolean    |     +     | is responsible for displaying avatar or not    |
| `showSVG`       | boolean    |     +     | is responsible for displaying SVF file or no   |
| `showTitle`     | boleean    |     +     | is responsible for displaying title or not     |




### setUpMessage  
Setting the component `Message` 
  
**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpMessage', {
  audioMessageButton: {
    enabled: true,
    withTitle: false,
    withIcon: true
  },
  positiveRateMessage: {
    enabled: true,
    withTitle: false,
    withIcon: true
  },
  negativeRateRateMessage: {
    enabled: true,
    withTitle: false,
    withIcon: true
  },
showAvatar: false,
showTitle: true
})
```

**Data**: 

 <table>
  <tr>
    <td colspan="2" align=center><b>Key</b></td>
    <td align=center><b>Type</b></td>
    <td align=center><b>Required</b></td>
    <td align=center><b>Description</b></td>
  </tr>
  <tr>
    <td colspan="2">audioMessageButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying audio message or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">positiveRateMessage</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying positive rate message button or not</td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not</td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">negativeRateMessage</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying negative rate message button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">showAvatar</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying avatar or not </td>
  </tr>
  <tr>
    <td colspan="2">showTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying title or not </td>
  </tr>
</table>


### setUpDialog 

Setting the component `Dialog`   

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpDialog', {
  rateButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  searchButton: {
    enabled: true,
    withTitle: false,
    withIcon: true
  },
  loader: {  
    enabled: true,
    withTitle: false, 
    withIcon: true,
  }, 
showMsgLoad: true
})
```

**Data**: 
 
 <table>
  <tr>
    <td colspan="2" align=center><b>Key</b></td>
    <td align=center><b>Type</b></td>
    <td align=center><b>Required</b></td>
    <td align=center><b>Description</b></td>
  </tr>
  <tr>
    <td colspan="2">rateButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying rate button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">searchButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying search button or not</td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not</td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
 <tr>
  <td colspan="2">loader</td>
  <td>object</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td>enabled</td>
  <td>boolean</td>
  <td>+</td>
  <td>is responsible for displaying loader or not </td>
</tr>
<tr>
  <td></td>
  <td>withTitle</td>
  <td>boolean</td>
  <td>+</td>
  <td>is responsible for displaying loader with title or not </td>
</tr>
<tr>
  <td></td>
  <td>withIcon</td>
  <td>boolean</td>
  <td>+</td>
  <td>is responsible for displaying loader with icon or not</td>
</tr>
  <tr>
    <td colspan="2">showMsgLoad</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying message loading </td>
  </tr>
</table>




### blockSender 

Block sending messages   

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('blockSender', false)
```

**Data**: 
   
| Params        | Type    | Requires | Description           |
|---------------|---------|----------|-----------------------|
| status        | boolean | +        | block sender or not   |



### dialogLoading  
Spinner display   

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('dialogLoading', false)
```

**Data**:  
  
| Params        | Type    | Requires | Description                |
|---------------|---------|----------|----------------------------|
| status        | boolean | +        | display spinner or not     |



### setUpChatIt   

Setting the component `ChatIt`
	  
**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpChatIt', {
  senderEnabled: true,
  closeEnabled: false,
  notificationsEnabled: true,
  dialogEnabled: true,
  rateEnabled: false,
  badgeEnabled: true,
  headerEnabled: true,
  settingsEnabled: true
})
```

**Data**:   

| Params                | Type        | Requires | Description                    |
|-----------------------|-------------|----------|--------------------------------|
| senderEnabled         | boolean     | +        | sender enabled or not          |
| closeEnabled          | boolean     | +        | close enabled or not           |
| notificationsEnabled  | boolean     | +        | notifications enabled or not   |
| dialogEnabled         | boolean     | +        | dialog enabled or not          |
| rateEnabled           | boolean     | +        | rate enabled or not            |
| badgeEnabled          | boolean     | +        | badge enabled or not           |
| headerEnabled         | boolean     | +        | header enabled or not          |
| settingsEnabled       | boolean     | +        | settings enabled or not        |


### setUpRate 

Setting the component `Rate`   

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('setUpRate', {
  negativeRateButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  },
  positiveRateButton: {
    enabled: true,
    withTitle: true,
    withIcon: true
  }
})
```

**Data**:
  
<table>
  <tr>
    <td colspan="2" align=center><b>Key</b></td>
    <td align=center><b>Type</b></td>
    <td align=center><b>Required</b></td>
    <td align=center><b>Description</b></td>
  </tr>
  <tr>
    <td colspan="2">negativeRateButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying negative rate button or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not </td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
  <tr>
    <td colspan="2">positiveRateButton</td>
    <td>object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enabled</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying positive rate button or not</td>
  </tr>
  <tr>
    <td></td>
    <td>withTitle</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with title or not</td>
  </tr>
  <tr>
    <td></td>
    <td>withIcon</td>
    <td>boolean</td>
    <td>+</td>
    <td>is responsible for displaying button with icon or not</td>
  </tr>
</table>



### setUpCommon  
General settings  

**Usage**:
```javascript
ckAPIMethods.uiManagment('setUpCommon', {
  chatIsOpen: false,
  showNotification: false,
  showMsgLoad: false,
  showRate: false,
  mobileEnabled: true,
  showSettings: false
})
```

**Data**:  
 
| Params              | Type      | Requires | Description                              |
|---------------------|-----------|----------|------------------------------------------|
| chatIsOpen          | boolean   | +        | chat is open or not                      |
| showNotification    | boolean   | +        | show notification or not                 |
| showMsgLoad         | boolean   | +        | show message Loader (spinner) or not     |
| showRate            | boolean   | +        | show rate or not                         |
| mobileEnabled       | boolean   | +        | mobile version enabled or not            |
| showSettings        | boolean   | +        | show ettings or not                      |




### showRate

Show the component `Rate`   

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('showRate', false)
```

**Data**: 

| Params        | Type    | Requires | Description           |
|---------------|---------|----------|-----------------------|
| status        | boolean | +        | show rate or not      |



### showNotification  

Show the component `Notification` 
  
**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('showNotification', false)
```

**Data**: 
 
| Params        | Type    | Requires | Description              |
|---------------|---------|----------|--------------------------|
| status        | boolean | +        | show notification or not |




### openChat

Open the chat   

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('openChat', false)
```

**Data**:  

| Params        | Type    | Requires | Description           |
|---------------|---------|----------|-----------------------|
| status        | boolean | +        | open chat or not      |



### showSettings   

Show the component `Settings`   

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('showSettings', null)
```

**Data**: 
 
| Params        | Type    | Requires | Description           |
|---------------|---------|----------|-----------------------|
| null          | null    | +        |                       |



### reset

Reset session   

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('reset', null)
```

**Data**: 
  
| Params        | Type    | Requires | Description           |
|---------------|---------|----------|-----------------------|
| null          | null    | +        |                       |



### toggleDisplayMessageTime
toggle display message time

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('toggleDisplayMessageTime')
```


### toggleSearchActiveStatus
toggle search active status

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('toggleSearchActiveStatus', false)
```

**Data**: 

| Params        | Type    | Requires | Description                     |
|---------------|---------|----------|---------------------------------|
| status        | boolean | +        | toggle search active status     |




### changeSearchValue
change search value

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('changeSearchValue', searchValue)
```

**Data**: 

| Params        | Type    | Requires | Description                     |
|---------------|---------|----------|---------------------------------|
| searchValue   | string  | +        | value entered by user           |



### changeFoundGroup
change found group

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('changeFoundGroup', {
  messageId: id, 
  action: clear 
})
```

**Data**: 

| Params        | Type    | Requires | Description                     |
|---------------|---------|----------|---------------------------------|
| messageId     | string  | +        | message Id                      |
| action        | string  | +        | clear / delete / add            |



### scrollToFoundMessage
scroll to found message

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('scrollToFoundMessage', messageNumber)
```

**Data**: 

| Params        | Type    | Requires | Description                     |
|---------------|---------|----------|---------------------------------|
| messageNumber | number  | +        | Number of found message         |



### showDropZone
show drop zone in chat

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.uiManagment('showDropZone', false)
```

**Data**: 

| Params        | Type    | Requires | Description                     |
|---------------|---------|----------|---------------------------------|
| status        | boolean | +        | show drop zone in chat or not   |


