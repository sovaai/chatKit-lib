/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { CheckboxProps } from './@types/Checkbox'
const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const { properties, onChange, activePropertiy, type } = props
  const { checkboxContainer, boxTitle, checkbox, switcher } = props.styles
  const arrayOfProperties = Object.entries(properties)

  return (
    <React.Fragment>
      {arrayOfProperties.map((el: any, id: number) => (
        <div key={id} className={`settings-${type}-checkbox-container`} css={checkboxContainer}>
          <input
            onChange={onChange}
            checked={el[0] === activePropertiy}
            type="checkbox"
            id={el[0]}
            className="settings-checkbox"
            css={checkbox}
          />
          <label htmlFor={el[0]} className="settings-switcher" css={switcher}></label>
          <p className="settings-box-title" css={boxTitle}>
            {el[0]}
          </p>
          {type === 'themes' && (
            <div className={`${el[0]}-theme-example`} css={el[1].example}>
              {' '}
            </div>
          )}
        </div>
      ))}
    </React.Fragment>
  )
}
export default Checkbox
