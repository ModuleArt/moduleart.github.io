import { FunctionComponent } from "react";

import Props from "./Props";
import "./index.scss";
import Link from "../Link";

const Contributors: FunctionComponent<Props> = ({ contributors }) => {
  return (
    <div className="contributors">
      <ul className="contributors__list">
        {contributors.map((c, cIndex) => {
          return (
            <li className="contributors__item" key={cIndex}>
              <img
                className="contributors__item-image"
                src={c.avatarUrl}
                alt={c.login}
              />
              <Link
                href={c.profileUrl}
                className="contributors__item-link"
                text={c.login}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contributors;
