import Platform from "../enums/Platform";

interface Project {
  title: string;
  shortDescription: string;
  href: string;
  images: string[];
  githubUrl: string;
  platform: Platform;
}

export default Project;
