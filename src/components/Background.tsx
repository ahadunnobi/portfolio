import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import './Background.css'

const Background = () => {
  return (
    <div className="bg-canvas-wrapper">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#c8f060" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[2, 0, -2]}>
              <sphereGeometry args={[1.5, 64, 64]} />
              <MeshDistortMaterial
                color="#111111"
                emissive="#c8f060"
                emissiveIntensity={0.15}
                roughness={0.1}
                distort={0.4}
                speed={2}
              />
            </mesh>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Background
