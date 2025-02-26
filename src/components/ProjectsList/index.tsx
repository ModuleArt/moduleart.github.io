import { FC } from 'react'
import { Props } from './Props'
import { ProjectCard } from '@/components/ProjectCard'
import './index.scss'
import cn from 'classnames'

export const ProjectsList: FC<Props> = ({ projects, size = 'large' }) => {
  return (
    <div className={cn('projects-list', { 'projects-list--small': size === 'small' })}>
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            className="projects-list__project"
            title={project.title}
            description={project.description}
            href={project.href}
            image={project.image}
            platforms={project.platforms}
            size={size}
          />
        )
      })}
    </div>
  )
}
