import { FunctionComponent } from "react";

import "./index.scss";

const Loading: FunctionComponent = () => {
  return (
    <div className="loading">
      <div className="loading__lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
