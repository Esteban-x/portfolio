import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        [0, -state.pointer.x / 10, 0],
        0.15,
        delta
      )
    }
  })

  return <group ref={groupRef}>{children}</group>
}

export default HeroCamera
