import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import MainConfig from "../../config/Main";
import Link from "../Link";
import "./index.scss";

const Header: FunctionComponent = () => {
  const location = useLocation();

  console.log(location);

  return (
    <header className="header">
      {location.pathname === "/" ? (
        <h1 className="header__logo">
          {MainConfig.title}
        </h1>
      ) : (
        <RouterLink to="/" className="header__logo header__logo--link">
          {MainConfig.title}
        </RouterLink>
      )}
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
