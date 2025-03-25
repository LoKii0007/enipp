import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Model1 } from '../models/Model1'


const Model = () => {

  return (
    <>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
        <OrbitControls 
          minDistance={6.5}
          maxDistance={100}
        />
        <Model1 />
      </Canvas>
      
    </>
  )
}

export default Model