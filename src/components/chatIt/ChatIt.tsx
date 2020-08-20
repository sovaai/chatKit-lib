/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { memo, useState } from 'react'
import Dialog from '../dialog/Dialog'
import Sender from '../sender/Sender'
import Header from '../header/Header'
import Badge from '../badge/Badge'
import { useStoreon } from 'storeon/react'
import Close from '../close/Close'
import Settings from '../settings/Settings'
import SenderSearch from '../sender/SenderSearch'
import CKDropzone from '../ckDropAndDown/CKDropAndDown'
import { getDialogHeight } from '../../utils/getDialogHeight'
const ChatIt = memo(() => {
  const { managment, styles } = useStoreon('managment', 'styles')
  /* COMPONENTS PROPS */
  const activeTheme = styles.get('active')
  const { mainContainer, chatContainer } = styles.getIn(['stack', activeTheme, 'ChatIt'])
  const { chatIsOpen, showSettings } = managment.get('common')
  const { showDropZone } = managment.getIn(['components', 'Sender'])
  const { SenderEnabled, DialogEnabled, CloseEnabled, BadgeEnabled, HeaderEnabled, SettingsEnabled } = managment.getIn([
    'components',
    'ChatIt',
  ])

  const headerHeight = styles.getIn(['stack', activeTheme, 'Header', 'mainContainer', 'height'])
  const senderInitialHeight = styles.getIn(['stack', activeTheme, 'Sender', 'mainContainer', 'minHeight'])
  const [senderHeigth, changeSenderHeight] = useState(Number(senderInitialHeight.split('px')[0]))
  const { search } = managment.getIn(['components', 'Header'])
  const dialogHeight = getDialogHeight(senderHeigth, headerHeight, chatContainer.height)
  /* COMPONENT PROPS END */

  return (
    <div className="chatIt-main-container" css={mainContainer}>
      {CloseEnabled && chatIsOpen && <Close />}
      {chatIsOpen ? (
        <div className="chatIt-chat-container" css={chatContainer}>
          {!showSettings ? (
            <React.Fragment>
              {HeaderEnabled && <Header />}
              {DialogEnabled && !showDropZone && <Dialog height={dialogHeight} />}
              {SenderEnabled && search.active ? <SenderSearch /> : <Sender changeSenderHeight={changeSenderHeight} />}
            </React.Fragment>
          ) : (
            SettingsEnabled && <Settings />
          )}
        </div>
      ) : (
        BadgeEnabled && <Badge />
      )}
    </div>
  )
})

ChatIt.displayName = 'ChatIt'

export default ChatIt
