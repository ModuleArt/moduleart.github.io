import { FC } from 'react'
import { Props } from './Props'
import { ProjectCard } from '@/components/ProjectCard'
import './index.scss'

export const ProjectsList: FC<Props> = ({ projects }) => {
  return (
    <div className="projects-list">
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            className="projects-list__project"
            title={project.title}
            href={project.href}
            image={project.images[0]}
            platform={project.platform}
          />
        )
      })}
    </div>
  )
}
