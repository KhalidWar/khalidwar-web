import React from "react";

export default function GltfModel(props) {
  return <primitive object={props.model.scene} position={props.position} />;
}
