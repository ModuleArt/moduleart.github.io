import "./index.scss";
import { FunctionComponent } from "react";
import Props from "./Props";

const ProjectCard: FunctionComponent<Props> = ({ title, href, imageUrl }) => {
  return (
    <div className="project-card">
      <h2 className="project-card__title">{title}</h2>
    </div>
  );
};

export default ProjectCard;
