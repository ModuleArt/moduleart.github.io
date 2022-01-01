import { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import cn from "classnames";

import Props from "./Props";
import "./index.scss";

const Link: FunctionComponent<Props> = ({
  className = "",
  text,
  href,
  internal = false,
}) => {
  if (internal) {
    return (
      <RouterLink
        className={cn({
          link: true,
          "link--internal": true,
          [className]: true,
        })}
        to={href}
      >
        <span className="link__text">{text}</span>
      </RouterLink>
    );
  } else {
    return (
      <a
        className={cn({
          link: true,
          [className]: true,
        })}
        href={href}
      >
        <span className="link__text">{text}</span>
      </a>
    );
  }
};

export default Link;
