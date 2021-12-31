import { FunctionComponent } from "react";

import ProjectList from "../../components/ProjectsList";
import MainConfig from "../../config/Main";

const HomePage: FunctionComponent = () => {
  return (
    <div className="home-page">
      <ProjectList projects={MainConfig.projects} />
    </div>
  );
};

export default HomePage;
