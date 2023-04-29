
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Header from "./Header"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Header />
    <App />
    
  </StrictMode>
);