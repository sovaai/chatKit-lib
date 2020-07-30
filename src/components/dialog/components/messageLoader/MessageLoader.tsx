/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { MessageLoaderState, MessageLoaderProps } from './@types/MessageLoader'
import { connectStoreon } from 'storeon/react'

class MsgLoader extends React.PureComponent<MessageLoaderProps, MessageLoaderState> {
  state = {
    show: false,
  }
  timeoutID: any = 0

  componentDidMount() {
    this.timeoutID = setTimeout(() => this.setState(() => ({ show: true })), 1500)
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutID)
  }

  render() {
    const activeTheme = this.props.styles.get('active')
    const { mainContainer, elementOne, elementTwo, elementThree } = this.props.styles.getIn([
      'stack',
      activeTheme,
      'MessageLoader',
    ])
    const { loaderTitle, showAnimation, showTitle } = this.props
    const { show } = this.state
    return (
      <React.Fragment>
        {show && (
          <div css={mainContainer}>
            {showTitle && loaderTitle}
            {showAnimation && (
              <React.Fragment>
                <div className="msgLoader-elementOne" css={elementOne}>.</div>
                <div className="msgLoader-elementTwo" css={elementTwo}>.</div>
                <div className="msgLoader-elementThree" css={elementThree}>.</div>
              </React.Fragment>
            )}
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default connectStoreon('styles', MsgLoader)
