/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import TextContainer from '../textContainer/TextContainer'
import Image from '../image/Image'
import Buttons from '../buttons/Buttons'
import { useStoreon } from 'storeon/react'
export interface ContentElementProps {
  element: any
}

const ContentElement: React.FC<ContentElementProps> = (props) => {
  const { styles } = useStoreon('styles')
  const activeTheme = styles.get('active')
  const { elementContainer } = styles.getIn(['stack', activeTheme, 'CKContents'])
  const { title, subtitle, image_url, buttons } = props.element
  return (
    <div css={elementContainer}>
      <Image url={image_url} />
      <TextContainer title={title} subTitle={subtitle} />
      <Buttons buttons={buttons} />
    </div>
  )
}

export default ContentElement
