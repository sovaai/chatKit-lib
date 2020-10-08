/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { useStoreon } from 'storeon/react'
export interface TextContainerProps {
  title: string
  subTitle: string
}
const TextContainer: React.FC<TextContainerProps> = (props) => {
  const { styles } = useStoreon('styles')
  const activeTheme = styles.get('active')
  const { textContainer, title, subTitle } = styles.getIn(['stack', activeTheme, 'CKContents'])
  return (
    <div css={textContainer}>
      <div css={title}>{props.title}</div>
      <div css={subTitle}>{props.subTitle}</div>
    </div>
  )
}

export default TextContainer
