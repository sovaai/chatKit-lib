/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { AnimatedBadgeProps } from './@types/AnimatedBadge'

class AnimatedBadge extends React.PureComponent<AnimatedBadgeProps> {
  render() {
    const { styles } = this.props

    return (
      <svg css={styles} width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <path
            d="M120 65C120 74.0114 120 100 120 100C120 100 95.3185 100 85 100C65.67 100 50 84.33 50 65C50 45.67 65.67 30 85 30C104.33 30 120 45.67 120 65Z"
            fill={styles.groupPath.fill || '#386FFE'}
          />
        </g>
        <path id="q" css={styles.path} d="M65 53H87" stroke="white" strokeDasharray="40" strokeWidth="5"></path>
        <path css={styles.path} id="w" d="M93 53H105" stroke="white" strokeDasharray="10" strokeWidth="5"></path>
        <path css={styles.path} d="M65 65H95" stroke="white" strokeDasharray="50" strokeWidth="5"></path>
        <path css={styles.path} d="M65 77H83" stroke="white" strokeDasharray="30" strokeWidth="5"></path>
        <path css={styles.path} d="M88 77H99" stroke="white" strokeDasharray="10" strokeWidth="5"></path>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="170"
            height="170"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0 0 0 0 0 0.219608 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    )
  }
}

export default AnimatedBadge
