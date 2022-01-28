import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import WhiteLights from "./WhiteLights";

import "../ModelViewer.css";

export default function GltfModel(props) {
  const earthGltf = useLoader(GLTFLoader, "/GltfModel/scene.gltf");

  return (
    <Canvas className="canvas">
      <primitive object={earthGltf.scene} position={[0, 0, 0]} />

      <OrbitControls
        enablePan={false}
        zoomSpeed={0.8}
        rotateSpeed={0.8}
        minDistance={0.234}
        maxDistance={4}
        autoRotate={props.autoRotate}
        autoRotateSpeed={0.8}
        target={earthGltf.target}
      />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      <WhiteLights white={props.white} />

      <directionalLight
        color="yellow"
        distance={5}
        intensity={props.yellow ? 3 : 0}
        position={[0, 0, 2]}
      />
      <directionalLight
        color="blue"
        distance={5}
        intensity={props.blue ? 3 : 0}
        position={[-2, 0, 0]}
      />
      <directionalLight
        color="#0EEC82"
        distance={5}
        intensity={props.green ? 3 : 0}
        position={[0, 0, -2]}
      />
      <directionalLight
        color="#ff005b"
        distance={5}
        intensity={props.red ? 3 : 0}
        position={[2, 0, 0]}
      />
    </Canvas>
  );
}
