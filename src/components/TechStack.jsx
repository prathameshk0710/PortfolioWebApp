import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { techCategories } from '../constants/techStack'

const TechStack = () => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.2 })

  return (
    <section id="tech-stack" ref={ref} className="section-container bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Tech Stack</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="card p-4 md:p-8"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400 font-display">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700"
                    >
                      <tech.icon className={`text-4xl mb-2 ${tech.color}`} />
                      <span className="text-base font-semibold text-gray-800 dark:text-gray-200 text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default TechStack

