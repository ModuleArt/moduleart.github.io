import "./index.scss";
import { FunctionComponent } from "react";
import Props from "./Props";
import { Link as RouterLink } from "react-router-dom";

const Link: FunctionComponent<Props> = ({ text, href, internal = false }) => {
  if (internal) {
    return (
      <RouterLink className="link link--internal" to={href}>
        {text}
      </RouterLink>
    );
  } else {
    return (
      <a className="link" href={href}>
        {text}
      </a>
    );
  }
};

export default Link;
