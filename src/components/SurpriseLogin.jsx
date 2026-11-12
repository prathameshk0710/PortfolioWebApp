import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const VALID_USERNAME = 'deepanjali'
const VALID_PASSWORD = '14112002'

export default function SurpriseLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)
  const navigate = useNavigate()

  const handleProceed = (e) => {
    e.preventDefault()
    if (username.toLowerCase() === VALID_USERNAME && password === VALID_PASSWORD) {
      sessionStorage.setItem('surprise_auth', 'true')
      navigate('/deepanjali')
    } else {
      setError('Hmm... that doesn\'t seem right 💭')
      setShake(true)
      setTimeout(() => setShake(false), 600)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 35%, #1a1f3d 65%, #0f172a 100%)' }}>

      {/* Sparkle overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, background: ['#f472b6', '#60a5fa', '#f9a8d4', '#93c5fd'][i % 4] }}
            animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
            transition={{ duration: 2 + Math.random() * 3, delay: Math.random() * 5, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-10 shadow-2xl border border-pink-300/20">
          {/* Header */}
          <motion.div className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <motion.div className="text-5xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              🎁
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-pink-300 to-blue-400 bg-clip-text text-transparent font-display">
              A Little Surprise
            </h1>
            {/* <p className="text-white/50 mt-2 text-sm tracking-wide">This is for someone special ✨</p> */}
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={handleProceed}
            animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}>
            <div className="space-y-5">
              <div>
                <label className="block text-pink-300/70 text-sm mb-2 pl-1">Who are you?</label>
                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value); setError('') }}
                  placeholder="Enter your name..."
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-pink-300/20 text-white placeholder-white/30 focus:outline-none focus:border-pink-400/60 focus:bg-white/15 transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-pink-300/70 text-sm mb-2 pl-1">Secret code</label>
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError('') }}
                  placeholder="Enter the magic number..."
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-pink-300/20 text-white placeholder-white/30 focus:outline-none focus:border-pink-400/60 focus:bg-white/15 transition-all duration-300 text-sm" />
              </div>
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-pink-300 text-sm mt-4 text-center">{error}</motion.p>
              )}
            </AnimatePresence>

            {/* Button */}
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full mt-7 py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide transition-all duration-300 shadow-lg shadow-pink-500/25"
              style={{ background: 'linear-gradient(135deg, #ec4899, #d946ef, #3b82f6)' }}>
              Proceed →
            </motion.button>
          </motion.form>

          <p className="text-white/20 text-xs text-center mt-6">🔒 Only the special one can enter</p>
        </div>
      </motion.div>
    </div>
  )
}
