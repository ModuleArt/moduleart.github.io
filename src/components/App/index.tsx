import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";

import mainConfig from "../../config/Main";
import Header from "../Header";
import Footer from "../Footer";
import HomePage from "../../pages/HomePage";
import ProjectPage from "../../pages/ProjectPage";
import NotFoundPage from "../../pages/NotFoundPage";
import WidthLimiter, { WidthLimiterSlot } from "../../components/WidthLimiter";
import "./index.scss";

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <WidthLimiter className="app__container">
        <WidthLimiterSlot>
          <Header />
          <div className="app__page">
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<HomePage />} />
              {mainConfig.projects.map((project, projectIndex) => {
                return (
                  <Route
                    key={projectIndex}
                    path={project.href}
                    element={<ProjectPage project={project} />}
                  />
                );
              })}
            </Routes>
          </div>
          <Footer />
        </WidthLimiterSlot>
      </WidthLimiter>
    </div>
  );
};

export default App;
