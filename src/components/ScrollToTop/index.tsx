import { useEffect, FunctionComponent } from "react";
import { useLocation } from "react-router";

const ScrollToTop: FunctionComponent = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
