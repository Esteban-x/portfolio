import { Linkedin } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Footer = () => {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { threshold: 0.2 })
  return (
    <motion.section
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='c-space py-5 sm:py-10 border-t justify-center border-black-300 flex  items-center flex-wrap gap-5'
    >
      <div className='text-white-500 flex justify-center flex-wrap gap-2'>
        <p>Termes & Conditions</p>
        <p>|</p>
        <p>Politique de confidentialité</p>
      </div>
      <div className='flex items-center mx-auto justify-center gap-3'>
        <motion.a
          href='https://www.linkedin.com/in/est%C3%A9ban-poumey-9098b516b/'
          className='social-icon group'
          target='blank'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <Linkedin className='group-hover:text-[#8563c8]' />
        </motion.a>
        <motion.a
          href='https://x.com/Estebanx0x'
          className='social-icon group'
          target='blank'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <Twitter className='group-hover:text-[#8563c8]' />
        </motion.a>
      </div>
      <p className='text-white-500 p-3'>
        © 2024 Esteban-x. Tous droit réservé
      </p>
    </motion.section>
  )
}

export default Footer
