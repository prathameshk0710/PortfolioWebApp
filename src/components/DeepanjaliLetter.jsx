import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ── Polaroid photo component ── */
const Polaroid = ({ caption, rotate, delay, children }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40, rotate: rotate - 5 }}
      animate={inView ? { opacity: 1, y: 0, rotate } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className="bg-white p-2.5 pb-12 rounded-sm shadow-2xl relative flex-shrink-0"
      style={{ width: 220, maxWidth: '45vw' }}>
      {/* tape strip */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-yellow-100/80 rounded-sm shadow-sm"
        style={{ transform: 'translateX(-50%) rotate(-2deg)' }} />
      {/* photo area */}
      <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden flex items-center justify-center text-gray-300">
        {children || <span className="text-3xl">📷</span>}
        {/* Replace children with: <img src="/photos/x.jpg" className="w-full h-full object-cover" /> */}
      </div>
      {/* caption */}
      <p className="absolute bottom-2.5 inset-x-2.5 text-center text-gray-600 text-sm"
        style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem' }}>
        {caption}
      </p>
    </motion.div>
  )
}

/* ── Letter section: text + photo side by side ── */
const LetterSection = ({ text, photo, reverse, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const textSide = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="flex-1 min-w-0">
      <p className="text-white/80 leading-loose text-lg md:text-xl"
        style={{ fontFamily: "'Caveat', cursive", fontSize: '1.35rem', lineHeight: 1.9 }}>
        {text}
      </p>
    </motion.div>
  )
  const photoSide = (
    <div className="flex-shrink-0 flex justify-center">
      <Polaroid caption={photo.caption} rotate={photo.rotate || (reverse ? -3 : 3)} delay={0.25}>
        {photo.src && <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />}
      </Polaroid>
    </div>
  )
  return (
    <div ref={ref}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 mb-16 md:mb-24`}>
      {textSide}
      {photoSide}
    </div>
  )
}

/* ── Heartbeat splash screen ── */
const HeartbeatIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0) // 0=beating, 1=burst, 2=text

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1500)  // burst after 1.5s
    const t2 = setTimeout(() => setPhase(2), 2300)  // show text
    const t3 = setTimeout(onComplete, 4500)          // exit
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a, #1a1f3d)' }}
      exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>

      {/* Ripple rings behind heart */}
      {phase === 0 && Array.from({ length: 3 }, (_, i) => (
        <motion.div key={`ripple-${i}`}
          className="absolute rounded-full border border-pink-400/30"
          style={{ width: 120, height: 120 }}
          animate={{ scale: [1, 3.5, 4], opacity: [0.4, 0.1, 0] }}
          transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* Main heart */}
      <motion.div className="relative z-10 text-center">
        {phase < 1 ? (
          /* Beating heart */
          <motion.div className="text-8xl md:text-9xl select-none"
            animate={{ scale: [1, 1.25, 1, 1.3, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}>
            💗
          </motion.div>
        ) : (
          /* Burst — heart splits into many small hearts */
          <>
            <motion.div className="text-8xl md:text-9xl select-none"
              initial={{ scale: 1 }}
              animate={{ scale: [1.4, 0], opacity: [1, 0] }}
              transition={{ duration: 0.5, ease: 'easeIn' }}>
              💗
            </motion.div>
            {Array.from({ length: 40 }, (_, i) => {
              const angle = (i / 40) * Math.PI * 2 + (Math.random() - 0.5) * 0.5
              const dist = 150 + Math.random() * 500
              return (
                <motion.div key={`burst-${i}`}
                  className="absolute text-pink-300 select-none pointer-events-none"
                  style={{ left: '50%', top: '50%', fontSize: `${0.7 + Math.random() * 1.5}rem` }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
                  animate={{
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    opacity: [1, 0.7, 0],
                    scale: [0.5, 1.5, 0.8],
                    rotate: Math.random() * 720 - 360,
                  }}
                  transition={{ duration: 1.8 + Math.random() * 0.8, ease: 'easeOut' }}>
                  ♥
                </motion.div>
              )
            })}
          </>
        )}
      </motion.div>

      {/* Text after burst */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center z-20"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <motion.p className="text-pink-300 text-2xl md:text-3xl font-semibold mb-3"
              style={{ fontFamily: "'Caveat', cursive", fontSize: '2rem' }}
              initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
              Someone special is about to read this...
            </motion.p>
            <motion.p className="text-pink-300/40 text-lg"
              style={{ fontFamily: "'Caveat', cursive" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              💕
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ── Main component ── */
export default function DeepanjaliLetter() {
  const navigate = useNavigate()
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('surprise_auth') !== 'true') {
      navigate('/surprise', { replace: true })
    }
  }, [navigate])

  if (sessionStorage.getItem('surprise_auth') !== 'true') return null

  /* Each section = a paragraph of the letter + a polaroid photo beside it */
  const sections = [
    {
      text: "Dear Deepanjali, on this special day I wanted to write you something from the heart — something you can come back to whenever you need a reminder of how amazing you are... ✨",
      photo: { caption: 'The day it all began 💫', rotate: 3 },
    },
    {
      text: "Every moment spent with you feels like a little adventure. Your laughter, your kindness, the way you light up every room — it's magic, pure and simple. 🌸",
      photo: { caption: 'That beautiful smile 🌸', rotate: -2 },
    },
    {
      text: "Remember the silly moments? The inside jokes nobody else would understand? Those are my favourite chapters of us. I wouldn't trade them for anything in the world. 😄",
      photo: { caption: 'Our silly adventures 😄', rotate: 4 },
    },
    {
      text: "You've grown so much, handled so much, and still managed to be the most warm-hearted person I know. I'm proud of you — more than words on a screen could ever say. 💪",
      photo: { caption: 'Stronger every day 💪', rotate: -3 },
    },
    {
      text: "Here's to more memories, more laughter, more late-night conversations, and more of everything that makes us, us. The best chapters are still unwritten. 🥰",
      photo: { caption: 'Together & happy 🥰', rotate: 2 },
    },
    {
      text: "Happy birthday, DeepaBoi. Today is YOUR day — may it be filled with all the love and joy you so generously give to everyone else. You deserve the world. 🎂🎉",
      photo: { caption: 'Forever in my heart 💖', rotate: -4 },
    },
  ]

  return (
    <>
      <AnimatePresence>
        {showSplash && <HeartbeatIntro onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <div className="min-h-screen relative"
        style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 15%, #1a1f3d 35%, #1e293b 55%, #0f172a 75%, #0f172a 100%)' }}>

        {/* Floating particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {Array.from({ length: 35 }, (_, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 3}px`, height: `${2 + Math.random() * 3}px`,
                background: ['#f472b6', '#60a5fa', '#f9a8d4', '#93c5fd'][i % 4],
              }}
              animate={{ opacity: [0, 0.4, 0], y: [0, -25, 0] }}
              transition={{ duration: 5 + Math.random() * 4, delay: Math.random() * 6, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Floating hearts background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div key={i}
              className="absolute text-pink-300 select-none"
              style={{ left: `${Math.random() * 100}%`, bottom: '-5%', fontSize: `${1 + Math.random() * 2}rem` }}
              animate={{ y: [0, -window.innerHeight * 1.2], rotate: [0, 20, -20, 0], opacity: [0, 0.4, 0.4, 0] }}
              transition={{ duration: 6 + Math.random() * 4, delay: i * 1.5, repeat: Infinity, ease: 'easeOut' }}>
              ♥
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-10 py-16 md:py-24">

          {/* ── Header ── */}
          <motion.div className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: showSplash ? 4.5 : 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-pink-300 to-blue-400 bg-clip-text text-transparent font-display leading-tight">
              Happy Birthday,<br />DeepaBoiii! 🎉
            </h1>
            <motion.div className="h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-blue-500"
              initial={{ width: 0 }} animate={{ width: 96 }} transition={{ delay: 1, duration: 0.8 }} />
            <p className="text-pink-300/40 text-sm mt-4 italic" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }}>
              Scroll down to read your letter...
            </p>
          </motion.div>

          {/* ── Big letter section ── */}
          <motion.div className="mb-24"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-14 border border-pink-300/15 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">💌</span>
                <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent font-display">A Letter For You</h2>
              </div>
              <div className="space-y-6 leading-relaxed"
                style={{ fontFamily: "'Caveat', cursive", fontSize: '1.4rem', lineHeight: 2 }}>
                <p className="text-pink-300/60 italic text-lg">Dear Deepanjali,</p>

                {/* TODO: Replace this placeholder with your actual long letter text */}
                <p className="text-white/80">
                  Write your big heartfelt message here. This is your space to express everything —
                  all the things you've been meaning to say, the feelings you want to put into words,
                  the memories that mean the most to you.
                </p>
                <p className="text-white/80">
                  Go on, pour your heart out. Write as much as you want — this section will grow
                  with your words. Talk about the first time you met, the moments that took your
                  breath away, the little things that made the biggest difference.
                </p>
                <p className="text-white/80">
                  Tell her what she means to you. Tell her about the future you imagine. Tell her
                  everything that words can carry — and even the things they can't. This is your
                  letter, and every word here is a gift.
                </p>
                <p className="text-white/80">
                  Add as many paragraphs as you need. There's no limit — keep writing until you've
                  said it all. ✨
                </p>

                <p className="text-right text-pink-300/70 italic mt-10">— Yours, always & forever 💕</p>
              </div>
            </div>
          </motion.div>

          {/* ── Letter sections with inline photos ── */}
          {sections.map((section, i) => (
            <LetterSection key={i} index={i} text={section.text} photo={section.photo} reverse={i % 2 !== 0} />
          ))}

          {/* ── Sign-off ── */}
          <motion.div className="text-center mt-8 mb-20"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 1 }}>
            <p className="text-pink-300/80 text-2xl italic" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.8rem' }}>
              With all my love, always & forever 💕
            </p>
          </motion.div>

          {/* ── Extra memory lane grid ── */}
          <motion.div className="mb-20"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pink-300 font-display">✨ More Memories ✨</h2>
              <p className="text-white/40 mt-2 text-sm">A few more moments I never want to forget</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {['Our first trip 🌍', 'Festival vibes 🪔', 'Foodies forever 🍕', 'That golden hour 🌅'].map((cap, i) => (
                <Polaroid key={i} caption={cap} rotate={[-3, 4, -2, 5][i]} delay={i * 0.12} />
              ))}
            </div>
          </motion.div>

          {/* ── Final wish ── */}
          <motion.div className="text-center pb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-10 border border-pink-300/15">
              <motion.p className="text-4xl mb-4"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}>
                🥳
              </motion.p>
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-400 via-pink-300 to-blue-400 bg-clip-text text-transparent font-display">
                Wishing you the happiest birthday ever!
              </p>
              <p className="text-white/30 text-sm mt-3">Made with ❤️ just for you</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
