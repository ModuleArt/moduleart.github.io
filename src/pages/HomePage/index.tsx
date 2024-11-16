import { FC } from "react";
import ProjectList from "../../components/ProjectsList";
import mainConfig from "../../config/Main";
import { PageMeta } from "@/components/PageMeta";

export const HomePage: FC = () => {
  return (
    <div className="home-page">
      <PageMeta title={mainConfig.title} />
      <ProjectList projects={mainConfig.projects} />
    </div>
  );
};
