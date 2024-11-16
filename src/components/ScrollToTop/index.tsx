import { useEffect, FC, PropsWithChildren } from "react";
import { useLocation } from "react-router";

export const ScrollToTop: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};
