import "@riotjs/hot-reload";
import { component } from "riot";
import App from "./app.riot";
import registerGlobalComponents from "./register-global-components";

// register
registerGlobalComponents();

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

// mount the root tag
component(App)(document.getElementById("root"));
