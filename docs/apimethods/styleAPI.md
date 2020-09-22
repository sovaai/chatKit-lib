# styleAPI
This method edit the widget theme or individual component



## Usage
To make any changes you need:
 
* call method `ckAPIMethods.style`  
* enter name of event and send data with the required keys  



## Arguments
| Value          |                                 |
|----------------|---------------------------------|
| eventName      | event name                      |
| data           | data depends on the event       |

Description of events and its data read read below.


## List of events
| Event name                                       |                                                                              |
|--------------------------------------------------|------------------------------------------------------------------------------|
| [switchTheme](#switchTheme)                      | switching between themes                                                     |
| [initTheme](#initTheme)                          | addition a new theme                                                         |
| [changeStyles](#changeStyles)                    | modifying a complete package of an existing theme                            |
| [changeChatIt](#changeChatIt)                    | changing the style package of component `ChatIt` in selected theme           |
| [changeHeader](#changeHeader)                    | changing the style package of component `Header` in selected theme           |
| [changeDialog](#changeDialog)                    | changing the style package of component `Dialog` in selected theme           |
| [changeRate](#changeRate)                        | changing the style package of component `Rate` in selected theme             |
| [changeUserMessage](#changeUserMessage)          | changing the style package of component `UserMessage` in selected theme      |
| [changeResponseMessage](#changeResponseMessage)  | changing the style package of component `ResponseMessage` in selected theme  |
| [changeSender](#changeSender)                    | changing the style package of component `Sender` in selected theme           |
| [changeBadge](#changeBadge)                      | changing the style package of component `Badge` in selected theme            |
| [changeCKDropAndDown](#changeCKDropAndDown)      | changing the style package of component `CKDropAndDown` in selected theme    |




### switchTheme
switching between themes
  
**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles('switchTheme', 'sovaDark')
```

**Data:**  

| Key           | Type    | Requires | Description                            |  
|---------------|---------|----------|----------------------------------------|  
| themeName     | string  | +        | Theme name on which you need switch    |  



### initTheme
addition a new theme
 
**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles('initTheme', {
  themeName: 'sovaDark',
  data: {
    Sender: {
      mainContainer: { },
      mainContainerSearch: { },
      searchCountContainer: { },
      searchButtonContainer: { },
      switchingActiveButton: { },
      switchingDisableButton: { },
      addFileButton: {},
      sendMessageButton: {},
      shareButton: {},
      stickersButton: {},
      textArea: {},
      voiceButton: {},
      filesContainer: {},
      fileContainer: {},
      fileImage: {},
      deleteFileButton: {}
    },
    ChatIt:  {
      mainContainer: {},
      chatContainer: {}
    },
    Dialog: {
      mainContainer: {},
      panel: {},
      rateButton: {},
      searchButton: {},
      messagesContainer: {}
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
      imageFile: {},
      fileContainer: {},
      svgContainer: {},
      sizeTittle: {},
      fileNameTittle: {},
      metaContainer: {}
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
      buttonsContainer: {}
    },
    MessageLoader: { 
      mainContainer: {},
      elementOne: {},
      elementTwo: {},
      elementThree: {}
    },
    Divider: { 
      dividerMainContainer: {}
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
      headerSearchResetButton: {},
      headerSearchInput: {},
      searchButton: {}
    },
    Badge: { 
      mainContainer: {},
      avatarContainer: {},
      image: {}
      titleContainer: {},
      svg: {}
    },
    Rate: { 
      mainContainer: {},
      titleContainer: {},
      negativeRateButton: {},
      positiveRateButton: {},
      ratingElement: {},
      ratingListContainer: {}
    },
    Close: { 
      mainContainer: {}
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
      switcher: {}
    },
    ToggleSlider: { 
      toggleContainer: {},
      toggleHeading: {},
      toggleLabel: {},
      toggleInput: {},
      toggleSlider: {}
    },
    CKDropAndDown: { 
      mainContainer: {},
      svgContainer: {},
      dropAndDownContainer: {},
      chooseFileButton: {},
      titleContainer: {},
      commentContainer: {},
      dividerContainer: {}
    },
  }
})
```

**Data:**

| Key                | Type    | Requires | Description                            |  
|--------------------|---------|----------|----------------------------------------|  
| themeName          | string  | +        | Theme name on which you need switch    | 
| Sender             | object  | +        | styles for component `sender`          | 
| ChatIt             | object  | +        | styles for component `chatIt`          | 
| Dialog             | object  | +        | styles for component `dialog`          | 
| UserMessage        | object  | +        | styles for component user `message`    | 
| ResponseMessage    | object  | +        | styles for component response` message`| 
| MessageLoader      | object  | +        | styles for component `messageLoader`   | 
| Divider            | object  | +        | styles for component `divider`         | 
| Header             | object  | +        | styles for component `header`          | 
| Badge              | object  | +        | styles for component `badge`           | 
| Rate               | object  | +        | styles for component `rate`            | 
| Close              | object  | +        | styles for component `close`           | 
| Settings           | object  | +        | styles for component `settings`        | 
| ToggleSlider       | object  | +        | styles for component `toggleSliderr`   | 
| CKDropAndDown      | object  | +        | styles for component `ckDropAndDown`   | 



### changeStyles
modifying a complete package of an existing theme
  
**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles('changeStyles', {
  themeName: 'sovaDark',
  data: {
    Sender: {
      mainContainer: { },
      mainContainerSearch: { },
      searchCountContainer: { },
      searchButtonContainer: { },
      switchingActiveButton: { },
      switchingDisableButton: { },
      addFileButton: {},
      sendMessageButton: {},
      shareButton: {},
      stickersButton: {},
      textArea: {},
      voiceButton: {},
      filesContainer: {},
      fileContainer: {},
      fileImage: {},
      deleteFileButton: {}
    },
    ChatIt:  {
      mainContainer: {},
      chatContainer: {}
    },
    Dialog: {
      mainContainer: {},
      panel: {},
      rateButton: {},
      searchButton: {},
      messagesContainer: {}
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
      imageFile: {},
      fileContainer: {},
      svgContainer: {},
      sizeTittle: {},
      fileNameTittle: {},
      metaContainer: {}
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
      buttonsContainer: {}
    },
    MessageLoader: { 
      mainContainer: {},
      elementOne: {},
      elementTwo: {},
      elementThree: {}
    },
    Divider: { 
      dividerMainContainer: {}
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
      headerSearchResetButton: {},
      headerSearchInput: {},
      searchButton: {}
    },
    Badge: { 
      mainContainer: {},
      avatarContainer: {},
      image: {}
      titleContainer: {},
      svg: {}
    },
    Rate: { 
      mainContainer: {},
      titleContainer: {},
      negativeRateButton: {},
      positiveRateButton: {},
      ratingElement: {},
      ratingListContainer: {}
    },
    Close: { 
      mainContainer: {}
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
      switcher: {}
    },
    ToggleSlider: { 
      toggleContainer: {},
      toggleHeading: {},
      toggleLabel: {},
      toggleInput: {},
      toggleSlider: {}
    },
    CKDropAndDown: { 
      mainContainer: {},
      svgContainer: {},
      dropAndDownContainer: {},
      chooseFileButton: {},
      titleContainer: {},
      commentContainer: {},
      dividerContainer: {}
    },
  }
})
```

**Data:**

| Key                | Type    | Requires | Description                            |  
|--------------------|---------|----------|----------------------------------------|  
| themeName          | string  | +        | Theme name on which you need switch    | 
| Sender             | object  | +        | styles for component `sender`          | 
| ChatIt             | object  | +        | styles for component `chatIt`          | 
| Dialog             | object  | +        | styles for component `dialog`          | 
| UserMessage        | object  | +        | styles for component user `message`    | 
| ResponseMessage    | object  | +        | styles for component response` message`| 
| MessageLoader      | object  | +        | styles for component `messageLoader`   | 
| Divider            | object  | +        | styles for component `divider`         | 
| Header             | object  | +        | styles for component `header`          | 
| Badge              | object  | +        | styles for component `badge`           | 
| Rate               | object  | +        | styles for component `rate`            | 
| Close              | object  | +        | styles for component `close`           | 
| Settings           | object  | +        | styles for component `settings`        | 
| ToggleSlider       | object  | +        | styles for component `toggleSliderr`   | 
| CKDropAndDown      | object  | +        | styles for component `ckDropAndDown`   |




### changeChatIt
changing the style package of component `ChatIt` in selected theme

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeChatIt", {
  themeName: "sovaDark", data: {
    mainContainer: {
      display: 'flex',
      overflow: 'hidden',
      width: 'fit-content',
      margin: 'auto',
      padding: '100px',
      '@media screen and (max-width: 800px)': {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: '0',
      },
      animation: 'show 0.3s 1',
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      ...fonts,
    },
    chatContainer: {
      width: '380px',
      display: 'flex',
      flexDirection: 'column',
      background: primaryBackground,
      position: 'relative',
      borderRadius: '17px',
      height: '600px',
      boxShadow: '0px 20px 50px rgba(5, 0, 56, 0.15)',
      overflow: 'hidden',
      '@media screen and (max-width: 800px)': {
        width: '100%',
        height: '100%',
        borderRadius: '0',
      },
    },
  }
```

**Data:**

| Key                        |   Type          | Required  |  Description                                              |
|----------------------------|-----------------|-----------|-----------------------------------------------------------|
| themeName                  | string          |     +     | theme name, in which styles you want to change anything   |
| mainContainer              | object styles   |     +     | styles for main container                                 |
| chatContainer              | object styles   |     +     | styles for chat container                                 |



### changeHeader
changing the style package of component `Header` in selected theme

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeHeader", {
  themeName: "sovaDark", data: {
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box',
      borderBottom: `0.5px solid ${primaryDivider}`,
      justifyContent: 'space-between',
      height: '50px',
      minHeight: '50px',
      background: primaryDark,
      borderRadius: '17px 17px 0px 0px',
      padding: '13px 17px',
      color: primaryWhite,
      zIndex: 50,
      '@media screen and (max-width: 800px)': {
        borderRadius: '0',
        height: '60px',
        position: 'absolute',
        top: '0',
      },
    },
    avatarContainer: {
      borderRadius: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      '@media screen and (max-width: 800px)': {
        width: '6%',
      },
      '@media screen and (max-width: 480px)': {
        width: '10%',
      },
    },
    image: {
      maxWidth: '24px',
      maxHeight: '24px',
      '@media screen and (max-width: 800px)': {
        maxWidth: '35px',
        maxHeight: '35px',
      },
      '@media screen and (max-width: 480px)': {
        maxWidth: '25px',
        maxHeight: '25px',
      },
    },
    titleContainer: {
      textAlign: 'left',
      width: '50%',
      fontSize: '1.125rem',
      marginLeft: '15px',
      '@media screen and (max-width: 800px)': {
        width: '60%',
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        width: '50%',
        fontSize: '1.125rem',
      },
    },
    resetButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryHeaderButtonHover,
      },
      '&:active': {
        background: primaryHeaderButtonActive,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        fontSize: '0.875rem',
      },
    },
    closeButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryHeaderButtonHover,
      },
      '&:active': {
        background: primaryHeaderButtonActive,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        fontSize: '0.875rem',
      },
    },
    settingsButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryHeaderButtonHover,
      },
      '&:active': {
        background: primaryHeaderButtonActive,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        fontSize: '0.875rem',
      },
    },
    headerSearchContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    headerSearchInput: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '1rem',
      border: 'none',
      background: 'none',
      color: primaryWhite,
      outline: 'none',
      padding: '0',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: '200',
      lineHeight: '20px',
      fontSize: '1.125rem',
      '::-webkit-input-placeholder': {
        color: primaryWhite,
        opacity: '0.2',
      },
      '::-moz-placeholder': {
        color: primaryWhite,
        opacity: '0.2',
      },
      '-ms-input-placeholder': {
        color: primaryWhite,
        opacity: '0.2',
      },
    },
    searchButton: {
      background: primaryDark,
      fontSize: '1.125rem',
      color: primaryWhite,
      border: 'none',
      outline: 'none',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryHeaderButtonHover,
      },
      '&:active': {
        background: primaryHeaderButtonActive,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.5rem',
      },
      '@media screen and (max-width: 480px)': {
        fontSize: '0.875rem',
      }
    }
  })
```

**Data:**

| Key                    |   Type          |  Required |  Description                                  |
|------------------------|-----------------|-----------|-----------------------------------------------|
| mainContainer          | object styles   |     +     | styles for main container                     |
| avatarContainer        | object styles   |     +     | styles for avatar container                   |
| image                  | object styles   |     +     | styles for tag `img`                          |
| titleContainer         | object styles   |     +     | styles for title container                    |
| resetButton            | object styles   |     +     | styles for reset button                       |
| closeButton            | object styles   |     +     | styles for close button                       |
| settingsButton         | object styles   |     +     | styles for settings button                    |
| headerSearchContainer  | object styles   |     +     | list of styles for header search container    |
| headerSearchInput      | object styles   |     +     | list of styles for header search input        |
| searchButton           | object styles   |     +     | list of styles for search button              |
You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.


### changeDialog
changing the style package of component `Dialog` in selected theme

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeDialog", {
  themeName: "sovaDark", data: {
    mainContainer: {
      height: '496px',
      minHeight: '496px',
      background: primaryBackground,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      boxSizing: 'border-box',
      animation: 'show 0.3s 1',
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      '@media screen and (max-width: 800px)': {
        height: '100vh',
        paddingTop: '60px',
      },
    },
    panel: {},
    rateButton: {},
    searchButton: {},
    messagesContainer: {
      maxHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      '@media screen and (max-width: 800px)': {
        // paddingBottom: '50px',
      },
    },
  }
```

**Data:**

| Key                |   Type          |  Required |  Description                  |
|--------------------|-----------------|-----------|-------------------------------|
| themeName          | string          |     +     | theme name, in which styles you want to change anything   |
| mainContainer      | object styles   |     +     | styles for main container     |
| panel              | object styles   |     +     | styles for panel              |
| rateButton         | object styles   |     +     | styles for rate button        |
| search button      | object styles   |     +     | styles for search button      |
| messagesContainer  | object styles   |     +     | styles for messages container |

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.



### changeRate
changing the style package of component `Rate` in selected theme

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeRate", {
  themeName: "sovaDark", data: {
    mainContainer: {
      borderTop: `0.5px solid ${primaryDivider}`,
      marginTop: '1rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    titleContainer: {
      width: '100%',
      textAlign: 'center',
      marginTop: '1rem',
      marginBottom: '1rem',
    },
    negativeRateButton: {
      width: '48%',
      border: 'none',
      outline: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: primaryText,
      background: primaryButton,
      padding: '12px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color ease-in-out 0.3s',
      '&:hover': {
        backgroundColor: primaryButtonHover,
      },
      '&:active': {
        backgroundColor: secondaryRate,
        color: primaryWhite,
      },
    },
    positiveRateButton: {
      width: '48%',
      border: 'none',
      outline: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: primaryText,
      background: primaryButton,
      padding: '12px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color ease-in-out 0.3s',
      '&:hover': {
        backgroundColor: primaryButtonHover,
      },
      '&:active': {
        backgroundColor: secondaryRate,
        color: primaryWhite,
      },
    },
    ratingElement: {
      marginTop: '6px',
      width: '100%',
      height: '32px',
      background: 'none',
      borderRadius: '4px',
      padding: '8px 6px',
      lineHeight: '17px',
      boxSizing: 'border-box',
      color: secondaryRate,
      listStyleType: 'none',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryRatingElement,
      },
      '&:active': {
        opacity: '0.5',
      },
    },
    ratingListContainer: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
    },
  })
