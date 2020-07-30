/** @jsx jsx */
import { jsx } from '@emotion/core'
import 'react-perfect-scrollbar/dist/css/styles.css'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { CKScrollBarProps } from './@types/CKScrollBar'
class CKScrollBar extends React.PureComponent<CKScrollBarProps> {
  render() {
    const { css, scrollbar } = this.props

    return (
      <React.Fragment>
        <PerfectScrollbar
          style={css}
          containerRef={(ref) => scrollbar && scrollbar(ref)}
          options={{ suppressScrollX: true }}
        >
          {this.props.children}
        </PerfectScrollbar>
      </React.Fragment>
    )
  }
}
export default CKScrollBar
