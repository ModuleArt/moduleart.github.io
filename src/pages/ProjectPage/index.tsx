import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { Platform } from '@/enums/Platform'
import { formatBytes } from '@/helpers/dataHelper'
import { Props } from './Props'
import { Slider } from '@/components/Slider'
import { Loading } from '@/components/Loading'
import { Link } from '@/components/Link'
import { MarkdownView } from '@/components/MarkdownView'
import { Contributors } from '@/components/Contributors'
import './index.scss'
import { PageMeta } from '@/components/PageMeta'

export const ProjectPage: FC<Props> = ({ project }) => {
  const [isLoading, setLoading] = useState(true)
  const [projectData, setProjectData] = useState({
    stars: '',
    openedIssues: '',
  })
  const [releaseData, setReleaseData] = useState({
    version: '',
    size: '',
    downloadUrl: '',
    releaseMd: '',
    releaseDate: '',
    tagName: '',
  })
  const [contributors, setContributors] = useState<
    {
      login: string
      profileUrl: string
      avatarUrl: string
    }[]
  >([])

  useEffect(() => {
    Promise.all([
      axios
        .get<{ tag_name: string; assets: { size: number; browser_download_url: string }[]; body: string; published_at: string }>(
          `https://api.github.com/repos/${project.githubPath}/releases/latest`
        )
        .then(({ data }) => {
          const releaseData = {
            version: data.tag_name,
            size: formatBytes(data.assets[0].size),
            downloadUrl: data.assets[0].browser_download_url,
            releaseMd: data.body,
            releaseDate: new Date(data.published_at).toLocaleDateString('en-US', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }),
            tagName: data.tag_name,
          }

          if (releaseData.version[0] !== 'v') {
            releaseData.version = `v${releaseData.version}`
          }

          setReleaseData(releaseData)
        }),
      axios.get<{ stargazers_count: string; open_issues_count: string }>(`https://api.github.com/repos/${project.githubPath}`).then(({ data }) => {
        setProjectData({
          stars: data.stargazers_count,
          openedIssues: data.open_issues_count,
        })
      }),
      axios
        .get<{ login: string; html_url: string; avatar_url: string }[]>(`https://api.github.com/repos/${project.githubPath}/contributors`)
        .then(({ data }) => {
          setContributors(
            data.map((c) => {
              return {
                login: c.login,
                profileUrl: c.html_url,
                avatarUrl: c.avatar_url,
              }
            })
          )
        }),
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  return (
    <div className="project-page">
      <PageMeta title={`${project.title} - ${project.shortDescription}`} />

      <div className="project-page__head">
        <img className="project-page__app-icon" src={project.appIcon} alt={project.title} />
        <h1 className="project-page__title">{project.title}</h1>
        <h2 className="project-page__description">
          {project.shortDescription}.<br />
          Developed by <Link className="project-page__author" href={project.authorUrl} text={project.authorName} />
        </h2>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="project-page__buttons">
            <div className="project-page__button-holder">
              <a className="project-page__button project-page__button--primary" href={releaseData.downloadUrl}>
                <img
                  src={project.platform === Platform.win ? '/assets/images/icons/ic:baseline-window.svg' : '/assets/images/icons/ic:baseline-apple.svg'}
                  alt="Download"
                />
                <span className="project-page__button-text">Download</span>
                <span className="project-page__button-version">{releaseData.version}</span>
              </a>
              <span className="project-page__button-label">
                {project.os}, {releaseData.size}
              </span>
            </div>
            <div className="project-page__button-holder">
              <a className="project-page__button" href={`https://github.com/${project.githubPath}`} target="_blank">
                <img src="/assets/images/icons/ic:baseline-code.svg" alt="GitHub" />
                <span className="project-page__button-text">GitHub</span>
              </a>
              <span className="project-page__button-label">
                ☆ {projectData.stars} stars, {projectData.openedIssues} issues
              </span>
            </div>
            {project.donateUrl && (
              <div className="project-page__button-holder">
                <a className="project-page__button" href={project.donateUrl} target="_blank">
                  <img src="/assets/images/icons/ic:baseline-attach-money.svg" alt="Donate" />
                  <span className="project-page__button-text">Donate</span>
                </a>
                <span className="project-page__button-label">Open Collective</span>
              </div>
            )}
          </div>
        )}
      </div>
      <Slider images={project.images} />
      <h2 className="project-page__tile-heading">What's new</h2>
      {!isLoading && (
        <h4 className="project-page__release-name">
          <Link href={`https://github.com/${project.githubPath}/releases/latest`} text={`Release ${releaseData.version}`} />
          <span className="project-page__release-date">{` - ${releaseData.releaseDate}`}</span>
        </h4>
      )}
      {(isLoading || releaseData.releaseMd) && (
        <div className="project-page__tile">{isLoading ? <Loading /> : <MarkdownView markdown={releaseData.releaseMd} />}</div>
      )}
      <h2 className="project-page__tile-heading">Contributors</h2>
      <div className="project-page__tile">{isLoading ? <Loading /> : <Contributors contributors={contributors} />}</div>
    </div>
  )
}
