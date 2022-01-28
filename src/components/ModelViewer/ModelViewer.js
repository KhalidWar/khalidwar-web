import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import GltfModel from "./GltfModel";

import "./ModelViewer.css";

export default function ModelViewer() {
  const earthGltf = useLoader(GLTFLoader, "/GltfModel/scene.gltf");

  return (
    <div id="model">
      <Canvas className="canvas">
        <directionalLight
          color="white"
          distance={5}
          intensity={3}
          position={[0, 2, 0]}
        />
        <directionalLight
          distance={5}
          intensity={3}
          position={[0, 0, 2]}
          color="yellow"
        />
        <directionalLight
          distance={5}
          intensity={3}
          position={[0, 0, -2]}
          color="blue"
        />
        <directionalLight
          distance={5}
          intensity={3}
          position={[-2, 0, 0]}
          color="#0EEC82"
        />
        <directionalLight
          distance={5}
          intensity={3}
          position={[2, 0, 0]}
          color="#ff005b"
        />
        <OrbitControls
          enablePan={false}
          zoomSpeed={0.8}
          rotateSpeed={0.8}
          minDistance={0.234}
          maxDistance={4}
          autoRotate={true}
          autoRotateSpeed={0.8}
          target={earthGltf.target}
        />
        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />

          {/* Gltf Model */}
          <GltfModel model={earthGltf} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>

      <div className="bio">
        <IconButton
          color="inherit"
          onClick={() => {
            const anchor = document.querySelector("#about");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
