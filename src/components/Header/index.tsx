import "./index.scss";
import { FunctionComponent } from "react";
import Link from "../Link";

const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Module Art</h1>
      <ul className="header__links">
        <li className="header__link">
          <Link text="About" href="/about" internal />
        </li>
        <li className="header__link">
          <Link text="GitHub" href="https://github.com/ModuleArt" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
