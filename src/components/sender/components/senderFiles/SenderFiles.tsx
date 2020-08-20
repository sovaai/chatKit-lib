/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC } from 'react'
import { useStoreon } from 'storeon/react'
import { SenderFilesProps } from './@types/SenderFiles'
import SenderFile from '../senderFile/SenderFile'

const SenderFiles: FC<SenderFilesProps> = (props) => {
  const { styles } = useStoreon('styles')
  const activeTheme = styles.get('active')
  const { filesContainer } = styles.getIn(['stack', activeTheme, 'Sender'])
  const { listOfFiles, updateList, pushFile, uploadedFiles } = props
  return (
    <div className={'sender-filesContainer'} css={filesContainer}>
      {listOfFiles.map((file: any, index: number) => (
        <SenderFile
          index={file.id}
          file={file}
          uploadedFile={uploadedFiles[index]}
          key={index}
          pushFile={pushFile}
          updateList={updateList}
        />
      ))}
    </div>
  )
}

SenderFiles.displayName = 'SenderFiles'

export default SenderFiles
