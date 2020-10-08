/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC, useEffect } from 'react'
import { useStoreon } from 'storeon/react'
import Button from '../common/button/Button'
import uiManagmentApi from '../../api/uiManagment/uiManagmentApi'
export interface SenderSearchProps {
  store?: any
}
const SenderSearch: FC<SenderSearchProps> = ({store}) => {
  const { settings, managment, languages, styles } = useStoreon('settings', 'managment', 'languages', 'styles')

  /* COMPONENT PROPS */

  const { addFile } = managment.getIn(['components', 'Sender'])
  const { search } = managment.getIn(['components', 'Header'])

  const activeTheme = styles.get('active')
  const {
    mainContainer,
    mainContainerSearch,
    searchButtonContainer,
    searchCountContainer,
    switchingActiveButton,
    switchingDisableButton,
  } = styles.getIn(['stack', activeTheme, 'Sender'])
  const activeLanguage = languages.get('active')
  const { fileButtonTitle } = languages.getIn(['stack', activeLanguage, 'Sender'])
  const { divider, status } = languages.getIn(['stack', activeLanguage, 'Search'])
  const { chevronUpIcon, chevronDownIcon } = settings.getIn(['media', 'icons'])

  /* COMPONENT PROPS END */

  /* COMPONENT METHODS */

  const showNextFoundMessage = () => {
    if (search.foundMessage === 0) return
    uiManagmentApi.uiManagment('scrollToFoundMessage', search.foundMessage - 1, store)
  }
  const showPrevFoundMessage = () => {
    if (search.foundMessage === search.found.size - 1) return
    uiManagmentApi.uiManagment('scrollToFoundMessage', search.foundMessage + 1, store)
  }

  /* COMPONENT METHODS */

  /* COMPONENT LIFECICLES */

  useEffect(() => {
    uiManagmentApi.uiManagment('scrollToFoundMessage', search.found.size - 1, store)
  }, [search.found.size])

  /* COMPONENT LIFECICLES END */
  const positionContainer =
    search.found.size === 0 ? status : `${search.found.size - search.foundMessage} ${divider} ${search.found.size}`
  const buttonUpEnabled = search.found.size - search.foundMessage < search.found.size
  const buttonDownEnabled = search.found.size - search.foundMessage > 1
  const buttonUpStyle = buttonUpEnabled ? {} : switchingDisableButton
  const buttonDownStyle = buttonDownEnabled ? {} : switchingDisableButton
  return (
    <div className="sender-search-container" css={{ ...mainContainer, ...mainContainerSearch }}>
      <div className="sender-search-position-container" css={searchCountContainer}>
        {search.searchValue && positionContainer}
      </div>
      <div className="sender-search-button-container" css={searchButtonContainer}>
        <Button
          withIcon={addFile.withIcon}
          withTitle={addFile.withTitle}
          title={fileButtonTitle}
          type="button"
          block={false}
          onClick={showNextFoundMessage}
          icon={chevronUpIcon}
          style={{ ...switchingActiveButton, ...buttonUpStyle }}
          className="sender-search-button-up"
        />
        <Button
          withIcon={addFile.withIcon}
          withTitle={addFile.withTitle}
          title={fileButtonTitle}
          type="button"
          block={false}
          onClick={showPrevFoundMessage}
          icon={chevronDownIcon}
          style={{ ...switchingActiveButton, ...buttonDownStyle }}
          className="sender-search-button-down"
        />
      </div>
    </div>
  )
}

SenderSearch.displayName = 'SenderSearch'

export default SenderSearch
