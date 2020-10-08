/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { connectStoreon } from 'storeon/react'
import { SettingsHeaderProps } from './@types/SettingsHeader'
import Button from '../../../common/button/Button'
import uiManagmentApi from '../../../../api/uiManagment/uiManagmentApi'

class SettingsHeader extends React.PureComponent<SettingsHeaderProps> {
  closeSettings = () => uiManagmentApi.uiManagment('showSettings', null, this.props.store)
  render() {
    const { closeSettings } = this.props.managment.getIn(['components', 'Settings'])
    const activeLanguage = this.props.languages.get('active')
    const { title, closeSettingsButtonTitle } = this.props.languages.getIn(['stack', activeLanguage, 'Settings'])
    const activeTheme = this.props.styles.get('active')
    const { closeSettingsButton, header, titleContainer } = this.props.styles.getIn(['stack', activeTheme, 'Settings'])
    const { closeSettingsIcon } = this.props.settings.getIn(['media', 'icons'])
    return (
      <div className="settings-header" css={header}>
        {closeSettings.enabled && (
          <Button
            withIcon={closeSettings.withIcon}
            withTitle={closeSettings.withIcon}
            title={closeSettingsButtonTitle}
            type="button"
            block={false}
            className="settings-closeSettingsButton"
            style={closeSettingsButton}
            icon={closeSettingsIcon}
            onClick={this.closeSettings}
          />
        )}
        <div className="settings-titleContainer" css={titleContainer}>
          {title}
        </div>
      </div>
    )
  }
}
export default connectStoreon('languages', 'styles', 'managment', 'settings', SettingsHeader)
