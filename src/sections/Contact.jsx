'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion, useInView } from 'framer-motion'
import { BsChatSquareDotsFill } from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { BiSolidErrorCircle } from 'react-icons/bi'

const Contact = () => {
  const formRef = useRef()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { threshold: 0.2 })
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        'service_k76n3on',
        'template_mid5fxh',
        {
          from_name: form.name || '',
          to_name: 'Estéban',
          from_email: form.email || '',
          reply_to: form.email || '',
          to_email: 'esteprowork@gmail.com',
          message: form.message || '',
        },
        '1Z_SWPImJwjoDK7It'
      )
      setLoading(false)
      toast('Message envoyé avec succés !', {
        icon: <RiVerifiedBadgeFill className='text-purple-500' />,
      })
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      setLoading(false)
      console.error(error.message)
      toast("Erreur lors de l'envoi du message", {
        icon: <BiSolidErrorCircle className='text-purple-500' />,
      })
    }
  }

  return (
    <motion.section className='c-space my-20 relative' ref={containerRef}>
      <motion.div
        className='flex items-center justify-center  flex-col rounded-2xl bg-gradient-to-br from-black-100 to-black-200 shadow-lg relative z-10 border border-black-300'
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className='contact-container p-10 sm:p-20'
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='text-white-800 flex flex-row text-4xl gap-5 gradient-text'>
            <BsChatSquareDotsFill />{' '}
            <span className='font-medium'>Me contacter</span>
          </div>
          <p className='text-lg text-white-600 mt-3'>
            Si vous avez des questions ou souhaitez en savoir plus,
            n&apos;hésitez pas à me contacter.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-7'
            id='contact'
          >
            {['name', 'email', 'message'].map((field, index) => (
              <motion.label
                key={field}
                className='space-y-3'
                initial={{ x: -50, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                }
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <span className='field-label'>
                  {field === 'name'
                    ? 'Full Name'
                    : field === 'email'
                      ? 'Email'
                      : 'Votre message'}
                </span>

                {field !== 'message' ? (
                  <motion.input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className='field-input'
                    placeholder={
                      field === 'name' ? 'Elon Musk' : 'elonmusk@gmail.com'
                    }
                    whileFocus={{ scale: 1.05 }}
                  />
                ) : (
                  <motion.textarea
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className='field-input'
                    placeholder='Bonjour, tu as le profil parfait pour intégrer Space X...'
                    rows={5}
                    whileFocus={{ scale: 1.05 }}
                  />
                )}
              </motion.label>
            ))}
            <motion.button
              className='field-btn fume-effect flex items-center justify-center gap-2 group'
              type='submit'
              disabled={loading}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {loading ? (
                <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
              ) : (
                <div className='font-medium flex  flex-row gap-3 items-center'>
                  Envoyer
                  <FaPaperPlane
                    size={16}
                    className='text-sm mt-0.5 transition-transform duration-500  group-hover:text-[#8954F1]'
                  />
                </div>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
      <ToastContainer
        position='bottom-right'
        theme='dark'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </motion.section>
  )
}

export default Contact
