import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import "../ModelViewer.css";

export default function GltfModel(props) {
  const earthGltf = useLoader(GLTFLoader, "/GltfModel/scene.gltf");

  return (
    <Canvas className="canvas">
      <primitive object={earthGltf.scene} position={[0, 0, 0]} />

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
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </Canvas>
  );
}
