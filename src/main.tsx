import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
// import "./index.css";
// import "./styles/style.css";
import App from "./components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
