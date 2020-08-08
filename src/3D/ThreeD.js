import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import Controls from './Controls'
import { OrbitControls } from 'drei'

import Sign from "./Sign"


const ThreeD = () => {
  return (
      <>
          <Canvas 
            pixelRatio={window.devicePixelRatio}
            camera={{ position: [7, 7, 1] }}
            gl={{ antialias: true }}
            onCreated={({ gl, scene }) => {
              gl.toneMapping = THREE.ACESFilmicToneMapping
              gl.outputEncoding = THREE.sRGBEncoding
              scene.background = new THREE.Color('#F8F8ED')
          }}>
          <OrbitControls
            autoRotate
            rotateSpeed={1}
          />
          <ambientLight intensity={0.2} />
          <directionalLight castShadow position={[10, 20, 20]} intensity={1} shadow-bias={-0.0005} />
          <directionalLight castShadow position={[-10, 5, -20]} angle={2} color="blue" intensity={5} />
          <directionalLight castShadow position={[-10, 20, 0]} angle={0} color="green" intensity={5} />
          <pointLight castShadow position={[-10, -10, -10]} color="white" rotation={[0, 0, 0]} intensity={10} />
          <Suspense fallback={<Dom center>Loading</Dom>}>
              <Sign />
          </Suspense>
          </Canvas>
      </>
    )
  }

export default (ThreeD);