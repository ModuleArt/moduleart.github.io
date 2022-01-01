import { FunctionComponent } from "react";
import DocumentTitle from "react-document-title";

const NotFoundPage: FunctionComponent = () => {
  return (
    <div className="not-found-page">
      <DocumentTitle title="404">
        <h1>404</h1>
      </DocumentTitle>
    </div>
  );
};

export default NotFoundPage;
