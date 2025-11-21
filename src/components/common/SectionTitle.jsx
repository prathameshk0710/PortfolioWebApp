const SectionTitle = ({ children, className = '' }) => {
  return (
    <h2 className={`text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </h2>
  )
}

export default SectionTitle

