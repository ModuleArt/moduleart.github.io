import { FC } from 'react'
import { ProjectsList } from '@/components/ProjectsList'
import { mainConfig } from '@/config/Main'
import { PageMeta } from '@/components/PageMeta'
// import { Platform } from '@/enums/Platform'

export const HomePage: FC = () => {
  const projects = mainConfig.projects.map((project) => ({
    title: project.title,
    description: project.shortDescription,
    image: project.images[0],
    href: project.href,
    platforms: project.downloads.map((download) => download.platform),
  }))

  return (
    <div className="home-page">
      <PageMeta title={mainConfig.title} />

      <ProjectsList
        projects={[
          // {
          //   href: '/plainbudget',
          //   image: '/assets/images/projects/plain-budget/2.webp',
          //   title: 'PlainBudget',
          //   description: 'Expense and income tracking app that will help you keep an eye on your finances',
          //   platforms: [Platform.ios, Platform.android],
          // },
          ...projects,
        ]}
      />
    </div>
  )
}