```

**Data:**

| Key                  |   Type          |  Required |  Description                     |
|----------------------|-----------------|-----------|----------------------------------|
| themeName            | string          |     +     | theme name, in which styles you want to change anything   |
|  mainContainer       | object styles   |     +     | styles for main container        |
|  titleContainer      | object styles   |     +     | styles for title container       |
|  negativeRateButton  | object styles   |     +     | styles for negative rate button  |
|  positiveRateButton  | object styles   |     +     | styles for positive rate button  |
|  ratingElement       | object styles   |     +     | styles for rating element        |
|  ratingListContainer | object styles   |     +     | styles for rating list container |

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.



### changeUserMessage
changing the style package of component user `Message` in selected theme

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeUserMessage", {
  themeName: "sovaDark", data: {
    mainContainer: {
      display: 'flex',
      flexDirection: 'colomn',
      width: 'fit-content',
      maxWidth: '275px',
      marginLeft: 'auto',
      marginRight: '24px',
      marginBottom: '16px',
      color: primaryWhite,
      background: primary,
      borderRadius: '17px 17px 0 17px',
    },
    groupTypeMessagesNext: {
      marginBottom: '4px',
    },
    groupTypeMessagesPrev: {
      borderRadius: '17px 0 17px 17px',
    },
    groupTypeMessagesInter: {
      borderRadius: '17px 0 0 17px',
    },
    textContainer: {
      textAlign: 'left',
      maxWidth: '100%',
      minWidth: '5%',
      wordBreak: 'break-all',
      '& mark': {
        background: '#FFDF00',
        color: primaryDark,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1rem',
      },
    },
    avatarContainer: {},
    image: {},
    positiveRateMessageButton: {
      display: 'none',
    },
    negativeRateMessageButton: {
      display: 'none',
    },
    audioMessageButton: {},
    dataContainer: {
      width: '100%',
      textAlign: 'left',
      fontSize: '0.75rem',
      marginTop: '8px',
      color: primaryWhite,
      opacity: '0.4',
    },
    bubbleContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '16px',
    },
    buttonsContainer: {},
    imageFile: {
      maxWidth: '190px',
      maxHeight: '222px',
      display: 'flex',
      borderRadius: '17px 17px 0 17px',
    },
    fileContainer: {
      display: 'flex',
      width: '100%',
      marginBottom: '10px',
    },
    svgContainer: {
      marginRight: '16px',
      display: 'flex',
    },
    sizeTittle: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      color: primaryWhite,
      opacity: '0.5',
    },
    fileNameTittle: {
      textAlign: 'left',
      width: '100%',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      color: primaryWhite,
      marginBottom: '4px',
      cursor: 'pointer',
      transition: 'color ease-in-out 0.3s',
      textDecoration: 'none',
      '&:hover': {
        opacity: '0.5',
      },
      '&:active': {
        opacity: '1',
      },
    },
    metaContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
  })
```

