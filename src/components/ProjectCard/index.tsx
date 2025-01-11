import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import cn from 'classnames'
import { Props } from './Props'
import './index.scss'

export const ProjectCard: FC<Props> = ({ className, title, description, href = null, image, platforms = [], size = 'large' }) => {
  return (
    <div
      className={cn({
        'project-card': true,
        'project-card--clickable': href,
        'project-card--small': size === 'small',
        [className]: true,
      })}
    >
      <h2 className="project-card__title">
        <span className="project-card__title-text"> {title} </span>
        {size !== 'small' && platforms.length > 0 && <span className="project-card__title-platform">for {platforms.join(', ')}</span>}
      </h2>
      {description && <h3 className="project-card__description">{description}</h3>}
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
