import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

import "../ModelViewer.css";

export default function LoadingIndicator() {
  return (
    <div className="loading-indicator">
      <LinearProgress color="inherit" />
    </div>
  );
}
