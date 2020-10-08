/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { CloseProps } from './@types/Close'
import { connectStoreon } from 'storeon/react'
import Icon from '../common/icon/Icon'
import ckStore from '../../store'

class Close extends React.PureComponent<CloseProps> {
  closeChat = () =>
    this.props.store ? this.props.store.dispatch('openChat', false) : ckStore.dispatch('openChat', false)
  render() {
    const { closeIcon } = this.props.settings.getIn(['media', 'icons'])
    const activeTheme = this.props.styles.get('active')
    const { mainContainer } = this.props.styles.getIn(['stack', activeTheme, 'Close'])
    return (
      <div className="close-main-container" css={mainContainer} onClick={this.closeChat}>
        <Icon {...closeIcon} />
      </div>
    )
  }
}

export default connectStoreon('settings', 'styles', Close)
