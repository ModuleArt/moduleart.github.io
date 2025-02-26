import { FC } from 'react'
import { Link } from '@/components/Link'
import './index.scss'
import { PageMeta } from '@/components/PageMeta'

export const PlainBudgetPage: FC = () => {
  const authorName = 'Eugene Volynko'
  const authorUrl = 'https://www.linkedin.com/in/eugene-volynko-a98564193'
  const appIcon = '/assets/images/projects/plain-budget/icon.webp'
  const title = 'PlainBudget'
  const shortDescription = 'Expense and income tracking app that will help you keep an eye on your finances'
  const iosUrl = ''
  const androidUrl = ''

  return (
    <div className="plain-budget-page">
      <PageMeta title={`${title} - ${shortDescription}`} />

      <div className="plain-budget-page__head">
        <div className="plain-budget-page__head-col">
          <div className="plain-budget-page__phone-holder">
            <img className="plain-budget-page__phone" src="/assets/images/iphone.png" alt="" />
            <div className="plain-budget-page__screenshot">
              <img src="/assets/images/projects/plain-budget/1.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="plain-budget-page__head-col">
          <img width={128} height={128} className="plain-budget-page__app-icon" src={appIcon} alt={title} />
          <h1 className="plain-budget-page__title">{title}</h1>
          <h2 className="plain-budget-page__description">
            {shortDescription}.<br />
            Developed by <Link className="plain-budget-page__author" href={authorUrl} text={authorName} />
          </h2>
          <div className="plain-budget-page__buttons">
            <div className="plain-budget-page__button-holder">
              <a className="plain-budget-page__button" href={iosUrl}>
                <img width={32} height={32} src="/assets/images/icons/google-material-icons/ic:baseline-apple.svg" alt="Download" />
                <div className="plain-budget-page__button-text">
                  <div className="plain-budget-page__button-text-prefix">Get iOS app on</div>
                  <div className="plain-budget-page__button-text-postfix">App Store</div>
                </div>
              </a>
            </div>
            <div className="plain-budget-page__button-holder">
              <a className="plain-budget-page__button" href={androidUrl}>
                <img width={32} height={32} src="/assets/images/icons/google-material-icons/ic:baseline-android.svg" alt="Download" />
                <div className="plain-budget-page__button-text">
                  <div className="plain-budget-page__button-text-prefix">Get Android app on</div>
                  <div className="plain-budget-page__button-text-postfix">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
