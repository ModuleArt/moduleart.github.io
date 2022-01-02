import { FunctionComponent } from "react";
import DocumentTitle from "react-document-title";

import ProjectList from "../../components/ProjectsList";
import mainConfig from "../../config/Main";

const HomePage: FunctionComponent = () => {
  return (
    <div className="home-page">
      <DocumentTitle title={mainConfig.title} />
      <ProjectList projects={mainConfig.projects} />
    </div>
  );
};

export default HomePage;
