import Platform from "../enums/Platform";

interface Project {
  title: string;
  shortDescription: string;
  href: string;
  appIcon: string;
  images: string[];
  githubPath: string;
  platform: Platform;
  os: string;
  roadmapUrl?: string;
  authorName: string;
  authorUrl: string;
}

export default Project;
