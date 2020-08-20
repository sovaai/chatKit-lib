/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC, useState, useEffect, useRef } from 'react'
import sendMessageApi from '../../api/sendMessage/sendMessageApi'
import recieveMessageApi from '../../api/recieveMessage/recieveMessageApi'
import { useStoreon } from 'storeon/react'
import Form from './components/senderForm/SenderForm'
import Button from '../common/button/Button'
import uiManagmentApi from '../../api/uiManagment/uiManagmentApi'
import CKDropAndDown from '../ckDropAndDown/CKDropAndDown'
import SenderFiles from './components/senderFiles/SenderFiles'
import { withResizeDetector } from 'react-resize-detector'
import { SenderProps } from './@types/Sender'
const Sender: FC<SenderProps> = ({ height, changeSenderHeight }) => {
  const [listOfFiles, updateList] = useState([])
  const loserDropZone = listOfFiles.length !== 0 ? {padding: '47px 0px 56px 0px'} : {} 
  const [uploadedFiles, addFileMeta] = useState([])
  const { dispatch, settings, managment, languages, styles } = useStoreon(
    'settings',
    'managment',
    'languages',
    'styles'
  )

  /* COMPONENT PROPS */

  const { blockInput, blockSubmit, audioMessage, addStickers, share, addFile, send, showDropZone } = managment.getIn([
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
  const { addFileIcon, sendMessageIcon, addStickersIcon, voiceIcon, shareIcon, timesIcon } = settings.getIn([
    'media',
    'icons',
  ])

  /* COMPONENT PROPS END */

  /* COMPONENT METHODS */

  const sendMessage = (text: string) => {
    const { showRate } = managment.get('common')
    showRate && sendMessageApi.sendRate(4)
    uploadedFiles.length === 0 &&
      text.length !== 0 &&
      recieveMessageApi.recieveMessage({ text: text, type: 'text', sender: 'user', showRate: false })
    uploadedFiles.length === 1 &&
      text.length !== 0 &&
      recieveMessageApi.recieveMessage({
        text: text,
        type: 'text/file',
        file: uploadedFiles[0],
        sender: 'user',
        showRate: false,
      })
    uploadedFiles.length === 1 &&
      text.length === 0 &&
      recieveMessageApi.recieveMessage({
        type: 'file',
        file: uploadedFiles[0],
        sender: 'user',
        showRate: false,
      })
    uploadedFiles.length > 1 &&
    text.length !== 0 && recieveMessageApi.recieveMessage({ text: text, type: 'text', sender: 'user', showRate: false })
    uploadedFiles.length > 1 &&
      uploadedFiles.map((file) =>
        recieveMessageApi.recieveMessage({ file: file, type: 'file', sender: 'user', showRate: false })
      )
    updateList(() => [])
    addFileMeta(() => [])
    text.length !== 0 && sendMessageApi.sendMessage(text)
  }
  const focusInf = () => dispatch('changeSenderFocusInf')
  const addFileClick = () => uiManagmentApi.uiManagment('showDropZone', !showDropZone)
  const audioMessageClick = () => console.log('audioMessage')
  const stickersClick = () => console.log('stickers')
  const shareClick = () => console.log('share')
  const mainContainerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  useEffect(() => {
    changeSenderHeight(() => mainContainerRef.current.clientHeight)
  }, [height])
  /* COMPONENT METHODS */
  return (
    <React.Fragment>
      {showDropZone && <CKDropAndDown loserDropZone={loserDropZone}  listOfFiles={listOfFiles} pushFile={updateList} />}
      <div ref={mainContainerRef} className="sender-main-container" css={mainContainer}>
        {listOfFiles.length !== 0 && (
          <SenderFiles
            uploadedFiles={uploadedFiles}
            listOfFiles={listOfFiles}
            pushFile={addFileMeta}
            updateList={updateList}
          />
        )}
        {addFile.enabled && (
          <Button
            withIcon={addFile.withIcon}
            withTitle={addFile.withTitle}
            title={fileButtonTitle}
            type="button"
            block={false}
            onClick={addFileClick}
            icon={!showDropZone ? addFileIcon : timesIcon}
            style={addFileButton}
            className="sender-addFileButton"
          />
        )}
        <Form
          filesCount={uploadedFiles.length}
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
    </React.Fragment>
  )
}

Sender.displayName = 'Sender'

export default withResizeDetector(Sender)
