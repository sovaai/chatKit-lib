/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC } from 'react'
import sendMessageApi from '../../api/sendMessage/sendMessageApi'
import recieveMessageApi from '../../api/recieveMessage/recieveMessageApi'
import { useStoreon } from 'storeon/react'
import Form from './components/senderForm/SenderForm'
import Button from '../common/button/Button'

const Sender: FC = () => {
  const { dispatch, settings, managment, languages, styles } = useStoreon(
    'settings',
    'managment',
    'languages',
    'styles'
  )

  /* COMPONENT PROPS */

  const { blockInput, blockSubmit, audioMessage, addStickers, share, addFile, send } = managment.getIn([
    'components',
    'Sender',
  ])

  const activeTheme = styles.get('active')
  const {
    mainContainer,
    form,
    shareButton,
    stickersButton,
    voiceButton,
    addFileButton,
    textArea,
    sendMessageButton,
  } = styles.getIn(['stack', activeTheme, 'Sender'])
  const activeLanguage = languages.get('active')
  const {
    placeholder,
    sendButtonTitle,
    fileButtonTitle,
    stickerButtonTitle,
    shareButtonTitle,
    voiceButtonTitle,
  } = languages.getIn(['stack', activeLanguage, 'Sender'])
  const { addFileIcon, sendMessageIcon, addStickersIcon, voiceIcon, shareIcon } = settings.getIn(['media', 'icons'])

  /* COMPONENT PROPS END */

  /* COMPONENT METHODS */

  const sendMessage = async (text: string) => {
    const { showRate } = managment.get('common')
    showRate && (await sendMessageApi.sendRate(4))
    await recieveMessageApi.recieveMessage({ text: text, sender: 'user', showRate: false })
    await sendMessageApi.sendMessage(text)
  }

  const focusInf = () => dispatch('changeSenderFocusInf')
  const addFileClick = () => console.log('addFile')
  const audioMessageClick = () => console.log('audioMessage')
  const stickersClick = () => console.log('stickers')
  const shareClick = () => console.log('share')

  /* COMPONENT METHODS */

  return (
    <div className="sender-main-container" css={mainContainer}>
      {addFile.enabled && (
        <Button
          withIcon={addFile.withIcon}
          withTitle={addFile.withTitle}
          title={fileButtonTitle}
          type="button"
          block={false}
          onClick={addFileClick}
          icon={addFileIcon}
          style={addFileButton}
          className="sender-main-container"
        />
      )}
      <Form
        inputPlaceHolder={placeholder}
        blockSubmit={blockSubmit}
        sendButton={{ ...send, title: sendButtonTitle, icon: sendMessageIcon }}
        sendMessage={sendMessage}
        focusInf={focusInf}
        blockInput={blockInput}
        style={{ form, sendMessageButton, textArea }}
      />
      {addStickers.enabled && (
        <Button
          withIcon={addStickers.withIcon}
          withTitle={addStickers.withTitle}
          title={stickerButtonTitle}
          type="button"
          block={false}
          onClick={stickersClick}
          icon={addStickersIcon}
          style={stickersButton}
          className="sender-stickersButton"
        />
      )}
      {audioMessage.enabled && (
        <Button
          withIcon={audioMessage.withIcon}
          withTitle={audioMessage.withTitle}
          title={voiceButtonTitle}
          type="button"
          block={false}
          onClick={audioMessageClick}
          icon={voiceIcon}
          className="sender-voiceButton"
          style={voiceButton}
        />
      )}
      {share.enabled && (
        <Button
          withIcon={share.withIcon}
          withTitle={share.withTitle}
          title={shareButtonTitle}
          type="button"
          block={false}
          onClick={shareClick}
          icon={shareIcon}
          style={shareButton}
          className="sender-shareButton"
        />
      )}
    </div>
  )
}

Sender.displayName = 'Sender'

export default Sender
