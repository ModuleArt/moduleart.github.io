import { Navigate } from 'react-router-dom'
import type { RouteRecord } from 'vite-react-ssg'
import { App } from '@/components/App'
import { routeDictionary } from './dictionary'
import { mainConfig } from '@/config/Main'

// app layout pages
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ProjectPage } from '@/pages/ProjectPage'
import { PlainBudgetPage } from '@/pages/PlainBudgetPage'

export const routes: RouteRecord[] = [
  {
    id: 'App',
    path: '/',
    element: <App />,
    children: [
      {
        id: 'HomePage',
        index: true,
        element: <HomePage />,
      },
      {
        id: 'AboutPage',
        path: routeDictionary.about(),
        element: <AboutPage />,
      },
      {
        id: 'PlainBudgetPage',
        path: routeDictionary.plainbudget(),
        element: <PlainBudgetPage />,
      },
      ...mainConfig.projects.map((project) => ({
        id: `ProjectPage--${project.href}`,
        path: routeDictionary.project(project.href),
        element: <ProjectPage project={project} />,
      })),
      {
        id: '404',
        path: '*',
        element: <Navigate to={routeDictionary.home()} />,
      },
    ],
  },
]
