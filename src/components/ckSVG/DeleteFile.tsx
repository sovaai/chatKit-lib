/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC } from 'react'
// export interface Props {
//     style: any
//     onClick: any
// }
const DeleteFile: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <g filter="url(#filter0_d)">
        <path
          d="M15.6368 5.93908L12.0002 9.57563L8.36368 5.93908C7.91745 5.49285 7.19367 5.49285 6.74744 5.93908L5.93932 6.74721C5.49308 7.19344 5.49308 7.91722 5.93932 8.36345L9.57587 12L5.93932 15.6365C5.49308 16.0828 5.49308 16.8066 5.93932 17.2528L6.74744 18.0609C7.19367 18.5072 7.91745 18.5072 8.36368 18.0609L12.0002 14.4244L15.6368 18.0609C16.083 18.5071 16.8068 18.5071 17.253 18.0609L18.0611 17.2528C18.5074 16.8066 18.5074 16.0828 18.0611 15.6365L14.4246 12L18.0611 8.36345C18.5074 7.91722 18.5074 7.19344 18.0611 6.74721L17.253 5.93909C16.8068 5.49285 16.083 5.49285 15.6368 5.93908Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-1.31348"
        y="-1.31372"
        width="26.6274"
        height="26.6274"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
DeleteFile.displayName = 'DeleteFile svg'
export default DeleteFile
