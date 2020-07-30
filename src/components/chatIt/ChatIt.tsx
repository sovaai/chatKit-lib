/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { memo } from 'react'
import Dialog from '../dialog/Dialog'
import Sender from '../sender/Sender'
import Header from '../header/Header'
import Badge from '../badge/Badge'
import { useStoreon } from 'storeon/react'
import Close from '../close/Close'
import Settings from '../settings/Settings'
import SenderSearch from '../sender/SenderSearch'

const ChatIt = memo(() => {
  const { managment, styles } = useStoreon('managment', 'styles')

  /* COMPONENTS PROPS */
  const activeTheme = styles.get('active')
  const { mainContainer, chatContainer } = styles.getIn(['stack', activeTheme, 'ChatIt'])
  const { chatIsOpen, showSettings } = managment.get('common')
  const { SenderEnabled, DialogEnabled, CloseEnabled, BadgeEnabled, HeaderEnabled, SettingsEnabled } = managment.getIn([
    'components',
    'ChatIt',
  ])

  const { search } = managment.getIn(['components', 'Header'])

  /* COMPONENT PROPS END */

  return (
    <div className="chatIt-main-container" css={mainContainer}>
      {CloseEnabled && chatIsOpen && <Close />}
      {chatIsOpen ? (
        <div className="chatIt-chat-container" css={chatContainer}>
          {!showSettings ? (
            <React.Fragment>
              {HeaderEnabled && <Header />}
              {DialogEnabled && <Dialog />}
              {SenderEnabled && search.active ? <SenderSearch /> : <Sender />}
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
