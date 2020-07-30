/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { connectStoreon } from 'storeon/react'
import Avatar from '../common/avatar/Avatar'
import { BadgeProps } from './@types/Badge'
import { store } from '../../store'
import AnimatedBadge from '../animatedBadge/AnimatedBadge'

class Badge extends React.PureComponent<BadgeProps> {
  openChat = () => store.dispatch('openChat', true)
  render() {
    const { showAvatar, showTitle, showSVG } = this.props.managment.getIn(['components', 'Badge'])
    const activeLanguage = this.props.languages.get('active')
    const { title } = this.props.languages.getIn(['stack', activeLanguage, 'Badge'])
    const activeTheme = this.props.styles.get('active')
    const { mainContainer, avatarContainer, image, titleContainer, svg } = this.props.styles.getIn([
      'stack',
      activeTheme,
      'Badge',
    ])
    return (
      <div className="badge-main-container" css={mainContainer} onClick={this.openChat}>
        {showSVG && <AnimatedBadge styles={svg} />}
        {showAvatar && <Avatar styles={{ avatarContainer, image }} className={'badge'} />}
        {showTitle && (
          <div className="badge-title-container" css={titleContainer}>
            {title}
          </div>
        )}
      </div>
    )
  }
}
export default connectStoreon('managment', 'languages', 'styles', Badge)