**Data:**

| Key                          |   Type          |  Required |  Description                                              |
|------------------------------|-----------------|-----------|-----------------------------------------------------------|
| themeName                    | string          |     +     | theme name, in which styles you want to change anything   |
| mainContainer                | object styles   |     +     | styles for main container                                 |
| groupTypeMessagesNext        | object styles   |     +     | styles for group type messages next                       |
| groupTypeMessagesPrev        | object styles   |     +     | styles for group type messages prev                       |
| groupTypeMessagesInter       | object styles   |     +     | styles for group type messages inter                      |
| textContainer                | object styles   |     +     | styles for text container                                 |
| avatarContainer              | object styles   |     +     | styles for avatar container                               |
| image                        | object styles   |     +     | styles for tag `img`                                      |
| positiveRateMessageButton    | object styles   |     +     | styles for positive rate message button                   |
| negativeRateMessageButton    | object styles   |     +     | styles for negative rate message button                   |
| audioMessageButton           | object styles   |     +     | styles for audio message button                           |
| dataContainer                | object styles   |     +     | styles for data container                                 |
| bubbleContainer              | object styles   |     +     | styles for bubble container                               | 
| buttonsContainer             | object styles   |     +     | styles for buttons container                              |
| imageFile                    | object styles   |     +     | styles for image file                                     |
| fileContainer                | object styles   |     +     | styles for file container                                 |
| svgContainer                 | object styles   |     +     | styles for svg container                                  |
| sizeTittle                   | object styles   |     +     | styles for tittle                                         |
| fileNameTittle               | object styles   |     +     | styles for file name tittle                               |
| metaContainer                | object styles   |     +     | styles for meta container                                 |

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.



