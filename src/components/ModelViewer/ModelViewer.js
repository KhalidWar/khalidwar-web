import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import "./ModelViewer.css";

export default function ModelViewer() {
  const earthGltf = useLoader(GLTFLoader, "/GltfModel/scene.gltf");

  return (
    <section>
      <div id="model-viewer" className="container">
        <Canvas>
          <pointLight />
          <ambientLight intensity={0.8} />
          <OrbitControls />

          <Suspense fallback={null}>
            <mesh position={[0, 0, 0]} object={earthGltf}>
              <primitive object={earthGltf.scene} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
