interface Contributor {
  login: string;
  profileUrl: string;
  avatarUrl: string;
}

interface Props {
  contributors: Contributor[];
}

export default Props;
