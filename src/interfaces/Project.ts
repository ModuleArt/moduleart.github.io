import Platform from "../enums/Platform";

interface Project {
  title: string;
  href: string;
  image: string;
  githubUrl: string;
  platform: Platform;
}

export default Project;
