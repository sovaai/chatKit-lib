/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { createRef } from 'react'
import { connectStoreon } from 'storeon/react'
import { RateProps, RateState } from './@types/Rate'
import Button from '../common/button/Button'
import sendMessageApi from '../../api/sendMessage/sendMessageApi'
import OutBoundClick from '../outboundClick/outboundClick'
import uiManagmentApi from '../../api/uiManagment/uiManagmentApi'

class Rate extends React.PureComponent<RateProps, RateState> {
  state = {
    showRatingList: false,
    transform: '',
  }

  rateContainer = createRef<HTMLDivElement>()

  componentDidMount = () => {
    this.setState(() => ({ transform: 'translateY(-100%)' }))
    this.props.scrollbar && (this.props.scrollbar.scrollTop = this.props.scrollbar.scrollHeight)
  }

  componentDidUpdate = (_: RateProps, prevState: RateState) => {
    if (prevState.showRatingList !== this.state.showRatingList) {
      this.props.scrollbar &&
        this.state.showRatingList &&
        (this.props.scrollbar.scrollTop = this.props.scrollbar.scrollHeight)
    }
  }

  hideRate = () => this.setState(() => ({ transform: 'translateY(100%)' }))
  removeRate = () =>
    this.state.transform === 'translateY(100%)' &&
    sendMessageApi.sendRate(4, this.props.store) &&
    uiManagmentApi.uiManagment('showRate', false, this.props.store)

  render() {
    const { showRatingList } = this.state
    const { positiveRate, negativeRate } = this.props.managment.getIn(['components', 'Rate'])
    const activeLanguage = this.props.languages.get('active')
    const { title, positive, negative, ratingList } = this.props.languages.getIn(['stack', activeLanguage, 'Rate'])
    const { positiveRateIcon, negativeRateIcon } = this.props.settings.getIn(['media', 'icons'])
    const activeTheme = this.props.styles.get('active')
    const {
      mainContainer,
      titleContainer,
      positiveRateButton,
      negativeRateButton,
      ratingListContainer,
      ratingElement,
    } = this.props.styles.getIn(['stack', activeTheme, 'Rate'])
    return (
      <OutBoundClick onClick={this.hideRate}>
        <div
          onTransitionEnd={this.removeRate}
          ref={this.rateContainer}
          className="rate-main-container"
          css={{ ...mainContainer }}
        >
          <span className="rate-title-container" css={titleContainer}>
            {title}
          </span>
          {positiveRate.enabled && (
            <Button
              type="button"
              block={false}
              withIcon={positiveRate.withIcon}
              withTitle={positiveRate.withTitle}
              title={positive}
              icon={positiveRateIcon}
              onClick={() => sendMessageApi.sendRate(5, this.props.store)}
              style={positiveRateButton}
              className="rate-positiveRateButton"
            />
          )}
          {negativeRate.enabled && (
            <Button
              type="button"
              block={false}
              withIcon={negativeRate.withIcon}
              withTitle={negativeRate.withTitle}
              title={negative}
              icon={negativeRateIcon}
              style={negativeRateButton}
              className="rate-positiveRateButton"
              onClick={() =>
                this.setState(() => ({
                  showRatingList: true,
                }))
              }
            />
          )}
          {showRatingList && (
            <div className="rate-ratingListContainer" css={ratingListContainer}>
              {ratingList.map((el: { text: string; rating: number }, index: number) => (
                <li
                  className="rate-ratingElement"
                  css={ratingElement}
                  key={index}
                  onClick={() => sendMessageApi.sendRate(el.rating, this.props.store)}
                >
                  {el.text}
                </li>
              ))}
            </div>
          )}
        </div>
      </OutBoundClick>
    )
  }
}
export default connectStoreon('settings', 'managment', 'languages', 'styles', Rate)
