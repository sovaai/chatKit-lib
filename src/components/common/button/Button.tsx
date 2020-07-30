/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { ButtonProps } from './@types/Button'
import Icon from '../icon/Icon'
const Button = React.memo<ButtonProps>(props => {
  const { block, type, title, withTitle, withIcon, icon, onClick, style, className } = props
  return (
    <button className={className} css={style} onClick={onClick} disabled={block} type={type}>
      {withIcon && icon && <Icon {...icon} />}
      {withTitle && title}
    </button>
  )
})
Button.displayName = 'Button'

export default Button
