import { motion } from 'framer-motion'

const SocialIcon = ({ icon: Icon, href, label, className = '' }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className={`text-3xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${className}`}
      aria-label={label}
    >
      <Icon />
    </motion.a>
  )
}

export default SocialIcon

