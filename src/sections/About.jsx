'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Globe from 'react-globe.gl'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })
  const [countries, setCountries] = useState([])
  const isMobile = useMediaQuery({ maxWidth: 1024 })

  const handleCopy = () => {
    navigator.clipboard.writeText('esteprowork@gmail.com')
    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  useEffect(() => {
    fetch('/assets/countriesjson.geojson')
      .then(res => res.json())
      .then(data => setCountries(data.features))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const controls = globeRef.current.controls()
      if (controls) {
        controls.autoRotate = true
        controls.autoRotateSpeed = 3

        if (isMobile) {
          controls.enableZoom = false
          controls.enableRotate = false
          controls.enablePan = false
        } else {
          controls.enableZoom = false
          controls.enableRotate = true
          controls.enablePan = true
        }

        controls.update()
      }
    }, 100)

    return () => clearInterval(interval)
  }, [isMobile])

  const globeRef = useRef()

  return (
    <motion.section
      ref={sectionRef}
      className='c-space mt-32 my-20 overflow-hidden'
      id='about'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <motion.div
          className='col-span-1 xl:row-span-3'
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className='grid-container'>
            <img
              src='/assets/quisuisje.gif'
              className='w-full opacity-80 sm:h-[276px] h-fit object-contain'
              autoPlay
              loop
              muted
              playsInline
            />
            <div>
              <p className='grid-headtext'>Qui suis je ?</p>
              <p className='grid-subtext'>
                Avec 4 ans d&apos;expérience dans le web, je suis curieux de
                découvrir comment je peux vous aider et répondre à vos besoins
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='col-span-1 xl:row-span-3'
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className='grid-container'>
            <video
              src='/assets/techstack.mp4'
              className='w-full opacity-70 sm:h-[276px] h-fit object-contain'
              autoPlay
              loop
              muted
              playsInline
            />
            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>
                Je suis à l&apos;aise sur Next.js et React tout en restant
                ouvert à l&apos;exploration d&apos;autres technologies et
                langages
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='col-span-1 xl:row-span-4'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
                height={326}
                width={326}
                ref={globeRef}
                backgroundColor='rgba(0, 0, 0, 0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                polygonStrokeColor={() => '#1C1C21'}
                polygonCapColor={() => '#1C1C21'}
                polygonSideColor={() => '#8954F1'}
                atmosphereColor='#6D5383'
                atmosphereAltitude={0.4}
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-dark.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                polygonsData={countries}
                polygonAltitude={() => 0.05}
              />
            </div>
            <div>
              <p className='grid-headtext'>
                Flexible concernant les fuseaux horaires et lieux géographiques
              </p>
              <p className='grid-subtext'>
                Je réside à Lille, dans le nord de la France et suis disponible
                pour travailler à distance. Je parle couramment l&apos;anglais,
                ce qui me permet de collaborer aisément à l&apos;international,
                et j&apos;apprends actuellement le russe
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='xl:col-span-2 xl:row-span-3'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className='grid-container'>
            <div className='relative w-full sm:h-[276px] h-fit  overflow-hidden'>
              <img
                src='/assets/grid3.png'
                className='w-full  sm:h-[276px] h-fit object-cover'
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div>
              <p className='grid-headtext'>Ma passion pour le dev</p>
              <p className='grid-subtext'>
                J&apos;adore résoudre des problèmes et créer des choses grâce au
                code. La programmation n&apos;est pas seulement mon métier,
                c&apos;est ma passion. J&apos;aime explorer de nouvelles
                technologies et perfectionner mes compétences
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='xl:col-span-1 xl:row-span-2'
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className='grid-container'>
            <img
              src='assets/grid4.png'
              alt='grid-4'
              className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
            />
            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Email : </p>
              <div className='copy-container' onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt='copy'
                />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                  esteprowork@gmail.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
