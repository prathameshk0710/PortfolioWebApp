import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../constants/projects'

const Projects = () => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.2 })

  return (
    <section id="projects" ref={ref} className="section-container bg-gray-50 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group p-4 md:p-8"
              >
                <div className="relative h-52 mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 dark:from-primary-500 dark:via-primary-400 dark:to-primary-600 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold font-display">
                    {project.title}
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-50 font-display">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-sm bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 rounded-full border border-primary-200 dark:border-primary-800 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-base text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 transition-colors font-semibold"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-base text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 transition-colors font-semibold"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

