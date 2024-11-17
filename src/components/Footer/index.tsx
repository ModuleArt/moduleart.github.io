import { FC } from 'react'
import './index.scss'

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">Copyright © {new Date().getFullYear()} ModuleArt. All rights reserved.</div>
    </footer>
  )
}
