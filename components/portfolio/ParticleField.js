'use client'
import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 2500 }) {
  const mesh = useRef()
  const light = useRef()

  const [positions, colors] = useMemo(() => {
    const p = new Float32Array(count * 3)
    const c = new Float32Array(count * 3)
    const cyan = new THREE.Color('#00E5FF')
    const purple = new THREE.Color('#7B61FF')
    const green = new THREE.Color('#00FFB3')
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      p[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta)
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      p[i * 3 + 2] = r * Math.cos(phi)
      const pick = Math.random()
      const col = pick < 0.5 ? cyan : pick < 0.85 ? purple : green
      c[i * 3 + 0] = col.r
      c[i * 3 + 1] = col.g
      c[i * 3 + 2] = col.b
    }
    return [p, c]
  }, [count])

  useFrame(({ clock, mouse }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime()
    mesh.current.rotation.y = t * 0.05 + mouse.x * 0.3
    mesh.current.rotation.x = mouse.y * 0.2
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Sphere() {
  const ref = useRef()
  useFrame(({ clock, mouse }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * 0.1 + mouse.y * 0.3
    ref.current.rotation.y = t * 0.15 + mouse.x * 0.3
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.2, 4]} />
      <meshStandardMaterial
        color="#00E5FF"
        emissive="#7B61FF"
        emissiveIntensity={0.4}
        roughness={0.35}
        metalness={0.9}
        wireframe
      />
    </mesh>
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#7B61FF" />
        <Suspense fallback={null}>
          <Sphere />
          <Particles count={2200} />
        </Suspense>
      </Canvas>
    </div>
  )
}
