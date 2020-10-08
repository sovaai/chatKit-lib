/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FC, useRef, useEffect } from 'react'
import uiManagmentApi from '../../api/uiManagment/uiManagmentApi'
export interface CKDragDetectProps {
  store?: any
}
const CKDragDetect: FC<CKDragDetectProps> = (props) => {
  const dragDetect = useRef<HTMLDivElement>(null)
  const store = props.store
  useEffect(() => {
    dragDetect.current?.addEventListener('dragenter', () => {
      uiManagmentApi.uiManagment('showDropZone', true, store)
    })
  }, [dragDetect])
  return <div ref={dragDetect}>{props.children}</div>
}
export default CKDragDetect
