/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC, useEffect, useState, useRef } from 'react'
import { MessageProps } from './@types/Message'
import { connectStoreon, useStoreon } from 'storeon/react'
import Avatar from '../../../common/avatar/Avatar'
import Button from '../../../common/button/Button'
import recieveMessageApi from '../../../../api/recieveMessage/recieveMessageApi'
import sendMessageApi from '../../../../api/sendMessage/sendMessageApi'
import Rate from '../../../rate/Rate'
import uiManagmentApi from '../../../../api/uiManagment/uiManagmentApi'
import FileMessage from '../fileMessage/FileMessage'

const Message: FC<MessageProps> = ({ prevSenderType, nextSenderType, message, id, scrollbar, store }) => {
  const { settings, managment, languages, styles } = useStoreon('settings', 'managment', 'languages', 'styles')
  /* COMPONENTS PROPS */
  const { text, date, sender, showRate, file, type } = message
  const activeTheme = styles.get('active')
  const {
    mainContainer,
    avatarContainer,
    image,
    textContainer,
    positiveRateMessageButton,
    negativeRateMessageButton,
    audioMessageButton,
    dataContainer,
    bubbleContainer,
    groupTypeMessagesNext,
    groupTypeMessagesPrev,
    groupTypeMessagesInter,
    imageFile,
    fileContainer,
    svgContainer,
    sizeTittle,
    fileNameTittle,
    metaContainer,
  } = styles.getIn(['stack', activeTheme, `${sender === 'user' ? 'User' : 'Response'}Message`])
  const {
    positiveRateMessage,
    negativeRateMessage,
    showAvatar,
    showDate,
    audioMessage,
    RateEnabled,
  } = managment.getIn(['components', 'Message'])
  const { search } = managment.getIn(['components', 'Header'])
  const rateActive = managment.getIn(['common', 'showRate'])
  const activeLanguage = languages.get('active')
  const { rateButtonTitle, audioMessageButtonTitle } = languages.getIn(['stack', activeLanguage, 'Message'])
  const { playMessageIcon, rateIcon, negativeRateIcon } = settings.getIn(['media', 'icons'])
  const componentName = `${sender === 'user' ? 'user' : 'response'}Message`
  const isMediaFile = file?.type === 'jpeg' || file?.type === 'png' || file?.type === 'jpg'
  const groupSameTypeMessagesNext = nextSenderType === sender ? groupTypeMessagesNext : {}
  const groupSameTypeMessagesPrev = prevSenderType === sender ? groupTypeMessagesPrev : {}
  const intersectionMessage = prevSenderType === nextSenderType
  const imageMessage = isMediaFile ? { padding: '0px', width: 'min-content', boxSizing: 'border-box' } : {}
  const textUnderImage = isMediaFile ? { padding: '16px' } : {}
  const imageRadius = isMediaFile && text ? { borderRadius: '17px 0 0px 0px' } : {}
  const groupSameTypeMessagesInter = intersectionMessage && nextSenderType === sender ? groupTypeMessagesInter : {}
  const foundMessages = search.found.toList()
  /* COMPONENTS PROPS END */

  /* COMPONENT METHODS */
  const onClick = (ev: React.MouseEvent<HTMLElement>) => {
    const target = ev.target as HTMLElement
    if (target.className === 'request-userlink') {
      recieveMessageApi.recieveMessage({ text: target.innerText, type: 'text', sender: 'user', showRate: false }, store)
      sendMessageApi.sendMessage(target.innerText, store)
    }
  }
  const rateMessageClick = () => console.log('RateMessage')
  const audioMessageClick = () => console.log('AudioMessage')

  const searchHighlighting = () => {
    const { searchValue } = search
    if (!search.active) return text
    if (searchValue.length < 3) {
      uiManagmentApi.uiManagment('changeFoundGroup', { messageId: id, action: 'clear' }, store)
      return text
    }

    const re = new RegExp(search.searchValue, 'gi')

    if (!re.test(text)) {
      uiManagmentApi.uiManagment('changeFoundGroup', { messageId: id, action: 'delete' }, store)
      return text
    }

    const highlightedText = text.replace(re, (foundText: string) => {
      uiManagmentApi.uiManagment('changeFoundGroup', { messageId: id, action: 'add' }, store)
      if (id === foundMessages.get(search.foundMessage)) return `<mark>${foundText}</mark>`
      return foundText
    })

    return highlightedText
  }
  /* COMPONENT METHODS END */

  /* COMPONENT REFS */

  const messageRef = useRef<HTMLDivElement>(null)

  /* COMPONENT REFS END */

  /* COMPONENT STATE */
  const [textToBeDisplayed, setTextToBeDisplayed] = useState(text)
  /* COMPONENT STATE END */

  /* COMPONENT LIFECICLES */

  useEffect(() => {
    setTextToBeDisplayed(searchHighlighting())
  }, [text, search])

  useEffect(() => {
    id === foundMessages.get(search.foundMessage) && messageRef.current?.scrollIntoView({ block: 'nearest' })
  }, [search, messageRef])

  useEffect(() => {
    scrollbar && (scrollbar.scrollTop = scrollbar.scrollHeight)
  }, [])

  /* COMPONENT LIFECICLES END */

  return (
    <div
      className={`${componentName}-main-container`}
      css={{
        ...mainContainer,
        ...groupSameTypeMessagesPrev,
        ...groupSameTypeMessagesNext,
        ...groupSameTypeMessagesInter,
      }}
      ref={messageRef}
    >
      {showAvatar && <Avatar styles={{ avatarContainer, image }} className={`${componentName}`} />}
      <div className={`${componentName}-bubble-container`} css={{ ...bubbleContainer, ...imageMessage }}>
        {type === 'text/file' && (
          <React.Fragment>
            <FileMessage
              file={file}
              styles={{
                imageFile: {
                  ...imageFile,
                  ...groupSameTypeMessagesPrev,
                  ...groupSameTypeMessagesInter,
                  ...imageRadius,
                },
                fileContainer,
                svgContainer,
                sizeTittle,
                fileNameTittle,
                metaContainer,
              }}
              sender={sender}
            />
            <div
              className={`${componentName}-text-container`}
              css={{ ...textContainer, width: '100%', ...textUnderImage }}
              onClick={onClick}
              dangerouslySetInnerHTML={{ __html: textToBeDisplayed }}
            ></div>
          </React.Fragment>
        )}
        {(type === 'text' || !type) && (
          <div
            className={`${componentName}-text-container`}
            css={textContainer}
            onClick={onClick}
            dangerouslySetInnerHTML={{ __html: textToBeDisplayed }}
          ></div>
        )}
        {type === 'file' && (
          <FileMessage
            file={file}
            styles={{
              imageFile: {
                ...imageFile,
                ...groupSameTypeMessagesPrev,
                ...groupSameTypeMessagesInter,
              },
              fileContainer: { ...fileContainer, margin: 0 },
              svgContainer,
              sizeTittle,
              fileNameTittle,
              metaContainer,
            }}
            sender={sender}
          />
        )}
        {rateActive && RateEnabled && showRate && <Rate store={store} scrollbar={scrollbar} />}

        {positiveRateMessage.enabled && showRate && (
          <Button
            block={false}
            type="button"
            withIcon={positiveRateMessage.withIcon}
            withTitle={positiveRateMessage.withTitle}
            title={rateButtonTitle}
            onClick={rateMessageClick}
            icon={rateIcon}
            style={positiveRateMessageButton}
            className={`${componentName}-positiveRateMessageButton`}
          />
        )}
        {negativeRateMessage.enabled && showRate && (
          <Button
            block={false}
            type="button"
            withIcon={negativeRateMessage.withIcon}
            withTitle={negativeRateMessage.withTitle}
            title={rateButtonTitle}
            onClick={rateMessageClick}
            icon={negativeRateIcon}
            style={negativeRateMessageButton}
            className={`${componentName}-negativeRateMessageButton`}
          />
        )}

        {audioMessage.enabled && (
          <Button
            block={false}
            type="button"
            withIcon={audioMessage.withIcon}
            withTitle={audioMessage.withTitle}
            title={audioMessageButtonTitle}
            onClick={audioMessageClick}
            icon={playMessageIcon}
            style={audioMessageButton}
            className={`${componentName}-audioMessageButton`}
          />
        )}

        {showDate && (
          <div className={`${componentName}-dataContainer`} css={dataContainer}>
            {date.toLocaleString('ru', { hour: 'numeric', minute: 'numeric' })}
          </div>
        )}
      </div>
    </div>
  )
}

Message.displayName = 'Message'

export default Message
