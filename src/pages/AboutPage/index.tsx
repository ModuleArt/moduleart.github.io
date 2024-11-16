import { FC } from "react";
import "./index.scss";
import { PageMeta } from "@/components/PageMeta";

export const AboutPage: FC = () => {
  return (
    <div className="about-page">
      <PageMeta title="About ModuleArt" />

      <h1 className="not-found-page__heading">About us</h1>
    </div>
  );
};
