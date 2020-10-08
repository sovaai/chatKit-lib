/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { useStoreon } from 'storeon/react'
export interface ImageProps {
  url: string
}
const Image: React.FC<ImageProps> = (props) => {
  const { styles } = useStoreon('styles')
  const activeTheme = styles.get('active')
  const { image } = styles.getIn(['stack', activeTheme, 'CKContents'])
  return <img css={image} src={props.url} />
}

export default Image
