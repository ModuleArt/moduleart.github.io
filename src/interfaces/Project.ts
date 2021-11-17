import Platform from "../enums/Platform";

interface Project {
  title: string;
  href: string;
  imageUrl: string;
  githubUrl: string;
  platform: Platform;
}

export default Project;
