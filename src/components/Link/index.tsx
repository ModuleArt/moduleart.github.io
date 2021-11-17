import "./index.scss";
import { FunctionComponent } from "react";
import Props from "./Props";

const Link: FunctionComponent<Props> = ({ text, href }) => {
  return (
    <a className="link" href={href}>
      {text}
    </a>
  );
};

export default Link;
