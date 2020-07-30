/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import Button from '../../../common/button/Button'
import { SenderFormProps, SenderFormState } from './@types/SenderForm'
import CKScrollBar from '../../../ckScrollbar/CKScrollbar'
import { connectStoreon } from 'storeon/react'

class SenderForm extends React.PureComponent<SenderFormProps, SenderFormState> {
  state = {
    text: '',
    textAreaCSS: {
      height: 'auto',
    },
  }
  private textArea: React.RefObject<HTMLTextAreaElement> = React.createRef()
  onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault()
    const value = event.currentTarget.value
    this.setState(() => ({ text: value, textAreaCSS: { padding: '0', height: 'auto' } }))
  }
  onSubmit = () => {
    const { text } = this.state
    if (text.length === 0 || this.props.blockSubmit) return
    this.setState(() => ({ text: '', textAreaCSS: { padding: '0', height: 'auto' } }))
    this.props.sendMessage(text)
  }
  onEnterPress = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.onSubmit()
    }
  }
  componentDidUpdate(prevProps: SenderFormProps, prevState: SenderFormState) {
    if (prevState.text === this.state.text) return
    const height = this.textArea.current?.scrollHeight
    this.setState(() => ({ textAreaCSS: { height: `${height}px` } }))
  }
  render() {
    const { sendButton, focusInf, blockSubmit, inputPlaceHolder } = this.props
    const { sendMessageButton, textArea } = this.props.style
    const { text, textAreaCSS } = this.state
    const activeTheme = this.props.styles.get('active')
    const { ckScrollBar } = this.props.styles.getIn(['stack', activeTheme, 'Dialog'])

    return (
      <React.Fragment>
        <CKScrollBar css={ckScrollBar}>
          <div style={{ maxHeight: 80 }}>
            <textarea
              className="sender-textArea"
              ref={this.textArea}
              onChange={this.onChange}
              css={{ ...textArea, ...textAreaCSS }}
              value={text}
              autoFocus
              onBlur={focusInf}
              onFocus={focusInf}
              onKeyDown={this.onEnterPress}
              placeholder={inputPlaceHolder}
              rows={1}
            />
          </div>
        </CKScrollBar>
        {text && (
          <Button
            type="submit"
            withTitle={sendButton.withTitle}
            withIcon={sendButton.withIcon}
            title={sendButton.title}
            block={blockSubmit}
            icon={sendButton.icon}
            style={sendMessageButton}
            onClick={this.onSubmit}
            className="sender-sendMessageButton"
          />
        )}
      </React.Fragment>
    )
  }
}

export default connectStoreon('styles', SenderForm)
