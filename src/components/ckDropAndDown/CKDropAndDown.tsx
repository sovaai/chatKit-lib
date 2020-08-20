/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useCallback, FC, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { CKDropAndDownProps } from './@types/CKDropAndDown'
import { useStoreon } from 'storeon/react'
import Icon from '../common/icon/Icon'
import { uploadFile } from '../../utils/uploadFile'
import uiManagmentApi from '../../api/uiManagment/uiManagmentApi'

const CKDropAndDown: FC<CKDropAndDownProps> = (props) => {
  const [error, isError] = useState(false)
  const onDrop = useCallback((acceptedFiles) => {
    const fileMeta = uploadFile(acceptedFiles)
    fileMeta ? isError(false) : isError(true)
    fileMeta && props.pushFile((prevList: Array<any>) => [...prevList, fileMeta])
    fileMeta && uiManagmentApi.uiManagment('showDropZone', false)
  }, [])
  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const acceptedFiles = ev.currentTarget.files
    const fileMeta = uploadFile(acceptedFiles)
    fileMeta ? isError(false) : isError(true)
    fileMeta && props.pushFile((prevList: Array<any>) => [...prevList, fileMeta])
    fileMeta && uiManagmentApi.uiManagment('showDropZone', false)
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  const { styles, settings, languages, managment } = useStoreon('styles', 'settings', 'languages', 'managment')
  const activePacket = languages.get('active')
  const { comment, errorComment, divider, chooseFileButtonTitle, title } = languages.getIn([
    'stack',
    activePacket,
    'CKDropAndDown',
  ])
  const { chooseFile } = managment.getIn(['components', 'CKDropAndDown'])
  const { svg, icons } = settings.get('media')
  const activeTheme = styles.get('active')
  const {loserDropZone} = props
  const {
    mainContainer,
    titleContainer,
    chooseFileButton,
    dividerContainer,
    svgContainer,
    dropAndDownContainer,
    commentContainer,
  } = styles.getIn(['stack', activeTheme, 'CKDropAndDown'])
  const SVG = error ? svg.dropZoneError : svg.dropZone
  return (
    <div className="ckDropAndDown-mainContainer" css={{...mainContainer, ...loserDropZone}}>
      <div css={dropAndDownContainer} className="" {...getRootProps()}>
        <input {...getInputProps()} />
        <SVG
          style={isDragActive ? { ...svgContainer, opacity: '0.6' } : svgContainer}
          background={mainContainer.background}
        />
      </div>
      <div className="cKDropAndDown-titleContainer" css={titleContainer}>
        {title}
      </div>
      <div className="cKDropAndDown-dividerContainer" css={dividerContainer}>
        {divider}
      </div>
      <label css={chooseFileButton}>
        {chooseFile.withTitle && chooseFileButtonTitle}
        {chooseFile.withIcon && (
          <Icon icon={icons.addFileIcon.icon} className={icons.addFileIcon.icon} props={icons.addFileIcon.props} />
        )}
        <input
          onChange={onChange}
          type="file"
          className="cKDropAndDown-chooseFileButton"
          name={'uploader'}
          css={{ display: 'none' }}
        />
      </label>
      <div className="cKDropAndDown-commentsContainer" css={commentContainer}>
        {error ? errorComment : comment}
      </div>
    </div>
  )
}
export default CKDropAndDown
