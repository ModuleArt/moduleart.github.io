import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import cn from 'classnames'
import { Props } from './Props'
import './index.scss'

export const ProjectCard: FC<Props> = ({ className, title, href = null, image, platform }) => {
  return (
    <div
      className={cn({
        'project-card': true,
        'project-card--clickable': href,
        [className]: true,
      })}
    >
      <h2 className="project-card__title">
        <span className="project-card__text">{title} </span>
        <span className="project-card__platform">for {platform}</span>
      </h2>
      {href ? (
        <RouterLink className="project-card__tile" to={href}>
          <img className="project-card__image" src={image} alt={title} />
        </RouterLink>
      ) : (
        <div className="project-card__tile">
          <img className="project-card__image" src={image} alt={title} />
        </div>
      )}
    </div>
  )
}
