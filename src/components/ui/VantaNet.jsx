import { useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

const VantaBackground = ({
  children,

  fogColor = 0x000000,
  fogDensity = 0.01,
}) => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        color: 0x8954f1,
        backgroundColor: 0x010103,
        points: 15,
        maxDistance: 20,
        spacing: 20,
        showDots: true,
      })
    } else {
      null
    }

    // Add fog effect and light to the scene
    if (vantaEffect.current) {
      const scene = vantaEffect.current.scene
      const camera = vantaEffect.current.camera

      vantaEffect.current.points.forEach(point => {
        point.scale.set(2.5, 2.5, 2.5) // Increase size
      })

      // Add fog for opacity simulation
      scene.fog = new THREE.FogExp2(fogColor, fogDensity)
      camera.near = 0.1
      camera.far = 1000

      // Add a directional light from above
      const light = new THREE.DirectionalLight(0xffffff, 10) // White light
      light.position.set(0, 50, 0) // Position the light above the scene
      light.castShadow = true // Enable shadows for the light
      scene.add(light)
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [fogColor, fogDensity])

  return (
    <div ref={vantaRef} style={{ height: '100%', width: '100%' }}>
      {children}
    </div>
  )
}

export default VantaBackground
