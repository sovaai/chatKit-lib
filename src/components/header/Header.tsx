/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC } from 'react'
import Avatar from '../common/avatar/Avatar'
import { connectStoreon, useStoreon } from 'storeon/react'
import Button from '../common/button/Button'
import { HeaderProps, HeaderState } from './@types/Header'
import uiManagmentApi from '../../api/uiManagment/uiManagmentApi'

const Search = () => {
  const toggleSearch = () => uiManagmentApi.uiManagment('toggleSearchActiveStatus')
  const changeSearchValue = (searchValue: string) => uiManagmentApi.uiManagment('changeSearchValue', searchValue)
  const { styles, settings, managment, languages } = useStoreon('styles', 'settings', 'managment', 'languages')

  const activeLanguage = languages.get('active')
  const { placeholder } = languages.getIn(['stack', activeLanguage, 'Settings', 'search'])

  const activeTheme = styles.get('active')
  const { searchIcon, searchDeactivateIcon } = settings.getIn(['media', 'icons'])
  const { searchButton, headerSearchContainer, headerSearchInput } = styles.getIn(['stack', activeTheme, 'Header'])
  const { search } = managment.getIn(['components', 'Header'])
  return (
    <div className="sova-header-search-container" css={headerSearchContainer}>
      <Button
        type="button"
        block={false}
        withIcon={search.withIcon}
        withTitle={search.withTitle}
        icon={search.active ? searchDeactivateIcon : searchIcon}
        style={searchButton}
        onClick={toggleSearch}
        className="sova-header-search-icon"
      />
      {search.active && (
        <input
          value={search.searchValue}
          className="sova-header-search-input"
          css={headerSearchInput}
          placeholder={placeholder}
          onChange={(e) => changeSearchValue(e.target.value)}
        />
      )}
    </div>
  )
}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  resetClick = () => uiManagmentApi.uiManagment('reset', null)
  closeWidget = () => uiManagmentApi.uiManagment('openChat', false)
  settingsClick = () => uiManagmentApi.uiManagment('showSettings', true)

  render() {
    const { showTitle, showAvatar, reset, settings, search, close } = this.props.managment.getIn([
      'components',
      'Header',
    ])
    const activeLanguage = this.props.languages.get('active')
    const { title, settingsButtonTitle, resetButtonTitle, closeButtonTitle } = this.props.languages.getIn([
      'stack',
      activeLanguage,
      'Header',
    ])
    const { resetIcon, settingsIcon, closeIcon } = this.props.settings.getIn(['media', 'icons'])
    const activeTheme = this.props.styles.get('active')
    const {
      mainContainer,
      avatarContainer,
      image,
      titleContainer,
      resetButton,
      settingsButton,
      closeButton,
    } = this.props.styles.getIn(['stack', activeTheme, 'Header'])
    return (
      <div className="header-main-container" css={mainContainer}>
        {showAvatar && !search.active && <Avatar styles={{ avatarContainer, image }} className="header" />}
        {showTitle && !search.active && (
          <div className="header-title-container" css={titleContainer}>
            {title}
          </div>
        )}

        {search.enabled && <Search />}
        {reset.enabled && !search.active && (
          <Button
            type="button"
            block={false}
            withIcon={reset.withIcon}
            withTitle={reset.withTitle}
            title={resetButtonTitle}
            onClick={this.resetClick}
            icon={resetIcon}
            style={resetButton}
            className="header-resetButton"
          />
        )}
        {settings.enabled && !search.active && (
          <Button
            type="button"
            block={false}
            withIcon={settings.withIcon}
            withTitle={settings.withTitle}
            title={settingsButtonTitle}
            icon={settingsIcon}
            onClick={this.settingsClick}
            style={settingsButton}
            className="header-settingsButton"
          />
        )}
        {close.enabled && !search.active && (
          <Button
            type="button"
            block={false}
            withIcon={close.withIcon}
            withTitle={close.withTitle}
            title={closeButtonTitle}
            onClick={this.closeWidget}
            icon={closeIcon}
            style={closeButton}
            className="header-closeButton"
          />
        )}
      </div>
    )
  }
}

export default connectStoreon('settings', 'managment', 'languages', 'styles', Header)
