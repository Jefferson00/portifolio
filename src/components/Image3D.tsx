import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Three } from "three/src/Three";

export default function Image3D() {
  /* const img = new Image();
  img.src = "/thumb.png";
  const colorMap = useLoader(TextureLoader, img.src); */
  let colorMap = [];
  const texture = new TextureLoader().load("/preview-test.jpg");
  /* const three = new Three();
  texture.magFilter = three.NearestFilter;
  texture.minFilter = three.LinearMipMapLinearFilter; */

  return (
    <Canvas
      style={{
        height: 500,
      }}
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 4, 4]} intensity={1} />
      <mesh rotation={[0, 10, 0]}>
        <boxBufferGeometry attach="geometry" args={[0.1, 6, 4]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Canvas>
  );
}
