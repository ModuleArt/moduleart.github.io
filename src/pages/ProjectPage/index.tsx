import { FC, useEffect, useState } from 'react'
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
import apiClient from '@/api'
import { DownloadAsset } from '@/interfaces/DownloadAsset'
import cn from 'classnames'
import { mainConfig } from '@/config/Main'
import { ProjectsList } from '@/components/ProjectsList'

export const ProjectPage: FC<Props> = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [projectData, setProjectData] = useState({
    stars: '',
    openedIssues: '',
  })
  const [releaseData, setReleaseData] = useState({
    version: '',
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
  const [assets, setAssets] = useState<DownloadAsset[]>([])

  useEffect(() => {
    setIsLoading(true)

    Promise.all([
      apiClient
        .get<{ tag_name: string; assets: { size: number; browser_download_url: string }[]; body: string; published_at: string }>(
          `/repos/${project.githubPath}/releases/latest`
        )
        .then(({ data }) => {
          const releaseData = {
            version: data.tag_name,
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

          const assets: DownloadAsset[] = data.assets
            .map((asset) => {
              const assetNameSplitted = asset.browser_download_url.split('.')
              const assetExt = assetNameSplitted.length ? assetNameSplitted.pop() : undefined

              if (assetExt) {
                const download = project.downloads.find((download) => download.fileExtension === assetExt)

                if (download) {
                  return { size: formatBytes(data.assets[0].size), downloadUrl: data.assets[0].browser_download_url, download }
                }
              }

              return null
            })
            .filter((a) => a !== null)

          setAssets(assets)
        }),
      apiClient.get<{ stargazers_count: string; open_issues_count: string }>(`/repos/${project.githubPath}`).then(({ data }) => {
        setProjectData({
          stars: data.stargazers_count,
          openedIssues: data.open_issues_count,
        })
      }),
      apiClient.get<{ login: string; html_url: string; avatar_url: string }[]>(`/repos/${project.githubPath}/contributors`).then(({ data }) => {
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
      setIsLoading(false)
    })
  }, [project])

  return (
    <div className="project-page">
      <PageMeta title={`${project.title} - ${project.shortDescription}`} />

      <div className="project-page__head">
        <img width={128} height={128} className="project-page__app-icon" src={project.appIcon} alt={project.title} />
        <h1 className="project-page__title">{project.title}</h1>
        <h2 className="project-page__description">
          {project.shortDescription}.<br />
          Developed by <Link className="project-page__author" href={project.authorUrl} text={project.authorName} />
        </h2>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="project-page__buttons">
            {assets.map((asset) => (
              <div className="project-page__button-holder" key={asset.download.fileExtension}>
                <a className="project-page__button project-page__button--primary" href={asset.downloadUrl}>
                  <img
                    width={24}
                    height={24}
                    src={
                      asset.download.platform === Platform.win
                        ? '/assets/images/icons/google-material-icons/ic:baseline-window.svg'
                        : '/assets/images/icons/google-material-icons/ic:baseline-apple.svg'
                    }
                    alt="Download"
                  />
                  <span className="project-page__button-text">Download</span>
                  <span className="project-page__button-version">{releaseData.version}</span>
                </a>
                <span className="project-page__button-label">
                  {asset.download.requirements}, {asset.download.fileExtension}, {asset.size}
                </span>
              </div>
            ))}
            <div className="project-page__button-holder">
              <a className="project-page__button" href={`https://github.com/${project.githubPath}`} target="_blank">
                <img width={24} height={24} src="/assets/images/icons/google-material-icons/ic:baseline-code.svg" alt="" />
                <span className="project-page__button-text">GitHub</span>
              </a>
              <span className="project-page__button-label">
                ☆ {projectData.stars} stars, {projectData.openedIssues} issues
              </span>
            </div>
            {project.donateUrl && (
              <div className="project-page__button-holder">
                <a className="project-page__button" href={project.donateUrl} target="_blank">
                  <img width={24} height={24} src="/assets/images/icons/google-material-icons/ic:baseline-attach-money.svg" alt="" />
                  <span className="project-page__button-text">Donate</span>
                </a>
                <span className="project-page__button-label">Open Collective</span>
              </div>
            )}
          </div>
        )}
      </div>
      <Slider images={project.images} />
      {project.features && project.features.length > 0 && (
        <>
          <h2 className="project-page__tile-heading">Features</h2>
          <div className="project-page__features">
            {project.features.map((feature) => (
              <div className={cn('project-page__feature', { 'project-page__feature--small': !feature.description })} key={feature.icon}>
                <h3 className="project-page__feature-title">
                  <img width={24} height={24} className="project-page__feature-icon" src={feature.icon} alt={feature.title} />
                  {feature.title}
                </h3>
                {feature.description && <p className="project-page__feature-description">{feature.description}</p>}
                {feature.image && <img className="project-page__feature-image" src={feature.image} />}
              </div>
            ))}
          </div>
        </>
      )}
      <h2 className="project-page__tile-heading">What's new</h2>
      {!isLoading && (
        <h3 className="project-page__release-name">
          <Link href={`https://github.com/${project.githubPath}/releases/latest`} text={`Release ${releaseData.version}`} />
          <span className="project-page__release-date">{` - ${releaseData.releaseDate}`}</span>
        </h3>
      )}
      {(isLoading || releaseData.releaseMd) && (
        <div className="project-page__tile">{isLoading ? <Loading /> : <MarkdownView markdown={releaseData.releaseMd} />}</div>
      )}
      <h2 className="project-page__tile-heading">Contributors</h2>
      <div className="project-page__tile">{isLoading ? <Loading /> : <Contributors contributors={contributors} />}</div>
      <h2 className="project-page__tile-heading">Check out our other awesome apps!</h2>
      <ProjectsList size="small" projects={mainConfig.projects.filter((p) => p.href !== project.href)} />
    </div>
  )
}
