import { Linkedin } from 'lucide-react'
import { Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <section className='c-space  py-10 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
      <div className='text-white-500 flex gap-2'>
        <p>Termes & Conditions</p>
        <p>|</p>
        <p>Politique de confidentialité</p>
      </div>
      <div className='flex gap-3'>
        <a
          href='https://www.linkedin.com/in/est%C3%A9ban-poumey-9098b516b/'
          className='social-icon group'
          target='blank'
        >
          <Linkedin className='group-hover:text-purple-500' />
        </a>
        <a
          href='https://x.com/Estebanx0x'
          className='social-icon group'
          target='blank'
        >
          <Twitter className='group-hover:text-purple-500' />
        </a>
      </div>
      <p className='text-white-500 p-3'>
        © 2024 Esteban-x. Tous droit réservé
      </p>
    </section>
  )
}

export default Footer
