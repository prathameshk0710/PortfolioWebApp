const Card = ({ children, className = '', hover = true }) => {
  const hoverClasses = hover
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
    : ''

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card

