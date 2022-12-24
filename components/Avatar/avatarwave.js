import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { AvatarModel } from './Wave'
import Layout from '../layouts/article'
import { Container } from '@chakra-ui/react'

export default function AvatarWave() {
  return (
    <Layout>
      <Container> 
        <Canvas
          camera={{ position: [0.25, 0, 12.25], fov: 12 }}
          style={{
            backgroundColor: 'dark',
            width: '100%',
            height: '40vh'
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <AvatarModel position={[-0.3, -0.9, 0]} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </Container>
    </Layout>
  )
}
