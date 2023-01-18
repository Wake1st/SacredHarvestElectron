import * as React from "react";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <main>
      <div id="timeline" className="greater-border">
        <h1>Sacred Harvest</h1>
        <div id="timeline-items"></div>
      </div>

      <div id="current-decision" className="lesser-border hidden">
        <h2 id="decision-title">Title</h2>
        <div id="choices"></div>
      </div>
    </main>
  );
};

export default Main;
