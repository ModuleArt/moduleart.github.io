import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";

import MainConfig from "../../config/Main";
import Header from "../Header";
import Footer from "../Footer";
import HomePage from "../../pages/HomePage";
import ProjectPage from "../../pages/ProjectPage";
import NotFoundPage from "../../pages/NotFoundPage";
import "./index.scss";

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        {MainConfig.projects.map((project, projectIndex) => {
          return (
            <Route
              key={projectIndex}
              path="/quick-picture-viewer"
              element={<ProjectPage project={project} />}
            />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
