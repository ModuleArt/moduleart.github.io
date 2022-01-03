import { FunctionComponent, useEffect, useState } from "react";
import DocumentTitle from "react-document-title";
import axios from "axios";

import Platform from "../../enums/Platform";
import { formatBytes } from "../../helpers/dataHelper";
import Props from "./Props";
import Slider from "../../components/Slider";
import Loading from "../../components/Loading";
import Link from "../../components/Link";
import MarkdownView from "../../components/MarkdownView";
import Contributors from "../../components/Contributors";
import "./index.scss";

import MicrosoftImage from "../../assets/images/icons/microsoft.svg";
import AppleImage from "../../assets/images/icons/apple.svg";
import GitHubImage from "../../assets/images/icons/github.svg";
import TrelloImage from "../../assets/images/icons/trello.svg";

const ProjectPage: FunctionComponent<Props> = ({ project }) => {
  const [isLoading, setLoading] = useState(true);
  const [releaseData, setReleaseData] = useState({
    version: "",
    size: "",
    downloadUrl: "",
    releaseMd: "",
    releaseDate: "",
  });
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    Promise.all([
      axios
        .get(
          `https://api.github.com/repos/${project.githubPath}/releases/latest`
        )
        .then(({ data }) => {
          const releaseData = {
            version: data.tag_name,
            size: formatBytes(data.assets[0].size),
            downloadUrl: data.assets[0].browser_download_url,
            releaseMd: data.body,
            releaseDate: new Date(data.published_at).toLocaleDateString(
              "en-US",
              {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }
            ),
          };

          if (releaseData.version[0] !== "v") {
            releaseData.version = `v${releaseData.version}`;
          }

          setReleaseData(releaseData);
        }),
      axios
        .get(`https://api.github.com/repos/${project.githubPath}/contributors`)
        .then(({ data }) => {
          setContributors(
            data.map((c: any) => {
              return {
                login: c.login,
                profileUrl: c.html_url,
                avatarUrl: c.avatar_url,
              };
            })
          );
        }),
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="project-page">
      <DocumentTitle title={`${project.title} - ${project.shortDescription}`} />
      <div className="project-page__head">
        <img
          className="project-page__app-icon"
          src={project.appIcon}
          alt={project.title}
        />
        <h1 className="project-page__title">{project.title}</h1>
        <h2 className="project-page__description">
          {project.shortDescription}.<br />
          Developed by{" "}
          <Link
            className="project-page__author"
            href={project.authorUrl}
            text={project.authorName}
          />
        </h2>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="project-page__buttons">
            <div className="project-page__button-holder">
              <a
                className="project-page__button project-page__button--primary"
                href={releaseData.downloadUrl}
              >
                <img
                  src={
                    project.platform === Platform.win
                      ? MicrosoftImage
                      : AppleImage
                  }
                  alt="Download"
                />
                <span className="project-page__button-text">Download</span>
                <span className="project-page__button-version">
                  {releaseData.version}
                </span>
              </a>
              <span className="project-page__button-label">
                {project.os}, {releaseData.size}
              </span>
            </div>
            {project.githubPath && (
              <div className="project-page__button-holder">
                <a
                  className="project-page__button"
                  href={`https://github.com/${project.githubPath}`}
                >
                  <img src={GitHubImage} alt="GitHub" />
                  <span className="project-page__button-text">GitHub</span>
                </a>
              </div>
            )}
            {project.roadmapUrl && (
              <div className="project-page__button-holder">
                <a className="project-page__button" href={project.roadmapUrl}>
                  <img src={TrelloImage} alt="Trello" />
                  <span className="project-page__button-text">Roadmap</span>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
      <Slider images={project.images} />
      <h2 className="project-page__tile-heading">What's new:</h2>
      {!isLoading && (
        <h4 className="project-page__release-name">
          <Link
            href={`https://github.com/${project.githubPath}/releases/tag/${releaseData.version}`}
            text={`Release ${releaseData.version}`}
          />
          <span className="project-page__release-date">
            {` - ${releaseData.releaseDate}`}
          </span>
        </h4>
      )}
      <div className="project-page__tile">
        {isLoading ? (
          <Loading />
        ) : (
          <MarkdownView markdown={releaseData.releaseMd} />
        )}
      </div>
      <h2 className="project-page__tile-heading">Contributors:</h2>
      <div className="project-page__tile">
        {isLoading ? <Loading /> : <Contributors contributors={contributors} />}
      </div>
    </div>
  );
};

export default ProjectPage;
