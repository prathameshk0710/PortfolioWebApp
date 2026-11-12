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
              <div className="space-y-7 leading-relaxed"
                style={{ fontFamily: "'Caveat', cursive", fontSize: '1.7rem', lineHeight: 2.2, letterSpacing: '0.01em' }}>
                <p className="text-pink-300/70 italic" style={{ fontSize: '1.9rem' }}>Hey Deepa boi,</p>

                <p className="text-white/80">
                  Yeah, I thought of making something that could be treasured forever and that either of us could revisit whenever we feel like it. This is just a small gesture from me to you on your special day… ❤️
                </p>
                <p className="text-white/80">
                  You are one of the most amazing people I have ever met in my life. You have always been my support system during my tough times. You are the person who has always shared my happiness as if it were your own. I have always been grateful to you for that.
                </p>
                <p className="text-white/80">
                  I still remember those days when we first talked to each other on Insta, and the very next day, we were on an hours-long call. Ussi time se hamari kaafi vibe match hoti aa rahi hai. 😂❤️ Kaafi problems face kari hain humne saath mein unn 4 saalon mein. Kaafi saare jhagde, losing friends, downfalls... But one thing that never changed was us. We have always come back stronger together after every &quot;Kalesh&quot;. 😂😂😂
                </p>
                <p className="text-white/80">
                  It would have been so difficult for me to get through those 4 years if you hadn&apos;t been there with me, and I am still in your debt. I think woh kabhi chuka nahi paaunga main. 🥹🥹🥹 We have been doing so good so far. I wish we could continue to be the same forever... I want to see more of us being together. There are so many things I want to do and experience with you. ❤️
                </p>
                <p className="text-white/80">
                  You know what? I am always afraid maybe things won&apos;t remain the same between us after some time. Currently, you are my priority, Deepa boi. I would do anything, anytime, anywhere for you. But soon, time will change. There will be some new girl in my life, kisi na kisi se toh shaadi karwa degi mummy. 😂 Ya maan le, tere ghar wale karwa dein tera rishta kisi se, and stuff. Things will have to change from that point onwards. Priorities will have to change.
                </p>
                <p className="text-white/80">
                  It feels so sad that you and I might not be able to remain the same as we are right now. Hum nahi de paayenge ek doosre ko utna time jitna hum abhi de rahe hain ya de sakte hain. I hate and fear this possibility a lot. I agree, it&apos;s life, and it has to take turns. We have to keep moving forward. But yaar, Deepa boi, do we seriously have to do this??? Why can&apos;t we be together???
                </p>
                <p className="text-white/80">
                  I still want to give us a chance. Kaafi time se hum saath mein hain, kaafi samajhte hain ek doosre ko hum. Pyaar hi toh karna hota hai, woh pehle se hi karte hain, thoda aur kar lengey. 🥹🥹❤️ Baaki toh we&apos;ll figure out yaar. Samajhdaar log hain hum. If things work out, it&apos;s great. If they don&apos;t, it&apos;s alright, Deepa boi. We will still be the friends we have always been. At least, it&apos;s not like we didn&apos;t try. At least, we can say we tried and failed. At least, this is how I think. Do let me know what you think about this. 🙃🙃
                </p>
                <p className="text-white/80">
                  Nevertheless, whatever happens in the future is something we&apos;ll deal with when the time comes. But one thing Deepa, you have been a very great person to me. You always have been, and you always will be. No matter how things turn out or who comes into my life, you will always have a special place in my heart. 😊❤️
                </p>
                <p className="text-white/80">
                  Kabhi bhi life mein hum kahin bhi ho, jo bhi kar rahe ho, jiske saath bhi ho, it doesn&apos;t matter. Jab bhi zarurat pade, just a call away, Deepa boi. I will be right there with you, and that&apos;s my promise for life. 🤝❤️ Duniya itni bhi badi nahi hai, Deepa boi, ki humein aise alag kar paaye. 🌝🌝
                </p>
                <p className="text-white/80">
                  Just keep in mind, this Bot will always be with you... ❤️🤖
                </p>
                <p className="text-white/80">
                  Love you so much, Deepa boi! ♥️♥️♥️
                </p>
                <p className="text-white/80">
                  Wish you many, many happy returns of the day! 🎂🥳❤️
                </p>

                <p className="text-right text-pink-300/70 italic mt-10">Tera pyara bot.... 💕</p>
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
