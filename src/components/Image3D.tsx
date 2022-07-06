import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Image3D() {
  /* const img = new Image();
  img.src = "/thumb.png";
  const colorMap = useLoader(TextureLoader, img.src); */
  let colorMap = [];
  const texture = new TextureLoader().load("/logo.svg");

  return (
    <Canvas
      style={{
        height: 500,
      }}
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <mesh rotation={[0, 10, 0]}>
        <boxBufferGeometry attach="geometry" args={[0.1, 3, 3]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Canvas>
  );
}
