/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC } from 'react'
import { ImageFileProps } from './@types/ImageFile'
const ImageFile: FC<ImageFileProps> = (props) => (
  <React.Fragment>
    {props.sholdBeDownload ? (
      <a css={props.style} download href={props.imageSrc}>
        <img src={props.imageSrc} css={props.style}></img>
      </a>
    ) : (
      <img src={props.imageSrc} css={props.style}></img>
    )}
  </React.Fragment>
)
ImageFile.displayName = 'ImageFile'

export default ImageFile
