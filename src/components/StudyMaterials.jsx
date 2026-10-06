import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaArrowLeft, FaBookOpen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { studyMaterials } from '../constants/studyMaterials'

const StudyMaterials = () => {
  const [activeTab, setActiveTab] = useState(studyMaterials[0]?.id || '')
  const [darkMode, setDarkMode] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    const savedTheme = localStorage.getItem('theme')
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const activeSubject = studyMaterials.find((s) => s.id === activeTab)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="w-20 flex justify-start">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              <FaArrowLeft className="text-sm" />
              <span className="hidden sm:inline">Back</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent font-display">
            <FaBookOpen className="text-primary-600 dark:text-primary-400" />
            <span>Study Materials</span>
          </div>

          <div className="w-20 flex justify-end">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Subject Tabs */}
      <div className="sticky top-16 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar gap-1 py-3">
            {studyMaterials.map((subject) => {
              const Icon = subject.icon
              const isActive = activeTab === subject.id
              return (
                <button
                  key={subject.id}
                  onClick={() => {
                    setActiveTab(subject.id)
                    window.scrollTo({ top: 0, behavior: 'instant' })
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${isActive
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 scale-[1.02]'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                >
                  <Icon className={isActive ? 'text-white' : 'text-primary-500 dark:text-primary-400'} />
                  {subject.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <AnimatePresence mode="popLayout">
          {activeSubject && (
            <motion.div
              key={activeSubject.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {/* Subject Header */}
              <div className="mb-8 sm:mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-display">
                  {activeSubject.name}
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {activeSubject.topics.length} topic{activeSubject.topics.length !== 1 ? 's' : ''} covered
                </p>
              </div>

              {/* Topics */}
              <div className="space-y-6">
                {activeSubject.topics.map((topic, index) => (
                  <TopicCard key={index} topic={topic} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

const TopicCard = ({ topic, index }) => {
  const [imageExpanded, setImageExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700 rounded-l-2xl" />

      <div className="p-6 sm:p-8 pl-7 sm:pl-10">
        {/* Heading */}
        <div className="flex items-start gap-3 mb-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-bold flex-shrink-0 mt-0.5">
            {index + 1}
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-display">
              {topic.heading}
            </h2>
            {topic.subheading && (
              <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-medium mt-0.5">
                {topic.subheading}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        {topic.description && (
          <div className="mt-4 ml-11">
            {topic.description.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-3 last:mb-0"
              >
                {para.split(/(\*\*.*?\*\*)/).map((segment, j) =>
                  segment.startsWith('**') && segment.endsWith('**') ? (
                    <strong key={j} className="text-gray-900 dark:text-gray-100 font-semibold">
                      {segment.slice(2, -2)}
                    </strong>
                  ) : (
                    <span key={j}>{segment}</span>
                  )
                )}
              </p>
            ))}
          </div>
        )}

        {/* Image */}
        {topic.image && (
          <div className="mt-5 ml-11">
            <motion.img
              src={topic.image}
              alt={topic.heading}
              onClick={() => setImageExpanded(!imageExpanded)}
              className={`rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300 ${imageExpanded ? 'max-w-full' : 'max-w-md'
                } hover:shadow-lg`}
              whileHover={{ scale: 1.01 }}
              loading="lazy"
            />
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">
              Click to {imageExpanded ? 'shrink' : 'expand'}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default StudyMaterials
