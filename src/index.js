import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";

import App from "./app";

const Index = () => {
  return (
    <Fragment>
      <App />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
