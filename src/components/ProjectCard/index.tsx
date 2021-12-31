import { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import cn from "classnames";

import Props from "./Props";
import Link from "../Link";
import "./index.scss";

const ProjectCard: FunctionComponent<Props> = ({
  className,
  title,
  href = null,
  image,
  platform,
}) => {
  return (
    <div
      className={cn({
        "project-card": true,
        [className]: true,
      })}
    >
      {href ? (
        <>
          <h2 className="project-card__title">
            <Link
              className="project-card__text"
              text={title}
              href={href}
              internal
            />
            <span className="project-card__platform"> for {platform}</span>
          </h2>
          <RouterLink
            className="project-card__image project-card__image--clickable"
            to={href}
          >
            <img src={image} alt={title} />
          </RouterLink>
        </>
      ) : (
        <>
          <h1 className="project-card__title">
            <span className="project-card__text">{title}</span>
            <span className="project-card__platform"> for {platform}</span>
          </h1>
          <div className="project-card__image">
            <img src={image} alt={title} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
