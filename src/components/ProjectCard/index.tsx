import "./index.scss";
import { FunctionComponent } from "react";
import Props from "./Props";

const ProjectCard: FunctionComponent<Props> = ({
  className,
  title,
  href,
  image,
  platform,
}) => {
  return (
    <div className={"project-card " + className}>
      <h2 className="project-card__title">
        <a href={href}>
          {title}
          <span className="project-card__platform"> for {platform}</span>
        </a>
      </h2>
      <a className="project-card__image" href={href}>
        <img src={image} alt={title} />
      </a>
    </div>
  );
};

export default ProjectCard;
