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
  const macosUrl = ''
  const windowsUrl = ''

  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  const scrollToDesktop = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div className="plain-budget-page">
      <PageMeta title={`${title} - ${shortDescription}`} />

      <div className="plain-budget-page__head">
        <div className="plain-budget-page__section-cols">
          <div className="plain-budget-page__section-col">
            <div className="plain-budget-page__phone-holder">
              <img className="plain-budget-page__phone" src="/assets/images/iphone.png" alt="" />
              <div className="plain-budget-page__screenshot">
                <img src="/assets/images/projects/plain-budget/main.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="plain-budget-page__section-col">
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
            <div>
              <button onClick={scrollToDesktop} className="plain-budget-page__scroll-to-desktop-button">
                Looking for a PC version?
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="plain-budget-page__scroll-down-container">
        <button className="plain-budget-page__scroll-down-button" onClick={scrollToBottom}>
          <img width={32} height={32} src="/assets/images/icons/google-material-icons/ic:baseline-chevron-right.svg" alt="Download" />
        </button>
      </div>

      <div className="plain-budget-page__section">
        <div className="plain-budget-page__section-cols plain-budget-page__section-cols--reversed">
          <div className="plain-budget-page__section-col">
            <h2 className="plain-budget-page__title">Workspaces</h2>
            <h3 className="plain-budget-page__subtitle">
              Manage all your projects
              <br />
              with ease
            </h3>
            <div className="plain-budget-page__description">
              <ul>
                <li>Categorize your expenses by projects to know which project is more valuable</li>
                <li>Consider Workspaces as a multi-account feature</li>
                <li>Perfect for business</li>
              </ul>
            </div>
          </div>
          <div className="plain-budget-page__section-col">
            <div className="plain-budget-page__phone-holder">
              <img className="plain-budget-page__phone" src="/assets/images/iphone.png" alt="" />
              <div className="plain-budget-page__screenshot">
                <img src="/assets/images/projects/plain-budget/main.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plain-budget-page__section">
        <div className="plain-budget-page__section-cols plain-budget-page__section-cols--tile">
          <div className="plain-budget-page__section-col">
            <h2 className="plain-budget-page__title">Debts</h2>
            <h3 className="plain-budget-page__subtitle">Track who you owe and who owes you</h3>
            <div className="plain-budget-page__phone-holder">
              <img className="plain-budget-page__phone" src="/assets/images/iphone.png" alt="" />
              <div className="plain-budget-page__screenshot">
                <img src="/assets/images/projects/plain-budget/main.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="plain-budget-page__section-col">
            <h2 className="plain-budget-page__title">Dark Theme</h2>
            <h3 className="plain-budget-page__subtitle">Choose your destiny</h3>
            <div className="plain-budget-page__phone-holder">
              <img className="plain-budget-page__phone" src="/assets/images/iphone.png" alt="" />
              <div className="plain-budget-page__screenshot">
                <img src="/assets/images/projects/plain-budget/main.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plain-budget-page__section">
        <div className="plain-budget-page__section-cols plain-budget-page__section-cols--tile">
          <div className="plain-budget-page__section-col">
            <h2 className="plain-budget-page__title">PlainBudget Desktop</h2>
            <h3 className="plain-budget-page__subtitle">Available everywhere</h3>
            <img className="plain-budget-page__screenshot-desktop" src="/assets/images/projects/plain-budget/desktop.webp" alt="" />
          </div>
        </div>

        <div className="plain-budget-page__buttons plain-budget-page__buttons--centered">
          <div className="plain-budget-page__button-holder">
            <a className="plain-budget-page__button" href={macosUrl}>
              <img width={32} height={32} src="/assets/images/icons/google-material-icons/ic:baseline-apple.svg" alt="Download" />
              <div className="plain-budget-page__button-text">
                <div className="plain-budget-page__button-text-prefix">Download for</div>
                <div className="plain-budget-page__button-text-postfix">macOS</div>
              </div>
            </a>
          </div>
          <div className="plain-budget-page__button-holder">
            <a className="plain-budget-page__button" href={windowsUrl}>
              <img width={32} height={32} src="/assets/images/icons/google-material-icons/ic:baseline-window.svg" alt="Download" />
              <div className="plain-budget-page__button-text">
                <div className="plain-budget-page__button-text-prefix">Download for</div>
                <div className="plain-budget-page__button-text-postfix">Windows</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
