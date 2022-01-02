import { FunctionComponent } from "react";
import Showdown from "react-showdown";

import Props from "./Props";
import "./index.scss";

const MarkdownView: FunctionComponent<Props> = ({ markdown }) => {
  return (
    <div className="markdown-view">
      <Showdown markdown={markdown} options={{ tables: true, emoji: true }} />
    </div>
  );
};

export default MarkdownView;
