import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MpearlHome } from "./MpearlHome";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("The page is missing its root element.");
}

createRoot(root).render(
  <StrictMode>
    <MpearlHome />
  </StrictMode>,
);
