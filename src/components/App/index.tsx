import Header from "../Header";
import ProjectList from "../ProjectsList";
import { FunctionComponent } from "react";
import "./index.scss";
import MainConfig from "../../config/Main";

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />
      <ProjectList projects={MainConfig.projects} />
    </div>
  );
};

export default App;
