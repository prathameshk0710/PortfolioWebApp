import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { socialLinks } from '../constants/socialLinks'
import { personalInfo } from '../constants/personalInfo'
import Avatar from './Avatar'

const Hero = () => {
  return (
    <section id="home" className="pt-10 sm:pt-14 lg:pt-12 min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 border-b border-primary-100 dark:border-gray-800">
      <div className="section-container text-center p-2 sm:p-4 md:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 p-[2px] shadow-xl"
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-3xl sm:text-4xl font-bold text-primary-700 dark:text-primary-400 shadow-inner">
              <Avatar/>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-6 font-display tracking-tight break-words"
          >
            <span className="text-gray-900 dark:text-gray-50">{personalInfo.name.split(' ')[0]}</span>{' '}
            <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 dark:from-primary-400 dark:via-primary-300 dark:to-primary-500 bg-clip-text text-transparent">
              {personalInfo.name.split(' ')[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-200 mb-5 sm:mb-6 font-semibold font-display"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-row justify-center items-center gap-3 sm:gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-white min-w-[120px]"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary min-w-[120px]"
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
            className="mt-16"
          >
            <a href="#about" className="inline-block">
              <HiArrowDown className="text-4xl text-primary-700 dark:text-primary-400 animate-bounce drop-shadow-lg" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

