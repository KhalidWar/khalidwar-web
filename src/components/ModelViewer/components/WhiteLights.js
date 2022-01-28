import React from "react";

export default function WhiteLights(props) {
  const target = props.target;
  const distance = 3;
  const intensity = props.white ? 1 : 0;

  return (
    <>
      <directionalLight
        color="white"
        target={target}
        distance={distance}
        intensity={intensity}
        position={[2, 0, 0]}
      />
      <directionalLight
        color="white"
        target={target}
        distance={distance}
        intensity={intensity}
        position={[-2, 0, 0]}
      />
      <directionalLight
        color="white"
        target={target}
        distance={distance}
        intensity={intensity}
        position={[0, 2, 0]}
      />
      <directionalLight
        color="white"
        target={target}
        distance={distance}
        intensity={intensity}
        position={[0, -2, 0]}
      />
      <directionalLight
        color="white"
        target={target}
        distance={distance}
        intensity={intensity}
        position={[0, 0, 2]}
      />
      <directionalLight
        color="white"
        target={target}
        distance={distance}
        intensity={intensity}
        position={[0, 0, -2]}
      />
    </>
  );
}
