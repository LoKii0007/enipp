import React, { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function DiscoModel(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/disco-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Start animations if any exist
    if (animations.length > 0) {
      // Play the first animation by default
      const animationName = Object.keys(actions)[0]
      if (animationName) {
        actions[animationName].reset().play()
      }
    }
  }, [actions, animations])

  return (
    <group ref={group} {...props} dispose={null} scale={0.3}>
      <group name="Scene">
        <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={materials['Procedural chunky glitter']} position={[0, 10.735, 0]} scale={0} />
        <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={materials['Procedural chunky glitter']} position={[0, 10.6, 0]} scale={0} />
        <mesh name="Text" geometry={nodes.Text.geometry} material={materials['Material.004']} position={[0.091, -2.974, 0.14]} scale={0} />
        <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials['Procedural chunky glitter']} position={[0, -10.179, 0]} scale={0} />
        <mesh name="Disco_Ball_Wireframe" geometry={nodes.Disco_Ball_Wireframe.geometry} material={materials['Material.001']} position={[0.08, 5.465, -0.023]} scale={0} />
        <mesh name="Disco_Ball_Wireframe003" geometry={nodes.Disco_Ball_Wireframe003.geometry} material={materials['Material.001']} position={[1.252, 5.672, 1.63]} scale={0} />
        <mesh name="Disco_Ball_Wireframe004" geometry={nodes.Disco_Ball_Wireframe004.geometry} material={materials['Material.001']} position={[-0.77, 5.394, 1.829]} scale={0} />
        <mesh name="Disco_Ball_Wireframe005" geometry={nodes.Disco_Ball_Wireframe005.geometry} material={materials['Material.001']} position={[0.551, 5.561, -1.872]} scale={0} />
        <mesh name="NEEDLE__skybox" geometry={nodes.NEEDLE__skybox.geometry} material={materials['skybox.006']} position={[-25.073, 0, 0]} scale={0} />
        <mesh name="NEEDLE__skybox001" geometry={nodes.NEEDLE__skybox001.geometry} material={materials['skybox.006']} position={[-25.073, 0, 0]} scale={0} />
        <mesh name="NEEDLE__skybox002" geometry={nodes.NEEDLE__skybox002.geometry} material={materials['skybox.006']} position={[-25.073, 0, 0]} scale={0} />
        <group name="Base_Railing_Part_1001" position={[-0.065, 11.013, -0.041]} scale={0}>
          <mesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={materials.Material} />
          <mesh name="Cylinder011_1" geometry={nodes.Cylinder011_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.001']} position={[-1.572, 5.433, 0.802]} scale={0} />
        <group name="Base_Railing_Part_1002" position={[-0.065, -10.923, -0.041]} scale={0}>
          <mesh name="Cylinder017" geometry={nodes.Cylinder017.geometry} material={materials.Material} />
          <mesh name="Cylinder017_1" geometry={nodes.Cylinder017_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="Main_Ball_Wireframe002" geometry={nodes.Main_Ball_Wireframe002.geometry} material={materials['Material.006']} rotation={[0, 0, -Math.PI]} scale={0.013} />
        <mesh name="Main_Ball001" geometry={nodes.Main_Ball001.geometry} material={materials['Material.008']} scale={0.013} />
        <mesh name="Below_wave_1" geometry={nodes.Below_wave_1.geometry} material={materials['Material.010']} position={[-0.618, -1.005, -13.574]} rotation={[Math.PI / 2, 0, 0]} scale={0.065} />
        <mesh name="Below_wave_2" geometry={nodes.Below_wave_2.geometry} material={materials['Material.010']} position={[-0.618, -1.005, -13.574]} rotation={[Math.PI / 2, 0, 0]} scale={10.999} />
        <mesh name="Below_wave_3" geometry={nodes.Below_wave_3.geometry} material={materials['Material.010']} position={[-0.618, -1.005, -13.574]} rotation={[Math.PI / 2, 0, 0]} scale={0.065} />
        <mesh name="Rays_1003" geometry={nodes.Rays_1003.geometry} material={materials['Material.005']} position={[-8.884, -10.281, 5.494]} scale={0} />
        <mesh name="Rays_1001" geometry={nodes.Rays_1001.geometry} material={materials['Material.005']} position={[9.196, -10.152, 5.416]} scale={0} />
        <mesh name="Rays_1002" geometry={nodes.Rays_1002.geometry} material={materials['Material.005']} position={[0.044, -10.152, -10.609]} scale={0} />
        <mesh name="Rays_1004" geometry={nodes.Rays_1004.geometry} material={materials['Material.005']} position={[9.078, -9.455, -5.425]} scale={0} />
        <mesh name="Rays_1005" geometry={nodes.Rays_1005.geometry} material={materials['Material.005']} position={[-8.985, -10.438, -5.756]} scale={0} />
        <mesh name="Rays_1006" geometry={nodes.Rays_1006.geometry} material={materials['Material.005']} position={[-8.884, 10.168, 5.494]} scale={0} />
        <mesh name="Rays_1007" geometry={nodes.Rays_1007.geometry} material={materials['Material.005']} position={[9.196, 10.297, 5.416]} scale={0} />
        <mesh name="Rays_1008" geometry={nodes.Rays_1008.geometry} material={materials['Material.005']} position={[0.044, 10.297, -10.609]} scale={0} />
        <mesh name="Rays_1009" geometry={nodes.Rays_1009.geometry} material={materials['Material.005']} position={[9.078, 10.994, -5.425]} scale={0} />
        <mesh name="Rays_1010" geometry={nodes.Rays_1010.geometry} material={materials['Material.005']} position={[-8.985, 10.01, -5.756]} scale={0} />
        <mesh name="low" geometry={nodes.low.geometry} material={materials['Material.003']} position={[4.446, 7.734, 0]} scale={0} />
        <mesh name="low001" geometry={nodes.low001.geometry} material={materials['Material.003']} position={[-0.034, 7.734, -4.446]} scale={0} />
        <mesh name="low002" geometry={nodes.low002.geometry} material={materials['Material.003']} position={[-4.74, 7.734, -0.125]} scale={0} />
        <mesh name="low003" geometry={nodes.low003.geometry} material={materials['Material.003']} position={[-0.013, 7.08, 4.399]} scale={0} />
        <mesh name="low004" geometry={nodes.low004.geometry} material={materials['Material.003']} position={[3.415, 7.829, 2.756]} scale={0} />
        <mesh name="low005" geometry={nodes.low005.geometry} material={materials['Material.003']} position={[3.131, 7.936, -2.823]} scale={0} />
        <mesh name="low006" geometry={nodes.low006.geometry} material={materials['Material.003']} position={[-2.807, 7.875, -3.264]} scale={0} />
        <mesh name="low007" geometry={nodes.low007.geometry} material={materials['Material.003']} position={[-3.05, 7.854, 3.249]} scale={0} />
      </group>
    </group>
  )
} 

useGLTF.preload('/models/disco-transformed.glb')
