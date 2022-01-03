import { FunctionComponent } from "react";
import DocumentTitle from "react-document-title";

import "./index.scss";

const AboutPage: FunctionComponent = () => {
  return (
    <div className="about-page">
      <DocumentTitle title="404" />
      <h1 className="not-found-page__heading">About us</h1>
    </div>
  );
};

export default AboutPage;
