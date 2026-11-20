import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { isPageId } from "./lib/mpearl-pages";
import { MpearlSite } from "./MpearlSite";
import "./styles.css";

const root = document.getElementById("root");
const page = root?.dataset["page"];

if (!root || !isPageId(page)) {
  throw new Error("The page is missing its Mpearl entry point.");
}

createRoot(root).render(
  <StrictMode>
    <MpearlSite page={page} />
  </StrictMode>,
);
