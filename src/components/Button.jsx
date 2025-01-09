'use client'

import { motion } from 'framer-motion'

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <motion.button
      className={`btn relative overflow-hidden flex items-center  gap-4 ${containerClass}`}
      whileHover={{
        scale: 1.02,
        rotate: 0.5,
      }}
      transition={{
        duration: 0.1,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0'
        initial={{ opacity: 0, scale: 1 }}
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
      ></motion.div>

      <span className='relative flex items-center z-10 pointer-events-none gap-4'>
        {isBeam && (
          <motion.svg
            width='30'
            height='30'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='url(#gradient)'
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            className={'-mt-1'}
          >
            <defs>
              <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#8B5DFF' />
                <stop offset='100%' stopColor='#00BFFF' />
              </linearGradient>
            </defs>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 16v-8m0 0L8 12m4-4 4 4m4 8H4'
            />
          </motion.svg>
        )}
        {name}
      </span>
    </motion.button>
  )
}

export default Button
