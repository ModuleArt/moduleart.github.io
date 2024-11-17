import { FC } from 'react'
import './index.scss'
import { PageMeta } from '@/components/PageMeta'
import { Link } from '@/components/Link'
import { WidthLimiter } from '@/components/WidthLimiter'

export const AboutPage: FC = () => {
  return (
    <div className="about-page">
      <PageMeta title="About ModuleArt" />

      <h1 className="about-page__heading">About</h1>

      <WidthLimiter maxWidth={460} className="about-page__article">
        I'm just <Link text="a guy" href="https://github.com/Beelink" /> who made a couple of cool apps. I hope you like them!
        <br />
        <br />
        My apps are free. If you find them useful and you're feeling generous, I've set up some ways to donate:
        <ul className="about-page__links">
          <li className="about-page__link">
            <Link text="Card / PayPal / Bank Transfer" href="https://opencollective.com/moduleart/donate" />
          </li>
          <li className="about-page__link">
            <Link text="Open Collective" href="https://opencollective.com/moduleart" />
          </li>
        </ul>
        <br />
        Also, I will be posting free open source apps from other cool authors from time to time. Please consider supporting them too. Stay tuned!
        <br />
        <br />
        If you would like to report a bug or experiencing a crash, please provide a detailed description of the steps necessary to reproduce it as well as app
        version and OS version. Please use <Link text="GitHub" href="https://github.com/ModuleArt" /> Issues under the corresponding repository for this or just
        leave me an email.
        <br />
        <br />
        Email: <Link text="module.art.team@gmail.com" href="mailto:module.art.team@gmail.com" />
        <br />
        <br />
        Thank you all!
      </WidthLimiter>
    </div>
  )
}
