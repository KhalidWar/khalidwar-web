import React, { Suspense } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import GltfModel from "./components/GltfModel";
import LoadingIndicator from "./components/LoadingIndicator";

import "./ModelViewer.css";

export default function ModelViewer() {
  function goToAboutSection() {
    const anchor = document.querySelector("#about");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div id="model">
      <Suspense fallback={<LoadingIndicator />}>
        <GltfModel />
      </Suspense>

      <div className="icon">
        <IconButton color="inherit" onClick={goToAboutSection}>
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