### changeResponseMessage
changing the style package of component response `Message` in selected theme

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeResponseMessage", {
  themeName: "sovaDark", data: {
    mainContainer: {
      display: 'flex',
      flexDirection: 'colomn',
      width: 'fit-content',
      maxWidth: '275px',
      marginLeft: '24px',
      marginRight: 'auto',
      marginBottom: '16px',
      color: primaryText,
      background: primaryResponse,
      borderRadius: '17px 17px 17px 0',
    },
    groupTypeMessagesNext: {
      marginBottom: '4px',
    },
    groupTypeMessagesPrev: {
      borderRadius: '0 17px 17px 17px',
    },
    groupTypeMessagesInter: {
      borderRadius: '0 17px 17px 0',
    },
    textContainer: {
      color: primaryText,
      boxSizing: 'border-box',
      background: primaryResponse,
      maxWidth: '100%',
      minWidth: '5%',
      textAlign: 'left',
      '@media screen and (max-width: 800px)': {
        fontSize: '1rem',
      },
      '& mark': {
        background: '#FFDF00',
        color: primaryDark,
      },
      '& a': {
        color: primaryLinks,
        textDecoration: 'none',
        transition: 'color ease-in-out 0.3s',
      },
      '& ul': {
        margin: '0',
        display: 'flex',
        padding: '0',
        paddingLeft: '8px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
      },
      '& li': {
        marginTop: '10px',
        width: '100%',
        listStyleType: 'none',
      },
      '& a:hover': {
        color: primaryAccent,
      },
      '& a:active': {
        color: primaryAccent,
      },
    },
    avatarContainer: {},
    image: {},
    positiveRateMessageButton: {
      padding: 0,
      alignSelf: 'flex-end',
      marginLeft: '4%',
      display: 'flex',
      alignItems: 'flex-end',
      border: 'none',
      outline: 'none',
      color: primaryText,
      background: 'none',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
      },
    },
    negativeRateMessageButton: {
      padding: 0,
      alignSelf: 'flex-end',
      marginLeft: '4%',
      display: 'flex',
      border: 'none',
      outline: 'none',
      color: primaryText,
      background: 'none',
      cursor: 'pointer',
      '& :hover': {
        opacity: '0.75',
      },
      '& :active': {
        opacity: '1',
      },
    },
    audioMessageButton: {},
    dataContainer: {
      width: '100%',
      textAlign: 'right',
      fontSize: '0.75rem',
      marginTop: '8px',
      color: primaryText,
      opacity: '0.4',
    },
    bubbleContainer: {
      display: 'flex',
      padding: '16px',
      flexDirection: 'column',
      width: '100%',
    },
    buttonsContainer: {},
  })
