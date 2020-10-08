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
import CKContents from '../ckContents/CKContents'

class Dialog extends React.PureComponent<DialogProps> {
  state = { scrollbar: null }

  scrollbar = (scrollbar: any) => this.setState(() => ({ scrollbar }))

  rateClick = () => uiManagmentApi.uiManagment('showRate', true, this.props.store)
  searchClick = () => console.log('DialogSearch')
  render() {
    const { messages: messagesInStore, managment, settings, languages, styles, modules, height } = this.props

    const activeModule = modules.get('active')
    const messages = messagesInStore.getIn(['history', activeModule])
    const { search, loader, dividerEnabled } = managment.getIn(['components', 'Dialog'])
    const { showRate, showMsgLoad } = managment.get('common')
    const { RateEnabled } = managment.getIn(['components', 'ChatIt'])
    const { searchIcon } = settings.getIn(['media', 'icons'])
    const activeLanguage = languages.get('active')
    const { searchButtonTitle, loaderTitle } = languages.getIn(['stack', activeLanguage, 'Dialog'])
    const activeTheme = styles.get('active')
    const { mainContainer, panel, searchButton, messagesContainer, ckScrollBar } = styles.getIn([
      'stack',
      activeTheme,
      'Dialog',
    ])
    const { dividerMainContainer } = styles.getIn(['stack', activeTheme, 'Divider'])
    return (
      <Fragment>
        <div className="dialog-main-container" css={{ ...mainContainer, minHeight: height, height: height }}>
          <div className="dialog-panel" css={panel}>
            {/*           {rate.enabled && (
              <Button
                block={false}
                type="button"
                withIcon={rate.withIcon}
                withTitle={rate.withTitle}
                title={rateButtonTitle}
                onClick={this.rateClick}
                scrollbar={this.state.scrollbar}
                icon={rateIcon}
                style={rateButton}
                className="dialog-rateButton"
              />
            )} */}
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
              {messages?.map(
                (
                  message: {
                    text?: string
                    type?: string
                    elements?: any
                    sender: string
                    date: Date
                    file?: { name: string; url: string; size: string; type: string; id: number }
                  },
                  index: number
                ) => {
                  const nextSenderType = messages.getIn([index + 1, 'sender'])
                  const prevSenderType = messages.getIn([index - 1, 'sender'])
                  const prevMessageDateString = messages.getIn([index - 1, 'date']).toDateString()
                  const type = message.type
                  const currMessageDate = new Date(message.date)
                  const currentDateDateString = currMessageDate.toDateString()
                  const displayDivider = index === 0 ? true : currentDateDateString !== prevMessageDateString

                  if (!displayDivider || !dividerEnabled)
                    return type === 'content' ? (
                      <CKContents key={index} elements={message.elements} />
                    ) : (
                      <Message
                        id={index}
                        scrollbar={this.state.scrollbar}
                        prevSenderType={prevSenderType}
                        nextSenderType={nextSenderType}
                        key={index}
                        store={this.props.store}
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
                      {type === 'content' ? (
                        <CKContents key={index} elements={message.elements} />
                      ) : (
                        <Message
                          id={index}
                          store={this.props.store}
                          scrollbar={this.state.scrollbar}
                          prevSenderType={prevSenderType}
                          nextSenderType={nextSenderType}
                          message={message}
                        />
                      )}
                    </Fragment>
                  )
                }
              )}
              {showMsgLoad && loader.enabled && (
                <MessageLoader
                  loaderTitle={loaderTitle}
                  store={this.props.store}
                  showAnimation={loader.showAnimation}
                  showTitle={loader.showTitle}
                />
              )}
            </CKScrollBar>
          </div>
        </div>
        {RateEnabled && showRate && <Rate store={this.props.store} />}
      </Fragment>
    )
  }
}
export default connectStoreon('messages', 'settings', 'managment', 'languages', 'styles', 'modules', Dialog)
