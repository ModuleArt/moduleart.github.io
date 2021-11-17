import "./index.scss";
import { FunctionComponent } from "react";
import Props from "./Props";
import ProjectCard from "../ProjectCard";

const ProjectsList: FunctionComponent<Props> = ({ projects }) => {
  return (
    <div className="projects-list">
      {projects.map((project, index) => {
        return (
          <ProjectCard
            title={project.title}
            href={project.href}
            imageUrl={project.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default ProjectsList;