```

**Data:**

| Key                          |   Type          |  Required |  Description                                              |
|------------------------------|-----------------|-----------|-----------------------------------------------------------|
| themeName                    | string          |     +     | theme name, in which styles you want to change anything   |
| mainContainer                | object styles   |     +     | styles for main container                                 |
| groupTypeMessagesNext        | object styles   |     +     | styles for group type messages next                       |
| groupTypeMessagesPrev        | object styles   |     +     | styles for group type messages prev                       |
| groupTypeMessagesInter       | object styles   |     +     | styles for group type messages inter                      |
| textContainer                | object styles   |     +     | styles for text container                                 |
| avatarContainer              | object styles   |     +     | styles for avatar container                               |
| image                        | object styles   |     +     | styles for tag `img`                                      |
| positiveRateMessageButton    | object styles   |     +     | styles for positive rate message button                   |
| negativeRateMessageButton    | object styles   |     +     | styles for negative rate message button                   |
| audioMessageButton           | object styles   |     +     | styles for audio message button                           |
| dataContainer                | object styles   |     +     | styles for data container                                 |
| bubbleContainer              | object styles   |     +     | styles for bubble container                               | 
| buttonsContainer             | object styles   |     +     | styles for buttons container                              |

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.



### changeSender
changing the style package of component `Sender` in selected theme

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeSender", {
  themeName: "sovaDark", data: {
    mainContainer: {
      display: 'flex',
      bottom: '0',
      position: 'absolute',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      background: primarySenderBG,
      borderRadius: '0px 0px 17px 17px',
      padding: '5px 20px 5px 20px',
      borderTop: `0.5px solid ${primaryDivider}`,
      minHeight: '53px',
      '@media screen and (max-width: 800px)': {
        minHeight: '6%',
        borderRadius: '0',
      },
    },
    mainContainerSearch: {
      justifyContent: 'space-between',
      color: primaryText,
    },
    searchCountContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    searchButtonContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '59.6px',
      justifyContent: 'space-between',
    },
    switchingActiveButton: {
      border: 'none',
      fontSize: '1.125rem',
      background: primarySenderBG,
      height: '34px',
      outline: 'none',
      padding: '0',
      color: secondaryButton,
      transition: 'color ease-in-out 0.1s',
      cursor: 'pointer',
      '&:hover': {
        color: '#878fa3',
      },
      '&:active': {
        color: primary,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.25rem',
      },
    },
    switchingDisableButton: {
      opacity: '0.2',
      cursor: 'auto',
      '&:hover': {},
      '&:active': {},
    },
    addFileButton: {
      border: 'none',
      fontSize: '1.125rem',
      background: primarySenderBG,
      height: '34px',
      outline: 'none',
      padding: '0',
      color: primaryAccent,
      transition: 'transform ease-in-out 0.3s, color ease-in-out 0.3s',
      cursor: 'pointer',
      '&:hover': {
        color: primary,
      },
      '&:active': {
        opacity: '0.75',
        color: primary,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.25rem',
      },
    },
    sendMessageButton: {
      border: 'none',
      fontSize: '1.125rem',
      background: primarySenderBG,
      outline: 'none',
      height: '34px',
      padding: '3px',
      color: primary,
      cursor: 'pointer',
      transition: 'transform ease-in-out 0.3s, color ease-in-out 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        color: primaryAccent,
      },
      '&:active': {
        opacity: '0.75',
        color: primaryAccent,
      },
      '@media screen and (max-width: 800px)': {
        fontSize: '1.25rem',
      },
    },
    shareButton: {},
    stickersButton: {},
    textArea: {
      minWidth: '270px',
      resize: 'none',
      border: 'none',
      outline: 'none',
      minHeight: '27px',
      color: primaryText,
      background: 'none',
      overflowY: 'auto',
      wordWrap: 'break-word',
      flex: 1,
      margin: '0 1rem',
      padding: 0,
      marginTop: '10px',
      ...fonts,
      '@media screen and (max-width: 800px)': {
        borderRadius: '15px',
        border: `1px solid ${primaryDivider}`,
        padding: '6px',
        fontSize: '1rem',
        minWidth: '260px',
      },
      '@media screen and (max-width: 480px)': {
        minWidth: '74%',
      },
      '::-webkit-input-placeholder': {
        color: primaryPlaceholder,
        opacity: '0.2',
      },
      '::-moz-placeholder': {
        color: primaryPlaceholder,
        opacity: '0.2',
      },
      '-ms-input-placeholder': {
        color: primaryPlaceholder,
        opacity: '0.2',
      },
    },
    voiceButton: {},
    filesContainer: {
      width: '100%',
      overflowX: 'scroll',
      display: 'flex',
      padding: '8px 0 8px 0',
      animation: 'show 0.3s 1',
      '::-webkit-scrollbar': { width: '0' },
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    fileContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60px',
      minWidth: '60px',
      maxWidth: '60px',
      borderRadius: '5px',
      background: primaryFileBackground,
      marginRight: '8px',
      '& .ckProgressLoader': {
        position: 'absolute',
        display: 'flex',
      },
      animation: 'show 0.3s 1',
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    fileImage: {
      height: '100%',
      minWidth: '100%',
      maxWidth: '100%',
      borderRadius: '5px',
    },
    deleteFileButton: {
      position: 'absolute',
      left: '36px',
      top: '0px',
      cursor: 'pointer',
      '&:hover': {
        opacity: '0.5',
      },
      '&:active': {
        opacity: '1',
      },
    },
  }
})
```

