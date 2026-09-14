import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Remove the browser's default 8px page margin.
document.documentElement.style.margin = "0";
document.documentElement.style.minHeight = "100%";
document.body.style.margin = "0";
document.body.style.minHeight = "100%";
document.body.style.width = "100%";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
