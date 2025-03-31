import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model1 } from "../models/Model1";

const Model = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
        {!isMobile && (
          <OrbitControls
            minDistance={6.5}
            maxDistance={100}
            enableZoom={false}
          />
        )}

        <Model1 />
      </Canvas>
    </>
  );
};

export default Model;
