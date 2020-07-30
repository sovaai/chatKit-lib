import React from 'react'
import { StoreContext } from 'storeon/react'
import { ExportComponentProps } from './@types/Export'
import { store } from '../../../store'

const Export = (Component: any) => {
  const ExportComponent: React.FC<ExportComponentProps> = (props: ExportComponentProps) => {
    const { ckStore } = props
    return ckStore ? (
      <StoreContext.Provider value={store}>
        <Component />
      </StoreContext.Provider>
    ) : (
      <Component />
    )
  }
  return ExportComponent
}
export default Export
