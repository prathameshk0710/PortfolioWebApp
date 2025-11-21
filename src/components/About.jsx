import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personalInfo } from '../constants/personalInfo'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const About = () => {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="about" ref={ref} className="section-container bg-gray-50 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card p-4 md:p-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary-700 dark:text-primary-400 font-display">
                Who I Am
              </h3>
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with a strong foundation in software engineering.
                I love creating innovative solutions and turning complex problems into simple, beautiful,
                and intuitive designs.
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card p-4 md:p-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary-700 dark:text-primary-400 font-display">
                My Journey
              </h3>
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                My journey as a software developer started with curiosity and a drive to build things that matter.
                Over the years, I've worked on various projects ranging from web applications to complex systems.
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in continuous learning and staying updated with the latest trends and best practices
                in software development.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {personalInfo.stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-primary-700 dark:text-primary-400 mb-3 font-display">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-300 font-semibold">{stat.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

