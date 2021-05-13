import React from "react";
import { render } from "react-dom";
import App from "./App";
import ContextProvider from "./SocketContext";
import "./styles.css";

render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
