import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { education } from '../constants/education'

const Education = () => {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="education" ref={ref} className="section-container bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card relative p-4 md:p-8 pl-20 md:pl-24"
              >
                <div className="absolute left-0 top-6 ml-2 md:ml-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-primary-700 via-primary-400 to-primary-500`}>
                    <FaGraduationCap className="text-white text-2xl drop-shadow" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-3 font-display">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-primary-700 dark:text-primary-400 font-semibold mb-3">
                      {edu.field}
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 rounded-full font-semibold border border-primary-200 dark:border-primary-800">
                      {edu.year}
                    </span>
                  </div>
                </div>
                <p className="text-lg text-gray-800 dark:text-gray-200 mb-3 leading-relaxed">{edu.description}</p>
                <p className="text-base text-gray-700 dark:text-gray-300 font-semibold">{edu.gpa}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Education

