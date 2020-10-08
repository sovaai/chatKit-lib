/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import recieveMessageApi from '../../../../api/recieveMessage/recieveMessageApi'
import sendMessageApi from '../../../../api/sendMessage/sendMessageApi'
import { useStoreon } from 'storeon/react'
export interface ButtonsProps {
  buttons: any
}
const Buttons: React.FC<ButtonsProps> = (props) => {
  const { styles } = useStoreon('styles')
  const activeTheme = styles.get('active')
  const { buttonsContainer, webUrlButton, postbackButton } = styles.getIn(['stack', activeTheme, 'CKContents'])
  const { buttons } = props
  const sendPayload = (button: { title: string; type: string; payload: string }) => {
    const { title,  payload } = button
    recieveMessageApi.recieveMessage({ text: title, sender: 'user', showRate: false, type: 'text' })

    sendMessageApi.sendEvent(payload)
  }
  return (
    <div css={buttonsContainer}>
      {buttons.map((button: any, key: number) => {
        const type = button.type
        if (type === 'web_url')
          return (
            <a target="_blank" css={webUrlButton} key={key} href={button.url}>
              {button.title}
            </a>
          )
        if (type === 'postback')
          return (
            <button css={postbackButton} key={key} onClick={() => sendPayload(button)}>
              {button.title}
            </button>
          )
      })}
    </div>
  )
}

export default Buttons
