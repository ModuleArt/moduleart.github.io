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
            description={project.shortDescription}
            href={project.href}
            image={project.images[0]}
            platforms={project.downloads.map((d) => d.platform)}
            size={size}
          />
        )
      })}
    </div>
  )
}
