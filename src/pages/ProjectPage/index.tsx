import { FunctionComponent } from "react";

import Props from "./Props";
import ProjectCard from "../../components/ProjectCard";
import "./index.scss";

const ProjectPage: FunctionComponent<Props> = ({ project }) => {
  return (
    <div className="project-page">
      <ProjectCard
        className="projects-page__card"
        title={project.title}
        image={project.image}
        platform={project.platform}
      />
    </div>
  );
};

export default ProjectPage;
