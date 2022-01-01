import { FunctionComponent } from "react";
import DocumentTitle from "react-document-title";

import Props from "./Props";
import ProjectCard from "../../components/ProjectCard";
import "./index.scss";

const ProjectPage: FunctionComponent<Props> = ({ project }) => {
  return (
    <div className="project-page">
      <DocumentTitle title={`${project.title} - ${project.shortDescription}`}>
        <ProjectCard
          className="projects-page__card"
          title={project.title}
          image={project.image}
          platform={project.platform}
          fullHeight
        />
      </DocumentTitle>
    </div>
  );
};

export default ProjectPage;
