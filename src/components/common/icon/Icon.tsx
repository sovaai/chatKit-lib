import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProps } from './@types/Icon'
import '../../../configs/icons'
const Icon = React.memo<IconProps>(props => (
  <FontAwesomeIcon className={props.className} icon={props.icon} {...props.props} />
))

Icon.displayName = 'Icon'

export default Icon
