import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experiences } from '../constants/experience'

const Experience = () => {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="experience" ref={ref} className="section-container bg-gray-50 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card p-4 md:p-8"
              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-700 dark:bg-primary-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaBriefcase className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-3 font-display">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-primary-700 dark:text-primary-400 font-semibold mb-4">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-base text-gray-700 dark:text-gray-300 mb-6">
                      <span className="flex items-center space-x-1">
                        <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </span>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 rounded-full border border-primary-200 dark:border-primary-800">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                      <span className="text-primary-700 dark:text-primary-400 mt-1.5 font-bold text-xl">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

