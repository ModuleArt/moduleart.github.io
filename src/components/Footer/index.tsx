import { FunctionComponent } from "react";

import "./index.scss";

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <span className="footer__copyright">
        Copyright © {new Date().getFullYear()} Module Art. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
