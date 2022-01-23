import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function GltfModel(props) {
  const earthGltf = useLoader(GLTFLoader, props.gltf);
  return <primitive object={earthGltf.scene} />;
}
