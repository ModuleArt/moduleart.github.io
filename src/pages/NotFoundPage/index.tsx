import { FunctionComponent } from "react";
import DocumentTitle from "react-document-title";

import "./index.scss";

const NotFoundPage: FunctionComponent = () => {
  return (
    <div className="not-found-page">
      <DocumentTitle title="404" />
      <h1 className="not-found-page__heading">404</h1>
      <h2 className="not-found-page__text">
        The page you’re looking
        <br />
        for can’t be found.
      </h2>
    </div>
  );
};

export default NotFoundPage;
