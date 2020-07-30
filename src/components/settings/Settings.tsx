/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { memo } from 'react'
import { SettingsProps } from './@types/Settings'
import { connectStoreon } from 'storeon/react'
import languagesApi from '../../api/languages/languagesApi'
import stylesApi from '../../api/styles/stylesApi'
import Checkbox from './components/checkBox/Checkbox'
import SettingsHeader from './components/settingsHeader/SettingsHeader'
import uiManagmentApi from '../../api/uiManagment/uiManagmentApi'

const Settings = memo<SettingsProps>((props) => {
  const changeLanguage = ({ currentTarget: { id } }: React.ChangeEvent<HTMLInputElement>) =>
    languagesApi.languages('changeLanguage', id)
  const changeTheme = ({ currentTarget: { id } }: React.ChangeEvent<HTMLInputElement>) =>
    stylesApi.styles('switchTheme', id)

  const changeTime = () => uiManagmentApi.uiManagment('toggleDisplayMessageTime')

  const activeLanguage = props.languages.get('active')
  const languagesStack = props.languages.get('stack')
  const activeTheme = props.styles.get('active')
  const themesStack = props.styles.get('stack')
  const { headingLanguage, headingTime, headingTheme } = props.languages.getIn(['stack', activeLanguage, 'Settings'])
  const {
    mainContainer,
    languages,
    themes,
    languagesCheckboxContainer,
    themesCheckboxContainer,
    boxTitle,
    checkbox,
    switcher,
    heading,
    fieldcontainer,
  } = props.styles.getIn(['stack', activeTheme, 'Settings'])
  const { toggleContainer, toggleHeading, toggleLabel, toggleInput, toggleSlider } = props.styles.getIn([
    'stack',
    activeTheme,
    'ToggleSlider',
  ])

  const { showDate } = props.managment.getIn(['components', 'Message'])

  return (
    <div className="settings-main-container" css={mainContainer}>
      <SettingsHeader />
      <div className="settings-fieldcontainer" css={fieldcontainer}>
        <span className="sova-settings_group-heading" css={heading}>
          {headingLanguage || 'Languages'}
        </span>
        <div className="settings-languages" css={languages}>
          <Checkbox
            type="languages"
            properties={languagesStack}
            activePropertiy={activeLanguage}
            onChange={changeLanguage}
            styles={{ checkboxContainer: languagesCheckboxContainer, boxTitle, checkbox, switcher }}
          />
        </div>
        <div className="sova-settings-toggle-container" css={toggleContainer}>
          <span className="sova-settings_group-heading" css={toggleHeading}>
            {headingTime || 'Time'}
          </span>
          <div>
            <label className="sova-settings-toggle-label" htmlFor="sova-settings-toggle" css={toggleLabel}>
              <input
                name="toggle-time"
                type="checkbox"
                checked={showDate}
                onChange={changeTime}
                id="sova-settings-toggle"
                className="sova-settings-toggle-input"
                css={toggleInput}
              />
              <div className="sova-settings-toggle-slider" css={toggleSlider}></div>
            </label>
          </div>
        </div>
        <span className="sova-settings_group-heading" css={heading}>
          {headingTheme || 'Themes'}
        </span>
        <div className="settings-themes" css={themes}>
          <Checkbox
            type="themes"
            properties={themesStack}
            activePropertiy={activeTheme}
            onChange={changeTheme}
            styles={{ checkboxContainer: themesCheckboxContainer, boxTitle, checkbox, switcher }}
          />
        </div>
      </div>
    </div>
  )
})

Settings.displayName = 'Settings'

export default connectStoreon('languages', 'styles', 'managment', Settings)
