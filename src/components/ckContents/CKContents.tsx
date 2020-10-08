/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import ContentElement from './components/contentElement/ContentElement'
import { useStoreon } from 'storeon/react'
import CKScrollBar from '../ckScrollbar/CKScrollbar'
export interface CKContentsProps {
  elements: any
}
const CKContents: React.FC<CKContentsProps> = (props) => {
  const { styles } = useStoreon('styles')
  const activeTheme = styles.get('active')
  const { mainContainer, scrollbar } = styles.getIn(['stack', activeTheme, 'CKContents'])
  const { elements } = props
  return (
    <div css={scrollbar}>
      <CKScrollBar>
        <div css={mainContainer}>
          {elements.map((element: any, key: number) => (
            <ContentElement key={key} element={element} />
          ))}
        </div>
      </CKScrollBar>
    </div>
  )
}

export default CKContents
