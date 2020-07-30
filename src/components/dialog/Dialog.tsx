/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import { DialogProps } from './@types/Dialog'
import Message from './components/message/Message'
import { connectStoreon } from 'storeon/react'
import CKScrollBar from '../ckScrollbar/CKScrollbar'
import Button from '../common/button/Button'
import MessageLoader from './components/messageLoader/MessageLoader'
import Rate from '../rate/Rate'
import uiManagmentApi from '../../api/uiManagment/uiManagmentApi'

class Dialog extends React.PureComponent<DialogProps> {
  state = { scrollbar: null }

  scrollbar = (scrollbar: any) => this.setState(() => ({ scrollbar }))

  rateClick = () => uiManagmentApi.uiManagment('showRate', true)
  searchClick = () => console.log('DialogSearch')
  render() {
    const { messages: messagesInStore, managment, settings, languages, styles } = this.props

    const messages = messagesInStore.get('history')
    const { rate, search, loader, dividerEnabled } = managment.getIn(['components', 'Dialog'])
    const { showRate, showMsgLoad } = managment.get('common')
    const { RateEnabled } = managment.getIn(['components', 'ChatIt'])
    const { searchIcon, rateIcon } = settings.getIn(['media', 'icons'])
    const activeLanguage = languages.get('active')
    const { searchButtonTitle, rateButtonTitle, loaderTitle } = languages.getIn(['stack', activeLanguage, 'Dialog'])
    const activeTheme = styles.get('active')
    const { mainContainer, panel, rateButton, searchButton, messagesContainer, ckScrollBar } = styles.getIn([
      'stack',
      activeTheme,
      'Dialog',
    ])
    const { dividerMainContainer } = styles.getIn(['stack', activeTheme, 'Divider'])
    return (
      <Fragment>
        <div className="dialog-main-container" css={mainContainer}>
          <div className="dialog-panel" css={panel}>
            {search.enabled && (
              <Button
                block={false}
                type="button"
                withIcon={search.withIcon}
                withTitle={search.withTitle}
                title={searchButtonTitle}
                onClick={this.searchClick}
                icon={searchIcon}
                style={searchButton}
                className="dialog-searchButton"
              />
            )}
          </div>
          <div className="dialog-messages-container" css={messagesContainer}>
            <CKScrollBar scrollbar={this.scrollbar} css={ckScrollBar}>
              {messages.map((message: { text: string; sender: string; date: Date }, index: number) => {
                const nextSenderType = messages.getIn([index + 1, 'sender'])
                const prevSenderType = messages.getIn([index - 1, 'sender'])
                const prevMessageDateString = messages.getIn([index - 1, 'date']).toDateString()

                const currMessageDate = new Date(message.date)
                const currentDateDateString = currMessageDate.toDateString()

                const displayDivider = index === 0 ? true : currentDateDateString !== prevMessageDateString

                if (!displayDivider || !dividerEnabled)
                  return (
                    <Message
                      id={index}
                      scrollbar={this.state.scrollbar}
                      prevSenderType={prevSenderType}
                      nextSenderType={nextSenderType}
                      key={index}
                      message={message}
                    />
                  )

                const todayDate = new Date()
                const prevDay = new Date()
                const prevDayDate = new Date(prevDay.setDate(prevDay.getDate() - 1)).toDateString()
                const showTodayAsText = todayDate.toDateString() === currentDateDateString
                const showPrevTodayAsText = prevDayDate === currentDateDateString
                const dateToBeDisplayed = showTodayAsText
                  ? 'Сегодня'
                  : showPrevTodayAsText
                  ? 'Вчера'
                  : currMessageDate.toLocaleDateString('ru-RU')

                return (
                  <Fragment key={index}>
                    {displayDivider && (
                      <div className="dialog-messages-divider" css={dividerMainContainer}>
                        {dateToBeDisplayed}
                      </div>
                    )}
                    <Message
                      id={index}
                      scrollbar={this.state.scrollbar}
                      prevSenderType={prevSenderType}
                      nextSenderType={nextSenderType}
                      message={message}
                    />
                  </Fragment>
                )
              })}
              {showMsgLoad && loader.enabled && (
                <MessageLoader
                  loaderTitle={loaderTitle}
                  showAnimation={loader.showAnimation}
                  showTitle={loader.showTitle}
                />
              )}
            </CKScrollBar>
          </div>
        </div>
        {RateEnabled && showRate && <Rate />}
      </Fragment>
    )
  }
}
export default connectStoreon('messages', 'settings', 'managment', 'languages', 'styles', Dialog)
