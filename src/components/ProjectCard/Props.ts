import Platform from "../../enums/Platform";

interface Props {
  className: string;
  title: string;
  href?: string;
  image: string;
  platform: Platform;
  fullHeight?: boolean;
}

export default Props;
