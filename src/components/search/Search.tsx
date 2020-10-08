/** @jsx jsx */
import { jsx } from '@emotion/core'
import Button from '../common/button/Button'
import uiManagmentApi from '../../api/uiManagment/uiManagmentApi'
import { FC } from 'react'
import { useStoreon } from 'storeon/react'
export interface SearchProps {
  store?: any
}
const Search: FC<SearchProps> = (props) => {
  const store = props.store
  const toggleSearch = () => {
    uiManagmentApi.uiManagment('toggleSearchActiveStatus', store)
    uiManagmentApi.uiManagment('changeSearchValue', '', store)
  }
  const changeSearchValue = (searchValue: string) => uiManagmentApi.uiManagment('changeSearchValue', searchValue, store)
  const { styles, settings, managment, languages } = useStoreon('styles', 'settings', 'managment', 'languages')
  const resetSearchValue = () => uiManagmentApi.uiManagment('changeSearchValue', '', store)
  const activeLanguage = languages.get('active')
  const { placeholder } = languages.getIn(['stack', activeLanguage, 'Search'])

  const activeTheme = styles.get('active')
  const { searchIcon, searchDeactivateIcon, timesIcon } = settings.getIn(['media', 'icons'])
  const { searchButton, headerSearchContainer, headerSearchInput, headerSearchResetButton } = styles.getIn([
    'stack',
    activeTheme,
    'Header',
  ])
  const { search } = managment.getIn(['components', 'Header'])
  const searchContainerWidth = search.active ? { width: '100%' } : {}
  return (
    <div className="sova-header-search-container" css={{ ...headerSearchContainer, ...searchContainerWidth }}>
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
      {search.searchValue.length !== 0 && (
        <Button
          type="button"
          block={false}
          withIcon={search.withIcon}
          withTitle={search.withTitle}
          icon={timesIcon}
          style={headerSearchResetButton}
          onClick={resetSearchValue}
          className="sova-header-search-icon"
        />
      )}
    </div>
  )
}
export default Search
