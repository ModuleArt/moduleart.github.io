import { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";

import Props from "./Props";
import Link from "../Link";
import "./index.scss";

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
        <Link text={title} href={href} internal />
        <span className="project-card__platform"> for {platform}</span>
      </h2>
      <RouterLink className="project-card__image" to={href}>
        <img src={image} alt={title} />
      </RouterLink>
    </div>
  );
};

export default ProjectCard;