**Data**: 

| Key                        |   Type          | Required  |  Description                                              |
|----------------------------|-----------------|-----------|-----------------------------------------------------------|
| themeName                  | string          |     +     | theme name, in which styles you want to change anything   |
| mainContainer              | object styles   |     +     | styles for main container                                 |
| mainContainerSearch        | object styles   |     +     | styles for main container search                          |
| searchCountContainer       | object styles   |     +     | styles for search count container                         |
| searchButtonContainer      | object styles   |     +     | styles for search button container                        |
| switchingActiveButton      | object styles   |     +     | styles for switching active button                        |
| switchingDisableButton     | object styles   |     +     | styles for switching disable button                       |
| addFileButton              | object styles   |     +     | styles for add file button                                |
| sendMessageButton          | object styles   |     +     | styles for send message button                            |
| shareButton                | object styles   |     +     | styles for share button                                   |
| stickersButton             | object styles   |     +     | styles for stickers button                                |
| textArea                   | object styles   |     +     | styles for text area                                      |
| voiceButton                | object styles   |     +     | styles for voice button                                   |
| filesContainer             | object styles   |     +     | styles for files container                                |
| fileContainer              | object styles   |     +     | styles for file container                                 |
| fileImage                  | object styles   |     +     | styles for file image                                     |
| deleteFileButton           | object styles   |     +     | styles for  delete file button                            |

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.



