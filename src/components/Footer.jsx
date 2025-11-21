import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { socialLinks } from '../constants/socialLinks'
import { personalInfo } from '../constants/personalInfo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 dark:bg-black text-gray-200 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-500 dark:from-primary-300 dark:to-primary-400 bg-clip-text text-transparent font-display">
              {personalInfo.name}
            </h3>
            <p className="text-base md:text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating amazing digital experiences.
            </p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 text-gray-100 font-display">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-base text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-base text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors font-medium">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 text-gray-100 font-display">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center">
          <p className="text-base md:text-lg text-gray-300 dark:text-gray-500 flex items-center justify-center space-x-2">
            <span>© {currentYear} Designed & Developed by Prathamesh Kondawale.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

