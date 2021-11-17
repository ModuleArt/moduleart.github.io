import Header from "../Header";
import ProjectList from "../ProjectsList";
import Footer from "../Footer";
import { FunctionComponent } from "react";
import "./index.scss";
import MainConfig from "../../config/Main";

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />
      <ProjectList projects={MainConfig.projects} />
      <Footer />
    </div>
  );
};

export default App;