### changeBadge
changing the style package of component `Badge` in selected theme

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeBadge", {
  themeName: "sovaDark", data: {
    mainContainer: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      cursor: 'pointer',
    },
    avatarContainer: {
      borderRadius: '50px',
      border: '4px solid #386FFE',
      width: '75px',
      height: '75px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    image: {
      width: '55px',
      height: '55px',
    },
    titleContainer: {},
    svg: {
      groupPath: {
        fill: primaryBadge,
      },
      path: {
        animation: 'dash 15s ease-in-out infinite',
      },
      '@keyframes dash': {
        '0%, 100%': {
          strokeDashoffset: 250,
        },
        '50%': {
          strokeDashoffset: 10,
        },
      },
    },
  }
})
```

**Data**: 

| Key                |   Type          | Required  |  Description                                              |
|--------------------|-----------------|-----------|-----------------------------------------------------------|
| themeName          | string          |     +     | theme name, in which styles you want to change anything   |
| mainContainer      | object styles   |     +     | styles for main container                                 |
| avatarContainer    | object styles   |     +     | styles for avatar container                               |
| image              | object styles   |     +     | styles for tag `img`                                      |
| titleContainer     | object styles   |     +     | styles for title container                                | 
| svg                | object styles   |     +     | styles for SVG file                                       |

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.



### changeCKDropAndDown
changing the style package of component `CKDropAndDown` in selected theme

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

ckAPIMethods.styles("changeCKDropAndDown", {
  themeName: "sovaDark", data: {
    mainContainer: {
      margin: '16px',
      height: '464px',
      background: primaryBackground,
      display: 'flex',
      alignItems: 'center',
      padding: '98px 0px 56px 0px',
      flexDirection: 'column',
      boxSizing: 'border-box',
      outline: 'none',
      border: `2px dashed ${primaryDashed}`,
      animation: 'show 0.3s 1',
      '@keyframes show': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    svgContainer: {},
    dropAndDownContainer: {
      marginBottom: '21.92px',
      outline: 'none',
    },
    chooseFileButton: {
      padding: '4px 20px',
      width: '149px',
      height: '41px',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '40px',
      textAlign: 'center',
      color: primaryWhite,
      background: primary,
      borderRadius: '49px',
      border: 'none',
      outline: 'none',
      marginBottom: '24px',
      cursor: 'pointer',
      transition: 'background ease-in-out 0.3s',
      '&:hover': {
        background: primaryChooseFileButtonHover,
      },
      '&:active': {
        opacity: '0.6',
      },
    },
    titleContainer: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '22px',
      lineHeight: '32px',
      color: primaryText,
      marginBottom: '13px',
    },
    commentContainer: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
      textAlign: 'center',
      color: primaryText,
      opacity: '0.5',
    },
    dividerContainer: {
      fontFamily: 'Helvetica',
      marginBottom: '13px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '30px',
      color: primaryText,
      opacity: '0.3',
      width: '137px',
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      '::before': {
        content: '""',
        width: '47px',
        height: '1px',
        opacity: '0.3',
        background: primaryText,
      },
      '::after': {
        content: '""',
        width: '47px',
        height: '1px',
        opacity: '0.3',
        background: primaryText,
      },
    },
  }
})
```

**Data**: 

| Key                      |   Type          |  Required |  Description                                              |
|--------------------------|-----------------|-----------|-----------------------------------------------------------|
| themeName                | string          |     +     | theme name, in which styles you want to change anything   |
| mainContainer            | object styles   |     +     | styles for main container                                 |
| titleContainer           | object styles   |     +     | styles for title container                                |
| chooseFileButton         | object styles   |     +     | styles for choose file button                             |
| dividerContainer         | object styles   |     +     | styles for divider container                              |
| svgContainer             | object styles   |     +     | styles for svg container                                  |
| commentContainer         | object styles   |     +     | styles for comment container                              | 

You must write css properties in camelCase, using [objects style](https://emotion.sh/docs/object-styles "read more about objects style") syntax.
