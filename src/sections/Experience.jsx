'use client'

import { OrbitControls } from '@react-three/drei'
import { workExperiences } from '../constants'
import { Suspense, useRef } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import Developer from '../components/Developer'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useMediaQuery } from 'react-responsive'

const Experience = () => {
  const [animationName, setAnimationName] = useState('idle')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })
  const isMobile = useMediaQuery({ maxWidth: 1024 })

  return (
    <motion.section
      className='c-space my-20 '
      id='experiences'
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className='w-full text-white-600 '
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className='flex flex-row items-center gap-5 ml-2'>
          <p className='head-text'>Mon parcours </p>
        </div>

        <div className='work-container '>
          <motion.div
            className='work-canvas '
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <Canvas style={isMobile ? { pointerEvents: 'none' } : {}}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
                <directionalLight
                  position={[-650, 75, 5]}
                  color={'#8954F1'}
                  intensity={10}
                />
                <EffectComposer>
                  <Bloom
                    luminanceThreshold={0.1}
                    luminanceSmoothing={0.1}
                    intensity={0.1}
                  />
                </EffectComposer>
              </Suspense>
            </Canvas>
          </motion.div>

          <motion.div
            className='work-content bg-gradient-to-l from-black-200/20 via-transparent to-black-200/30'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className='sm:py-10 py-5 sm:px-5 px-2.5 '>
              {workExperiences.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName('idle')}
                  className='work-content_container group shadow-2xl shadow-black-200/5 '
                  initial={{ x: -50, opacity: 0 }}
                  animate={
                    isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  <div className='flex  flex-col h-full justify-start items-center py-2'>
                    <div className={`work-content_logo ${item.color}`}>
                      <img
                        className='w-full h-full object-contain rounded-md'
                        src={item.icon}
                        alt=''
                      />
                    </div>

                    <div className='work-content_bar' />
                  </div>

                  <div className='sm:p-5 px-2.5 py-5'>
                    <p className='font-bold text-white-800'>{item.name}</p>
                    <p className='text-sm mb-5'>
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className='group-hover:text-white transition-all ease-in-out duration-500'>
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Experience
