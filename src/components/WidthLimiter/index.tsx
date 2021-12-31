import { FunctionComponent } from "react";
import { createSlot } from "react-slotify";
import cn from "classnames";

import Props from "./Props";
import "./index.scss";

export const WidthLimiterSlot = createSlot();

const WidthLimiter: FunctionComponent<Props> = ({
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
      <WidthLimiterSlot.Renderer childs={children} />
    </div>
  );
};

export default WidthLimiter;
