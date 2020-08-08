/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/Sign.gltf', draco('/draco-gltf/'))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.lambert3SG}
        geometry={nodes.opensign_turbo001.geometry}
        position={[-1.07, 0.65, -1.95]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
    </group>
  )
}
