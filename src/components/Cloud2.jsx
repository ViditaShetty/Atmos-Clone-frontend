/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Html, useGLTF } from "@react-three/drei";
import React from "react";

export function Cloud2({ opacity, ...props }) {
  const { nodes, materials } = useGLTF("./models/cloud/cloud_22.glb");
  console.log(nodes)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.secondballcloud001.geometry}>
        <meshStandardMaterial
          {...materials["lambert2SG.001"]}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/cloud/cloud_22.glb");
