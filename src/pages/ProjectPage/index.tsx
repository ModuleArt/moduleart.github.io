import { FunctionComponent } from "react";
import DocumentTitle from "react-document-title";

import Props from "./Props";
import Slider from "../../components/Slider";
import "./index.scss";

const ProjectPage: FunctionComponent<Props> = ({ project }) => {
  return (
    <div className="project-page">
      <DocumentTitle title={`${project.title} - ${project.shortDescription}`}>
        <Slider images={project.images} />
      </DocumentTitle>
    </div>
  );
};

export default ProjectPage;
