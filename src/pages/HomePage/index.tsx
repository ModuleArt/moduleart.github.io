import { FC } from 'react'
import { ProjectsList } from '@/components/ProjectsList'
import { mainConfig } from '@/config/Main'
import { PageMeta } from '@/components/PageMeta'

export const HomePage: FC = () => {
  return (
    <div className="home-page">
      <PageMeta title={mainConfig.title} />

      <ProjectsList projects={mainConfig.projects} />
    </div>
  )
}
