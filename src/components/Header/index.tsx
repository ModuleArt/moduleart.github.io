import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import mainConfig from "../../config/Main";
import Link from "../Link";
import "./index.scss";

const Header: FunctionComponent = () => {
  const location = useLocation();

  return (
    <header className="header">
      <RouterLink to="/" className="header__logo">
        {location.pathname === "/" ? (
          <h1>{mainConfig.title}</h1>
        ) : (
          <span>{mainConfig.title}</span>
        )}
      </RouterLink>
      <ul className="header__links">
        <li className="header__link">
          <Link text="GitHub" href="https://github.com/ModuleArt" />
        </li>
        <li className="header__link">
          <Link text="About" href="/about" internal />
        </li>
      </ul>
    </header>
  );
};

export default Header;
