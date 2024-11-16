import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Snowfall from 'react-snowfall'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WidthLimiter } from '@/components/WidthLimiter'
import './index.scss'
import { ScrollToTop } from '../ScrollToTop'

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
        <div className="app__effects">
          <Snowfall />
        </div>
      </ScrollToTop>
    </div>
  )
}
