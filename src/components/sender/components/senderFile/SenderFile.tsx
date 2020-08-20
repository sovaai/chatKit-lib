/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC, useState, useEffect, useRef } from 'react'
import { useStoreon } from 'storeon/react'
import { SenderFileProps } from './@types/SenderFile'
import ImageFile from '../../../common/imageFile/ImageFile'
import ProgressLoader from '../../../common/progressLoader/ProgressLoader'
import DeleteFile from '../../../ckSVG/DeleteFile'

const SenderFile: FC<SenderFileProps> = (props) => {
  const { styles, settings } = useStoreon('styles', 'settings')
  const { svg } = settings.get('media')
  const { file, uploadedFile } = props
  const [uploadStatus, changeUploadStatus] = useState(0)
  const [isDownloaded, changeStatus] = useState(true)
  const prevCountRef: React.MutableRefObject<boolean> = useRef(true)
  isDownloaded &&
    file.fileTask.on(
      'state_changed',
      (snap: any) => {
        const status = (snap.bytesTransferred / snap.totalBytes) * 100
        changeUploadStatus(() => status)
      },
      (err: any) => {},
      () => changeStatus(() => false)
    )
  const SVG = svg[`${file.type}File`] ? svg[`${file.type}File`] : svg.defaultFile
  const activeTheme = styles.get('active')
  const { fileContainer, fileImage, deleteFileButton } = styles.getIn(['stack', activeTheme, 'Sender'])
  const deleteFile = () => {
    file.ref.delete()
    props.pushFile((files: Array<any>) => files.filter((element: any) => element.id !== file.id))
    props.updateList((files: Array<any>) => files.filter((element: any) => element.id !== file.id))
  }
  useEffect(() => {
    const getFileMeta = async () => {
      const downloadURL = await file.ref.getDownloadURL()
      const fileMeta = {
        name: file.name,
        url: downloadURL,
        size: file.size,
        type: file.type,
        id: file.id,
      }
      props.pushFile((files: Array<any>) => [...files, fileMeta])
    }
    if (prevCountRef.current != isDownloaded) {
      prevCountRef.current = isDownloaded
      getFileMeta()
    }
  }, [isDownloaded])
  return (
    <div css={fileContainer} className="sender-fileContainer">
      {isDownloaded && <ProgressLoader progress={uploadStatus} />}
      {!isDownloaded && (
        <div key={props.file.name} css={deleteFileButton} onClick={deleteFile}>
          <DeleteFile key={props.index} />
        </div>
      )}
      {file.type === 'jpeg' || file.type === 'png' || file.type === 'jpg' ? (
        uploadedFile?.url && <ImageFile sholdBeDownload={false} imageSrc={uploadedFile?.url} style={fileImage} />
      ) : (
        <SVG />
      )}
    </div>
  )
}

SenderFile.displayName = 'SenderFile'

export default SenderFile
