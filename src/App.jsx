import { useEffect } from 'react'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/NavBar'
import Projects from './sections/Projects'
import { ShootingStars } from './components/ui/shooting-stars'
import { StarsBackground } from './components/ui/stars-background'

const App = () => {
  useEffect(() => {
    document.title = 'Esteban-x'
    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio / Esteban-x')
    } else {
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content = 'Portfolio / Esteban-x'
      document.head.appendChild(newMetaDescription)
    }
  }, [])

  return (
    <div className='relative'>
      <div className='absolute inset-0 z-10 w-full h-full'>
        <ShootingStars />
        <StarsBackground />
      </div>

      <main className='relative max-w-7xl mx-auto z-10'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
