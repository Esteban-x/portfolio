'use client'

import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Desk from '../components/Desk'
import { Suspense, useRef } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import { motion, useInView } from 'framer-motion'
import { FlipWords } from '../components/ui/flip-words'
import Particles from '@tsparticles/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useMemo } from 'react'

const Hero = () => {
  const [particlesInit, setParticlesInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setParticlesInit(true)
    })
  }, [])

  const x = useControls('Desk', {
    positionX: { value: 0.1, min: -10, max: 10 },
    positionY: { value: 3.5, min: -10, max: 10 },
    positionZ: { value: -10, min: -10, max: 10 },
    rotationX: { value: 0.4, min: -10, max: 10 },
    rotationY: { value: 0, min: -10, max: 10 },
    rotationZ: { value: 0, min: -10, max: 10 },
    scale: { value: 0.3, min: 0.1, max: 10 },
  })

  const isMobile = useMediaQuery({ minWidth: 371, maxWidth: 760 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1300 })
  const isSmall = useMediaQuery({ maxWidth: 370 })
  const isHeightXs = useMediaQuery({ minHeight: 1, maxHeight: 620 })
  const isHeightSmall = useMediaQuery({ minHeight: 621, maxHeight: 758 })
  const isHeightMedium = useMediaQuery({ minHeight: 759, maxHeight: 932 })
  const isHeightMobile = useMediaQuery({ minHeight: 933, maxHeight: 1215 })
  const ipadPro = useMediaQuery({ minHeight: 1216, maxHeight: 1400 })
  const nestHubMax = useMediaQuery({ minHeight: 781, maxHeight: 897 })

  const sizes = calculateSizes(
    isSmall,
    isMobile,
    isTablet,
    isHeightMobile,
    isHeightSmall,
    isHeightMedium,
    isHeightXs,
    ipadPro,
    nestHubMax
  )

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: true },
      background: {
        color: {
          value: 'transparent',
        },
      },
      particles: {
        number: {
          value: 20,
          density: {
            enable: true,
          },
        },
        color: {
          value: '#8954F1',
        },
        shape: {
          type: 'circle',
        },
        move: {
          enable: true,
          speed: 1.5,
          random: false,
          straight: true,
          direction: 'none',
          outModes: { default: 'out' },
        },
        opacity: {
          value: 0.3,
          random: false,
        },
        size: {
          value: { min: 1, max: 7 },
          random: true,
        },
        links: {
          enable: true,
        },
        lineLinked: {
          enable: false,
        },
        position: {
          x: 50,
          y: 50,
        },
      },
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: true, mode: 'push' },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 4 },
        },
      },
    }),
    []
  )

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })
  const words = ['Fullstack', 'Frontend', 'Backend', 'React JS', 'Next JS']

  return (
    <section
      ref={sectionRef}
      className='min-h-screen w-full flex flex-col relative overflow-hidden'
      id='home'
    >
      <div className='absolute inset-0 mx-auto z-[-1]'>
        {particlesInit && (
          <Particles
            id='tsparticles'
            options={particlesOptions}
            className='w-full h-full'
          />
        )}
      </div>
      <motion.div
        className='w-full mx-auto flex flex-col z-10 sm:mt-36 mt-32 c-space gap-3'
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
          Bonjour, je suis Estéban <span className='waving-hand'>👋🏻</span>
        </p>
        <p className='hero_tag text-white-700'>
          Développeur <FlipWords words={words} />
        </p>
      </motion.div>

      <div className='w-full h-full absolute inset-0 '>
        <Leva hidden='true' className='hidden' />
        <Canvas className='w-full h-full' shadows>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <Desk
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                castShadow
                receiveShadow
              />
            </HeroCamera>
            <ambientLight intensity={0} />

            <directionalLight position={[10, -1, 20]} intensity={3} />
            <directionalLight position={[-10, 160, -40]} intensity={0.5} />

            <directionalLight
              position={[2, 20, 100]}
              color={'#8954F1'}
              intensity={1}
            />
            <directionalLight
              position={[12, 20, 100]}
              color={'#8954F1'}
              intensity={1}
            />
            <directionalLight
              position={[17, 25, 140]}
              color={'white'}
              intensity={0.3}
            />
            <directionalLight
              position={[17, 20, 100]}
              color={'#8954F1'}
              intensity={0.5}
            />
            <directionalLight position={[20, -46, 160]} intensity={1} />
            <directionalLight
              position={[-70, -10, 160]}
              color={'#8954F1'}
              intensity={1}
            />
          </Suspense>
        </Canvas>
      </div>

      <motion.div
        className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <a href='#about' className='w-fit'>
          <Button
            name='Télécharger mon CV'
            isBeam
            containerClass='sm:w-fit w-full shadow-md shadow-[#8954F1]/50 sm:min-w-96 border border-[#8954F1] hover:border hover:border-[#8954F1]'
          />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
