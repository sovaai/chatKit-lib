# languagesAPI 
This method changes language pack settings


# Usage
To make any changes you need: 

* call method `ckAPIMethods.languageAPI` 
* enter name of event and send data with the required keys


## Arguments
| Value          |                                 |
|----------------|---------------------------------|
| eventName      | event name                      |
| data           | data depends on the event       |

Description of events and its data read read below.



## List of events
| Event name                                      |                                                                                    |
|-------------------------------------------------|------------------------------------------------------------------------------------|
| [initLanguage](#initLanguage)                   | adding a new language pack                                                         |
| [changeLanguage](#changeLanguage)               | change language                                                                    |
| [changeLanguagePacket](#changeLanguagePacket)   | changing a value in a specific language pack                                       |
| [changeBadge](#changeBadge)                     | changing the value in component `Badge` in a specific language pack                |
| [changeSender](#changeSender)                   | changing the value in component `Sender` in a specific language pack               |
| [changeDialog](#changeDialog)                   | changing the value in component `Dialog` in a specific language pack               |
| [changeMessage](#changeMessage)                 | changing the value in component `Message` in a specific language pack              |
| [changeHeader](#changeHeader)                   | changing the value in component `Header` in a specific language pack               |
| [changeRate](#changeRate)                       | changing the value in component `Rate` in a specific language pack                 |
| [changeCKDropAndDown](#changeCKDropAndDown)     | changing the value in component `CKDropAndDown` in a specific language pack  |



### initLanguage
adding a new language pack  

**Usage**:  
```
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('initLanguage', {
  language: 'en',
  packet: {
    Sender: {
      placeholder: 'Write message',
      sendButtonTitle: 'Send',
      fileButtonTitle: 'File',
      stickerButtonTitle: 'Sticker',
      shareButtonTitle: 'Share',
      voiceButtonTitle: 'Voice'
    },
    Message: {
      rateButtonTitle: 'Rate',
      audioMessageButtonTitle: 'AudioMessage'
    },
    Dialog: {
      searchButtonTitle: 'Search',
      rateButtonTitle: 'Rate',
      loading: 'typing...'
    },
    Header: {
      settingsButtonTitle: 'Settings',
      resetButtonTitle: 'Reset',
      title: 'SOVA Chat Kit',
      searchButtonTitle: 'Search',
      closeButtonTitle: 'Close'
    },
    Badge: {
      title: 'Chat It'
    },
    Rate: {
      title: 'Is it helpfull?',
      positive: 'Yes',
      negative: 'No',
      ratingList: [
        { rating: 3, text: 'I had other question' },
        { rating: 2, text: 'Not understand the answer' },
        { rating: 1, text: 'Not resolve my problem' }
      ]
    },
    CKDropAndDown: {
      title: 'Drag and drop the file',
      comment: 'Pdf, txt, xls, doc no more than 25Mb',
      errorComment: 'Message that the allowed file size and format were exceeded, as well as the number of files',
      divider: 'or',
      chooseFileButtonTitle: 'Choose file'
    },
    Search: {
      placeholder: 'Search',
      divider: 'of',
      status: 'No results'
    },
    Settings: {
      headingLanguage: 'Language',
      headingTheme: 'Appearance',
      headingTime: 'Time',
      title: 'Settings',
      search: {
        placeholder: 'Search',
      }
    }
  }
})
```

**Data**:

| Key                |   Type          | Required  |  Description                           |
|--------------------|-----------------|-----------|----------------------------------------|
| language           | string          | +         | chosen language ( ru / eng / etc.)     |
| Sender             | object          | +         | language settings for `Sender`         |
| Message            | object          | +         | language settings for `Message`        |
| Dialog             | object          | +         | language settings for `Dialog`         |
| Header             | object          | +         | language settings for `Header`         |
| Badge              | object          | +         | language settings for `Badge`          |
| Rate               | object          | +         | language settings for `Rate`           |
| CKDropAndDown      | object          | +         | language settings for `CKDropAndDown`  |
| Search             | object          | +         | language settings for `Search`         |
| Settings           | object          | +         | language settings for `Settings`       |



### changeLanguage
change language  

**Usage**:  
```
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeLanguage', id)
```

**Data**:

| Key                |   Type          | Required  |  Description                    |
|--------------------|-----------------|-----------|---------------------------------|
| id                 | string          |     +     | ID language ( en / rus / etc.)  |

 

### changeLanguagePacket
changing values in a specific language pack  

**Usage**:  
```
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeLanguagePacket', {
  language: 'en',
  packet: {
    Sender: {
      placeholder: 'Write message',
      sendButtonTitle: 'Send',
      fileButtonTitle: 'File',
      stickerButtonTitle: 'Sticker',
      shareButtonTitle: 'Share',
      voiceButtonTitle: 'Voice'
    },
    Message: {
      rateButtonTitle: 'Rate',
      audioMessageButtonTitle: 'AudioMessage'
    },
    Dialog: {
      searchButtonTitle: 'Search',
      rateButtonTitle: 'Rate',
      loading: 'typing...'
    },
    Header: {
      settingsButtonTitle: 'Settings',
      resetButtonTitle: 'Reset',
      title: 'SOVA Chat Kit',
      searchButtonTitle: 'Search',
      closeButtonTitle: 'Close'
    },
    Badge: {
      title: 'Chat It'
    },
    Rate: {
      title: 'Is it helpfull?',
      positive: 'Yes',
      negative: 'No',
      ratingList: [
        { rating: 3, text: 'I had other question' },
        { rating: 2, text: 'Not understand the answer' },
        { rating: 1, text: 'Not resolve my problem' }
      ]
    },
    CKDropAndDown: {
      title: 'Drag and drop the file',
      comment: 'Pdf, txt, xls, doc no more than 25Mb',
      errorComment: 'Message that the allowed file size and format were exceeded, as well as the number of files',
      divider: 'or',
      chooseFileButtonTitle: 'Choose file'
    },
    Search: {
      placeholder: 'Search',
      divider: 'of',
      status: 'No results'
    },
    Settings: {
      headingLanguage: 'Language',
      headingTheme: 'Appearance',
      headingTime: 'Time',
      title: 'Settings',
      search: {
        placeholder: 'Search',
      }
    }
  }
})
```

**Data**:

| Key                |   Type          | Required  |  Description                           |
|--------------------|-----------------|-----------|----------------------------------------|
| language           | string          | +         | chosen language ( ru / eng / etc.)     |
| Sender             | object          | +         | language settings for `Sender`         |
| Message            | object          | +         | language settings for `Message`        |
| Dialog             | object          | +         | language settings for `Dialog`         |
| Header             | object          | +         | language settings for `Header`         |
| Badge              | object          | +         | language settings for `Badge`          |
| Rate               | object          | +         | language settings for `Rate`           |
| CKDropAndDown      | object          | +         | language settings for `CKDropAndDown`  |
| Search             | object          | +         | language settings for `Search`         |
| Settings           | object          | +         | language settings for `Settings`       |




### changeBadge

changing the value in component `Badge` in a specific language pack   

**Usage**:
```
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeBadge', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    title: 'Help?'
  }
})
```

**Data**:

| Key                |   Type          | Required  |  Description                  |
|--------------------|-----------------|-----------|-------------------------------|
| title              | string          |     +     | text in title                 |



### changeSender

changing the value in component `Sender` in a specific language pack   

**Usage**:  
```
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeSender', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    fileButtonTitle: 'File',
    placeholder: 'Write message',
    sendButtonTitle: 'Send',
    shareButtonTitle: 'Share',
    stickerButtonTitle: 'Sticker',
    voiceButtonTitle: 'Voice'
  }
})
```

**Data**:

| Key                  |   Type          | Required  |  Description                    |
|----------------------|-----------------|-----------|---------------------------------|
| fileButtonTitle      | string          |     +     | text in file button title       |
| placeholder          | string          |     +     | text in placeholder             |
| sendButtonTitle      | string          |     +     | text in send button title       |
| shareButtonTitle     | string          |     +     | text in share button title      |
| stickerButtonTitle   | string          |     +     | text in sticker button title    |
| voiceButtonTitle     | string          |     +     | text in voice button title      |



### changeDialog

changing the value in component `Dialog` in a specific language pack   

**Usage**:  
```
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeDialog', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    searchButtonTitle: 'Search',
    rateButtonTitle: 'Rate',
    loading: 'typing...'
  }
})
```

**Data**:

| Key                |   Type          |  Required |  Description                  |
|--------------------|-----------------|-----------|-------------------------------|
| searchButtonTitle  | string          |     +     | text in search button title   |
| rateButtonTitle    | string          |     +     | text in rate button title     |
| loading            | string          |     +     | text in loading               |



### changeMessage

changing the value in component `Message` in a specific language pack   

**Usage**:  
```
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeMessage', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    rateButtonTitle: 'Rate',
    audioMessageButtonTitle: 'Audio message'
  }
})
```

**Data**:

| Key                        |   Type          |  Required |  Description                        |
|----------------------------|-----------------|-----------|-------------------------------------|
| rateButtonTitle            | string          |     +     | text in rate button title           |
| audioMessageButtonTitle    | string          |     +     | text in audio message button title  |



### changeHeader

changing the value in component `Header` in a specific language pack  

**Usage**:  
```
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeHeader', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    title: 'Help?',
    settingsButtonTitle: 'settings',
    resetButtonTitle: 'reset'
  }
})
```

**Data**:

| Key                  |   Type          |  Required |  Description                    |
|----------------------|-----------------|-----------|---------------------------------|
| title                | string          |     +     | text in title                   |
| settingsButtonTitle  | string          |     +     | text in settings button title   |
| resetButtonTitle     | string          |     +     | text in reset button title      |



### changeRate

changing the value in component `Rate` in a specific language pack   

**Usage**:  
```
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeRate', {
  title: 'Is it helpfull?',  // text in title
  negative: 'No',  // text in title of negative
  positive: 'Yes',  // text in title of positive
  ratingList: {  // text in comment to rate
    {
      rating: 3,  // text in "3"
      text: "I had other question"
    },
    {
      rating: 2,  // text in "2"
      text: "Not understand the answer"
    },
    {
      rating: 1,  // text in "1"
      text: "Not resolve my problem"
    }
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
    <td colspan="2">title</td>
    <td>string</td>
    <td>+</td>
    <td>text in title</td>
  </tr>
  <tr>
    <td colspan="2">negative</td>
    <td>string</td>
    <td>+</td>
    <td>text in title of negative</td>
  </tr>
  <tr>
    <td colspan="2">positive</td>
    <td>string</td>
    <td>+</td>
    <td>text in title of positive</td>
  </tr>
  <tr>
  <td colspan="2">ratingList</td>
  <td>object</td>
  <td></td>
  <td></td>
</tr>
  <tr>
    <td></td>
    <td>rating</td>
    <td>string</td>
    <td>+</td>
    <td>number of rate</td>
  </tr>
  <tr>
    <td></td>
    <td>text</td>
    <td>string</td>
    <td>+</td>
    <td>text in comment to rate</td>
  </tr>
</table>
  


### changeCKDropAndDown

changing the value in component `CKDropAndDown` in a specific language pack  

**Usage**:  
```
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.languages('changeCKDropAndDown', {
  language: 'English',  // name of chosen language packet which values you want to change
  data: {
    title: 'Drag and drop the file',  // text in title
    comment: 'Pdf, txt, xls, doc no more than 25Mb',  // text in comment 
    errorComment: 'Message that the allowed file size and format were exceeded, as well as the number of files',  // text in error comment
    divider: 'or',  // text in devider
    chooseFileButtonTitle: 'Choose file',  // text in choose file button title
  }
})
```

**Data**:

| Key                     |   Type          |  Required |  Description                       |
|-------------------------|-----------------|-----------|------------------------------------|
| title                   | string          |     +     | text in title                      |
| comment                 | string          |     +     | text in comment                    |
| errorComment            | string          |     +     | text in error comment              |
| divider                 | string          |     +     | text in divider                    |
| chooseFileButtonTitle   | string          |     +     | text in choose file button title   |
