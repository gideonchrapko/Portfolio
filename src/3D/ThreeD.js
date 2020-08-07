import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import { withRouter } from "react-router-dom";
import Controls from './Controls'
// import Environment from './Environment'

import Sign from "./Sign"


const ThreeD = () => {
  return (
      <>
          <Canvas 
            concurrent
            // noEvents={active}s
            pixelRatio={window.devicePixelRatio}
            camera={{ position: [7, 7, 1] }}
            gl={{ antialias: true }}
            onCreated={({ gl, scene }) => {
              gl.toneMapping = THREE.ACESFilmicToneMapping
              gl.outputEncoding = THREE.sRGBEncoding
              // scene.background = new THREE.WebGLRenderer( { alpha: #F8F8EC } )
              scene.background = new THREE.Color("#F8F8EC")
              
              // scene.background = new THREE.Color("0x000000, 0")
              //scene.background.convertSRGBToLinear()
          }}>
          <Controls />
          <Suspense fallback={<Dom center>Loading</Dom>}>
            {/* <Environment /> */}
              <Sign />
          </Suspense>
          </Canvas>
      </>
    )
  }

export default withRouter(ThreeD);