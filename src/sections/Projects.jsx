'use client'

import { Canvas } from '@react-three/fiber'
import { myProjects } from '../constants'
import { useState, useRef } from 'react'
import { Center, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import Computer from '../components/Computer'
import { motion, useInView } from 'framer-motion'
import VantaBackground from '../components/ui/VantaNet'
import { useMediaQuery } from 'react-responsive'

const projectCount = myProjects.length

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const currentProject = myProjects[selectedProjectIndex]
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })
  const isMobile = useMediaQuery({ maxWidth: 1024 })
  console.log
  const lightPosition = isMobile ? [-0.3, -2, 0] : [-0.1, -1.9, 0]
  const lightScale = isMobile ? 2 : 1.6

  const handleNavigation = direction => {
    setSelectedProjectIndex(prevIndex => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
      }
    })
  }

  return (
    <motion.section
      className='c-space  my-20'
      id='projects'
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='flex flex-row items-center gap-5 ml-2'>
        <p className='head-text'>Mes projets </p>
      </div>

      <VantaBackground>
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 border bg-transparent border-black-300 w-full'>
          <motion.div
            className='flex flex-col justify-center gap-5 bg-transparent rounded-md relative sm:p-12 py-10 px-5  '
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className='flex flex-col gap-5 text-white-600 my-5'>
              <p className='text-white text-2xl-font-semibold animatedText'>
                {currentProject.title}
              </p>
              <p className='animatedText'>{currentProject.description}</p>
              <p className='animatedText'>{currentProject.subdesc}</p>
              <div className='flex items-center justify-between flex-wrap mt-5 gap-5'>
                <div className='flex items-center gap-3'>
                  {currentProject.tags.map((tag, index) => (
                    <div key={index} className='tech-logo'>
                      <img src={tag.path} alt={tag.name} />
                    </div>
                  ))}
                </div>
                <motion.a
                  href={currentProject.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  target='blank'
                  rel='noreferrer'
                  animate={{
                    x: [0, 3, 0], // Déplacement léger gauche-droite
                  }}
                  className='flex z-20 items-center gap-2 cursor-pointer text-md text-white group hover:text-blue-400'
                >
                  <p className='text-lg'>Lien vers le site</p>

                  <motion.img
                    src='/assets/arrow-white.png'
                    alt='arrow'
                    className='w-4 h-4 waving-hand'
                    animate={
                      isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }
                    }
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
              </div>
              <div className='flex justify-between items-center mt-7'>
                <div className='relative'>
                  <motion.div
                    className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0'
                    whileHover={{
                      opacity: 0.5,
                      scale: 1.5,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    style={{
                      zIndex: -1,
                      filter: 'blur(10px)',
                    }}
                  />
                  <motion.button
                    className='arrow-btn flex items-center justify-center rounded-full overflow-hidden'
                    onClick={() => handleNavigation('previous')}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src='/assets/left-arrow.png'
                      alt='left-arrow'
                      className='w-4 h-4 pointer-events-none'
                    />
                  </motion.button>
                </div>

                <div className='relative'>
                  <motion.div
                    className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0'
                    whileHover={{
                      opacity: 0.5,
                      scale: 1.5,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                    }}
                    style={{
                      zIndex: -1,
                      filter: 'blur(10px)',
                    }}
                  />
                  <motion.button
                    className='arrow-btn flex items-center justify-center rounded-full overflow-hidden'
                    onClick={() => handleNavigation('next')}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src='/assets/right-arrow.png'
                      alt='right-arrow'
                      className='w-4 h-4 pointer-events-none'
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          <div className='bg-transparent rounded-lg h-96 md:h-full '>
            <Canvas style={isMobile ? { pointerEvents: 'none' } : {}}>
              <ambientLight intensity={Math.PI / 2} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={lightScale}
                    position={lightPosition}
                    rotation={[0.2, -0, 0]}
                  >
                    <Computer texture={currentProject.texture} />

                    <directionalLight
                      position={[-10, 6, 22]}
                      color={'white'}
                      intensity={3}
                    />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls
                maxPolarAngle={Math.PI / 2}
                enableZoom={false}
                enabled={!isMobile}
              />
            </Canvas>
          </div>
        </div>
      </VantaBackground>
    </motion.section>
  )
}

export default Projects
