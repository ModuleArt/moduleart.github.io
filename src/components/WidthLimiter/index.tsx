import { FC, PropsWithChildren } from "react";
import cn from "classnames";
import Props from "./Props";
import "./index.scss";

export const WidthLimiter: FC<PropsWithChildren<Props>> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={cn({
        "width-limiter": true,
        [className]: true,
      })}
    >
      {children}
    </div>
  );
};
