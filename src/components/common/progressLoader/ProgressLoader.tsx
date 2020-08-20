/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC } from 'react'
import { useStoreon } from 'storeon/react'
export interface ProgressLoaderProps {
  progress: number
}
const ProgressLoader: FC<ProgressLoaderProps> = (props) => {
  const { settings } = useStoreon('settings')
  const { radius, strokeWidth, color } = settings.getIn(['media', 'progressLoader'])
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (props.progress / 100) * circumference
  return (
    <svg
      className="ckProgressLoader"
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        css={{
          transition: 'stroke-dashoffset 0.35s',
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
        }}
      />
    </svg>
  )
}
export default ProgressLoader
