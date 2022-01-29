import React, { useState, Suspense } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import GltfModel from "./components/GltfModel";
import LoadingIndicator from "./components/LoadingIndicator";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";

import "./ModelViewer.css";

export default function ModelViewer() {
  const [showControlls, setShowControlls] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [colors, setColors] = useState({
    red: true,
    blue: true,
    green: true,
    yellow: true,
    white: false,
  });

  const handleColorChange = (event) => {
    const { name, checked } = event.target;
    setColors({
      ...colors,
      [name]: checked,
    });
  };

  const handleAutoRotate = (event) => {
    setAutoRotate(event.target.checked);
  };

  const handleControlChange = (event) => {
    setShowControlls(event.target.checked);
  };

  function goToAboutSection() {
    const anchor = document.querySelector("#about");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div id="model">
      <Suspense fallback={<LoadingIndicator />}>
        <GltfModel
          red={colors.red}
          blue={colors.blue}
          green={colors.green}
          yellow={colors.yellow}
          white={colors.white}
          autoRotate={autoRotate}
        />
      </Suspense>
      <div className="controls">
        {showControlls && (
          <FormControlLabel
            label="Red"
            labelPlacement="end"
            control={
              <Switch
                color="primary"
                name="red"
                checked={colors.red}
                onChange={handleColorChange}
              />
            }
          />
        )}

        {showControlls && (
          <FormControlLabel
            label="Blue"
            labelPlacement="end"
            control={
              <Switch
                color="primary"
                name="blue"
                checked={colors.blue}
                onChange={handleColorChange}
              />
            }
          />
        )}
        {showControlls && (
          <FormControlLabel
            label="Green"
            labelPlacement="end"
            control={
              <Switch
                color="primary"
                name="green"
                checked={colors.green}
                onChange={handleColorChange}
              />
            }
          />
        )}
        {showControlls && (
          <FormControlLabel
            label="Yellow"
            labelPlacement="end"
            control={
              <Switch
                color="primary"
                name="yellow"
                checked={colors.yellow}
                onChange={handleColorChange}
              />
            }
          />
        )}
        {showControlls && (
          <FormControlLabel
            label="White"
            labelPlacement="end"
            control={
              <Switch
                color="primary"
                name="white"
                checked={colors.white}
                onChange={handleColorChange}
              />
            }
          />
        )}

        {showControlls && (
          <FormControlLabel
            label="Rotate"
            labelPlacement="end"
            control={
              <Switch
                color="primary"
                checked={autoRotate}
                onChange={handleAutoRotate}
              />
            }
          />
        )}

        <FormControlLabel
          label="Controls"
          labelPlacement="end"
          control={
            <Switch
              color="primary"
              checked={showControlls}
              onChange={handleControlChange}
            />
          }
        />
      </div>

      <div className="icon">
        <IconButton color="inherit" onClick={goToAboutSection}>
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
