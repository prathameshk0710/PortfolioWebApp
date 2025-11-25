import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personalInfo } from '../constants/personalInfo'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const { ref, isInView } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
      emailjs.send('service_a6g3t8a', 'template_hpo5seb',{
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'y3RuUPEghLyz-8wFW'
    ).then((result) => {
      // alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      alert('Sorry, something went wrong. Please try again later.');
    });
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: FaEnvelope, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FaPhone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FaMapMarkerAlt, text: personalInfo.location, href: null },
  ]

  return (
    <section id="contact" ref={ref} className="section-container bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-primary-700 dark:text-primary-400 drop-shadow-md">
          Get In Touch
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-50 font-display">
                Let's Connect
              </h3>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of
                your visions. Feel free to reach out to me through any of the following channels.
              </p>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary-700 dark:bg-primary-500 flex items-center justify-center shadow-lg">
                      <info.icon className="text-white text-xl" />
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 transition-colors font-medium"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-lg text-gray-700 dark:text-gray-300">{info.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
              {/* Social icons removed for a cleaner contact section */}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card p-4 md:p-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-50 font-display">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base md:text-lg font-display font-extrabold text-primary-700 dark:text-primary-300 mb-3 tracking-wide"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 text-xl font-display font-semibold rounded-lg border-2 border-primary-200 dark:border-primary-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-primary-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:border-primary-400 transition-all shadow-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 text-lg rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:border-primary-400 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-5 py-4 text-lg rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:border-primary-400 transition-all resize-none leading-relaxed"
                    placeholder="Your message here..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full min-w-[120px] xs:w-auto text-xl py-4 font-display font-bold tracking-wide mt-6"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

