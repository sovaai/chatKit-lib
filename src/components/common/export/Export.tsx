import React from 'react'
import { StoreContext } from 'storeon/react'
import { ExportComponentProps } from './@types/Export'
import storeon from '../../../store'

const Export = (Component: any) => {
  const ExportComponent: React.FC<ExportComponentProps> = (props) => {
    const { ckStore, children, store } = props
    return ckStore ? (
      <StoreContext.Provider value={storeon}>
        <Component store={store}>{children}</Component>
      </StoreContext.Provider>
    ) : (
      <Component store={store}>{children}</Component>
    )
  }
  return ExportComponent
}
export default Export
