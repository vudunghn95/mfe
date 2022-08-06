import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Call mount in development
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}
// Export mount running through container

export { mount };
