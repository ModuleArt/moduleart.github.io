import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { Snow } from "react-snow-particle";

import mainConfig from "../../config/Main";
import Header from "../Header";
import Footer from "../Footer";
import HomePage from "../../pages/HomePage";
import ProjectPage from "../../pages/ProjectPage";
import NotFoundPage from "../../pages/NotFoundPage";
import AboutPage from "../../pages/AboutPage";
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
              <Route path="/about" element={<AboutPage />} />
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
      <div className="app__effects">
        <Snow size="8px" />
      </div>
    </div>
  );
};

export default App;
