import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Snowfall from 'react-snowfall'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WidthLimiter } from '@/components/WidthLimiter'
import './index.scss'
import { ScrollToTop } from '@/components/ScrollToTop'
import { isWinter } from '@/utils/date'

export const App: FC = () => {
  return (
    <div className="app">
      <ScrollToTop>
        <WidthLimiter className="app__container">
          <Header />
          <div className="app__page">
            <Outlet />
          </div>
          <Footer />
        </WidthLimiter>
        <div className="app__effects">{isWinter() && <Snowfall snowflakeCount={100} />}</div>
      </ScrollToTop>
    </div>
  )
}
