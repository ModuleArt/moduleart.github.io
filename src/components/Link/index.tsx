import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import cn from 'classnames'
import { Props } from './Props'
import './index.scss'

export const Link: FC<Props> = ({ className = '', text, href, internal = false }) => {
  if (internal) {
    return (
      <RouterLink
        className={cn({
          link: true,
          'link--internal': true,
          [className]: true,
        })}
        to={href}
      >
        <span className="link__text">{text}</span>
      </RouterLink>
    )
  } else {
    return (
      <a
        className={cn({
          link: true,
          [className]: true,
        })}
        href={href}
        target="_blank"
      >
        <span className="link__text">{text}</span>
      </a>
    )
  }
}
