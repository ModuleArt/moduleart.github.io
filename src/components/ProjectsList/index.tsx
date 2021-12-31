import { FunctionComponent } from "react";

import Props from "./Props";
import ProjectCard from "../ProjectCard";
import "./index.scss";

const ProjectsList: FunctionComponent<Props> = ({ projects }) => {
  return (
    <div className="projects-list">
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={ index }
            className="projects-list__project"
            title={project.title}
            href={project.href}
            image={project.image}
            platform={project.platform}
          />
        );
      })}
    </div>
  );
};

export default ProjectsList;
