import React, { useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import useTheme from '@/hooks/ThemeContex'

export function Model1(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/model1-transformed.glb')
  const { actions } = useAnimations(animations, group)
  const { isMobile, isTablet } = useTheme()

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
    <group ref={group} {...props} dispose={null} scale={isMobile ? 0.2 : isTablet ? 0.2 : 0.3} >
      <group name="Scene">
        <mesh name="Middle_Heart" geometry={nodes.Middle_Heart.geometry} material={materials['Middle Heart Texture 1']} position={[0, 0, -1.05]} />
        <mesh name="Middle_Small_Heart" geometry={nodes.Middle_Small_Heart.geometry} material={materials['Middle Small Heart Texture 1']} position={[0.015, -0.588, -1.05]} />
        <mesh name="New_Heart_1001" geometry={nodes.New_Heart_1001.geometry} material={materials['Material.002']} position={[-4.612, 1.111, 1.39]} />
        <mesh name="New_Heart_2001" geometry={nodes.New_Heart_2001.geometry} material={materials['Material.002']} position={[4.388, 1.111, 1.762]} />
        <mesh name="New_Heart_4001" geometry={nodes.New_Heart_4001.geometry} material={materials['Material.002']} position={[2.108, -4.058, 0.736]} />
        <mesh name="New_Heart_3001" geometry={nodes.New_Heart_3001.geometry} material={materials['Material.002']} position={[-1.892, -4.058, 1.973]} />
        <mesh name="Heart_Emitter_Cureve" geometry={nodes.Heart_Emitter_Cureve.geometry} material={materials['Heart Emitter Texture 1']} position={[0.037, 0.648, -3.745]} />
        <mesh name="Inner_Ring_1_Heart" geometry={nodes.Inner_Ring_1_Heart.geometry} material={materials['Inner Heart Rings Texture 1 ']} position={[0.037, -0.353, -1.058]} />
        <mesh name="Inner_Ring_2_Heart" geometry={nodes.Inner_Ring_2_Heart.geometry} material={materials['Inner Heart Rings Texture 1 ']} position={[0.037, -0.21, -0.91]} />
        <mesh name="Twinkle_Star001" geometry={nodes.Twinkle_Star001.geometry} material={materials['Twinke Star']} position={[0.427, -5.265, 0.3]} />
        <mesh name="Twinkle_Star002" geometry={nodes.Twinkle_Star002.geometry} material={materials['Twinke Star']} position={[-3.793, -2.641, 0.241]} />
        <mesh name="Twinkle_Star003" geometry={nodes.Twinkle_Star003.geometry} material={materials['Twinke Star']} position={[5.798, 2.149, 0.256]} />
        <mesh name="Twinkle_Star004" geometry={nodes.Twinkle_Star004.geometry} material={materials['Twinke Star']} position={[3.709, -2.792, 0.3]} />
        <mesh name="Twinkle_Star005" geometry={nodes.Twinkle_Star005.geometry} material={materials['Twinke Star']} position={[-3.901, 2.558, 0.24]} />
        <mesh name="Twinkle_Star006" geometry={nodes.Twinkle_Star006.geometry} material={materials['Twinke Star']} position={[-0.244, 2.061, 0.315]} />
        <mesh name="Twinkle_Star007" geometry={nodes.Twinkle_Star007.geometry} material={materials['Twinke Star']} position={[2.437, 2.879, 0.152]} />
        <mesh name="particle000" geometry={nodes.particle000.geometry} material={materials['Heart Particles Textures 1']} position={[1.559, 4.048, -1.971]} />
        <mesh name="particle001" geometry={nodes.particle001.geometry} material={materials['Heart Particles Textures 1']} position={[3.244, -2.68, 6.069]} />
        <mesh name="particle002" geometry={nodes.particle002.geometry} material={materials['Heart Particles Textures 1']} position={[-2.482, 0.226, 10.372]} />
        <mesh name="particle003" geometry={nodes.particle003.geometry} material={materials['Heart Particles Textures 1']} position={[3.811, 0.287, 10.226]} />
        <mesh name="particle004" geometry={nodes.particle004.geometry} material={materials['Heart Particles Textures 1']} position={[0.749, 6.478, 11.009]} />
        <mesh name="particle005" geometry={nodes.particle005.geometry} material={materials['Heart Particles Textures 1']} position={[4.746, 1.656, 12.393]} />
        <mesh name="particle006" geometry={nodes.particle006.geometry} material={materials['Heart Particles Textures 1']} position={[8.299, -3.106, 6.546]} />
        <mesh name="particle007" geometry={nodes.particle007.geometry} material={materials['Heart Particles Textures 1']} position={[-10.413, 2.53, 10.091]} />
        <mesh name="particle008" geometry={nodes.particle008.geometry} material={materials['Heart Particles Textures 1']} position={[-0.256, -0.748, 9.926]} />
        <mesh name="particle009" geometry={nodes.particle009.geometry} material={materials['Heart Particles Textures 1']} position={[0.064, -5.333, 13.233]} />
        <mesh name="particle010" geometry={nodes.particle010.geometry} material={materials['Heart Particles Textures 1']} position={[-3.724, 0.573, 8.533]} />
        <mesh name="particle011" geometry={nodes.particle011.geometry} material={materials['Heart Particles Textures 1']} position={[0.078, 4.494, 6.324]} />
        <mesh name="particle012" geometry={nodes.particle012.geometry} material={materials['Heart Particles Textures 1']} position={[-7.507, -3.925, 6.322]} />
        <mesh name="particle013" geometry={nodes.particle013.geometry} material={materials['Heart Particles Textures 1']} position={[3.321, -9.083, 10.481]} />
        <mesh name="particle014" geometry={nodes.particle014.geometry} material={materials['Heart Particles Textures 1']} position={[-3.582, 0.771, 10.277]} />
        <mesh name="particle015" geometry={nodes.particle015.geometry} material={materials['Heart Particles Textures 1']} position={[3.598, -7.908, 6.924]} />
        <mesh name="particle016" geometry={nodes.particle016.geometry} material={materials['Heart Particles Textures 1']} position={[-3.765, -4.643, 13.378]} />
        <mesh name="particle017" geometry={nodes.particle017.geometry} material={materials['Heart Particles Textures 1']} position={[2.034, 7.804, 8.048]} />
        <mesh name="particle018" geometry={nodes.particle018.geometry} material={materials['Heart Particles Textures 1']} position={[3.869, 1.808, 12.474]} />
        <mesh name="particle019" geometry={nodes.particle019.geometry} material={materials['Heart Particles Textures 1']} position={[0.617, 1.528, 6.019]} />
        <mesh name="particle020" geometry={nodes.particle020.geometry} material={materials['Heart Particles Textures 1']} position={[3.691, 1.037, 7.704]} />
        <mesh name="particle021" geometry={nodes.particle021.geometry} material={materials['Heart Particles Textures 1']} position={[-7.692, 6.116, 7.014]} />
        <mesh name="particle022" geometry={nodes.particle022.geometry} material={materials['Heart Particles Textures 1']} position={[2.426, 0.119, 8.26]} />
        <mesh name="particle023" geometry={nodes.particle023.geometry} material={materials['Heart Particles Textures 1']} position={[-10.089, -1.697, 8.535]} />
        <mesh name="particle024" geometry={nodes.particle024.geometry} material={materials['Heart Particles Textures 1']} position={[-3.242, 1.476, 13.37]} />
        <mesh name="particle025" geometry={nodes.particle025.geometry} material={materials['Heart Particles Textures 1']} position={[3.792, 0.825, 8.443]} />
        <mesh name="particle026" geometry={nodes.particle026.geometry} material={materials['Heart Particles Textures 1']} position={[0.738, -3.183, 13.281]} />
        <mesh name="particle027" geometry={nodes.particle027.geometry} material={materials['Heart Particles Textures 1']} position={[9.849, 2.877, 6.552]} />
        <mesh name="particle028" geometry={nodes.particle028.geometry} material={materials['Heart Particles Textures 1']} position={[2.553, 8.03, 10.281]} />
        <mesh name="particle029" geometry={nodes.particle029.geometry} material={materials['Heart Particles Textures 1']} position={[-3.8, 1.389, 7.442]} />
        <mesh name="particle030" geometry={nodes.particle030.geometry} material={materials['Heart Particles Textures 1']} position={[-9.844, -0.498, 6.959]} />
        <mesh name="particle031" geometry={nodes.particle031.geometry} material={materials['Heart Particles Textures 1']} position={[5.252, -0.526, 5.662]} />
        <mesh name="particle032" geometry={nodes.particle032.geometry} material={materials['Heart Particles Textures 1']} position={[-3.435, 0.635, 10.881]} />
        <mesh name="particle033" geometry={nodes.particle033.geometry} material={materials['Heart Particles Textures 1']} position={[-3.265, 1.532, 9.222]} />
        <mesh name="particle034" geometry={nodes.particle034.geometry} material={materials['Heart Particles Textures 1']} position={[-1.335, -3.456, 8.64]} />
        <mesh name="particle035" geometry={nodes.particle035.geometry} material={materials['Heart Particles Textures 1']} position={[2.705, -10.008, 8.774]} />
        <mesh name="particle036" geometry={nodes.particle036.geometry} material={materials['Heart Particles Textures 1']} position={[3.326, 1.518, 13.171]} />
        <mesh name="particle037" geometry={nodes.particle037.geometry} material={materials['Heart Particles Textures 1']} position={[-5.644, 2.27, 6.168]} />
        <mesh name="particle038" geometry={nodes.particle038.geometry} material={materials['Heart Particles Textures 1']} position={[3.942, -5.735, 6.338]} />
        <mesh name="particle039" geometry={nodes.particle039.geometry} material={materials['Heart Particles Textures 1']} position={[-6.123, -5.259, 6.256]} />
        <mesh name="particle040" geometry={nodes.particle040.geometry} material={materials['Heart Particles Textures 1']} position={[3.553, -4.918, 13.661]} />
        <mesh name="particle041" geometry={nodes.particle041.geometry} material={materials['Heart Particles Textures 1']} position={[5.029, 5.842, 6.094]} />
        <mesh name="particle042" geometry={nodes.particle042.geometry} material={materials['Heart Particles Textures 1']} position={[-0.087, -1.192, 9.536]} />
        <mesh name="particle043" geometry={nodes.particle043.geometry} material={materials['Heart Particles Textures 1']} position={[3.842, -2.115, 6.071]} />
        <mesh name="particle044" geometry={nodes.particle044.geometry} material={materials['Heart Particles Textures 1']} position={[-2.678, -1.318, 13.375]} />
        <mesh name="particle045" geometry={nodes.particle045.geometry} material={materials['Heart Particles Textures 1']} position={[2.919, -0.808, 12.982]} />
        <mesh name="particle046" geometry={nodes.particle046.geometry} material={materials['Heart Particles Textures 1']} position={[0.627, 1.474, 5.828]} />
        <mesh name="particle047" geometry={nodes.particle047.geometry} material={materials['Heart Particles Textures 1']} position={[-0.07, 4.342, 6.278]} />
        <mesh name="particle048" geometry={nodes.particle048.geometry} material={materials['Heart Particles Textures 1']} position={[4.889, -7.077, 7.212]} />
        <mesh name="particle049" geometry={nodes.particle049.geometry} material={materials['Heart Particles Textures 1']} position={[0.445, 6.635, 10.098]} />
        <mesh name="particle050" geometry={nodes.particle050.geometry} material={materials['Heart Particles Textures 1']} position={[1.241, -3.019, 11.015]} />
        <mesh name="particle051" geometry={nodes.particle051.geometry} material={materials['Heart Particles Textures 1']} position={[-8.433, -3.251, 7.247]} />
        <mesh name="particle052" geometry={nodes.particle052.geometry} material={materials['Heart Particles Textures 1']} position={[-10.434, -1.254, 11.014]} />
        <mesh name="particle053" geometry={nodes.particle053.geometry} material={materials['Heart Particles Textures 1']} position={[3.195, 5.941, 6.107]} />
        <mesh name="particle054" geometry={nodes.particle054.geometry} material={materials['Heart Particles Textures 1']} position={[-0.733, -0.872, 10.217]} />
        <mesh name="particle055" geometry={nodes.particle055.geometry} material={materials['Heart Particles Textures 1']} position={[-2.012, 2.692, 6.163]} />
        <mesh name="particle056" geometry={nodes.particle056.geometry} material={materials['Heart Particles Textures 1']} position={[2.69, -6.755, 5.873]} />
        <mesh name="particle057" geometry={nodes.particle057.geometry} material={materials['Heart Particles Textures 1']} position={[-3.682, 0.076, 12.616]} />
        <mesh name="particle058" geometry={nodes.particle058.geometry} material={materials['Heart Particles Textures 1']} position={[3.423, -9.197, 10.373]} />
        <mesh name="particle059" geometry={nodes.particle059.geometry} material={materials['Heart Particles Textures 1']} position={[6.629, -2.955, 5.721]} />
        <mesh name="particle060" geometry={nodes.particle060.geometry} material={materials['Heart Particles Textures 1']} position={[0.914, -2.676, 12.756]} />
        <mesh name="particle061" geometry={nodes.particle061.geometry} material={materials['Heart Particles Textures 1']} position={[-2.328, 7.824, 10.322]} />
        <mesh name="particle062" geometry={nodes.particle062.geometry} material={materials['Heart Particles Textures 1']} position={[-4.452, 1.668, 13.29]} />
        <mesh name="particle063" geometry={nodes.particle063.geometry} material={materials['Heart Particles Textures 1']} position={[0.915, -2.677, 12.911]} />
        <mesh name="particle064" geometry={nodes.particle064.geometry} material={materials['Heart Particles Textures 1']} position={[1.948, -0.251, 8.523]} />
        <mesh name="particle065" geometry={nodes.particle065.geometry} material={materials['Heart Particles Textures 1']} position={[3.046, 0.622, 7.989]} />
        <mesh name="particle066" geometry={nodes.particle066.geometry} material={materials['Heart Particles Textures 1']} position={[6.573, 6.571, 6.289]} />
        <mesh name="particle067" geometry={nodes.particle067.geometry} material={materials['Heart Particles Textures 1']} position={[5.975, 1.674, 6.266]} />
        <mesh name="particle068" geometry={nodes.particle068.geometry} material={materials['Heart Particles Textures 1']} position={[9.885, -1.837, 7.897]} />
        <mesh name="particle069" geometry={nodes.particle069.geometry} material={materials['Heart Particles Textures 1']} position={[5.568, -6.005, 6.355]} />
        <mesh name="particle070" geometry={nodes.particle070.geometry} material={materials['Heart Particles Textures 1']} position={[-0.054, -5.455, 5.998]} />
        <mesh name="particle071" geometry={nodes.particle071.geometry} material={materials['Heart Particles Textures 1']} position={[0.831, -3.285, 12.495]} />
        <mesh name="particle072" geometry={nodes.particle072.geometry} material={materials['Heart Particles Textures 1']} position={[-9.632, -0.526, 6.673]} />
        <mesh name="particle073" geometry={nodes.particle073.geometry} material={materials['Heart Particles Textures 1']} position={[-5.053, 4.889, 12.572]} />
        <mesh name="particle074" geometry={nodes.particle074.geometry} material={materials['Heart Particles Textures 1']} position={[2.452, -9.663, 7.477]} />
        <mesh name="particle075" geometry={nodes.particle075.geometry} material={materials['Heart Particles Textures 1']} position={[1.145, -4.993, 11.001]} />
        <mesh name="particle076" geometry={nodes.particle076.geometry} material={materials['Heart Particles Textures 1']} position={[-7.692, 1.372, 11.311]} />
        <mesh name="particle077" geometry={nodes.particle077.geometry} material={materials['Heart Particles Textures 1']} position={[-2.446, 2.037, 10.127]} />
        <mesh name="particle078" geometry={nodes.particle078.geometry} material={materials['Heart Particles Textures 1']} position={[-0.053, 0.161, 5.215]} />
        <mesh name="particle079" geometry={nodes.particle079.geometry} material={materials['Heart Particles Textures 1']} position={[-6.124, 0.847, 4.023]} />
        <mesh name="particle080" geometry={nodes.particle080.geometry} material={materials['Heart Particles Textures 1']} position={[-5.58, -3.515, 3.753]} />
        <mesh name="particle081" geometry={nodes.particle081.geometry} material={materials['Heart Particles Textures 1']} position={[-0.325, 4.859, 3.918]} />
        <mesh name="particle082" geometry={nodes.particle082.geometry} material={materials['Heart Particles Textures 1']} position={[2.292, -5.773, 8.17]} />
        <mesh name="particle083" geometry={nodes.particle083.geometry} material={materials['Heart Particles Textures 1']} position={[-6.051, -2.781, 2.957]} />
        <mesh name="particle084" geometry={nodes.particle084.geometry} material={materials['Heart Particles Textures 1']} position={[-3.674, -1.544, 6.597]} />
        <mesh name="particle085" geometry={nodes.particle085.geometry} material={materials['Heart Particles Textures 1']} position={[5.389, -2.755, 6.429]} />
        <mesh name="particle086" geometry={nodes.particle086.geometry} material={materials['Heart Particles Textures 1']} position={[0.473, 1.517, 5.522]} />
        <mesh name="particle087" geometry={nodes.particle087.geometry} material={materials['Heart Particles Textures 1']} position={[-4.273, -0.396, 3.634]} />
        <mesh name="particle088" geometry={nodes.particle088.geometry} material={materials['Heart Particles Textures 1']} position={[2.163, -7.788, 3.776]} />
        <mesh name="particle089" geometry={nodes.particle089.geometry} material={materials['Heart Particles Textures 1']} position={[-3.243, -2.366, 1.96]} />
        <mesh name="particle090" geometry={nodes.particle090.geometry} material={materials['Heart Particles Textures 1']} position={[7.862, -0.802, 1.295]} />
        <mesh name="particle091" geometry={nodes.particle091.geometry} material={materials['Heart Particles Textures 1']} position={[5.696, 2.329, 2.679]} />
        <mesh name="particle092" geometry={nodes.particle092.geometry} material={materials['Heart Particles Textures 1']} position={[7.456, 0.311, 0.48]} />
        <mesh name="particle093" geometry={nodes.particle093.geometry} material={materials['Heart Particles Textures 1']} position={[6.162, 0.628, 2.118]} />
        <mesh name="particle094" geometry={nodes.particle094.geometry} material={materials['Heart Particles Textures 1']} position={[5.361, -3.8, 1.151]} />
        <mesh name="particle095" geometry={nodes.particle095.geometry} material={materials['Heart Particles Textures 1']} position={[-6.1, -1.764, -0.324]} />
        <mesh name="particle096" geometry={nodes.particle096.geometry} material={materials['Heart Particles Textures 1']} position={[-6.864, 3.692, -0.541]} />
        <mesh name="particle097" geometry={nodes.particle097.geometry} material={materials['Heart Particles Textures 1']} position={[-6.614, -0.482, 0.114]} />
        <mesh name="particle098" geometry={nodes.particle098.geometry} material={materials['Heart Particles Textures 1']} position={[-2.671, 3.946, -0.383]} />
        <mesh name="particle099" geometry={nodes.particle099.geometry} material={materials['Heart Particles Textures 1']} position={[4.577, -3.581, -1.42]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/model1-transformed.glb')
