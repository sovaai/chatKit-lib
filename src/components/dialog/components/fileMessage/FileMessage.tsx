/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC } from 'react'
import ImageFile from '../../../common/imageFile/ImageFile'
import { useStoreon } from 'storeon/react'
import { fileNameParser } from '../../../../utils/fileSizeParser'
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons'
export interface Props {
  file: {
    name: string
    url: string
    size: string
    type: string
    id: number
  }
  styles: any
  sender: string
}
const FileMessage: FC<Props> = (props) => {
  const { file, styles, sender } = props
  const { name, url, size, type } = file
  const isMediaFile = type === 'jpeg' || type === 'png' || type === 'jpg'
  const parsedName = fileNameParser(name)
  const { imageFile, fileContainer, svgContainer, sizeTittle, fileNameTittle, metaContainer } = styles
  const { settings } = useStoreon('settings')
  const { svg } = settings.get('media')
  const SVG = svg[`${type}File`] ? svg[`${type}File`] : svg.defaultFile
  return isMediaFile ? (
    <ImageFile sholdBeDownload={true} imageSrc={url} style={imageFile} />
  ) : (
    <div css={fileContainer} className={`${sender}Message-fileContainer`}>
      <div css={svgContainer} className={`${sender}Message-svgContainer`}>
        <SVG />
      </div>
      <div css={metaContainer} className={`${sender}Message-metaContainer`}>
        <a download href={url} css={fileNameTittle} className={`${sender}Message-fileNameTittle`}>
          {parsedName}
        </a>
        <span css={sizeTittle} className={`${sender}Message-sizeTittle`}>
          {size}
        </span>
      </div>
    </div>
  )
}

FileMessage.displayName = 'FileMessage'

export default FileMessage
