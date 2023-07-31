import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalProvider } from "./content/context";
import { BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (ProcessingInstruction.env.NODE_ENV === "production") disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
