import { FC } from 'react'
import './index.scss'

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <span className="footer__copyright">Copyright © {new Date().getFullYear()} ModuleArt. All rights reserved.</span>
    </footer>
  )
}
