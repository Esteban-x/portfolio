import { useState } from 'react'

import { navLinks } from '../constants/index.js'
import { ShootingStars } from '../components/ui/shooting-stars.jsx'
import { StarsBackground } from '../components/ui/stars-background.jsx'
import { motion } from 'framer-motion'

const NavItems = ({ onClick = () => {} }) => (
  <ul className='nav-ul'>
    {navLinks.map(item => (
      <li key={item.id} className='nav-li'>
        <a href={item.href} className='nav-li_a' onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
)

const MobileNavItems = ({ onClick = () => {} }) => (
  <ul className='flex flex-col  justify-center -mt-40 items-center gap-10'>
    {navLinks.map(item => (
      <motion.li
        key={item.id}
        className='nav-li'
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2, // Durée du cycle complet
          repeat: Infinity, // Répétition infinie
          ease: 'easeInOut', // Transition fluide
        }}
      >
        <a href={item.href} className='text-3xl' onClick={onClick}>
          {item.name}
        </a>
      </motion.li>
    ))}
  </ul>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <a href='/' className='text-white-800 font-bold text-xl group'>
            <div className='flex flex-row justify-center items-center  gap-3'>
              <div className='rounded-full w-10 h-10 overflow-hidden group-hover:shadow-sm transition-shadow duration-100  group-hover:shadow-black '>
                <img
                  src='/assets/profile_pic.jpeg'
                  alt='photo de profile'
                  className='object-fill w-full h-full '
                />
              </div>

              <span className='group-hover:text-white transition-colors duration-100'>
                Esteban-x
              </span>
            </div>
          </a>
          <button
            onClick={toggleMenu}
            className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'
            aria-label='Toggle menu'
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt='toggle'
              className='w-6 h-6'
            />
          </button>

          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>

      <motion.div
        className='nav-sidebar'
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={
          isOpen
            ? {
                maxHeight: '100vh',
                opacity: 1,
              }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <nav className='p-5 h-screen flex items-center bg-black-100 justify-center'>
          <ShootingStars />
          <StarsBackground />
          <MobileNavItems onClick={closeMenu} />
        </nav>
      </motion.div>
    </header>
  )
}

export default Navbar
