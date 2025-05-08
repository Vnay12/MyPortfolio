import React, { useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'

export function DemoComputer2(props) {
  const { nodes, materials } = useGLTF('/models/acer_monitor.glb')

  // Use a video texture for the screen
  const videoTexture = useVideoTexture('/project/project1.mp4') // Replace with your video file path

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.screen}
        scale={[1, 1, 1]}
      >
        {/* Apply the video texture to the screen material */}
        <meshBasicMaterial map={videoTexture} />
      </mesh>
      <group position={[0, 0.564, -0.034]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['achter.onder.noise.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['achter.ribbel.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials['logo.coutout.smooth.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials['achter.onder.vlak.001']}
        />
        <group position={[0.042, -0.21, 0.001]} scale={[0.336, 0.308, 0.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials['metaal.']}
          />
          <group
            position={[0.649, 0.013, 0.093]}
            rotation={[-Math.PI, Math.PI / 2, 0]}
            scale={[76.201, 6.512, 5.977]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials['gold.plug']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials['plastic.hdmi']}
            />
          </group>
        </group>
        <group position={[-0.228, -0.21, 0.004]} scale={0.308}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials['metaal.']}
          />
          <group position={[0.205, 0.011, -0.001]} scale={0.008}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials['metal.hdmi']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials['plastic.hdmi']}
            />
          </group>
          <group position={[0.007, 0.011, -0.001]} scale={0.008}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials['metal.hdmi']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials['plastic.hdmi']}
            />
          </group>
          <group position={[-0.187, 0.011, -0.001]} scale={0.008}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={materials['metal.hdmi']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials['plastic.hdmi']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials['plastic.hdmi']}
            position={[-0.371, 0.017, 0.002]}
            scale={0.02}
          />
        </group>
        <group position={[0.604, -0.261, 0.023]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.noise_knoppen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_35.geometry}
            material={materials.grid_knop}
          />
        </group>
        <group position={[0, -0.378, -0.019]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_37.geometry}
            material={materials.noise_plastic_voet}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials['logo.coutout.smooth']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_39.geometry}
            material={materials.metaal_voetstuk}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_41.geometry}
            material={materials.metaal_voetstuk}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42.geometry}
            material={materials.noise_plastic_algemeen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44.geometry}
            material={materials.zwart_metaal}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials['noise_knoppen.001']}
          position={[0, -0.378, 0.034]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.noise_knoppen}
          position={[0, -0.378, 0.034]}
        />
      </group>
      <group position={[0.002, 0.558, 0.014]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials['rand.ribbel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.noise_plastic_voet}
        />
      </group>
      <group position={[0.002, 0.21, 0.026]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials['rand.voor.ribbel']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials['indictor.light']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.noise_plastic_algemeen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.acer_logo}
          position={[-0.002, 0.001, 0.004]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/acer_monitor.glb')
export default DemoComputer2;
