/** @jsx jsx */
import { jsx } from '@emotion/core'
import 'react-perfect-scrollbar/dist/css/styles.css'
import React, { useRef, useEffect } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { CKScrollBarProps } from './@types/CKScrollBar'
// import { isMobile } from 'mobile-device-detect'
const CKScrollBar: React.FC<CKScrollBarProps> = (props) => {
  const { css, scrollbar } = props
  const scrollRef = useRef<HTMLElement>()
  useEffect(() => {
    if (scrollRef.current?.scrollTop === 0) scrollRef.current.scrollTop = scrollRef.current?.scrollHeight
  }, [scrollRef.current])
  return (
    <React.Fragment>
      <PerfectScrollbar
        style={css}
        containerRef={(ref) => {
          scrollbar && scrollbar(ref)
          scrollRef.current = ref
        }}
        options={{ suppressScrollX: false }}
      >
        {props.children}
      </PerfectScrollbar>
    </React.Fragment>
  )
}
export default CKScrollBar
